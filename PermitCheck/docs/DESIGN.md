# Permit Check design

Status: milestone 2 in progress. Docs read on 2026-09-30, the day after DevDay.

## Decisions after milestone 1 review

- City-name input accepted (deviation 1).
- The listing name is "Permit Check". The guidelines say not to append "Plugin" (or "MCP") to a name, so the word stays out of `displayName`.
- Supabase free tier approved. Developer verification is on you before upload.
- LLM extraction: you left the choice to me. I'll use the Anthropic API (Claude) in the milestone 4 pipeline and pick the model then. It only drafts rules; a person still verifies every one.
- Scope is now the whole Bay Area, built so it can grow statewide and then nationwide. See "Scaling" below.

## Scaling

v1 coverage is the 9 Bay Area counties: 101 cities and towns, the unincorporated areas of 8 counties, and San Francisco as one city-and-county. Nothing in the code or schema is specific to California or the Bay Area.

- Jurisdictions form a tree. Each city points at the jurisdiction whose code it amends: its state, not its county. Unincorporated county land is its own jurisdiction under the state. Slugs are namespaced by state (`ca/san-jose`), so a second state never collides. Every row carries its Census GEOID (from the 2024 Gazetteer, public domain).
- Rules attach at any level. A statewide rule (`ca`) is written once. A city either has its own rule or a verified `inherits_parent` record citing the ordinance where it adopts the state code unchanged. Many cities adopt the state exemptions as-is, so most cities need one cited adoption record rather than 15 hand-written rules.
- Coverage has two tiers per city and project. `local` means the city's own rule or adoption record is verified. `state_only` means only the state rule is verified. A `state_only` answer never says NOT_REQUIRED: a state exemption turns into DEPENDS with "this city's local amendments have not been checked" plus the building department contact, because a local amendment can take an exemption away. REQUIRED stays REQUIRED.
- Adding a state means a `data/jurisdictions/<state>/` folder, its Gazetteer subset, and its statewide rules. States with no statewide residential code (local adoption only) just have no state-level rules, so every city there needs its own.
- The bottleneck at scale is human verification, not code. The Bay Area at 15 projects is up to 1,515 city-project pairs. Inheritance records and the pipeline's drafts make each review quick, but each one still needs a person.

## Sources read

- https://developers.openai.com/apps-sdk (now a hub that points to `/plugins/*`)
- https://developers.openai.com/apps-sdk/app-submission-guidelines (now "Plugin guidelines")
- https://developers.openai.com/plugins/deploy/submission.md
- https://developers.openai.com/plugins/deploy/app-review.md
- https://developers.openai.com/plugins/deploy/connect-chatgpt.md
- https://developers.openai.com/plugins/build/mcp-server.md
- https://developers.openai.com/plugins/build/chatgpt-ui.md
- https://developers.openai.com/plugins/build/plugins.md
- https://developers.openai.com/plugins/concepts/plugins.md
- https://developers.openai.com/plugins/plan/tools.md
- https://developers.openai.com/plugins/reference.md
- https://developers.openai.com/plugins/guides/security-privacy.md

Not found in the docs: a dedicated Plugin Creator page or a changelog. The submission page says only that Plugin Creator is "available in the plugin directory" to help prepare submission materials.

## Deviations from the brief

### 1. No street address input (biggest change)

The guidelines say tools must "rely on coarse geographic location; do not request precise location data (GPS, addresses)" and "avoid raw location fields in input schema." A `resolve_jurisdiction(address)` tool that calls the Census Geocoder breaks both rules, even if the server never stores the address.

Replacement design:

- Every tool takes `city` (free text, e.g. "San Jose") and an optional `unincorporated: boolean`. The server normalizes the city name to a jurisdiction slug.
- The client may send `_meta["openai/userLocation"]` (coarse `city`, `region`, `country`). That is where the user is, not where the property is, so the server never uses it to pick a jurisdiction. At most it can fill a suggestion the user confirms.
- Unincorporated pockets inside San Jose and other cities can't be detected from a city name. When the user is unsure, `check_permit` returns the city answer plus a note that some addresses are in unincorporated county. The note links to the county's official parcel or jurisdiction lookup, and the user checks their own address there. I will confirm that lookup URL in milestone 2.
- The Census Geocoder drops out of v1. Ask me if you want an alternative, such as an address box inside the widget that calls the Census API from the browser, so the address never enters a tool schema. That still collects a precise location in the plugin UI, and reviewers may reject it, so I don't recommend it for v1.

