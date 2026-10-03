-- Permit Check schema. Rule content mirrors packages/core/src/schema.ts (RuleDoc);
-- the seed builder validates every file against that schema before it reaches SQL.

create type jurisdiction_kind as enum ('state', 'county', 'city', 'town', 'city_and_county');
create type rule_status as enum ('draft', 'verified', 'stale', 'rejected');
create type rule_mode as enum ('own', 'inherits_parent');
create type verdict as enum ('REQUIRED', 'NOT_REQUIRED', 'DEPENDS');
create type terms_status as enum ('unreviewed', 'allowed', 'prohibited');

create table jurisdictions (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z]{2}(/[a-z0-9-]+)?$'),
  name text not null,
  kind jurisdiction_kind not null,
  state_code char(2) not null check (state_code ~ '^[A-Z]{2}$'),
  geoid text unique check (geoid ~ '^\d{2}(\d{3}|\d{5})?$'),
  -- The jurisdiction whose code this one amends. A city's parent is its state:
  -- county building codes do not apply inside city limits.
  parent_id uuid references jurisdictions (id),
  aliases text[] not null default '{}',
  building_dept_url text,
  permit_portal_url text,
  phone text check (phone ~ '^\(\d{3}\) \d{3}-\d{4}$'),
  adu_page_url text,
  parcel_lookup_url text,
  fee_schedule_url text,
  contact_source_url text,
  contacts_retrieved_at date,
  check ((kind = 'state') = (parent_id is null))
);

-- Counties a place sits in, used to route unincorporated questions.
create table jurisdiction_counties (
  place_id uuid not null references jurisdictions (id) on delete cascade,
  county_id uuid not null references jurisdictions (id) on delete cascade,
  primary key (place_id, county_id)
);

create table project_types (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  display_name text not null,
  params jsonb not null default '[]' check (jsonb_typeof(params) = 'array'),
  sort_order int not null
);

create table rules (
  id uuid primary key default gen_random_uuid(),
  jurisdiction_id uuid not null references jurisdictions (id),
  project_type_id uuid not null references project_types (id),
  mode rule_mode not null default 'own',
  summary text,
  outcomes jsonb,
  default_verdict verdict,
  default_explanation text,
  default_citations text[],
  permit_types text[] not null default '{}',
  fee_note text,
  docs_required text[] not null default '{}',
  inspections text[] not null default '{}',
  notes jsonb not null default '[]',
  citations jsonb not null check (jsonb_typeof(citations) = 'array' and jsonb_array_length(citations) > 0),
  retrieved_at date not null,
  status rule_status not null default 'draft',
  verified_by text,
  verified_at timestamptz,
  research_notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (status <> 'verified' or (verified_by is not null and verified_at is not null)),
  check (
    mode = 'inherits_parent'
    or (summary is not null and outcomes is not null and default_verdict is not null
        and default_explanation is not null and cardinality(default_citations) > 0)
  )
);

-- At most one served rule per jurisdiction and project.
create unique index rules_one_verified on rules (jurisdiction_id, project_type_id) where status = 'verified';
create index rules_by_jurisdiction on rules (jurisdiction_id, project_type_id);

create table sources (
  id uuid primary key default gen_random_uuid(),
  url text not null unique,
  jurisdiction_id uuid not null references jurisdictions (id),
  content_hash text,
  fetched_at timestamptz,
  terms terms_status not null default 'unreviewed',
  terms_note text not null default ''
);

-- A changed source hash marks exactly these rules stale.
create table rule_sources (
  rule_id uuid not null references rules (id) on delete cascade,
  source_id uuid not null references sources (id) on delete cascade,
  primary key (rule_id, source_id)
);

create function touch_updated_at() returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;
create trigger rules_touch before update on rules for each row execute function touch_updated_at();

-- Row level security: the MCP server reads with the anon role, which sees only
-- verified rules. The pipeline writes with the service role, which bypasses RLS.
-- Admin write policies arrive with the review page.
alter table jurisdictions enable row level security;
alter table jurisdiction_counties enable row level security;
alter table project_types enable row level security;
alter table rules enable row level security;
alter table sources enable row level security;
alter table rule_sources enable row level security;

create policy "public read" on jurisdictions for select to anon, authenticated using (true);
create policy "public read" on jurisdiction_counties for select to anon, authenticated using (true);
create policy "public read" on project_types for select to anon, authenticated using (true);
create policy "verified rules only" on rules for select to anon, authenticated using (status = 'verified');

-- Lets the server say "being re-checked" without exposing stale rule content.
create function rules_under_review()
returns table (jurisdiction_slug text, project_slug text)
language sql stable security definer set search_path = '' as $$
  select j.slug, p.slug
  from public.rules r
  join public.jurisdictions j on j.id = r.jurisdiction_id
  join public.project_types p on p.id = r.project_type_id
  where r.status = 'stale'
$$;
revoke execute on function rules_under_review() from public;
grant execute on function rules_under_review() to anon, authenticated;