### 2. Tools reshaped for "tool independence"

The guidelines require "each public tool must operate independently" and say tool responses must not include internal identifiers unless strictly required. A `jurisdiction_id` that only `resolve_jurisdiction` can produce makes the other three tools depend on it.

| Brief | Design |
|---|---|
| `resolve_jurisdiction(address)` | `list_covered_jurisdictions()` returns the 11 jurisdictions and the 15 projects. It answers "do you cover Austin?" without an address. |
| `list_supported_projects(jurisdiction_id)` | Merged into `list_covered_jurisdictions`. Every jurisdiction covers the same 15 projects, so a per-city call adds a round trip and no information. |
| `check_permit(jurisdiction_id, project_type, params)` | `check_permit(state, city, unincorporated?, project, details)`. An uncovered city returns `NOT_COVERED` with a next step. |
| `get_building_department(jurisdiction_id)` | `get_building_department(state, city, unincorporated?)` |

All tools set `readOnlyHint: true`, `destructiveHint: false`, `openWorldHint: false` (a bounded catalog we host) and `idempotentHint: true`. Responses use human-readable slugs (`san-jose`) and never rule ids, reviewer names, or request ids.

### 3. Submission package format

"Apps" are now "plugins". A plugin is a ZIP with `plugin.json` (Agent Plugins schema) and `mcp.json` at the root, plus `assets/`. It is uploaded on the Plugins dashboard under a verified developer identity. ChatGPT and Codex share one directory, so the same listing appears in Codex.

- Test cases: exactly 5 positive and exactly 3 negative for initial review, in `review.test_cases.positive` / `.negative`. Your three negatives fill the negative slots. The 20 should-trigger / 10 should-not prompts stay as our internal eval.
- Four public URLs are required: `websiteURL`, `supportURL`, `privacyPolicyURL`, `termsOfServiceURL`. The brief listed only privacy and terms, so I'm adding a landing page and a support page.
- `review.demo_recording_url` (a reviewer-accessible screen recording) is required for MCP review.
- `displayName` and `shortDescription` are capped at 30 characters each.
- Domain verification needs a token served as plain text at `https://<mcp-host>/.well-known/openai-apps-challenge`.
- After publication, OpenAI rescans the hosted MCP server daily. Tool metadata changes go through automated checks without a new package version.

### 4. Name

Resolved: "Permit Check". The guidelines reject "overly generic terms", so a reviewer may push back on two generic words. If that happens, a fallback is "Bay Area Permit Check" (21 characters).

### 5. Widget uses the MCP Apps standard

UI is supported. It is an MCP resource with mime type `text/html;profile=mcp-app`, linked from the tool by `_meta.ui.resourceUri`. It receives data through `ui/notifications/tool-result` over `postMessage`. The `openai/outputTemplate` and `window.openai` keys are legacy aliases, and I will use them only behind feature detection. Two rules shape it:

- Tools must work with no UI. Codex has no widget, so `content` text carries the full verdict, conditions, and citations, and the widget only renders `structuredContent`.
- Reviewers test on ChatGPT desktop and mobile. The card is an inline card with no navigation.

### 6. Scraping needs authorization per site

The guidelines require "proper authorization before scraping websites." Several cities publish their municipal code through third-party code publishers. I will check each site's robots.txt and terms before fetching anything and bring you any site whose terms prohibit automated access, per your instruction. Fallback: fetch those pages by hand, which still gives the pipeline a hash to watch.

### 7. Paid services to approve

These need your yes before milestone 4 (or before milestone 2 for Supabase):

- LLM for rule extraction. Which provider and model?
- Supabase. Is the free tier acceptable?
- Vercel. The docs don't prefer a host. They require a stable public HTTPS endpoint with Streamable HTTP at `/mcp`. Check whether Vercel's Hobby plan terms allow your intended use. I have not verified them.

## Architecture

```
ChatGPT / Codex
   │ Streamable HTTP, POST /mcp
   ▼
mcp-server/      TypeScript, @modelcontextprotocol/sdk, zod. Vercel.
   │ read-only role, verified rules only
   ▼
Supabase Postgres  ◄── admin/ (Next.js, Supabase Auth, single admin)
   ▲
pipeline/        Python: fetch → hash → LLM extract → draft rules
```

`/.well-known/openai-apps-challenge`, `/privacy`, `/terms`, `/support` and `/` are served by the same Vercel project as `/mcp`.

## Data model

Changes from the brief:

- `jurisdictions` gains `slug`, `kind`, `state_code`, `geoid`, `parent_id`, `aliases text[]` (for "SJ", "San José") and `parcel_lookup_url`. The state row `ca` holds CRC §R105.2 / CBC §105.2. `jurisdiction_counties` maps each place to its county. The resolver walks city, then state, and the response says which layer answered.
- `census_place_fips` from the brief becomes `geoid`, which also covers states and counties.
- `rules.conditions` uses a small typed format instead of free JSON: a list of `{param, op, value, unit}` clauses joined by any/all, each with the verdict it produces. That lets `check_permit` evaluate `deck_height_in > 30` and, when `deck_height_in` is missing, return `DEPENDS` listing the exact thresholds.
- `rule_sources (rule_id, source_id)` join table. A changed source hash marks exactly its rules `stale`.
- Check constraints: `status = 'verified'` requires `verified_at`, `verified_by` and at least one citation with a non-empty `quote` and `source_url`.
- A Postgres view `served_rules` exposes only `status = 'verified'`. The MCP server's role can read only that view and `jurisdictions` / `project_types`. A stale rule is never served. The tool returns `DEPENDS` with the building department contact and says the rule is being re-verified.

No table stores user input. The server logs tool name, jurisdiction slug, project slug, verdict, and latency. It never logs `details`, `_meta["openai/userLocation"]`, or the anonymized subject and session ids.

## Evals

- Golden set, about 90 cases (8 per jurisdiction). CI runs `check_permit` against a seeded test database and fails below 100% verdict accuracy or on any answer with zero citations.
- Tool-selection set: 20 trigger and 10 non-trigger prompts, run by hand in developer mode. We log the first tool called and whether it was right. It can't run in CI because there is no API for developer-mode ChatGPT.
- Adversarial cases: a boundary street with `unincorporated` unknown, an unincorporated pocket, contradictory details (a 2 ft high deck that is "attached at second story"), a stale rule, and an uncovered city.

## Milestone 2 plan

1. Supabase schema and migration. Seed all Bay Area jurisdictions with verified contact data and GEOIDs, plus `project_types` (15 with input schemas).
2. Draft the statewide (`ca`) and San Jose rules for all 15 projects from official pages, each with a verbatim quote. San Jose is the first city with local rules; the other cities get theirs through the milestone 4 pipeline.
3. You verify each rule. I can draft them, but "verified" means you checked them against the source.

## Sourcing findings (milestone 2)

- Many official city sites block automated requests (HTTP 403 from a bot filter), including sanjoseca.gov, santaclaraca.gov, sunnyvale.ca.gov, mountainview.gov, fremont.gov and about 15 more. We never bypass these blocks, because the guidelines forbid bypassing access controls. San Jose quotes were read from Internet Archive captures instead, and every one must be re-checked on the live page before it is verified.
- ICC hosts the free California code text, and its terms bar robots and reproduction on third-party sites. Municode's terms bar copying. Neither is a source. City and state government pages (city exemption handouts, Building Standards Commission rulemaking files, Legistar ordinances, Legislative Counsel bulk statute downloads) are.
- California cities adopt their own permit-exemption lists. San Jose does not adopt CRC Chapter 1 Division II (SJMC 24.09.110(A)(6)) and uses SJMC 24.02.120 to 24.02.150 instead. The statewide layer therefore holds only rules that apply by state law or that the state itself publishes: shed (from the state's rulemaking text), EV charger (Gov. Code §65850.7) and solar (Gov. Code §65850.5, §65850.52). A city with no verified local rule gets "no verified rule, contact the building department" for everything else.
- The milestone 4 pipeline can only fetch sites that allow it. Blocked cities need a person to save the source pages from a browser, or a data agreement with the city.
