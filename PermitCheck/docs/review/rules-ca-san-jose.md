# Rules to verify: San Jose

Generated from `data/rules`. To approve a rule after checking it: `pnpm verify-rule <jurisdiction> <project> --by <your name>`.

## ADU (accessory dwelling unit) (`adu`): draft

**Summary.** Building an ADU in San Jose requires a building permit; the city publishes an ADU project process and checklist to guide you.

**Otherwise:** REQUIRED. An ADU is new construction or an alteration, and San Jose describes the ADU process as the steps to getting a building permit. (c1, c2)

**Permit types:** Building permit

- Note: Start with the ADU Universal Checklist to see whether your property qualifies. (c3)

**Citations**

- `c1` San Jose Permit Center, Accessory Dwelling Units (ADUs): ADU Project Process, <https://web.archive.org/web/20260114101304/https://www.sanjoseca.gov/business/development-services-permit-center/accessory-dwelling-units-adus/adu-plan-review-permit-process>

  > Here are the main steps to getting a building permit and completing your project.

- `c2` San Jose Permit Center, When Is a Building Permit Required? (updated 06/12/2025), Projects that require a building permit, <https://web.archive.org/web/20260813091205/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/when-is-a-building-permit-required>

  > New construction, additions, alteration of walls, or any structural change

- `c3` San Jose Permit Center, Accessory Dwelling Units (ADUs), <https://web.archive.org/web/20260813090931/https://www.sanjoseca.gov/business/development-services-permit-center/accessory-dwelling-units-adus>

  > The ADU Universal Checklist will help you identify if your property qualifies for an ADU.

**Researcher notes.** Summary only, per scope; no ADU conditions recorded. Access: sanjoseca.gov returned HTTP 403 (Akamai "Access Denied") to curl and WebFetch, robots.txt included. The robots.txt read from a Wayback snapshot (20260501) disallows only /admin and *.asmx paths for User-agent *, and the City E-Government Policy (Administrative Policy 1.7.5, home/showdocument?id=17869) contains no restriction on automated access or copying. City page quotes therefore come from raw Internet Archive captures (the id_ form of each source_url, same timestamp), not from the live site. SJMC text comes from the 2025 code-adoption ordinance on sanjose.legistar.com (no robots.txt, no terms page found); Municode was not used because its Terms and Conditions of Use say: "You may not copy, modify, reproduce, republish, distribute, display, or transmit for commercial, non-profit or public purposes all or any portion of this Website, except to the extent permitted by these Terms and Conditions of Use." Code edition: San Jose adopted the 2025 California codes effective January 1, 2026 (Adopted Building Codes page, Wayback 20260318). The ordinance PDF is the 10/16/2025 council draft with redline. Legistar shows it passed for publication 10/28/2025 as Ordinance No. 31256 and listed for final adoption on the 11/18/2025 agenda (file 25-1187); the signed final ordinance was not retrieved. Only ordinance passages with no redline marks (checked visually on rendered pages 8-12) are quoted. Section number: the When Is a Building Permit Required? page (updated 06/12/2025) says "Municipal Code Section 24.02.110 lists all exempt projects", but the ordinance codifies "24.02.120 Building Permit Exemptions"; this record cites 24.02.120. San Jose does not adopt CRC Chapter 1, Division II (SJMC 24.09.110 A.6, unchanged in the 2025 ordinance), so CRC R105.2 is not the operative exemption list in San Jose; SJMC 24.02.120-24.02.150 are.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes

## Bathroom remodel (`bathroom-remodel`): draft

**Summary.** In San Jose, cosmetic bathroom work like painting, flooring, cabinets, and countertops needs no permit; replacing fixtures or appliances or doing electrical, plumbing, or fan work needs a permit (often online), and moving fixtures or changing walls or framing needs plan review.

| # | When | Verdict | Explanation | Cites |
|---|---|---|---|---|
| 1 | changes walls or structure: yes | REQUIRED | Changing walls or windows or modifying framing is a major remodel and needs a building permit with submitted plans. | c5, c6, c13 |
| 2 | moves or adds plumbing: yes | REQUIRED | Relocating or adding fixtures or appliances is a major remodel and needs a permit with plan review. | c5, c7 |
| 3 | includes electrical work: yes | REQUIRED | New electrical work needs an electrical permit; a minor remodel with no relocation may qualify for an online permit. | c3, c4, c9 |
| 4 | includes exhaust fan, range hood, or other ducted ventilation work: yes | REQUIRED | Installing or replacing an exhaust fan or hood is mechanical work and needs a mechanical permit; a minor remodel may qualify for an online permit. | c3, c4, c14 |
| 5 | replaces fixtures or appliances in their existing locations: yes | REQUIRED | Replacing fixtures or appliances in the same locations is a minor remodel that needs a permit, often available online; only leak repairs and removing and resetting a toilet without replacing pipes, valves, or fixtures are exempt. | c4, c8, c9 |
| 6 | only finish work: paint, tile, flooring, cabinets, countertops: yes | NOT_REQUIRED | Finish work only, such as painting, tiling, flooring, cabinets, and countertops, with no fixture, appliance, electrical, plumbing, or fan work, needs no permit. | c1, c2 |

**Otherwise:** REQUIRED. Anything beyond cosmetic finish work needs a building or trade permit; small fixture and appliance swaps may qualify for an online permit. (c3, c4, c7)

**Permit types:** Building permit; Electrical permit; Plumbing permit; Mechanical permit

- Note: Minor remodels, meaning fixture and appliance replacements without moving them or changing their number, may qualify for an online permit at SJPermits.org. (c4, c9)
- Note: Even when finish work is exempt, any plumbing, electrical, or mechanical work done with it needs its own permit. (c3)
- Note: Inspections are listed on the Permit Card; plan for rough and final inspections. (c10, c11)
- Note: Be ready to show smoke and carbon monoxide alarms and provide the alarm installation affidavit. (c12)
- Note: A bathroom with a tub or shower needs a fan of at least 50 CFM, Energy Star, ducted outside; an openable window does not count. (c14)
- Note: At least one bathroom light must have an occupant or vacancy sensor with automatic shut-off. (c15)
- Note: A new shower pan must be at least 1,024 sq. in. and at least 30 inches in every direction. (c16)

**Citations**

- `c1` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Definitions, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > Note that cosmetic work — such as painting, cabinet resurfacing, new flooring, and new countertops — does not require a permit.

- `c2` SJMC Title 24 as amended by Ordinance No. 31256 (2025 codes; council draft dated 10/16/2025, Item 8.2(a), 10/28/2025), §24.02.120(A)(9), <https://sanjose.legistar.com/View.ashx?M=F&ID=14873777&GUID=DD05D7FB-2583-4C0D-BC97-EE5FB907BE34>

  > Painting, papering, tiling, carpeting, cabinets, counter tops and similar finish work.

- `c3` SJMC Title 24 as amended by Ordinance No. 31256 (2025 codes; council draft dated 10/16/2025, Item 8.2(a), 10/28/2025), §24.02.120(B), <https://sanjose.legistar.com/View.ashx?M=F&ID=14873777&GUID=DD05D7FB-2583-4C0D-BC97-EE5FB907BE34>

  > Unless otherwise exempted by this title, separate plumbing, electrical and mechanical permits will be required for the above exempted items.

- `c4` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Definitions, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > A minor remodel is defined as multiple fixture and appliance replacements that involve new electrical, plumbing, and/or mechanical work without changes to the location or quantity of such fixtures and appliances.

- `c5` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Definitions, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > A major remodel is defined as changing the configuration of walls or windows; modifying the framing of ceilings, walls, windows, or floors; and/or relocating or increasing the number of fixtures or appliances.

- `c6` San Jose Permit Center, Additions & Remodels, single-family & duplex (updated 04/14/2026), <https://web.archive.org/web/20260514010222/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/additions-remodels>

  > To get a building permit for an addition or for a remodel that entails structural changes, you must submit project plans.

- `c7` San Jose Permit Center, When Is a Building Permit Required? (updated 06/12/2025), Projects that require a building permit, <https://web.archive.org/web/20260813091205/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/when-is-a-building-permit-required>

  > You are legally required to get a building permit and/or a subtrade (plumbing, electrical or mechanical) permit for projects involving:

- `c8` SJMC Title 24 as amended by Ordinance No. 31256 (2025 codes; council draft dated 10/16/2025, Item 8.2(a), 10/28/2025), §24.02.130(B), <https://sanjose.legistar.com/View.ashx?M=F&ID=14873777&GUID=DD05D7FB-2583-4C0D-BC97-EE5FB907BE34>

  > The clearing of stoppages or the repairing of leaks in pipes, valves or fixtures, and the removal and reinstallation of water closets, provided such repairs do not involve or require the replacement or rearrangement of valves, pipes or fixtures.

- `c9` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > Minor remodels of a kitchen or bathroom may qualify for an easy online permit.

- `c10` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Inspections, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > You will be issued a Permit Card that lists required inspections.

- `c11` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Requirements for both Kitchens and Bathrooms, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > Both rough and final inspections may be required. Plan to provide inspection of all roughs — such as for tub and shower installments — and then a second time for all finals.

- `c12` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Requirements for both Kitchens and Bathrooms, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > Provide a completed Affidavit of Smoke Alarm and Carbon Monoxide Alarm Installation. CRC R315.

- `c13` San Jose Permit Center, When Is a Building Permit Required? (updated 06/12/2025), Projects that require a building permit, <https://web.archive.org/web/20260813091205/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/when-is-a-building-permit-required>

  > New construction, additions, alteration of walls, or any structural change

- `c14` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Requirements for Bathrooms, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > Ventilation & fan - Bathrooms containing a bathtub or shower must be mechanically ventilated and ducted to the exterior to control humidity. Window operation is not a permissible method of providing humidity control in a bathroom. Fan must be minimum 50 CFM and Energy Star compliant.

- `c15` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Requirements for Bathrooms, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > Lighting switching devices and controls - At least one luminaire in the bathroom must be controlled by an occupant or vacancy sensory providing automatic-off functionality.

- `c16` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Requirements for Bathrooms, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > Shower pan - Pan dimensions must be a minimum area of 1,024 sq. in. and a minimum finish dimension of 30” in any direction. CPC 408.6

**Researcher notes.** cosmetic_only conflict: the starter definition includes "fixtures swapped in place", but San Jose treats fixture and appliance replacements as a minor remodel that needs a permit (c4), and the SJMC 24.02.130 plumbing exemptions cover only leak repairs, stoppages, and removing and resetting water closets without replacing valves, pipes, or fixtures (c8). This record therefore adds replaces_fixtures_in_place (boolean, replaces plumbing fixtures or appliances in their existing locations) and mechanical_work (boolean, installs or replaces an exhaust fan, range hood, or other ducted ventilation), evaluates them before cosmetic_only, and its NOT_REQUIRED outcome means finish work only. Electrical conflict: the When Is a Building Permit Required? page (updated 06/12/2025) still lists outlet and switch replacement in existing boxes and "Repair or replacement of current-carrying parts of any switch, conductor, or control device" as exempt. The 2025 ordinance replaces SJMC 24.02.150 item 4 with "Reserved" and limits item 1 to minor repairs such as replacing lamps and connecting portable equipment to permanently installed receptacles. Those redlined passages are not quoted. This record follows the 2025 ordinance and treats any electrical_work as REQUIRED; the narrow minor-repair exemptions are not modeled. The same ordinance repeals the 1.28 gpf low-flush toilet retrofit exemption (SJMC 24.02.130 C, now Reserved), which the When page still lists. Major remodels on single-family or duplex properties go to the Additions & Remodels process (c6): Over-the-Counter for qualifying 1-story homes, otherwise Residential Express or Standard Plan Review. Fee: no remodel fee is recorded; the FY 2025-26 schedule prices remodels through valuation tables and an inspection cap, and a newer schedule was not archived. Access: sanjoseca.gov returned HTTP 403 (Akamai "Access Denied") to curl and WebFetch, robots.txt included. The robots.txt read from a Wayback snapshot (20260501) disallows only /admin and *.asmx paths for User-agent *, and the City E-Government Policy (Administrative Policy 1.7.5, home/showdocument?id=17869) contains no restriction on automated access or copying. City page quotes therefore come from raw Internet Archive captures (the id_ form of each source_url, same timestamp), not from the live site. SJMC text comes from the 2025 code-adoption ordinance on sanjose.legistar.com (no robots.txt, no terms page found); Municode was not used because its Terms and Conditions of Use say: "You may not copy, modify, reproduce, republish, distribute, display, or transmit for commercial, non-profit or public purposes all or any portion of this Website, except to the extent permitted by these Terms and Conditions of Use." Code edition: San Jose adopted the 2025 California codes effective January 1, 2026 (Adopted Building Codes page, Wayback 20260318). The ordinance PDF is the 10/16/2025 council draft with redline. Legistar shows it passed for publication 10/28/2025 as Ordinance No. 31256 and listed for final adoption on the 11/18/2025 agenda (file 25-1187); the signed final ordinance was not retrieved. Only ordinance passages with no redline marks (checked visually on rendered pages 8-12) are quoted. Section number: the When Is a Building Permit Required? page (updated 06/12/2025) says "Municipal Code Section 24.02.110 lists all exempt projects", but the ordinance codifies "24.02.120 Building Permit Exemptions"; this record cites 24.02.120. San Jose does not adopt CRC Chapter 1, Division II (SJMC 24.09.110 A.6, unchanged in the 2025 ordinance), so CRC R105.2 is not the operative exemption list in San Jose; SJMC 24.02.120-24.02.150 are.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes

## Deck (`deck`): draft

**Summary.** In San Jose a deck needs a building permit unless it is under 200 square feet, under 30 inches above the ground at every point, freestanding, and not used as an exit-door or door landing.

| # | When | Verdict | Explanation | Cites |
|---|---|---|---|---|
| 1 | deck area under 200 sq ft and deck height above grade under 30 in and attached to the house: no and serves an exit door: no and serves as a landing for any door: no | NOT_REQUIRED | A freestanding deck under 200 square feet and under 30 inches above the ground at every point, which is not a required exit-door landing or any door landing, does not need a building permit on a single-family or duplex property. | c1, c3 |
| 2 | deck area at most 200 sq ft and deck height above grade at most 30 in and attached to the house: no and serves an exit door: no and serves as a landing for any door: no | DEPENDS | At exactly 200 square feet or exactly 30 inches high, San Jose's own pages disagree. The exemption list allows up to 200 square feet and 30 inches, but the newer deck page says 200 square feet or greater, or 30 inches or more, requires a permit. Ask the Permit Center before building. | c1, c2, c3 |

**Otherwise:** REQUIRED. A building permit is required if the deck is 200 square feet or larger, is 30 inches or more above the ground at any point, is attached to the house, serves a required exit door, or serves as a door landing. (c3)

**Permit types:** Building permit

**Fee note:** San Jose's FY 2025-26 Building Division fee schedule (effective August 11, 2025) charges residential exterior or site alterations, including decks and accessory structures such as sheds, a base permit issuance fee of $227 and a base plan review fee of $325. The base inspection fee is $367 when only a building permit is needed, or $682 total when a plumbing, mechanical or electrical permit is also needed. The Building Official may adjust fees to fit the scope. This is the latest archived copy; a FY 2026-27 schedule may now apply, so check sanjoseca.gov/buildingfees.

- Note: The exemption list applies to Group R-3 occupancies, which San Jose defines as single-family and duplex properties, certain child and adult care facilities, and congregate living shelters. (c4)
- Note: Depending on the site, a permitted deck may also need a Geologic Hazard Clearance, a Grading Permit, or a Historic Preservation Permit, Adjustment, or Amendment. (c5)

**Citations**

- `c1` San Jose Permit Center, When Is a Building Permit Required? (updated 06/12/2025), summarizing SJMC §24.02.110, <https://web.archive.org/web/20260813091205/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/when-is-a-building-permit-required>

  > Decks in Group R-3 occupancies that are not attached to a dwelling; do not exceed 200 square feet in area; do not serve a required exit door; and do not exceed 30 inches above adjacent grade at any point.

- `c2` San Jose Building Bulletin #201, When Is a Building Permit Required? (06/12/2025), summarizing SJMC §24.02.110, <https://web.archive.org/web/20260106113350/https://www.sanjoseca.gov/home/showpublisheddocument/25897/638853215612230000>

  > 3. Decks in Group R-3 occupancy that are not attached to a dwelling; do not exceed 200 square feet in area; do not serve a required exit door; and do not exceed 30 inches above adjacent grade at any point.

- `c3` San Jose Permit Center, Decks, single-family & duplex (updated 03/23/2026), <https://web.archive.org/web/20260513141119/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/decks>

  > A deck installation, replacement, or repair requires a building permit if any of these conditions apply: Deck is 200 sq. ft. or greater Deck is 30" or more above ground at any point Deck is attached to a dwelling The deck serves a required exit door The deck serves as a door landing

- `c4` San Jose Permit Center, When Is a Building Permit Required? (updated 06/12/2025), summarizing SJMC §24.02.110, <https://web.archive.org/web/20260813091205/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/when-is-a-building-permit-required>

  > Definition: Group R-3 occupancies are single-family and duplex properties; certain child and adult care facilities; and congregate living shelters.

- `c5` San Jose Permit Center, Decks, single-family & duplex (updated 03/23/2026), <https://web.archive.org/web/20260513141119/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/decks>

  > IF APPLICABLE per Design Considerations > Geologic Hazard Clearance > Grading Permit Application > Historic Preservation Permit, Adjustment, or Amendment

- `c6` San Jose Permit Center, Decks, single-family & duplex (updated 03/23/2026), <https://web.archive.org/web/20260513141119/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/decks>

  > REQUIRED > Project Plans - See Plan Set Instructions. > Building Permit Application - See instructions. > Single-Family & Duplex Projects Submittal Checklist - Under Project Scope, check "Other" and enter "Deck"

- `c7` San Jose Building Division Fee Schedule FY 2025-26 (effective 08/11/2025), Building Residential Fees, p. 4, <https://web.archive.org/web/20251207120823/https://www.sanjoseca.gov/home/showpublisheddocument/26047/637922894017900000>

  > Exterior and/or site alterations, such (but not limited to) an accessory structure (shed, etc.), balconies and decks, porches, windows, pools, etc. will be charged a base permit issuance fee of $227 and a base plan review fee of $325. Exterior and/or site alterations that only require a building permit will be charged a base Inspection fee of $367. If a plumbing, mechanical, or electrical permit is also required, the total base inspection fee will be $682.

**Researcher notes.** Conflict: the exemption list on the When Is a Building Permit Required? page (c1) and in Bulletin #201 (c2), both dated 06/12/2025, exempts decks that 'do not exceed 200 square feet' and 'do not exceed 30 inches above adjacent grade'. The Decks page (c3, updated 03/23/2026) says a permit is required if the 'Deck is 200 sq. ft. or greater' or 'Deck is 30" or more above ground at any point'. It also adds 'The deck serves as a door landing', which the exemption list does not mention. Because the Decks page is newer and more specific, this record follows it: anything it lists as needing a permit falls through to REQUIRED, and only the exact 200 sq ft or 30 in boundary is DEPENDS. New param serves_door_landing (boolean) comes from c3. The page does not define 'door landing'; it appears broader than 'required exit door'. The exemption applies to Group R-3 occupancies only (c4). This record assumes a single-family or duplex property. docs_required comes from c6. fee_note comes from c7 and from the schedule cover, which reads 'Effective August 11, 2025'. The Decks page lists no specific inspections; it says only that a Permit Card lists them, so inspections is empty. The CRC baseline (R105.2 Building item 10) was not quoted because the ICC viewer's terms prohibit robots; see ca-baseline research notes. Access: sanjoseca.gov returned HTTP 403 (Akamai 'Access Denied') to curl and to WebFetch from this machine, robots.txt included. I read robots.txt from a Wayback snapshot (https://web.archive.org/web/20260501010517/https://www.sanjoseca.gov/robots.txt). It disallows only /scripts, /admin and *.asmx for all agents, so content pages are allowed. The city's E-Government Policy (sanjoseca.gov/home/showdocument?id=17869, read from a Wayback snapshot) has no rule against copying or automated access. Every San Jose quote comes from a raw Internet Archive snapshot of the official page (id_ mode, fetched with curl, tags stripped with python3, PDFs read with pdftotext). source_url is that snapshot URL, and the official sanjoseca.gov URL is the part after the timestamp. Internet Archive terms say access 'is granted for scholarship and research purposes only'. Re-check each quote on the live sanjoseca.gov page before marking the rule verified. Quote format: list items and paragraph breaks are joined with single spaces and bullet characters are left out; the words are verbatim. Municode (library.municode.com), host of SJMC Titles 20 and 24, was not fetched. Its archived terms (https://web.archive.org/web/20190411032708/https://www.municode.com/terms-of-use/) say: 'You may not copy, modify, reproduce, republish, distribute, display, or transmit for commercial, non-profit or public purposes all or any portion of this Website, except to the extent permitted by these Terms and Conditions of Use.' I could not load the current terms (the page is rendered by JavaScript and municode.com redirects to civicplus.com, which returns 403). So SJMC §24.02.110 (the exempt-work list) and §20.30.500 were not read directly. The city pages are the only source. The city pages cite 'Section 24.02.110', but the Municode link on the When Is a Building Permit Required? page points to node 24.02.120 (BUPEEX). The correct section number is unconfirmed. Code edition: the Adopted Building Codes page (https://web.archive.org/web/20260318183710/https://www.sanjoseca.gov/your-government/departments-offices/planning-building-code-enforcement/building-division/adopted-building-codes) says 'Effective Jan. 1, 2026, the 2025 state building codes have replaced the 2022 codes.' Its 'amended ordinance' link still opens Ordinance No. 30837 (the 2022 adoption, which does not amend Chapter 24.02). The October 28, 2025 Council presentation on adopting the 2025 codes (https://sanjose.legistar.com/View.ashx?M=F&ID=14894029&GUID=229C001D-2EEC-4071-83AE-F1034F198173&G=920296E4-80BE-4CA2-A78F-32C5EFCF78AF) lists the retained Title 24 amendments as 'Special Testing and Inspections', 'Gypsum board shear walls' and 'Braced wall panels', and says 'No (0) additional amendments to 2025 California Building Codes'. That suggests the 2025 adoption left the exempt-work list alone, but I did not read the adopted ordinance. Bulletin #201 and the When Is a Building Permit Required? page are both dated 06/12/2025, before the 2025 codes took effect.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes

## Electrical panel upgrade (`electrical-panel`): draft

**Summary.** In San Jose, upgrading or replacing the main electrical service panel needs an electrical permit; like-for-like replacements up to 400 amps can be permitted online.

**Otherwise:** REQUIRED. An electrical permit is required to upgrade the main electrical service panel of a home. San Jose's exemption covers only replacing a branch-circuit breaker of the required capacity in the same location in a one- or two-family home, and the city says to get a permit to replace a main disconnect. (sj_panel_page, sj_150_6, sj_when_breaker)

**Permit types:** Electrical permit

**Fee note:** San Jose's FY 2025-26 fee schedule bills electrical inspection at a minimum of $315 per hour, with a 40-minute minimum for a service change on one meter up to 600 amps, in addition to the permit issuance fee.

- Note: The online permit at SJPermits.org covers a service change up to 400 amps only for a like-for-like replacement in the same location with no changes to exterior finishes. Other panel work needs the city's regular permit process. (sj_online_service, sj_panel_page)
- Note: When service equipment serving a home is replaced, a Type 1 or Type 2 surge-protection device must be installed. (sj_panel_surge)
- Note: Fees: electrical inspection is a minimum of $315 per hour with a 40-minute minimum for a service change up to 600 amps, plus a permit issuance fee. (fee_elec, fee_service, fee_issue)
- Note: Online permits can be pulled only by the property owner or a qualified contractor. The city recommends that a licensed contractor pull the permit; an owner-builder must also submit the Owner Acknowledgement and Information Verification Form, show ID at issuance, and be the owner of record. (sj_online_intro, sj_who_ob)
- Note: San Jose adopted the 2025 California Electrical Code; the 2025 codes apply to permit applications made on or after January 1, 2026. (sj_cec, sj_eff)

**Citations**

- `sj_panel_page` San Jose Permit Center, Electrical Service Panel Upgrades (updated 04/15/2026), <https://web.archive.org/web/20260513123551id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/electrical-service-panel-upgrades>

  > An electrical permit is required to upgrade the main electrical service panel of a residence. It is easy to get the permit online.

- `sj_150_6` SJMC §24.02.150(6) (Ord. No. 31256), <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37111/file>

  > An electrical permit shall not be required for the following: ... 6. Replacement of any branch circuit overcurrent device of the required capacity in the same location, in one- and two-family dwellings.

- `sj_when_breaker` San Jose Permit Center, When Is a Building Permit Required? (updated 06/12/2025), <https://web.archive.org/web/20260813091205id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/when-is-a-building-permit-required>

  > Replacements of electrical outlets, switches in existing boxes, circuit breakers, or fuses. Do get a permit to replace a main disconnect.

- `sj_online_service` San Jose, Online Building Permits at SJPermits.org, Electrical Permit table, <https://web.archive.org/web/20260801184719id_/https://www.sanjoseca.gov/business/development-services-permit-center/online-permits-at-sjpermits-org/building-online-permits>

  > Service Change/Survey up to 400 Amps Only like-for-like replacements in the same location, with no alterations to exterior finishes. Yes Yes Yes

- `sj_panel_surge` San Jose Permit Center, Electrical Service Panel Upgrades (updated 04/15/2026), item 9, <https://web.archive.org/web/20260513123551id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/electrical-service-panel-upgrades>

  > Where service equipment serving dwelling units is replaced, a Type 1 or Type 2 surge-protection device shall be provided.

- `fee_elec` San Jose Building Division Fee Schedule FY 2025-26 (effective August 11, 2025), Residential Sub-Trade Permits, Electrical Permits, p. 5, <https://web.archive.org/web/20251207120823id_/https://www.sanjoseca.gov/home/showpublisheddocument/26047/637922894017900000>

  > Electrical Permit Fees (site construction and other miscellaneous electrical permits) not involving the addition of new building footage shall be the greater of (a) a minimum of $315 per hour of required inspection time, or (b) calculated on an itemized basis as listed below. These Permit Fees are in addition to the Permit Issuance Fees. All items default to a minimum time allocation of 30 minutes of inspection time (20 minutes minimum per unit if more than 1) except for the following:

- `fee_service` San Jose Building Division Fee Schedule FY 2025-26 (effective August 11, 2025), Fixture-Based Time Assessments - Electrical, p. 5, <https://web.archive.org/web/20251207120823id_/https://www.sanjoseca.gov/home/showpublisheddocument/26047/637922894017900000>

  > Electrical Fixture Minimum (min.) Time (min.)/Unit ... Service/Survey 1 meter to 600A 40 30

- `fee_issue` San Jose Building Division Fee Schedule FY 2025-26 (effective August 11, 2025), Building Residential Fees, p. 3, <https://web.archive.org/web/20251207120823id_/https://www.sanjoseca.gov/home/showpublisheddocument/26047/637922894017900000>

  > Permit Issuance Fees shall be $227 per hour for processing and coordination time expended or the amounts set forth below, whichever is greater. Minimum permit issuance fee for all permits using Online Permits service is 50% of the specified processing fee.

- `sj_online_intro` San Jose, Online Building Permits at SJPermits.org, <https://web.archive.org/web/20260801184719id_/https://www.sanjoseca.gov/business/development-services-permit-center/online-permits-at-sjpermits-org/building-online-permits>

  > You can download a building permit for 56 types of simple projects at SJPermits.org. ... Only property owners and qualified contractors may apply for an online building permit.

- `sj_who_ob` San Jose Permit Center, Who Can Apply for a Building Permit? (updated 01-13-2026), <https://web.archive.org/web/20260517000302id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/who-can-apply-for-a-permit>

  > We highly recommend that the licensed contractor rather than the property owner pull the permit. ... If you wish to proceed as an Owner-Builder, your permit application package will need to include: Owner-Builder Requirements to Sign a Permit Owner Acknowledgement and Information Verification Form - In addition to submitting a building permit application, you must complete and submit this form. At time of permit issuance, be ready to provide a Driver’s License or other proof of identification. You must be the Property Owner as recorded by the County Tax Assessor.

- `sj_cec` SJMC §24.06.100 (Ord. No. 31256), <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37111/file>

  > Except as otherwise provided for in this chapter, the California Electrical Code, 2025 edition, together with those omissions, amendments, exceptions and additions thereto as amended in Title 24 of the California Code of Regulations

- `sj_eff` San Jose staff memo, Council file 25-1131 (Oct. 6, 2025), <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37104/file>

  > The 2025 California Building Standards Code will apply to any building or structure for which an application for a building permit is made on or after January 1, 2026.

**Researcher notes.** Access: every live sanjoseca.gov URL tried, robots.txt included, returned HTTP 403 'Access Denied' (Akamai) to curl and to WebFetch. City pages were read from raw Internet Archive captures (id_ mode, fetched with curl, tags stripped with python3, the fee schedule PDF read with pdftotext). source_url is the capture URL; the official sanjoseca.gov URL is the part after the timestamp. The captured robots.txt (https://web.archive.org/web/20260501010517/https://www.sanjoseca.gov/robots.txt) disallows only /scripts, /admin and *.asmx for all agents. The city's E-Government Policy (sanjoseca.gov/home/showdocument?id=17869, capture 20260904222013) has no rule against copying or automated access. Internet Archive terms say access 'is granted for scholarship and research purposes only'. Re-check each city quote on the live page before marking a rule verified. Quote format: list items and paragraph breaks are joined with single spaces and bullet characters are left out; ' ... ' marks omitted text; the words are verbatim. sjpermits.org robots.txt is 'User-agent: * / Disallow: /', so the SJPermits portal was not fetched; online-permit availability comes from the city's Online Building Permits page. Municode (host of the San Jose Municipal Code) was not fetched. Its archived terms (https://web.archive.org/web/20190411032708/https://www.municode.com/terms-of-use/) say: 'You may not copy, modify, reproduce, republish, distribute, display, or transmit for commercial, non-profit or public purposes all or any portion of this Website, except to the extent permitted by these Terms and Conditions of Use.' The current terms page could not be loaded. SJMC text: quotes marked 'Ord. No. 31256' come from the council-agenda redline of that ordinance (draft dated 10/16/2025, Council Agenda 10/28/2025 Item 8.2(a), file 25-1131), downloaded through the Legistar Web API (webapi.legistar.com); sanjose.granicus.com robots.txt has 'User-agent: * / Disallow: /'. Each such quote is the enacted wording: struck-through text removed and underlined additions kept, checked against the rendered PDF page. Legistar matter 25-1187 (Final Adoption of Ordinances, dated 2025-10-30) lists 'Ordinance No. 31256' as passed for publication on 10/28/2025; the signed ordinance and the final vote were not retrieved. Code edition: San Jose adopted the 2025 California codes (not 2022) for permit applications made on or after January 1, 2026. SJMC 24.09.110(A)(6) does not adopt CRC Chapter 1, Division II, so CRC §R105.2 does not apply in San Jose; the city's exemption lists are SJMC 24.02.120 to 24.02.150. Section numbering: the When Is a Building Permit Required? page (updated 06/12/2025) cites 'Section 24.02.110' for the exempt list, but Ord. No. 31256 amends the exemption lists as 24.02.120 (building), 24.02.130 (plumbing), 24.02.140 (mechanical) and 24.02.150 (electrical). Fees: the fee schedule capture is the FY 2025-26 schedule ('Effective August 11, 2025', document 26047 version 637922894017900000, captured 2025-12-07). The Building Permit Fees page captured 2026-08-01 still says the schedule shows fees in effect as of August 11, 2025, but links a newer upload (version 639180865996470000) with no capture, so the current PDF could not be compared. A draft FY 2026-27 fee resolution (Council Agenda 06-09-2026 Item 3.4(b), Legistar file 26-683) sets different amounts ('Water Heater Replacement – Permit Center 0.25 x # of units $52'); its adoption was not confirmed, so it is not cited. Redline detail: in SJMC 24.02.150 item 6, Ord. No. 31256 adds 'branch circuit' and 'in one- and two-family dwellings' and strikes 'except service equipment'. Both the old and new wording leave the service panel outside the exemption. The 400-amp online condition limits the online path, not whether a permit is needed, so it is a note rather than an outcome. docs_required is empty because the captured page lists no required documents for the online path.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes

## EV charger (`ev-charger`): draft

**Summary.** In San Jose, a Level 1 (120-volt) charger plugged into an existing outlet needs no permit; a Level 2 (240-volt) charger or any new outlet needs an electrical permit.

| # | When | Verdict | Explanation | Cites |
|---|---|---|---|---|
| 1 | installation type: plug into existing outlet and charger level: level 1 120v | NOT_REQUIRED | A Level 1 charger that plugs into a standard 120-volt outlet you already have needs no permit. Installing a new outlet for it needs an electrical permit. | sj_ev_page, sj_ev_levels, sj_ev_l1, sj_150_1 |
| 2 | charger level: level 2 240v | REQUIRED | A Level 2 (240-volt) charger needs an electrical permit. If the manufacturer specifies mechanical ventilation, a mechanical permit is also required. | sj_ev_page, sj_ev_levels, sj_ev_l2 |

**Otherwise:** REQUIRED. Installing a new outlet or circuit for a charger needs an electrical permit in San Jose. State law requires the city to approve charging-station applications through a building permit or similar nondiscretionary permit. (sj_ev_l1, sj_ev_l2, sj_150_5, g7_b1)

**Permit types:** Electrical permit; Mechanical permit (if the manufacturer specifies mechanical ventilation)

**Fee note:** San Jose's FY 2025-26 fee schedule bills electrical inspection at a minimum of $315 per hour, with a 30-minute default minimum per item, in addition to the permit issuance fee.

- Note: For a Level 2 installation, provide the inspector with the UL 2202 listing, the panel rating, charging load and circuit size, whether a second meter will be installed, and the panel and charger locations. (sj_ev_docs)
- Note: Single-family homes and duplexes can get the EV charger permit online at SJPermits.org. (sj_ev_online, sj_online_ev)
- Note: DC fast chargers (Level 3) are not allowed on residential properties. (sj_ev_l3)
- Note: State law limits the city's review of a charging station application to health and safety requirements. (g7_b3)
- Note: State law required cities with 200,000 or more residents to adopt an expedited, checklist-based permit process for EV charging stations by September 30, 2016. (g7_g1)
- Note: For 1 to 25 chargers at one site, state law deems an application complete 5 business days after submission, and approved 20 business days after it is deemed complete, when the statute's other conditions are met. (g71_b1, g71)
- Note: The city cannot make permit approval depend on approval by a homeowners association. (g7_h)
- Note: Fees: electrical inspection is a minimum of $315 per hour with a 30-minute default minimum per item, plus a permit issuance fee. (fee_elec, fee_issue)
- Note: Online permits can be pulled only by the property owner or a qualified contractor. The city recommends that a licensed contractor pull the permit; an owner-builder must also submit the Owner Acknowledgement and Information Verification Form, show ID at issuance, and be the owner of record. (sj_online_intro, sj_who_ob)
- Note: San Jose adopted the 2025 California Electrical Code; the 2025 codes apply to permit applications made on or after January 1, 2026. (sj_cec, sj_eff)

**Citations**

- `sj_ev_page` San Jose Permit Center, Electric Vehicle Charging Stations (updated 03/18/2026), <https://web.archive.org/web/20260513123110id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/electric-vehicle-charging-stations>

  > A Level 1 charging station does not require a permit. A Level 2 station requires an electrical permit; depending on the manufacturer, it may also require a mechanical permit. It is easy to get the permit/s online.

- `sj_ev_levels` San Jose Permit Center, Electric Vehicle Charging Stations (updated 03/18/2026), Definitions, <https://web.archive.org/web/20260513123110id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/electric-vehicle-charging-stations>

  > Level 1 - Uses a standard 120-volt outlet. Level 2 - Uses a 240-volt outlet.

- `sj_ev_l1` San Jose Permit Center, Electric Vehicle Charging Stations (updated 03/18/2026), <https://web.archive.org/web/20260513123110id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/electric-vehicle-charging-stations>

  > Level 1 Charging Station Installation - No permit is required unless it entails installing a new outlet, in which case, an electrical permit is required

- `sj_150_1` SJMC §24.02.150(1) (Ord. No. 31256), <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37111/file>

  > An electrical permit shall not be required for the following: 1. Minor repair work, including the replacement of lamps or the connection of approved portable electrical equipment to approved permanently installed receptacles.

- `sj_ev_l2` San Jose Permit Center, Electric Vehicle Charging Stations (updated 03/18/2026), <https://web.archive.org/web/20260513123110id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/electric-vehicle-charging-stations>

  > Level 2 Charging Station Installation - Requires an electrical permit. If the manufacturer specifies use of mechanical ventilation, a mechanical permit is also required.

- `sj_150_5` SJMC §24.02.150(5) (Ord. No. 31256), <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37111/file>

  > 5. Reinstallation of attachment plug receptacles, but not the outlets.

- `g7_b1` Cal. Gov. Code §65850.7(b)(1), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.7.>

  > A city, county, or city and county shall administratively approve an application to install electric vehicle charging stations through the issuance of a building permit or similar nondiscretionary permit.

- `sj_ev_docs` San Jose Permit Center, Electric Vehicle Charging Stations (updated 03/18/2026), Level 2 Inspection Requirements, <https://web.archive.org/web/20260513123110id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/electric-vehicle-charging-stations>

  > For a Level 2 installation, at the time of inspection, provide the following to the City Inspector: UL listing number or the listing number of another approved nationally recognized testing laboratory in compliance with UL2202: “Standard for Electric Vehicle Charging System Equipment.” Panel rating, charging load, and circuit size. ... 3. Second meter. Indicate if a second electric meter will be installed due to special electric utility rates available for EV charging. 4. Location of utility panel and Electric Vehicle Supply Equipment (EVSE). Show the location of the utility panel and EVSE.

- `sj_ev_online` San Jose Permit Center, Electric Vehicle Charging Stations (updated 03/18/2026), How to Apply, <https://web.archive.org/web/20260513123110id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/electric-vehicle-charging-stations>

  > Single-family/duplex properties - Obtain an online permit as instructed below.

- `sj_online_ev` San Jose, Online Building Permits at SJPermits.org, Electrical Permit table, <https://web.archive.org/web/20260801184719id_/https://www.sanjoseca.gov/business/development-services-permit-center/online-permits-at-sjpermits-org/building-online-permits>

  > Electrical Permit Single-family / Duplex Multifamily Commercial / Industrial Air Conditioning Yes No No Appliance - New Yes No No Appliance - Replacement Yes Yes No Electric Vehicle Charging Station Yes Yes Assigned Parking Only No

- `sj_ev_l3` San Jose Permit Center, Electric Vehicle Charging Stations (updated 03/18/2026), Definitions, <https://web.archive.org/web/20260513123110id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/electric-vehicle-charging-stations>

  > Level 3 - Also called DC fast chargers, these use a 480-plug to provide direct current (DC) electricity to the battery. These are not allowed on residential properties.

- `g7_b3` Cal. Gov. Code §65850.7(b)(3), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.7.>

  > Review of an application to install an electric vehicle charging station or hydrogen-fueling station shall be limited to the building official’s review of whether it meets all health and safety requirements of local, state, and federal law.

- `g7_g1` Cal. Gov. Code §65850.7(g)(1)(A), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.7.>

  > On or before September 30, 2016, every city, county, or city and county with a population of 200,000 or more residents, and, on or before September 30, 2017, every city, county, or city and county with a population of less than 200,000 residents, shall, in consultation with the local fire department or district and the utility director, if the city, county, or city and county operates a utility, adopt an ordinance, consistent with the goals and intent of this section, that creates an expedited, streamlined permitting process for electric vehicle charging stations. In developing an expedited permitting process, the city, county, or city and county shall adopt a checklist of all requirements with which electric vehicle charging stations shall comply to be eligible for expedited review.

- `g71_b1` Cal. Gov. Code §65850.71(b)(1), (c)(1), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.71.>

  > An application to install an electric vehicle charging station submitted to the building official of a city, county, or city and county shall be deemed complete if, after the applicable time period described in paragraph (2) has elapsed, both of the following are true: ... An application to install an electric vehicle charging station shall be deemed approved if the applicable time period described in paragraph (2) has elapsed and all of the following are true:

- `g71` Cal. Gov. Code §65850.71(b)(2)(A), (c)(2)(A), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.71.>

  > Five business days after submission of the application to the city, county, or city and county, if the application is for at least 1, but not more than 25 electric vehicle charging stations at a single site. ... Twenty business days after the application was deemed complete, if the application is for at least 1, but not more than 25 electric vehicle charging stations at a single site.

- `g7_h` Cal. Gov. Code §65850.7(h), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.7.>

  > A city, county, or city and county shall not condition approval for any electric vehicle charging station or hydrogen-fueling station permit on the approval of the station by an association, as that term is defined in Section 4080 of the Civil Code.

- `fee_elec` San Jose Building Division Fee Schedule FY 2025-26 (effective August 11, 2025), Residential Sub-Trade Permits, Electrical Permits, p. 5, <https://web.archive.org/web/20251207120823id_/https://www.sanjoseca.gov/home/showpublisheddocument/26047/637922894017900000>

  > Electrical Permit Fees (site construction and other miscellaneous electrical permits) not involving the addition of new building footage shall be the greater of (a) a minimum of $315 per hour of required inspection time, or (b) calculated on an itemized basis as listed below. These Permit Fees are in addition to the Permit Issuance Fees. All items default to a minimum time allocation of 30 minutes of inspection time (20 minutes minimum per unit if more than 1) except for the following:

- `fee_issue` San Jose Building Division Fee Schedule FY 2025-26 (effective August 11, 2025), Building Residential Fees, p. 3, <https://web.archive.org/web/20251207120823id_/https://www.sanjoseca.gov/home/showpublisheddocument/26047/637922894017900000>

  > Permit Issuance Fees shall be $227 per hour for processing and coordination time expended or the amounts set forth below, whichever is greater. Minimum permit issuance fee for all permits using Online Permits service is 50% of the specified processing fee.

- `sj_online_intro` San Jose, Online Building Permits at SJPermits.org, <https://web.archive.org/web/20260801184719id_/https://www.sanjoseca.gov/business/development-services-permit-center/online-permits-at-sjpermits-org/building-online-permits>

  > You can download a building permit for 56 types of simple projects at SJPermits.org. ... Only property owners and qualified contractors may apply for an online building permit.

- `sj_who_ob` San Jose Permit Center, Who Can Apply for a Building Permit? (updated 01-13-2026), <https://web.archive.org/web/20260517000302id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/who-can-apply-for-a-permit>

  > We highly recommend that the licensed contractor rather than the property owner pull the permit. ... If you wish to proceed as an Owner-Builder, your permit application package will need to include: Owner-Builder Requirements to Sign a Permit Owner Acknowledgement and Information Verification Form - In addition to submitting a building permit application, you must complete and submit this form. At time of permit issuance, be ready to provide a Driver’s License or other proof of identification. You must be the Property Owner as recorded by the County Tax Assessor.

- `sj_cec` SJMC §24.06.100 (Ord. No. 31256), <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37111/file>

  > Except as otherwise provided for in this chapter, the California Electrical Code, 2025 edition, together with those omissions, amendments, exceptions and additions thereto as amended in Title 24 of the California Code of Regulations

- `sj_eff` San Jose staff memo, Council file 25-1131 (Oct. 6, 2025), <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37104/file>

  > The 2025 California Building Standards Code will apply to any building or structure for which an application for a building permit is made on or after January 1, 2026.

**Researcher notes.** Access: every live sanjoseca.gov URL tried, robots.txt included, returned HTTP 403 'Access Denied' (Akamai) to curl and to WebFetch. City pages were read from raw Internet Archive captures (id_ mode, fetched with curl, tags stripped with python3, the fee schedule PDF read with pdftotext). source_url is the capture URL; the official sanjoseca.gov URL is the part after the timestamp. The captured robots.txt (https://web.archive.org/web/20260501010517/https://www.sanjoseca.gov/robots.txt) disallows only /scripts, /admin and *.asmx for all agents. The city's E-Government Policy (sanjoseca.gov/home/showdocument?id=17869, capture 20260904222013) has no rule against copying or automated access. Internet Archive terms say access 'is granted for scholarship and research purposes only'. Re-check each city quote on the live page before marking a rule verified. Quote format: list items and paragraph breaks are joined with single spaces and bullet characters are left out; ' ... ' marks omitted text; the words are verbatim. sjpermits.org robots.txt is 'User-agent: * / Disallow: /', so the SJPermits portal was not fetched; online-permit availability comes from the city's Online Building Permits page. Municode (host of the San Jose Municipal Code) was not fetched. Its archived terms (https://web.archive.org/web/20190411032708/https://www.municode.com/terms-of-use/) say: 'You may not copy, modify, reproduce, republish, distribute, display, or transmit for commercial, non-profit or public purposes all or any portion of this Website, except to the extent permitted by these Terms and Conditions of Use.' The current terms page could not be loaded. SJMC text: quotes marked 'Ord. No. 31256' come from the council-agenda redline of that ordinance (draft dated 10/16/2025, Council Agenda 10/28/2025 Item 8.2(a), file 25-1131), downloaded through the Legistar Web API (webapi.legistar.com); sanjose.granicus.com robots.txt has 'User-agent: * / Disallow: /'. Each such quote is the enacted wording: struck-through text removed and underlined additions kept, checked against the rendered PDF page. Legistar matter 25-1187 (Final Adoption of Ordinances, dated 2025-10-30) lists 'Ordinance No. 31256' as passed for publication on 10/28/2025; the signed ordinance and the final vote were not retrieved. Code edition: San Jose adopted the 2025 California codes (not 2022) for permit applications made on or after January 1, 2026. SJMC 24.09.110(A)(6) does not adopt CRC Chapter 1, Division II, so CRC §R105.2 does not apply in San Jose; the city's exemption lists are SJMC 24.02.120 to 24.02.150. Section numbering: the When Is a Building Permit Required? page (updated 06/12/2025) cites 'Section 24.02.110' for the exempt list, but Ord. No. 31256 amends the exemption lists as 24.02.120 (building), 24.02.130 (plumbing), 24.02.140 (mechanical) and 24.02.150 (electrical). Fees: the fee schedule capture is the FY 2025-26 schedule ('Effective August 11, 2025', document 26047 version 637922894017900000, captured 2025-12-07). The Building Permit Fees page captured 2026-08-01 still says the schedule shows fees in effect as of August 11, 2025, but links a newer upload (version 639180865996470000) with no capture, so the current PDF could not be compared. A draft FY 2026-27 fee resolution (Council Agenda 06-09-2026 Item 3.4(b), Legistar file 26-683) sets different amounts ('Water Heater Replacement – Permit Center 0.25 x # of units $52'); its adoption was not confirmed, so it is not cited. New param: charger_level (enum 'level_1_120v' | 'level_2_240v'), following the city's definitions: Level 1 uses a standard 120-volt outlet, Level 2 uses a 240-volt outlet. The EV page sets the permit line by level, so install_type alone cannot decide it. charger_level is not in packages/core/src/projects.ts, so validate-data will reject this file until it is added. Conflict check: SJMC 24.02.150(1) exempts connecting approved portable electrical equipment to approved permanently installed receptacles. The city's EV page says a Level 2 station 'Requires an electrical permit' without an exception for plug-in units. This record follows the EV page, which is more specific; a plug-in Level 2 unit on an existing 240-volt receptacle is therefore REQUIRED here, and that reading should be confirmed with the city. Baseline: ca-baseline/ev-charger.json defaults to REQUIRED because state law does not address plug-in chargers; San Jose's Level 1 rule governs in San Jose. docs_required lists what the EV page says to provide at a Level 2 inspection; it does not apply to a Level 1 plug-in.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes

## Fence or wall (`fence`): draft

**Summary.** In San Jose a fence on a single-family or duplex lot needs no permit up to 3 feet high in the front yard (and along the street side of a corner lot) or 7 feet high in side and rear yards; taller fences need a building permit and a planning permit.

| # | When | Verdict | Explanation | Cites |
|---|---|---|---|---|
| 1 | location on the lot: front setback and fence height at most 3 ft | NOT_REQUIRED | A front yard fence 3 feet high or lower does not need a permit. | c1, c2 |
| 2 | location on the lot: street side yard and fence height at most 3 ft | NOT_REQUIRED | On a corner lot, a fence in the side yard along the street 3 feet high or lower does not need a permit. | c3 |
| 3 | location on the lot: side or rear and fence height at most 7 ft | NOT_REQUIRED | A side or rear yard fence 7 feet high or lower does not need a permit. On a corner lot this applies only to side and rear yards not along the street. | c1, c2, c3 |

**Otherwise:** REQUIRED. A fence taller than these limits (over 3 feet in the front yard or along the street side of a corner lot, over 7 feet elsewhere) needs both a building permit and a planning permit. (c2, c4)

**Permit types:** Building permit; Planning permit

- Note: On a corner lot, rear and side fences must be low enough to keep a view of the street from the driveway. (c3)
- Note: On irregular-shaped lots or in planned development (PD) zones, different height limits may apply. Ask San Jose Planning. (c5)
- Note: San Jose's fence definition includes masonry and concrete, so the same height limits apply to masonry fences. Barbed wire and other harmful materials are not allowed. (c6)

**Citations**

- `c1` San Jose Permit Center, When Is a Building Permit Required? (updated 06/12/2025), summarizing SJMC §24.02.110, <https://web.archive.org/web/20260813091205/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/when-is-a-building-permit-required>

  > Fences on single-family/duplex properties do not need a permit if not higher than 7 feet along rear and side yards and not higher than 3 feet along front yard. For irregular-sized lots, see Fences.

- `c2` San Jose Permit Center, Fences & Retaining Walls (updated 04/15/2026), referencing CBC §105.2 and SJMC Ch. 20.30 Parts 5 and 6, Ch. 17.24, <https://web.archive.org/web/20260606170752/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/fences-retaining-walls>

  > If the fence is higher than these limits, you must apply for both a building permit and a planning permit. Maximum allowable fence height without a permit: Front yard - 3 feet maximum Side yard - 7 feet maximum Rear yard - 7 feet maximum

- `c3` San Jose Permit Center, Fences & Retaining Walls (updated 04/15/2026), referencing CBC §105.2 and SJMC Ch. 20.30 Parts 5 and 6, Ch. 17.24, <https://web.archive.org/web/20260606170752/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/fences-retaining-walls>

  > On corner lots: Front yard along the street - 3 feet maximum Side yard along the street - 3 feet maximum Rear and side yards not along the street - 7 feet maximum* * Rear and side fence heights must be low enough to provide sightlines to the street from the driveway.

- `c4` San Jose Permit Center, Fences & Retaining Walls (updated 04/15/2026), referencing CBC §105.2 and SJMC Ch. 20.30 Parts 5 and 6, Ch. 17.24, <https://web.archive.org/web/20260606170752/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/fences-retaining-walls>

  > A building permit is not required to construct a fence or retaining wall unless the project exceeds the maximum heights set forth in the municipal code. Exceeding the height limit means the project will also require a Planning permit and, for retaining walls, an additional permit from Public Works.

- `c5` San Jose Permit Center, Fences & Retaining Walls (updated 04/15/2026), referencing CBC §105.2 and SJMC Ch. 20.30 Parts 5 and 6, Ch. 17.24, <https://web.archive.org/web/20260606170752/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/fences-retaining-walls>

  > On irregular-shaped lots or lots in planned development (PD) zones: Different height restrictions may apply.

- `c6` San Jose Permit Center, Fences & Retaining Walls (updated 04/15/2026), referencing CBC §105.2 and SJMC Ch. 20.30 Parts 5 and 6, Ch. 17.24, <https://web.archive.org/web/20260606170752/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/fences-retaining-walls>

  > A fence is a barrier, railing, or upright structure that marks a boundary and controls access. It is typically constructed of wood, chain link, wrought iron, decorative steel, masonry, concrete or other similar types of materials. Barbed wire or other harmful materials are not allowed.

- `c7` San Jose Building Bulletin #201, When Is a Building Permit Required? (06/12/2025), summarizing SJMC §24.02.110, <https://web.archive.org/web/20260106113350/https://www.sanjoseca.gov/home/showpublisheddocument/25897/638853215612230000>

  > 5. Fences, on single-family/duplex properties, not higher than 7 feet along rear and side yards and not higher than 3 feet along front yard

- `c8` San Jose Permit Center, Fences & Retaining Walls (updated 04/15/2026), referencing CBC §105.2 and SJMC Ch. 20.30 Parts 5 and 6, Ch. 17.24, <https://web.archive.org/web/20260606170752/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/fences-retaining-walls>

  > REQUIRED > Building Permit Application - See instructions. > Single-Family & Duplex Projects Submittal Checklist - Under Project Scope, check "Other" and enter "Fence" or "Retaining Wall"

**Researcher notes.** All San Jose sources agree: 3 ft in the front yard and 7 ft in side and rear yards (c1, c2, Bulletin #201 item 5 in c7). The Fences page adds a 3 ft limit for the side yard along the street on corner lots (c3). New value for location: 'street_side_yard' means the side yard along the street on a corner lot. San Jose says 'front yard', not 'front setback'. This record maps location 'front_setback' to the city's 'front yard'; the page does not say whether the 3 ft limit covers the whole front yard or only the required front setback. The param material is not used: San Jose's fence definition (c6) includes masonry and concrete and sets no separate limit. The heights come from zoning (SJMC Ch. 20.30 Part 6 and Ch. 17.24, per the Fences page). I did not read those sections (Municode terms). How fence height is measured is not stated on the city pages. docs_required comes from c8 plus the plan list on the same page (site plan, fence or retaining wall plan, elevations). No inspection list or fence-specific residential fee is published, so inspections is empty and fee_note is null. Access: sanjoseca.gov returned HTTP 403 (Akamai 'Access Denied') to curl and to WebFetch from this machine, robots.txt included. I read robots.txt from a Wayback snapshot (https://web.archive.org/web/20260501010517/https://www.sanjoseca.gov/robots.txt). It disallows only /scripts, /admin and *.asmx for all agents, so content pages are allowed. The city's E-Government Policy (sanjoseca.gov/home/showdocument?id=17869, read from a Wayback snapshot) has no rule against copying or automated access. Every San Jose quote comes from a raw Internet Archive snapshot of the official page (id_ mode, fetched with curl, tags stripped with python3, PDFs read with pdftotext). source_url is that snapshot URL, and the official sanjoseca.gov URL is the part after the timestamp. Internet Archive terms say access 'is granted for scholarship and research purposes only'. Re-check each quote on the live sanjoseca.gov page before marking the rule verified. Quote format: list items and paragraph breaks are joined with single spaces and bullet characters are left out; the words are verbatim. Municode (library.municode.com), host of SJMC Titles 20 and 24, was not fetched. Its archived terms (https://web.archive.org/web/20190411032708/https://www.municode.com/terms-of-use/) say: 'You may not copy, modify, reproduce, republish, distribute, display, or transmit for commercial, non-profit or public purposes all or any portion of this Website, except to the extent permitted by these Terms and Conditions of Use.' I could not load the current terms (the page is rendered by JavaScript and municode.com redirects to civicplus.com, which returns 403). So SJMC §24.02.110 (the exempt-work list) and §20.30.500 were not read directly. The city pages are the only source. The city pages cite 'Section 24.02.110', but the Municode link on the When Is a Building Permit Required? page points to node 24.02.120 (BUPEEX). The correct section number is unconfirmed. Code edition: the Adopted Building Codes page (https://web.archive.org/web/20260318183710/https://www.sanjoseca.gov/your-government/departments-offices/planning-building-code-enforcement/building-division/adopted-building-codes) says 'Effective Jan. 1, 2026, the 2025 state building codes have replaced the 2022 codes.' Its 'amended ordinance' link still opens Ordinance No. 30837 (the 2022 adoption, which does not amend Chapter 24.02). The October 28, 2025 Council presentation on adopting the 2025 codes (https://sanjose.legistar.com/View.ashx?M=F&ID=14894029&GUID=229C001D-2EEC-4071-83AE-F1034F198173&G=920296E4-80BE-4CA2-A78F-32C5EFCF78AF) lists the retained Title 24 amendments as 'Special Testing and Inspections', 'Gypsum board shear walls' and 'Braced wall panels', and says 'No (0) additional amendments to 2025 California Building Codes'. That suggests the 2025 adoption left the exempt-work list alone, but I did not read the adopted ordinance. Bulletin #201 and the When Is a Building Permit Required? page are both dated 06/12/2025, before the 2025 codes took effect.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes

## HVAC replacement (`hvac`): draft

**Summary.** In San Jose, installing or replacing a furnace, air conditioner, heat pump, or ductwork needs an electrical permit and usually a mechanical permit; plug-in window units and portable fans and heaters are exempt.

| # | When | Verdict | Explanation | Cites |
|---|---|---|---|---|
| 1 | adds or changes ductwork: yes | REQUIRED | Installing, altering, or replacing ductwork needs a mechanical permit, and a HERS rater must verify the ducts are sealed. The equipment itself also needs an electrical permit. | sj_ac_duct, sj_ac_page |

**Otherwise:** REQUIRED. Installing or replacing heating and cooling equipment needs an electrical permit and may also need a mechanical or plumbing permit, depending on the equipment. Air conditioners, furnaces, heat pumps, and ductless mini-splits are on the city's list of systems that need a permit. (sj_ac_page, sj_ac_list, sj_140)

**Permit types:** Electrical permit; Mechanical permit; Plumbing permit (some systems)

**Fee note:** San Jose's FY 2025-26 fee schedule bills mechanical permit inspection at a minimum of $315 per hour, with a 30-minute default minimum per item and a 50-minute minimum for a single-family furnace replacement, in addition to the permit issuance fee. Electrical inspection is billed separately.

- Note: Plug-in window air conditioners and portable fans and heaters do not need a permit, but a new outlet or receptacle needs an electrical permit. (sj_ac_portable, sj_140)
- Note: For a single-family home or duplex, the common heating and cooling projects can be permitted online at SJPermits.org, including air conditioning, furnace replacement, duct alterations, and heat pumps. (sj_ac_online, sj_online_mech)
- Note: An air conditioner needs a mechanical permit for work involving ducts, ventilation, or major HVAC components, and an electrical permit for new wiring, dedicated circuits, or panel changes. (sj_ac_ac)
- Note: A furnace replacement generally needs three permits, all available in one SJPermits application. (sj_ac_furnace)
- Note: The online heat pump permit covers the mechanical and electrical permits; some systems also need a plumbing permit added to the application. (sj_ac_hp)
- Note: Have the plans, the HERS report, and any manufacturer's instructions available at inspection. (sj_ac_hers)
- Note: Fees: mechanical inspection is a minimum of $315 per hour with a 50-minute minimum for a single-family furnace replacement, plus a permit issuance fee. (fee_mech, fee_issue)
- Note: Online permits can be pulled only by the property owner or a qualified contractor. The city recommends that a licensed contractor pull the permit; an owner-builder must also submit the Owner Acknowledgement and Information Verification Form, show ID at issuance, and be the owner of record. (sj_online_intro, sj_who_ob)
- Note: San Jose adopted the 2025 California Mechanical Code; the 2025 codes apply to permit applications made on or after January 1, 2026. (sj_cmc, sj_eff)
- Note: With the 2025 code adoption, San Jose repealed its earlier local reach code amendments to the Energy Code and green building code. (sj_repeal, sj_reach_memo)
- Note: A July 2025 city staff memo says Bay Area Air District rules will require new furnaces to meet zero-NOx standards beginning in 2029. Confirm the dates with the Air District. (sj_nox)

**Citations**

- `sj_ac_duct` San Jose Permit Center, Air Conditioning, Heating & Fireplaces (updated 04/07/2026), Duct Installations or Replacements, <https://web.archive.org/web/20260514015326id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/air-conditioning-heating-fireplaces>

  > A mechanical permit is required for installing, altering, or replacing ductwork, especially when changing HVAC equipment capacity, extending lines, or penetrating the building envelope. ... Duct Sealing & Testing: Systems must be sealed to reduce leakage and must be verified by a HERS (Home Energy Rating System) rater to meet standards.

- `sj_ac_page` San Jose Permit Center, Air Conditioning, Heating & Fireplaces (updated 04/07/2026), <https://web.archive.org/web/20260514015326id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/air-conditioning-heating-fireplaces>

  > Installing or replacing heating and cooling equipment requires an electrical permit and may also require a mechanical or plumbing permit, depending upon the type of equipment.

- `sj_ac_list` San Jose Permit Center, Air Conditioning, Heating & Fireplaces (updated 04/07/2026), <https://web.archive.org/web/20260514015326id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/air-conditioning-heating-fireplaces>

  > Systems that require a permit include: Air conditioning systems Any gas-powered heater or gas-powered fireplace insert Duct installations and replacements Ductless mini-split systems ... Furnaces Heat pumps

- `sj_140` SJMC §24.02.140 (Ord. No. 31256), <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37111/file>

  > A mechanical permit shall not be required for the following: 1. A portable heating appliance. 2. Portable ventilating equipment. 3. A portable cooling unit. 4. A portable evaporative cooler. ... 6. Replacement of any component part of assembly of an appliance which does not alter its original approval and complies with other applicable requirements of the technical codes.

- `sj_ac_portable` San Jose Permit Center, Air Conditioning, Heating & Fireplaces (updated 04/07/2026), <https://web.archive.org/web/20260514015326id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/air-conditioning-heating-fireplaces>

  > Plug-in window air conditioners, portable fans and heaters, and electric logs do not require a permit. ... You must obtain an electrical permit for any new outlet, receptacle, or other electrical work.

- `sj_ac_online` San Jose Permit Center, Air Conditioning, Heating & Fireplaces (updated 04/07/2026), <https://web.archive.org/web/20260514015326id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/air-conditioning-heating-fireplaces>

  > For single-family/duplex properties, an online permit is available for all of the common projects listed below.

- `sj_online_mech` San Jose, Online Building Permits at SJPermits.org, Mechanical Permit table, <https://web.archive.org/web/20260801184719id_/https://www.sanjoseca.gov/business/development-services-permit-center/online-permits-at-sjpermits-org/building-online-permits>

  > Mechanical Permit Single-family / Duplex Multifamily Commercial / Industrial Air Conditioning Yes No No ... Duct/Flue Alteration Yes No No ... Furnace Replacement Yes Yes No ... Heat Pump including condensate Yes No No

- `sj_ac_ac` San Jose Permit Center, Air Conditioning, Heating & Fireplaces (updated 04/07/2026), Air Conditioning Systems, <https://web.archive.org/web/20260514015326id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/air-conditioning-heating-fireplaces>

  > Mechanical Permit: Required for any installation involving air ducts, ventilation, or major HVAC components. Electrical Permit: Required if the project includes new wiring, dedicated circuits, or modifications to the electrical panel.

- `sj_ac_furnace` San Jose Permit Center, Air Conditioning, Heating & Fireplaces (updated 04/07/2026), Furnaces, <https://web.archive.org/web/20260514015326id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/air-conditioning-heating-fireplaces>

  > Installing or replacing a furnace generally requires three permits; these can all be obtained through one application at SJPermits.org.

- `sj_ac_hp` San Jose Permit Center, Air Conditioning, Heating & Fireplaces (updated 04/07/2026), Heat Pumps, <https://web.archive.org/web/20260514015326id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/air-conditioning-heating-fireplaces>

  > Permits - The online permit for a heat pump covers both a mechanical and electrical permit. Some systems may also require a plumbing permit, and you will need to add the plumbing permit to your online application.

- `sj_ac_hers` San Jose Permit Center, Air Conditioning, Heating & Fireplaces (updated 04/07/2026), Inspections, <https://web.archive.org/web/20260514015326id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/air-conditioning-heating-fireplaces>

  > Have plans, HERS report, and manufacturer instructions, if any, available.

- `fee_mech` San Jose Building Division Fee Schedule FY 2025-26 (effective August 11, 2025), Residential Sub-Trade Permits, Mechanical Permits, pp. 5-6, <https://web.archive.org/web/20251207120823id_/https://www.sanjoseca.gov/home/showpublisheddocument/26047/637922894017900000>

  > Mechanical Permit Fees (site construction and other miscellaneous mechanical permits) not involving the addition of new building footage shall be the greater of (a) a minimum of $315 per hour of actual inspection time, or (b) calculated on an itemized basis as listed below. These Mechanical Permit Fees are in addition to the Permit Issuance Fees. All items default to a minimum time allocation of 30 minutes of inspection time (20 minutes minimum per unit if more than 1) except for the following: ... Furnace, Replacement SFR 50 40

- `fee_issue` San Jose Building Division Fee Schedule FY 2025-26 (effective August 11, 2025), Building Residential Fees, p. 3, <https://web.archive.org/web/20251207120823id_/https://www.sanjoseca.gov/home/showpublisheddocument/26047/637922894017900000>

  > Permit Issuance Fees shall be $227 per hour for processing and coordination time expended or the amounts set forth below, whichever is greater. Minimum permit issuance fee for all permits using Online Permits service is 50% of the specified processing fee.

- `sj_online_intro` San Jose, Online Building Permits at SJPermits.org, <https://web.archive.org/web/20260801184719id_/https://www.sanjoseca.gov/business/development-services-permit-center/online-permits-at-sjpermits-org/building-online-permits>

  > You can download a building permit for 56 types of simple projects at SJPermits.org. ... Only property owners and qualified contractors may apply for an online building permit.

- `sj_who_ob` San Jose Permit Center, Who Can Apply for a Building Permit? (updated 01-13-2026), <https://web.archive.org/web/20260517000302id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/who-can-apply-for-a-permit>

  > We highly recommend that the licensed contractor rather than the property owner pull the permit. ... If you wish to proceed as an Owner-Builder, your permit application package will need to include: Owner-Builder Requirements to Sign a Permit Owner Acknowledgement and Information Verification Form - In addition to submitting a building permit application, you must complete and submit this form. At time of permit issuance, be ready to provide a Driver’s License or other proof of identification. You must be the Property Owner as recorded by the County Tax Assessor.

- `sj_cmc` SJMC §24.05.100 (Ord. No. 31256), <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37111/file>

  > Except as otherwise provided for in this chapter, the California Mechanical Code, 2025 edition, together with those omissions, amendments, exceptions and additions thereto as amended in Title 24 of the California Code of Regulations are approved and adopted

- `sj_eff` San Jose staff memo, Council file 25-1131 (Oct. 6, 2025), <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37104/file>

  > The 2025 California Building Standards Code will apply to any building or structure for which an application for a building permit is made on or after January 1, 2026.

- `sj_repeal` Ord. No. 31257, Sections 2 and 6, <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37110/file>

  > Sections 24.10.110, 24.10.120, and 24.10.130, and Parts 2 and 3 of Chapter 24.10 of Title 24 of the San José Municipal Code are hereby repealed. ... Sections 24.12.110, 24.12.120, and 24.12.130, and Parts 2 through 8 of Chapter 24.12 of Title 24 of the San José Municipal Code are hereby repealed.

- `sj_reach_memo` San Jose staff memo, Council file 25-1131 (Oct. 6, 2025), <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37104/file>

  > However, staff proposes to remove the current reach code amendments and one currently adopted local technical amendment as those amendments are now part of the 2025 codes.

- `sj_nox` San Jose staff memo, Council file 25-803 (July 21, 2025), <https://webapi.legistar.com/v1/sanjose/matters/14973/attachments/36521/file>

  > In March 2023, the Bay Area Air District adopted rule amendments, with the goal of reducing Nitrogen Oxide (NOx) emissions, that will affect the sale and installation of water and space heating appliances in the greater San Francisco Bay Region. In a phased approach beginning in 2027, new water heaters must meet the zero-NOx standard. Beginning in 2029, new furnaces must meet the zero-NOx standards.

**Researcher notes.** Access: every live sanjoseca.gov URL tried, robots.txt included, returned HTTP 403 'Access Denied' (Akamai) to curl and to WebFetch. City pages were read from raw Internet Archive captures (id_ mode, fetched with curl, tags stripped with python3, the fee schedule PDF read with pdftotext). source_url is the capture URL; the official sanjoseca.gov URL is the part after the timestamp. The captured robots.txt (https://web.archive.org/web/20260501010517/https://www.sanjoseca.gov/robots.txt) disallows only /scripts, /admin and *.asmx for all agents. The city's E-Government Policy (sanjoseca.gov/home/showdocument?id=17869, capture 20260904222013) has no rule against copying or automated access. Internet Archive terms say access 'is granted for scholarship and research purposes only'. Re-check each city quote on the live page before marking a rule verified. Quote format: list items and paragraph breaks are joined with single spaces and bullet characters are left out; ' ... ' marks omitted text; the words are verbatim. sjpermits.org robots.txt is 'User-agent: * / Disallow: /', so the SJPermits portal was not fetched; online-permit availability comes from the city's Online Building Permits page. Municode (host of the San Jose Municipal Code) was not fetched. Its archived terms (https://web.archive.org/web/20190411032708/https://www.municode.com/terms-of-use/) say: 'You may not copy, modify, reproduce, republish, distribute, display, or transmit for commercial, non-profit or public purposes all or any portion of this Website, except to the extent permitted by these Terms and Conditions of Use.' The current terms page could not be loaded. SJMC text: quotes marked 'Ord. No. 31256' come from the council-agenda redline of that ordinance (draft dated 10/16/2025, Council Agenda 10/28/2025 Item 8.2(a), file 25-1131), downloaded through the Legistar Web API (webapi.legistar.com); sanjose.granicus.com robots.txt has 'User-agent: * / Disallow: /'. Each such quote is the enacted wording: struck-through text removed and underlined additions kept, checked against the rendered PDF page. Legistar matter 25-1187 (Final Adoption of Ordinances, dated 2025-10-30) lists 'Ordinance No. 31256' as passed for publication on 10/28/2025; the signed ordinance and the final vote were not retrieved. Code edition: San Jose adopted the 2025 California codes (not 2022) for permit applications made on or after January 1, 2026. SJMC 24.09.110(A)(6) does not adopt CRC Chapter 1, Division II, so CRC §R105.2 does not apply in San Jose; the city's exemption lists are SJMC 24.02.120 to 24.02.150. Section numbering: the When Is a Building Permit Required? page (updated 06/12/2025) cites 'Section 24.02.110' for the exempt list, but Ord. No. 31256 amends the exemption lists as 24.02.120 (building), 24.02.130 (plumbing), 24.02.140 (mechanical) and 24.02.150 (electrical). Fees: the fee schedule capture is the FY 2025-26 schedule ('Effective August 11, 2025', document 26047 version 637922894017900000, captured 2025-12-07). The Building Permit Fees page captured 2026-08-01 still says the schedule shows fees in effect as of August 11, 2025, but links a newer upload (version 639180865996470000) with no capture, so the current PDF could not be compared. A draft FY 2026-27 fee resolution (Council Agenda 06-09-2026 Item 3.4(b), Legistar file 26-683) sets different amounts ('Water Heater Replacement – Permit Center 0.25 x # of units $52'); its adoption was not confirmed, so it is not cited. Reach codes: Ord. No. 31257 (Council Agenda 10/28/2025 Item 8.2(b)) repealed SJMC 24.10 Parts 2 and 3 and 24.12 Parts 2 through 8, the city's earlier local green building and Energy Code amendments. A proposed Existing Single-Family Building Reach Code (Legistar files 25-803 and 25-942) would have required a heat pump when an air conditioner is replaced or added, and electric-ready wiring near gas appliances. An unofficial meeting summary (citizenportal.ai) reports 'The motion failed after a 5–4 recorded vote and did not take effect.' It is not cited, and its adoption status was not confirmed from an official record. The July 21, 2025 staff memo (file 25-803) says AB 130 prohibits new residential building standards, including reach codes, 'from October 1, 2025, through June 1, 2031.' Inferred, not quoted: no San Jose rule found requires a heat pump or all-electric replacement in an existing home. Params: like_for_like does not change the verdict; the city page does not exempt same-type replacements. adds_or_changes_ductwork only changes the explanation; both paths are REQUIRED. Discrepancy: the Air Conditioning, Heating & Fireplaces page (updated 04/07/2026) lists 'Chapter 24.12.500' Single-Family Energy Standards as a referenced code, but Ord. No. 31257 repealed Parts 2 through 8 of SJMC Chapter 24.12. The page reference looks out of date. Not modeled: SJMC 24.02.140 also exempts a unit refrigerating system as defined in the Mechanical Code and small self-contained refrigeration systems. The CMC definition could not be read, and the city page treats air conditioners and heat pumps as needing permits, so these items are left out. The fee schedule's mechanical list has a 'Furnace, Replacement SFR' line (50-minute minimum) and no separate line for an air conditioner or heat pump, which fall under the 30-minute default.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes

## Kitchen remodel (`kitchen-remodel`): draft

**Summary.** In San Jose, cosmetic kitchen work like painting, flooring, cabinets, and countertops needs no permit; replacing fixtures or appliances or doing electrical, plumbing, or fan work needs a permit (often online), and moving fixtures or changing walls or framing needs plan review.

| # | When | Verdict | Explanation | Cites |
|---|---|---|---|---|
| 1 | changes walls or structure: yes | REQUIRED | Changing walls or windows or modifying framing is a major remodel and needs a building permit with submitted plans. | c5, c6, c13 |
| 2 | moves or adds plumbing: yes | REQUIRED | Relocating or adding fixtures or appliances is a major remodel and needs a permit with plan review. | c5, c7 |
| 3 | includes electrical work: yes | REQUIRED | New electrical work needs an electrical permit; a minor remodel with no relocation may qualify for an online permit. | c3, c4, c9 |
| 4 | includes exhaust fan, range hood, or other ducted ventilation work: yes | REQUIRED | Installing or replacing an exhaust fan or hood is mechanical work and needs a mechanical permit; a minor remodel may qualify for an online permit. | c3, c4, c15 |
| 5 | replaces fixtures or appliances in their existing locations: yes | REQUIRED | Replacing fixtures or appliances in the same locations is a minor remodel that needs a permit, often available online; only leak repairs and removing and resetting a toilet without replacing pipes, valves, or fixtures are exempt. | c4, c8, c9 |
| 6 | only finish work: paint, tile, flooring, cabinets, countertops: yes | NOT_REQUIRED | Finish work only, such as painting, tiling, flooring, cabinets, and countertops, with no fixture, appliance, electrical, plumbing, or fan work, needs no permit. | c1, c2 |

**Otherwise:** REQUIRED. Anything beyond cosmetic finish work needs a building or trade permit; small fixture and appliance swaps may qualify for an online permit. (c3, c4, c7)

**Permit types:** Building permit; Electrical permit; Plumbing permit; Mechanical permit

- Note: Minor remodels, meaning fixture and appliance replacements without moving them or changing their number, may qualify for an online permit at SJPermits.org. (c4, c9)
- Note: Even when finish work is exempt, any plumbing, electrical, or mechanical work done with it needs its own permit. (c3)
- Note: Inspections are listed on the Permit Card; plan for rough and final inspections. (c10, c11)
- Note: Be ready to show smoke and carbon monoxide alarms and provide the alarm installation affidavit. (c12)
- Note: A replacement range hood needs a third-party HERS report, at least 100 CFM, and Energy Star equipment; kitchen exhaust fans must be ducted outside. (c15, c16)

**Citations**

- `c1` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Definitions, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > Note that cosmetic work — such as painting, cabinet resurfacing, new flooring, and new countertops — does not require a permit.

- `c2` SJMC Title 24 as amended by Ordinance No. 31256 (2025 codes; council draft dated 10/16/2025, Item 8.2(a), 10/28/2025), §24.02.120(A)(9), <https://sanjose.legistar.com/View.ashx?M=F&ID=14873777&GUID=DD05D7FB-2583-4C0D-BC97-EE5FB907BE34>

  > Painting, papering, tiling, carpeting, cabinets, counter tops and similar finish work.

- `c3` SJMC Title 24 as amended by Ordinance No. 31256 (2025 codes; council draft dated 10/16/2025, Item 8.2(a), 10/28/2025), §24.02.120(B), <https://sanjose.legistar.com/View.ashx?M=F&ID=14873777&GUID=DD05D7FB-2583-4C0D-BC97-EE5FB907BE34>

  > Unless otherwise exempted by this title, separate plumbing, electrical and mechanical permits will be required for the above exempted items.

- `c4` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Definitions, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > A minor remodel is defined as multiple fixture and appliance replacements that involve new electrical, plumbing, and/or mechanical work without changes to the location or quantity of such fixtures and appliances.

- `c5` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Definitions, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > A major remodel is defined as changing the configuration of walls or windows; modifying the framing of ceilings, walls, windows, or floors; and/or relocating or increasing the number of fixtures or appliances.

- `c6` San Jose Permit Center, Additions & Remodels, single-family & duplex (updated 04/14/2026), <https://web.archive.org/web/20260514010222/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/additions-remodels>

  > To get a building permit for an addition or for a remodel that entails structural changes, you must submit project plans.

- `c7` San Jose Permit Center, When Is a Building Permit Required? (updated 06/12/2025), Projects that require a building permit, <https://web.archive.org/web/20260813091205/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/when-is-a-building-permit-required>

  > You are legally required to get a building permit and/or a subtrade (plumbing, electrical or mechanical) permit for projects involving:

- `c8` SJMC Title 24 as amended by Ordinance No. 31256 (2025 codes; council draft dated 10/16/2025, Item 8.2(a), 10/28/2025), §24.02.130(B), <https://sanjose.legistar.com/View.ashx?M=F&ID=14873777&GUID=DD05D7FB-2583-4C0D-BC97-EE5FB907BE34>

  > The clearing of stoppages or the repairing of leaks in pipes, valves or fixtures, and the removal and reinstallation of water closets, provided such repairs do not involve or require the replacement or rearrangement of valves, pipes or fixtures.

- `c9` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > Minor remodels of a kitchen or bathroom may qualify for an easy online permit.

- `c10` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Inspections, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > You will be issued a Permit Card that lists required inspections.

- `c11` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Requirements for both Kitchens and Bathrooms, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > Both rough and final inspections may be required. Plan to provide inspection of all roughs — such as for tub and shower installments — and then a second time for all finals.

- `c12` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Requirements for both Kitchens and Bathrooms, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > Provide a completed Affidavit of Smoke Alarm and Carbon Monoxide Alarm Installation. CRC R315.

- `c13` San Jose Permit Center, When Is a Building Permit Required? (updated 06/12/2025), Projects that require a building permit, <https://web.archive.org/web/20260813091205/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/when-is-a-building-permit-required>

  > New construction, additions, alteration of walls, or any structural change

- `c15` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Requirements for Kitchens, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > Exhaust hood replacement - Requires a third-party HERS report, 100 CFM, and equipment that is Energy Star compliant.

- `c16` San Jose Permit Center, Kitchen & Bathroom Minor Remodels (updated 04/13/2026), Requirements for Kitchens, <https://web.archive.org/web/20260514003909/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/kitchen-bathroom-minor-remodels>

  > Exhaust fans - Provide the Home Energy Rating System (HERS) report for kitchen exhaust fans. Fans must be ducted to the exterior.

**Researcher notes.** cosmetic_only conflict: the starter definition includes "fixtures swapped in place", but San Jose treats fixture and appliance replacements as a minor remodel that needs a permit (c4), and the SJMC 24.02.130 plumbing exemptions cover only leak repairs, stoppages, and removing and resetting water closets without replacing valves, pipes, or fixtures (c8). This record therefore adds replaces_fixtures_in_place (boolean, replaces plumbing fixtures or appliances in their existing locations) and mechanical_work (boolean, installs or replaces an exhaust fan, range hood, or other ducted ventilation), evaluates them before cosmetic_only, and its NOT_REQUIRED outcome means finish work only. Electrical conflict: the When Is a Building Permit Required? page (updated 06/12/2025) still lists outlet and switch replacement in existing boxes and "Repair or replacement of current-carrying parts of any switch, conductor, or control device" as exempt. The 2025 ordinance replaces SJMC 24.02.150 item 4 with "Reserved" and limits item 1 to minor repairs such as replacing lamps and connecting portable equipment to permanently installed receptacles. Those redlined passages are not quoted. This record follows the 2025 ordinance and treats any electrical_work as REQUIRED; the narrow minor-repair exemptions are not modeled. The same ordinance repeals the 1.28 gpf low-flush toilet retrofit exemption (SJMC 24.02.130 C, now Reserved), which the When page still lists. Major remodels on single-family or duplex properties go to the Additions & Remodels process (c6): Over-the-Counter for qualifying 1-story homes, otherwise Residential Express or Standard Plan Review. Fee: no remodel fee is recorded; the FY 2025-26 schedule prices remodels through valuation tables and an inspection cap, and a newer schedule was not archived. Access: sanjoseca.gov returned HTTP 403 (Akamai "Access Denied") to curl and WebFetch, robots.txt included. The robots.txt read from a Wayback snapshot (20260501) disallows only /admin and *.asmx paths for User-agent *, and the City E-Government Policy (Administrative Policy 1.7.5, home/showdocument?id=17869) contains no restriction on automated access or copying. City page quotes therefore come from raw Internet Archive captures (the id_ form of each source_url, same timestamp), not from the live site. SJMC text comes from the 2025 code-adoption ordinance on sanjose.legistar.com (no robots.txt, no terms page found); Municode was not used because its Terms and Conditions of Use say: "You may not copy, modify, reproduce, republish, distribute, display, or transmit for commercial, non-profit or public purposes all or any portion of this Website, except to the extent permitted by these Terms and Conditions of Use." Code edition: San Jose adopted the 2025 California codes effective January 1, 2026 (Adopted Building Codes page, Wayback 20260318). The ordinance PDF is the 10/16/2025 council draft with redline. Legistar shows it passed for publication 10/28/2025 as Ordinance No. 31256 and listed for final adoption on the 11/18/2025 agenda (file 25-1187); the signed final ordinance was not retrieved. Only ordinance passages with no redline marks (checked visually on rendered pages 8-12) are quoted. Section number: the When Is a Building Permit Required? page (updated 06/12/2025) says "Municipal Code Section 24.02.110 lists all exempt projects", but the ordinance codifies "24.02.120 Building Permit Exemptions"; this record cites 24.02.120. San Jose does not adopt CRC Chapter 1, Division II (SJMC 24.09.110 A.6, unchanged in the 2025 ordinance), so CRC R105.2 is not the operative exemption list in San Jose; SJMC 24.02.120-24.02.150 are.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes

## Patio cover or pergola (`patio-cover`): draft

**Summary.** In San Jose a freestanding pergola, trellis, or patio cover of 120 square feet or less with no electricity or plumbing needs no permit; one attached to the house, larger, wired, or plumbed needs a building permit.

| # | When | Verdict | Explanation | Cites |
|---|---|---|---|---|
| 1 | attached to the house: no and covered area at most 120 sq ft and has electrical: no and has plumbing: no | NOT_REQUIRED | A detached open-air structure such as a trellis, gazebo, or pergola of 120 square feet or less, with no electricity and no plumbing, does not need a permit. The same limit applies if it has walls, because enclosed accessory buildings follow the same 120 square foot rule. | c1, c2, c3 |

**Otherwise:** REQUIRED. A building permit is required if the cover is over 120 square feet, has electricity or plumbing, or is attached to the house, because attaching it is new construction or a structural change to the dwelling. (c2, c4)

**Permit types:** Building permit

- Note: A small awning on a single-family or duplex home is exempt if it projects no more than 54 inches and needs no additional support. Awnings that need additional support do not qualify. (c5)
- Note: Detached patio covers and pergolas count as accessory structures for zoning: 60 ft minimum front setback, 0 ft side and rear setbacks (10 ft on the street side of a corner lot, 4 ft on a key lot or a corner lot next to a residential key lot). (c6)
- Note: Rear yard coverage limits count accessory structures: 60% of the rear yard with a built-in pool, otherwise 40%. Eaves up to 2 ft do not count. (c7)
- Note: Zoning height limit for accessory structures is 12 ft (on a pitched roof, 12 ft at the midpoint of the slope and 16 ft at the peak), one story. (c8)

**Citations**

- `c1` San Jose Permit Center, Accessory Buildings & Structures (updated 04/14/2026), referencing SJMC §20.30.500 and §20.200.020, <https://web.archive.org/web/20260606164646/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/accessory-buildings-structures>

  > Accessory buildings are defined in the Municipal Code as non-livable and enclosed, including: sheds, playhouses, and detached garages. Does not include livable accessory dwelling units (ADUs). Accessory structures have open-air construction, including: gazebos, trellises, and pools, spas and hot tubs.

- `c2` San Jose Permit Center, Accessory Buildings & Structures (updated 04/14/2026), referencing SJMC §20.30.500 and §20.200.020, <https://web.archive.org/web/20260606164646/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/accessory-buildings-structures>

  > If the accessory building or structure is 120 sq. ft. or less, no permit is required unless it includes electricity or plumbing. A building permit is required: If the size is greater than 120 sq. ft. (as measured from exterior walls). If it includes electricity or plumbing, no matter the size. If over 650 sq. ft., both a building permit and special use permit are required.

- `c3` San Jose Building Bulletin #201, When Is a Building Permit Required? (06/12/2025), summarizing SJMC §24.02.110, <https://web.archive.org/web/20260106113350/https://www.sanjoseca.gov/home/showpublisheddocument/25897/638853215612230000>

  > 1. Accessory structures of 120 square feet or less and that will not be electrically wired.

- `c4` San Jose Permit Center, When Is a Building Permit Required? (updated 06/12/2025), summarizing SJMC §24.02.110, <https://web.archive.org/web/20260813091205/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/when-is-a-building-permit-required>

  > You are legally required to get a building permit and/or a subtrade (plumbing, electrical or mechanical) permit for projects involving: New construction, additions, alteration of walls, or any structural change

- `c5` San Jose Permit Center, When Is a Building Permit Required? (updated 06/12/2025), summarizing SJMC §24.02.110, <https://web.archive.org/web/20260813091205/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/when-is-a-building-permit-required>

  > Awnings in Group R-3 or U occupancies that do not project more than 54 inches and do not require additional support.

- `c6` San Jose Permit Center, Accessory Buildings & Structures (updated 04/14/2026), referencing SJMC §20.30.500 and §20.200.020, <https://web.archive.org/web/20260606164646/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/accessory-buildings-structures>

  > Front Setback: 60 feet Exception, detached garage: 45 feet Side Setback: 0 feet unless: Corner lot: 10 feet from the side that is adjacent to a street Corner lot abutting a residential key lot: 4 feet Key lot: 4 feet Rear Setback: 0 feet unless: Corner lot: 10 feet where side is adjacent to a street Corner lot abutting a residential key lot: 4 feet Key lot: 4 feet

- `c7` San Jose Permit Center, Accessory Buildings & Structures (updated 04/14/2026), referencing SJMC §20.30.500 and §20.200.020, <https://web.archive.org/web/20260606164646/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/accessory-buildings-structures>

  > Maximum coverage of rear yard including a built-in pool: 60% Maximum coverage of rear yard without a built-in pool: 40% of which accessory buildings may not exceed 30% Eave projections of up to 2 feet will not count toward rear yard coverage

- `c8` San Jose Permit Center, Accessory Buildings & Structures (updated 04/14/2026), referencing SJMC §20.30.500 and §20.200.020, <https://web.archive.org/web/20260606164646/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/accessory-buildings-structures>

  > Maximum stories: 1 Maximum size: 650 sq. ft. unless an approved special use permit allows greater Maximum plumbing fixtures: 2 Maximum height: 12 feet If the roof is pitched, the maximum height halfway up any slope is 12 feet and the roof peak maximum is 16 feet.

**Researcher notes.** San Jose has no page specific to patio covers or pergolas. The NOT_REQUIRED outcome rests on the Accessory Buildings & Structures page. That page defines accessory structures as 'open-air construction, including: gazebos, trellises' (c1) and applies the 120 sq ft / no electricity or plumbing rule to 'the accessory building or structure' (c2). A pergola or freestanding patio cover is treated as a trellis-type open-air accessory structure. That reading is an inference; confirm with the Permit Center. The default for attached covers is also an inference. No San Jose source names attached patio covers. c4 requires a building permit for 'New construction, additions, alteration of walls, or any structural change', and the accessory-structure exemption (c2, c3) is not limited to detached structures in its wording, but the page's examples are all detached. enclosed_walls does not change the San Jose outcome: enclosed accessory buildings (c1) follow the same 120 sq ft rule. New params for this project: has_electrical (boolean) and has_plumbing (boolean), because c2 makes electricity or plumbing a permit trigger at any size. The awning exemption (c5) would need projection and support params to model. It is a note only. fee_note is null: the residential fee text names accessory structures and decks but not patio covers. 'Awnings/Trellis(s)/Patio Covers' appears only in the commercial prescriptive-items table of the FY 2025-26 schedule. docs_required and inspections are empty because no San Jose page lists them for patio covers. Access: sanjoseca.gov returned HTTP 403 (Akamai 'Access Denied') to curl and to WebFetch from this machine, robots.txt included. I read robots.txt from a Wayback snapshot (https://web.archive.org/web/20260501010517/https://www.sanjoseca.gov/robots.txt). It disallows only /scripts, /admin and *.asmx for all agents, so content pages are allowed. The city's E-Government Policy (sanjoseca.gov/home/showdocument?id=17869, read from a Wayback snapshot) has no rule against copying or automated access. Every San Jose quote comes from a raw Internet Archive snapshot of the official page (id_ mode, fetched with curl, tags stripped with python3, PDFs read with pdftotext). source_url is that snapshot URL, and the official sanjoseca.gov URL is the part after the timestamp. Internet Archive terms say access 'is granted for scholarship and research purposes only'. Re-check each quote on the live sanjoseca.gov page before marking the rule verified. Quote format: list items and paragraph breaks are joined with single spaces and bullet characters are left out; the words are verbatim. Municode (library.municode.com), host of SJMC Titles 20 and 24, was not fetched. Its archived terms (https://web.archive.org/web/20190411032708/https://www.municode.com/terms-of-use/) say: 'You may not copy, modify, reproduce, republish, distribute, display, or transmit for commercial, non-profit or public purposes all or any portion of this Website, except to the extent permitted by these Terms and Conditions of Use.' I could not load the current terms (the page is rendered by JavaScript and municode.com redirects to civicplus.com, which returns 403). So SJMC §24.02.110 (the exempt-work list) and §20.30.500 were not read directly. The city pages are the only source. The city pages cite 'Section 24.02.110', but the Municode link on the When Is a Building Permit Required? page points to node 24.02.120 (BUPEEX). The correct section number is unconfirmed. Code edition: the Adopted Building Codes page (https://web.archive.org/web/20260318183710/https://www.sanjoseca.gov/your-government/departments-offices/planning-building-code-enforcement/building-division/adopted-building-codes) says 'Effective Jan. 1, 2026, the 2025 state building codes have replaced the 2022 codes.' Its 'amended ordinance' link still opens Ordinance No. 30837 (the 2022 adoption, which does not amend Chapter 24.02). The October 28, 2025 Council presentation on adopting the 2025 codes (https://sanjose.legistar.com/View.ashx?M=F&ID=14894029&GUID=229C001D-2EEC-4071-83AE-F1034F198173&G=920296E4-80BE-4CA2-A78F-32C5EFCF78AF) lists the retained Title 24 amendments as 'Special Testing and Inspections', 'Gypsum board shear walls' and 'Braced wall panels', and says 'No (0) additional amendments to 2025 California Building Codes'. That suggests the 2025 adoption left the exempt-work list alone, but I did not read the adopted ordinance. Bulletin #201 and the When Is a Building Permit Required? page are both dated 06/12/2025, before the 2025 codes took effect.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes

## Re-roof (`re-roof`): draft

**Summary.** In San Jose, reroofing 25% or more of a roof within any 12 months needs a building permit; smaller repairs that do not touch the roof framing do not.

| # | When | Verdict | Explanation | Cites |
|---|---|---|---|---|
| 1 | touches the roof framing: yes | REQUIRED | The roof exemption only covers work that does not involve the underlying framing, so framing work needs a permit. | c3 |
| 2 | repair or full replacement: full replacement | REQUIRED | A full roof replacement is 25% or more of the roof, so a building permit is required. | c1, c2 |
| 3 | share of the existing roof repaired, replaced, or overlaid in any 12 months at least 25 % | REQUIRED | Reroofing 25% or more of the roof in any 12-month period requires a building permit. | c1, c3 |
| 4 | share of the existing roof repaired, replaced, or overlaid in any 12 months under 25 % and touches the roof framing: no | NOT_REQUIRED | Repairing, replacing, or overlaying less than 25% of the roof in any 12-month period, without touching the framing, is treated as a repair and needs no building permit. | c1, c2, c3 |

**Otherwise:** REQUIRED. Unless you can confirm the work covers less than 25% of the roof within 12 months and leaves the framing alone, plan on a reroof building permit. (c1)

**Permit types:** Building permit (reroof); Electrical or mechanical permit if rooftop equipment such as solar is replaced, altered, or removed

**Fee note:** The FY 2025-26 fee schedule (effective August 11, 2025) lists a residential reroof at $113 permit issuance, plan review only if required, and $236 for up to 2 inspections plus $157 per half hour for each additional inspection. This is the latest archived copy; a FY 2026-27 schedule may now apply, so check sanjoseca.gov/buildingfees.

- Note: Most reroof permits can be issued online through SJPermits.org. (c14)
- Note: Replacing, altering, or removing solar panels or other rooftop equipment also needs electrical or mechanical permits. (c4)
- Note: Properties on the Historical Resources Inventory need a Planning Division clearance or permit before the reroof permit is issued. (c5)
- Note: The city lists the Title 24 Energy Code as the reference for cool roof standards; the city page does not state the cool roof thresholds. (c6)
- Note: Roof coverings must be at least Class C fire rated. (c7)
- Note: At most 2 composition roof layers are allowed, and an engineering analysis is required if all roof coverings together weigh more than 7 pounds per square foot. (c8, c15)
- Note: Adding a skylight needs its own building permit, and cutting or altering a flue needs a separate mechanical permit. (c9, c10)
- Note: Inspections are listed on the Permit Card. (c12)
- Note: Fee details come from the FY 2025-26 schedule and may have changed. (c13)
- Note: A Reroof Project Worksheet is required when the project does not qualify for an online permit. (c11)

**Citations**

- `c1` San Jose Permit Center, Reroof Projects (updated 04/12/2026), <https://web.archive.org/web/20260514004111/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/reroof-projects>

  > A building permit is required when 25 percent or more of the roof is to be reroofed in any 12-month period. Less than 25 percent is considered a repair and does not require a permit.

- `c2` SJMC Title 24 as amended by Ordinance No. 31256 (2025 codes; council draft dated 10/16/2025, Item 8.2(a), 10/28/2025), §24.02.120(A)(13), <https://sanjose.legistar.com/View.ashx?M=F&ID=14873777&GUID=DD05D7FB-2583-4C0D-BC97-EE5FB907BE34>

  > Replacement, repair or overlay of less than twenty-five percent of an existing roof within any twelve-month period.

- `c3` San Jose Permit Center, When Is a Building Permit Required? (updated 06/12/2025), Other exemptions, roof bullet, <https://web.archive.org/web/20260813091205/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/when-is-a-building-permit-required>

  > Roof repairs or replacements that are less than 25% of existing roof; do not involve the underlying framing; and occur no more than once in a 12-month period. If 25% or more of the roof is being replaced/repaired, a building permit is required.

- `c4` San Jose Permit Center, Reroof Projects (updated 04/12/2026), <https://web.archive.org/web/20260514004111/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/reroof-projects>

  > Alterations to rooftop equipment - If replacing, altering, or removing solar installations or other rooftop equipment, then electrical or mechanical permits are also required.

- `c5` San Jose Permit Center, Reroof Projects (updated 04/12/2026), <https://web.archive.org/web/20260514004111/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/reroof-projects>

  > Historical properties - If the property is listed on the Historical Resources Inventory, a clearance or permit from the Planning Division is required before a reroof permit will be issued

- `c6` San Jose Permit Center, Reroof Projects (updated 04/12/2026), Reroofing Specifications & Requirements, Code References, <https://web.archive.org/web/20260514004111/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/reroof-projects>

  > Title 24 Energy Code for cool roof standards

- `c7` San Jose Permit Center, Reroof Projects (updated 04/12/2026), Reroofing Specifications & Requirements, 3. Fire Rating, <https://web.archive.org/web/20260514004111/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/reroof-projects>

  > Class C minimum rating is required by California law, whether new or re-roof.

- `c8` San Jose Permit Center, Reroof Projects (updated 04/12/2026), Reroofing Specifications & Requirements, 6. Overlays, <https://web.archive.org/web/20260514004111/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/reroof-projects>

  > An engineering analysis of the roof supporting structure is required if the total weight of all roof coverings exceeds 7 pounds per square foot.

- `c9` San Jose Permit Center, Reroof Projects (updated 04/12/2026), Reroofing Specifications & Requirements, 8. Skylights, <https://web.archive.org/web/20260514004111/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/reroof-projects>

  > Skylight installations require a separate building permit and inspection.

- `c10` San Jose Permit Center, Reroof Projects (updated 04/12/2026), Reroofing Specifications & Requirements, 2. Flues, <https://web.archive.org/web/20260514004111/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/reroof-projects>

  > A separate mechanical permit and inspection are required if the flue is cut or altered in any way.

- `c11` San Jose Permit Center, Reroof Projects (updated 04/12/2026), How to Apply, <https://web.archive.org/web/20260514004111/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/reroof-projects>

  > A completed Reroof Project Worksheet must be submitted with the building permit application for all projects that do not qualify for an online permit.

- `c12` San Jose Permit Center, Reroof Projects (updated 04/12/2026), Inspections, <https://web.archive.org/web/20260514004111/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/reroof-projects>

  > You will be issued a Permit Card that lists required inspections.

- `c13` San Jose Building Division Fee Schedule FY 2025-26 (effective 08/11/2025), Special Inspection and Permit Fees, Re-Roof, Residential, <https://web.archive.org/web/20251019175438/https://www.sanjoseca.gov/home/showpublisheddocument?id=26047>

  > Re-Roof, Residential Permit Issuance = $113 Plan Review = If Required Inspections = $236 for up to 2 inspections plus $157 per ½ hour for each additional inspection

- `c14` San Jose Permit Center, Reroof Projects (updated 04/12/2026), <https://web.archive.org/web/20260514004111/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/reroof-projects>

  > For most projects, it is easy to get the permit online.

- `c15` San Jose Permit Center, Reroof Projects (updated 04/12/2026), Reroofing Specifications & Requirements, 6. Overlays, <https://web.archive.org/web/20260514004111/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/reroof-projects>

  > Maximum number of composition roof covers allowed: 2

**Researcher notes.** Threshold is a percentage of the existing roof, not square feet, so this record adds percent_of_roof (number, percent of the existing roof area repaired, replaced, or overlaid, counted cumulatively over any 12-month period) and involves_framing (boolean, work touches the roof framing under the sheathing). area_sqft is not used because no San Jose source states a square-foot threshold; to use it, a caller must convert to a percentage of total roof area. replaces_sheathing is not used: no San Jose source makes sheathing replacement alone a permit trigger. The When Is a Building Permit Required? page (c3) conditions the exemption on not involving "the underlying framing"; SJMC 24.02.120(A)(13) (c2) states only the 25%/12-month rule. Treating framing work as REQUIRED follows the city page. The When page also says the exempt work must "occur no more than once in a 12-month period"; percent_of_roof is defined cumulatively to cover this. Cool roof: the Reroof page cites the Title 24 Energy Code for cool roof standards but gives no thresholds; the Energy Code text itself was not quoted. Fee: the Building Permit Fees page (Wayback 20260801) links a newer schedule version (showpublisheddocument/26047/639180865996470000) that has no archived copy, so the fee note uses the FY 2025-26 schedule. Access: sanjoseca.gov returned HTTP 403 (Akamai "Access Denied") to curl and WebFetch, robots.txt included. The robots.txt read from a Wayback snapshot (20260501) disallows only /admin and *.asmx paths for User-agent *, and the City E-Government Policy (Administrative Policy 1.7.5, home/showdocument?id=17869) contains no restriction on automated access or copying. City page quotes therefore come from raw Internet Archive captures (the id_ form of each source_url, same timestamp), not from the live site. SJMC text comes from the 2025 code-adoption ordinance on sanjose.legistar.com (no robots.txt, no terms page found); Municode was not used because its Terms and Conditions of Use say: "You may not copy, modify, reproduce, republish, distribute, display, or transmit for commercial, non-profit or public purposes all or any portion of this Website, except to the extent permitted by these Terms and Conditions of Use." Code edition: San Jose adopted the 2025 California codes effective January 1, 2026 (Adopted Building Codes page, Wayback 20260318). The ordinance PDF is the 10/16/2025 council draft with redline. Legistar shows it passed for publication 10/28/2025 as Ordinance No. 31256 and listed for final adoption on the 11/18/2025 agenda (file 25-1187); the signed final ordinance was not retrieved. Only ordinance passages with no redline marks (checked visually on rendered pages 8-12) are quoted. Section number: the When Is a Building Permit Required? page (updated 06/12/2025) says "Municipal Code Section 24.02.110 lists all exempt projects", but the ordinance codifies "24.02.120 Building Permit Exemptions"; this record cites 24.02.120. San Jose does not adopt CRC Chapter 1, Division II (SJMC 24.09.110 A.6, unchanged in the 2025 ordinance), so CRC R105.2 is not the operative exemption list in San Jose; SJMC 24.02.120-24.02.150 are.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes

## Retaining wall (`retaining-wall`): draft

**Summary.** In San Jose a retaining wall needs no permit only if it is 2 feet or less above existing grade, under 4 feet from the bottom of the footing to the top, and holds back no surcharge; otherwise building, planning, or grading permits apply.

| # | When | Verdict | Explanation | Cites |
|---|---|---|---|---|
| 1 | wall height above existing grade at most 2 ft and wall height, bottom of footing to top under 4 ft and holds back a slope, driveway, or building load: no | NOT_REQUIRED | A retaining wall no more than 2 feet high above existing grade, less than 4 feet from the bottom of the footing to the top of the wall, and not supporting a surcharge (such as sloping soil, a building footing, or vehicles) does not need a permit. | c1, c2, c3 |

**Otherwise:** REQUIRED. Over 2 feet above existing grade needs a building permit plus a Planning permit (a Special Use Permit, or a Planned Development Permit in a PD zone). A wall that supports a surcharge, or measures 4 feet or more from the bottom of the footing to the top, also needs a Grading Permit from Public Works. (c1, c2, c4)

**Permit types:** Building permit; Special Use Permit or Planned Development Permit (Planning Division); Grading Permit (Public Works)

- Note: A surcharge is pressure from earth or fill behind the wall with a back slope of 3:1 or steeper, for example soil sloping into the wall, building footings on the retained soil, or vehicles parked on it. (c5)
- Note: The Planning permit depends on zoning: a Planned Development Permit in a planned development (PD) district, a Special Use Permit in all other districts. (c4)

**Citations**

- `c1` San Jose Permit Center, Fences & Retaining Walls (updated 04/15/2026), referencing CBC §105.2 and SJMC Ch. 20.30 Parts 5 and 6, Ch. 17.24, <https://web.archive.org/web/20260606170752/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/fences-retaining-walls>

  > If the retaining wall is greater than 2 feet in height as measured from existing grade, a building permit is required and other permits are required as follows:

- `c2` San Jose Permit Center, Fences & Retaining Walls (updated 04/15/2026), referencing CBC §105.2 and SJMC Ch. 20.30 Parts 5 and 6, Ch. 17.24, <https://web.archive.org/web/20260606170752/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/fences-retaining-walls>

  > If the wall supports a surcharge and/or measures 4 feet or more as measured from bottom of the footing to the top of the wall, you will need a Grading Permit from Public Works.

- `c3` San Jose Building Bulletin #201, When Is a Building Permit Required? (06/12/2025), summarizing SJMC §24.02.110, <https://web.archive.org/web/20260106113350/https://www.sanjoseca.gov/home/showpublisheddocument/25897/638853215612230000>

  > 6. Retaining walls not higher than 4 feet as measured from the bottom of the footing to the top of the wall, and that do not support a surcharge or impounding Class I, II, or III-A liquids.

- `c4` San Jose Permit Center, Fences & Retaining Walls (updated 04/15/2026), referencing CBC §105.2 and SJMC Ch. 20.30 Parts 5 and 6, Ch. 17.24, <https://web.archive.org/web/20260606170752/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/fences-retaining-walls>

  > For properties in a planned development (PD) zoning district, you will need to apply for a Planned Development Permit from the Planning Division. Find your zoning on the Zoning Map. For properties in all other zoning districts, you will need to apply for a Special Use Permit from the Planning Division.

- `c5` San Jose Permit Center, Fences & Retaining Walls (updated 04/15/2026), referencing CBC §105.2 and SJMC Ch. 20.30 Parts 5 and 6, Ch. 17.24, <https://web.archive.org/web/20260606170752/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/fences-retaining-walls>

  > Surcharge Definition - A surcharge is the pressure from earth or fill acting upon the retaining wall with a back slope of 3:1 or greater (3’ horizontal to 1’ vertical). Examples of surcharge include soil that slopes into the retaining wall; structure footings supported by the retained soil; or adjacent vehicle loads supported by retained soil.

- `c6` San Jose Permit Center, Fences & Retaining Walls (updated 04/15/2026), referencing CBC §105.2 and SJMC Ch. 20.30 Parts 5 and 6, Ch. 17.24, <https://web.archive.org/web/20260606170752/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/fences-retaining-walls>

  > A building permit is not required to construct a fence or retaining wall unless the project exceeds the maximum heights set forth in the municipal code. Exceeding the height limit means the project will also require a Planning permit and, for retaining walls, an additional permit from Public Works.

- `c7` San Jose Permit Center, When Is a Building Permit Required? (updated 06/12/2025), summarizing SJMC §24.02.110, <https://web.archive.org/web/20260813091205/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/when-is-a-building-permit-required>

  > Retaining walls - See Fences & Retaining Walls for details on when a permit is and is not needed.

- `c8` San Jose Permit Center, Fences & Retaining Walls (updated 04/15/2026), referencing CBC §105.2 and SJMC Ch. 20.30 Parts 5 and 6, Ch. 17.24, <https://web.archive.org/web/20260606170752/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/fences-retaining-walls>

  > REQUIRED > Building Permit Application - See instructions. > Single-Family & Duplex Projects Submittal Checklist - Under Project Scope, check "Other" and enter "Fence" or "Retaining Wall"

**Researcher notes.** Conflict: Bulletin #201 item 6 (c3, 06/12/2025) exempts retaining walls 'not higher than 4 feet as measured from the bottom of the footing to the top of the wall' with no surcharge. That matches the CRC model. The Fences & Retaining Walls page (c1, updated 04/15/2026) is stricter: a building permit is needed if the wall is 'greater than 2 feet in height as measured from existing grade', and a Grading Permit is needed for a surcharge or 4 ft or more from the bottom of the footing (c2). The When Is a Building Permit Required? page defers to the Fences & Retaining Walls page (c7). This record follows the stricter, newer page. So a wall 2 to 4 ft tall from the footing with more than 2 ft exposed is REQUIRED here, though Bulletin #201 would exempt it. The NOT_REQUIRED outcome uses height_ft lt 4 because c2 triggers a Grading Permit at '4 feet or more'. For a wall 2 ft or less above grade that supports a surcharge, c2 calls for a Grading Permit, but it sits in the list under the '>2 ft' sentence. Bulletin #201 would require a building permit. Either way a permit applies, so the verdict is REQUIRED; which permit applies is unclear. New param exposed_height_ft (number, feet): wall height measured from existing grade to the top of the wall, as c1 measures it. This differs from height_ft, which is measured from the bottom of the footing. Bulletin #201 also excludes walls 'impounding Class I, II, or III-A liquids' from the exemption. That case is not modeled. The Planning thresholds come from SJMC Ch. 20.30 Part 5, which I did not read (Municode terms). docs_required comes from c8 plus the plan list on the same page. No inspection list or residential fee for retaining walls is published, so inspections is empty and fee_note is null. Access: sanjoseca.gov returned HTTP 403 (Akamai 'Access Denied') to curl and to WebFetch from this machine, robots.txt included. I read robots.txt from a Wayback snapshot (https://web.archive.org/web/20260501010517/https://www.sanjoseca.gov/robots.txt). It disallows only /scripts, /admin and *.asmx for all agents, so content pages are allowed. The city's E-Government Policy (sanjoseca.gov/home/showdocument?id=17869, read from a Wayback snapshot) has no rule against copying or automated access. Every San Jose quote comes from a raw Internet Archive snapshot of the official page (id_ mode, fetched with curl, tags stripped with python3, PDFs read with pdftotext). source_url is that snapshot URL, and the official sanjoseca.gov URL is the part after the timestamp. Internet Archive terms say access 'is granted for scholarship and research purposes only'. Re-check each quote on the live sanjoseca.gov page before marking the rule verified. Quote format: list items and paragraph breaks are joined with single spaces and bullet characters are left out; the words are verbatim. Municode (library.municode.com), host of SJMC Titles 20 and 24, was not fetched. Its archived terms (https://web.archive.org/web/20190411032708/https://www.municode.com/terms-of-use/) say: 'You may not copy, modify, reproduce, republish, distribute, display, or transmit for commercial, non-profit or public purposes all or any portion of this Website, except to the extent permitted by these Terms and Conditions of Use.' I could not load the current terms (the page is rendered by JavaScript and municode.com redirects to civicplus.com, which returns 403). So SJMC §24.02.110 (the exempt-work list) and §20.30.500 were not read directly. The city pages are the only source. The city pages cite 'Section 24.02.110', but the Municode link on the When Is a Building Permit Required? page points to node 24.02.120 (BUPEEX). The correct section number is unconfirmed. Code edition: the Adopted Building Codes page (https://web.archive.org/web/20260318183710/https://www.sanjoseca.gov/your-government/departments-offices/planning-building-code-enforcement/building-division/adopted-building-codes) says 'Effective Jan. 1, 2026, the 2025 state building codes have replaced the 2022 codes.' Its 'amended ordinance' link still opens Ordinance No. 30837 (the 2022 adoption, which does not amend Chapter 24.02). The October 28, 2025 Council presentation on adopting the 2025 codes (https://sanjose.legistar.com/View.ashx?M=F&ID=14894029&GUID=229C001D-2EEC-4071-83AE-F1034F198173&G=920296E4-80BE-4CA2-A78F-32C5EFCF78AF) lists the retained Title 24 amendments as 'Special Testing and Inspections', 'Gypsum board shear walls' and 'Braced wall panels', and says 'No (0) additional amendments to 2025 California Building Codes'. That suggests the 2025 adoption left the exempt-work list alone, but I did not read the adopted ordinance. Bulletin #201 and the When Is a Building Permit Required? page are both dated 06/12/2025, before the 2025 codes took effect.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes

## Shed or accessory structure (`shed`): draft

**Summary.** In San Jose a shed or other accessory building of 120 square feet or less needs no permit unless it has electricity or plumbing; anything larger, wired, or plumbed needs a building permit.

| # | When | Verdict | Explanation | Cites |
|---|---|---|---|---|
| 1 | floor area at most 120 sq ft and has electrical: no and has plumbing: no | NOT_REQUIRED | A shed or other accessory building of 120 square feet or less, measured from the exterior walls, with no electricity and no plumbing does not need a permit. | c1, c2 |

**Otherwise:** REQUIRED. A building permit is required if the shed is over 120 square feet (measured from the exterior walls) or has any electricity or plumbing, whatever its size. Over 650 square feet also needs a Special Use Permit from Planning. (c1)

**Permit types:** Building permit; Special Use Permit (Planning), if over 650 sq ft

**Fee note:** San Jose's FY 2025-26 Building Division fee schedule (effective August 11, 2025) charges residential exterior or site alterations, including decks and accessory structures such as sheds, a base permit issuance fee of $227 and a base plan review fee of $325. The base inspection fee is $367 when only a building permit is needed, or $682 total when a plumbing, mechanical or electrical permit is also needed. The Building Official may adjust fees to fit the scope. This is the latest archived copy; a FY 2026-27 schedule may now apply, so check sanjoseca.gov/buildingfees.

- Note: Zoning limits apply even without a permit: one story, 650 sq ft maximum unless a special use permit allows more, at most 2 plumbing fixtures, and 12 ft maximum height (on a pitched roof, 12 ft at the midpoint of the slope and 16 ft at the peak). (c4)
- Note: Keep at least 6 ft from any other building, measured wall to wall. The shed cannot contain living or sleeping space and cannot be air-conditioned. (c5)
- Note: Rear yard coverage: accessory buildings and structures may cover at most 60% of the rear yard if there is a built-in pool, otherwise 40%, of which accessory buildings may not exceed 30%. Eaves up to 2 ft do not count. (c6)
- Note: Minimum setbacks: 60 ft from the front property line (45 ft for a detached garage). Side and rear setbacks are 0 ft, except 10 ft on the street side of a corner lot and 4 ft on a key lot or a corner lot next to a residential key lot. (c7)
- Note: No windows, doors, or vents within 3 ft of a property line, and openings may be at most 25% of the wall area between 3 and 5 ft. Over 120 sq ft, overhangs must stay 2 ft from the property line. (c8)
- Note: A shed under 120 sq ft that is at least 6 ft from other structures may sit on the property line without fire walls. Over 120 sq ft and less than 5 ft from a property line, the walls parallel to that line need 1-hour fire protection. (c9)

**Citations**

- `c1` San Jose Permit Center, Accessory Buildings & Structures (updated 04/14/2026), referencing SJMC §20.30.500 and §20.200.020, <https://web.archive.org/web/20260606164646/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/accessory-buildings-structures>

  > If the accessory building or structure is 120 sq. ft. or less, no permit is required unless it includes electricity or plumbing. A building permit is required: If the size is greater than 120 sq. ft. (as measured from exterior walls). If it includes electricity or plumbing, no matter the size. If over 650 sq. ft., both a building permit and special use permit are required.

- `c2` San Jose Permit Center, When Is a Building Permit Required? (updated 06/12/2025), summarizing SJMC §24.02.110, <https://web.archive.org/web/20260813091205/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/when-is-a-building-permit-required>

  > Accessory buildings or structures of 120 square feet or less and that will not be electrically wired.

- `c3` San Jose Building Bulletin #201, When Is a Building Permit Required? (06/12/2025), summarizing SJMC §24.02.110, <https://web.archive.org/web/20260106113350/https://www.sanjoseca.gov/home/showpublisheddocument/25897/638853215612230000>

  > 1. Accessory structures of 120 square feet or less and that will not be electrically wired.

- `c4` San Jose Permit Center, Accessory Buildings & Structures (updated 04/14/2026), referencing SJMC §20.30.500 and §20.200.020, <https://web.archive.org/web/20260606164646/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/accessory-buildings-structures>

  > Maximum stories: 1 Maximum size: 650 sq. ft. unless an approved special use permit allows greater Maximum plumbing fixtures: 2 Maximum height: 12 feet If the roof is pitched, the maximum height halfway up any slope is 12 feet and the roof peak maximum is 16 feet.

- `c5` San Jose Permit Center, Accessory Buildings & Structures (updated 04/14/2026), referencing SJMC §20.30.500 and §20.200.020, <https://web.archive.org/web/20260606164646/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/accessory-buildings-structures>

  > Minimum distance to any other building: 6 feet (measured wall to wall; eaves may be closer than 6 feet but must meet applicable building codes) Cannot contain any living or sleeping spaces Cannot be air-conditioned

- `c6` San Jose Permit Center, Accessory Buildings & Structures (updated 04/14/2026), referencing SJMC §20.30.500 and §20.200.020, <https://web.archive.org/web/20260606164646/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/accessory-buildings-structures>

  > Maximum coverage of rear yard including a built-in pool: 60% Maximum coverage of rear yard without a built-in pool: 40% of which accessory buildings may not exceed 30% Eave projections of up to 2 feet will not count toward rear yard coverage

- `c7` San Jose Permit Center, Accessory Buildings & Structures (updated 04/14/2026), referencing SJMC §20.30.500 and §20.200.020, <https://web.archive.org/web/20260606164646/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/accessory-buildings-structures>

  > Front Setback: 60 feet Exception, detached garage: 45 feet Side Setback: 0 feet unless: Corner lot: 10 feet from the side that is adjacent to a street Corner lot abutting a residential key lot: 4 feet Key lot: 4 feet Rear Setback: 0 feet unless: Corner lot: 10 feet where side is adjacent to a street Corner lot abutting a residential key lot: 4 feet Key lot: 4 feet

- `c8` San Jose Permit Center, Accessory Buildings & Structures (updated 04/14/2026), referencing SJMC §20.30.500 and §20.200.020, <https://web.archive.org/web/20260606164646/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/accessory-buildings-structures>

  > For accessories buildings and structures over 120 sq. ft., overhangs cannot be closer than 2 feet to the property line. Within 3 feet of the property line, openings are not allowed. Between 3-5 feet of the property line, openings may not exceed 25% of the wall area.

- `c9` San Jose Permit Center, Accessory Buildings & Structures (updated 04/14/2026), referencing SJMC §20.30.500 and §20.200.020, <https://web.archive.org/web/20260606164646/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/accessory-buildings-structures>

  > Is less than 120 sq. ft. and is at least 6 feet from other structures, then the project may be built on the property line without firewalls. Exceeds 120 sq. ft. and is less than 5 feet from the property line, then the walls parallel to the property line must be built with a 1-hour fire protection.

- `c10` San Jose Permit Center, Accessory Buildings & Structures (updated 04/14/2026), referencing SJMC §20.30.500 and §20.200.020, <https://web.archive.org/web/20260606164646/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/accessory-buildings-structures>

  > Accessory buildings are defined in the Municipal Code as non-livable and enclosed, including: sheds, playhouses, and detached garages. Does not include livable accessory dwelling units (ADUs). Accessory structures have open-air construction, including: gazebos, trellises, and pools, spas and hot tubs.

- `c11` San Jose Permit Center, Accessory Buildings & Structures (updated 04/14/2026), referencing SJMC §20.30.500 and §20.200.020, <https://web.archive.org/web/20260606164646/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/accessory-buildings-structures>

  > > Project Plans - Follow above plan instructions. > Building Permit Application - See instructions. > Single-Family & Duplex Projects Submittal Checklist - Under Project Scope: - Check "Other" - Enter "Accessory Building" or "Accessory Structure"

- `c12` San Jose Building Division Fee Schedule FY 2025-26 (effective 08/11/2025), Building Residential Fees, p. 4, <https://web.archive.org/web/20251207120823/https://www.sanjoseca.gov/home/showpublisheddocument/26047/637922894017900000>

  > Exterior and/or site alterations, such (but not limited to) an accessory structure (shed, etc.), balconies and decks, porches, windows, pools, etc. will be charged a base permit issuance fee of $227 and a base plan review fee of $325. Exterior and/or site alterations that only require a building permit will be charged a base Inspection fee of $367. If a plumbing, mechanical, or electrical permit is also required, the total base inspection fee will be $682.

**Researcher notes.** Sources agree on the 120 sq ft threshold. The Accessory Buildings & Structures page (c1, updated 04/14/2026) adds plumbing as a trigger, while the exemption list (c2) and Bulletin #201 item 1 (c3) mention only electrical wiring. This record follows c1. c1 says 'no permit is required' at 120 sq ft or less, so 'under 120' and '120 or less' do not conflict here. San Jose's permit text has no story limit. The param stories is not used in outcomes; the zoning limit of 1 story is a note (c4). The CRC baseline exemption is limited to one-story structures. c10 defines accessory buildings as 'non-livable and enclosed' (sheds, playhouses, detached garages). docs_required comes from c11 and the plan instructions on the same page. fee_note comes from c12. No inspection list is published, so inspections is empty. Zoning notes are the city's summary of SJMC §20.30.500. I did not read the code section itself (Municode terms). Access: sanjoseca.gov returned HTTP 403 (Akamai 'Access Denied') to curl and to WebFetch from this machine, robots.txt included. I read robots.txt from a Wayback snapshot (https://web.archive.org/web/20260501010517/https://www.sanjoseca.gov/robots.txt). It disallows only /scripts, /admin and *.asmx for all agents, so content pages are allowed. The city's E-Government Policy (sanjoseca.gov/home/showdocument?id=17869, read from a Wayback snapshot) has no rule against copying or automated access. Every San Jose quote comes from a raw Internet Archive snapshot of the official page (id_ mode, fetched with curl, tags stripped with python3, PDFs read with pdftotext). source_url is that snapshot URL, and the official sanjoseca.gov URL is the part after the timestamp. Internet Archive terms say access 'is granted for scholarship and research purposes only'. Re-check each quote on the live sanjoseca.gov page before marking the rule verified. Quote format: list items and paragraph breaks are joined with single spaces and bullet characters are left out; the words are verbatim. Municode (library.municode.com), host of SJMC Titles 20 and 24, was not fetched. Its archived terms (https://web.archive.org/web/20190411032708/https://www.municode.com/terms-of-use/) say: 'You may not copy, modify, reproduce, republish, distribute, display, or transmit for commercial, non-profit or public purposes all or any portion of this Website, except to the extent permitted by these Terms and Conditions of Use.' I could not load the current terms (the page is rendered by JavaScript and municode.com redirects to civicplus.com, which returns 403). So SJMC §24.02.110 (the exempt-work list) and §20.30.500 were not read directly. The city pages are the only source. The city pages cite 'Section 24.02.110', but the Municode link on the When Is a Building Permit Required? page points to node 24.02.120 (BUPEEX). The correct section number is unconfirmed. Code edition: the Adopted Building Codes page (https://web.archive.org/web/20260318183710/https://www.sanjoseca.gov/your-government/departments-offices/planning-building-code-enforcement/building-division/adopted-building-codes) says 'Effective Jan. 1, 2026, the 2025 state building codes have replaced the 2022 codes.' Its 'amended ordinance' link still opens Ordinance No. 30837 (the 2022 adoption, which does not amend Chapter 24.02). The October 28, 2025 Council presentation on adopting the 2025 codes (https://sanjose.legistar.com/View.ashx?M=F&ID=14894029&GUID=229C001D-2EEC-4071-83AE-F1034F198173&G=920296E4-80BE-4CA2-A78F-32C5EFCF78AF) lists the retained Title 24 amendments as 'Special Testing and Inspections', 'Gypsum board shear walls' and 'Braced wall panels', and says 'No (0) additional amendments to 2025 California Building Codes'. That suggests the 2025 adoption left the exempt-work list alone, but I did not read the adopted ordinance. Bulletin #201 and the When Is a Building Permit Required? page are both dated 06/12/2025, before the 2025 codes took effect.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes

## Rooftop solar (`solar`): draft

**Summary.** In San Jose, solar panels and home batteries need a building permit; qualifying rooftop systems on houses, duplexes, and townhouses can get it online.

| # | When | Verdict | Explanation | Cites |
|---|---|---|---|---|
| 1 | includes battery storage: yes | REQUIRED | A home battery needs a building permit. It qualifies for the online permit only with a City-approved anchorage detail or a City-approved master file, and the bracket anchorage must be inspected, typically before the battery is installed. | sj_solar_page, sj_solar_battery, sj_online_solar |

**Otherwise:** REQUIRED. A building permit is required before installing solar panels in San Jose. A rooftop system on a single-family home, duplex, or townhouse can be permitted online if it meets the city's weight, point-load, and height limits and is not ballasted; other systems go through the Standard Plan Review Service. (sj_solar_page, sj_solar_online, sj_solar_nonq)

**Permit types:** Building permit

**Fee note:** San Jose's FY 2025-26 fee schedule bills electrical inspection for a single-family photovoltaic system at a minimum of $315 per hour with a 60-minute minimum, in addition to the permit issuance fee.

- Note: To use the online permit, the system must be a rooftop installation on a single-family home, duplex, or townhouse, with panels under 5 pounds per square foot, less than 40 pounds at each support point, no more than 18 inches above the roof, and no ballast. (sj_solar_online)
- Note: The city's installation requirements cover rooftop systems on single-family homes, duplexes, and townhomes no more than three stories above grade. (sj_solar_r3)
- Note: Energy storage systems are not covered by the city's low-voltage electrical exemption. (sj_150_12)
- Note: State law limits the city's review of a solar application to health and safety requirements, and the city cannot make approval depend on a homeowners association. (g5_b, g5_i)
- Note: Fees: electrical inspection for a single-family photovoltaic system is a minimum of $315 per hour with a 60-minute minimum, plus a permit issuance fee. (fee_elec, fee_pv, fee_issue)
- Note: Online permits can be pulled only by the property owner or a qualified contractor. The city recommends that a licensed contractor pull the permit; an owner-builder must also submit the Owner Acknowledgement and Information Verification Form, show ID at issuance, and be the owner of record. (sj_online_intro, sj_who_ob)

**Citations**

- `sj_solar_page` San Jose Permit Center, Solar & Storage Battery Projects (updated 04/15/2026), <https://web.archive.org/web/20260513124521id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/solar-storage-battery-projects>

  > A building permit is required before installing solar photovoltaic (PV) panels and/or energy storage batteries. For qualifying projects, it is easy to get the permit online.

- `sj_solar_battery` San Jose Permit Center, Solar & Storage Battery Projects (updated 04/15/2026), Projects Qualifying to Use SJPermits, <https://web.archive.org/web/20260513124521id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/solar-storage-battery-projects>

  > Battery projects must meet all criteria: Use a City-approved anchorage detail, see illustrations below, OR use a City-approved Master file from the Building Division for bracket anchorage. Provide the construction documents matching the Master file to the City Inspector at the time of inspection. Inspection of the bracket anchorage is required, typically before the battery is installed.

- `sj_online_solar` San Jose, Online Building Permits at SJPermits.org, Building-Structural Permit table, <https://web.archive.org/web/20260801184719id_/https://www.sanjoseca.gov/business/development-services-permit-center/online-permits-at-sjpermits-org/building-online-permits>

  > Stationary Storage Battery System Limited No No Solar Photovoltaic System Yes No No

- `sj_solar_online` San Jose Permit Center, Solar & Storage Battery Projects (updated 04/15/2026), Projects Qualifying to Use SJPermits, <https://web.archive.org/web/20260513124521id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/solar-storage-battery-projects>

  > Solar projects must meet all criteria: Must be a rooftop installation on a single-family, duplex, or townhouse property Total panel weight including frame is less than 5 pounds per sq. ft. Maximum concentrated load at each point of support is less than 40 pounds Maximum height above the roof surface is 18 inches PV panels are not ballasted

- `sj_solar_nonq` San Jose Permit Center, Solar & Storage Battery Projects (updated 04/15/2026), How to Apply, <https://web.archive.org/web/20260513124521id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/solar-storage-battery-projects>

  > Qualifying projects - Use SJPermits and download the permit. Nonqualifying projects - Use the Standard Plan Review Service.

- `sj_solar_r3` San Jose Permit Center, Solar & Storage Battery Projects (updated 04/15/2026), Requirements for Solar/Battery Installations, <https://web.archive.org/web/20260513124521id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/single-family-duplex-properties/solar-storage-battery-projects>

  > The PV system is a rooftop installation on R-3 occupancies (single-family, duplex, or townhome) that are not more than three stories above grade plane and constructed in accordance with the California Residential Code.

- `sj_150_12` SJMC §24.02.150(12) (Ord. No. 31256), <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37111/file>

  > 12. Electrical wiring, devices, appliances, apparatus or equipment operating at less than twenty-five (25) volts and not capable of supplying more than fifty (50) watts of energy, except in hazardous (classified) locations, emergency systems, standby systems, energy storage systems, and energy management systems

- `g5_b` Cal. Gov. Code §65850.5(b), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.5.>

  > A city or county shall administratively approve applications to install solar energy systems through the issuance of a building permit or similar nondiscretionary permit. Review of the application to install a solar energy system shall be limited to the building official’s review of whether it meets all health and safety requirements of local, state, and federal law.

- `g5_i` Cal. Gov. Code §65850.5(i), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.5.>

  > A city, county, or city and county shall not condition approval for any solar energy system permit on the approval of a solar energy system by an association, as that term is defined in Section 4080 of the Civil Code.

- `fee_elec` San Jose Building Division Fee Schedule FY 2025-26 (effective August 11, 2025), Residential Sub-Trade Permits, Electrical Permits, p. 5, <https://web.archive.org/web/20251207120823id_/https://www.sanjoseca.gov/home/showpublisheddocument/26047/637922894017900000>

  > Electrical Permit Fees (site construction and other miscellaneous electrical permits) not involving the addition of new building footage shall be the greater of (a) a minimum of $315 per hour of required inspection time, or (b) calculated on an itemized basis as listed below. These Permit Fees are in addition to the Permit Issuance Fees. All items default to a minimum time allocation of 30 minutes of inspection time (20 minutes minimum per unit if more than 1) except for the following:

- `fee_pv` San Jose Building Division Fee Schedule FY 2025-26 (effective August 11, 2025), Fixture-Based Time Assessments - Electrical, p. 5, <https://web.archive.org/web/20251207120823id_/https://www.sanjoseca.gov/home/showpublisheddocument/26047/637922894017900000>

  > Electrical Fixture Minimum (min.) Time (min.)/Unit ... Photovoltaic System (Single Family) 60 50

- `fee_issue` San Jose Building Division Fee Schedule FY 2025-26 (effective August 11, 2025), Building Residential Fees, p. 3, <https://web.archive.org/web/20251207120823id_/https://www.sanjoseca.gov/home/showpublisheddocument/26047/637922894017900000>

  > Permit Issuance Fees shall be $227 per hour for processing and coordination time expended or the amounts set forth below, whichever is greater. Minimum permit issuance fee for all permits using Online Permits service is 50% of the specified processing fee.

- `sj_online_intro` San Jose, Online Building Permits at SJPermits.org, <https://web.archive.org/web/20260801184719id_/https://www.sanjoseca.gov/business/development-services-permit-center/online-permits-at-sjpermits-org/building-online-permits>

  > You can download a building permit for 56 types of simple projects at SJPermits.org. ... Only property owners and qualified contractors may apply for an online building permit.

- `sj_who_ob` San Jose Permit Center, Who Can Apply for a Building Permit? (updated 01-13-2026), <https://web.archive.org/web/20260517000302id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/who-can-apply-for-a-permit>

  > We highly recommend that the licensed contractor rather than the property owner pull the permit. ... If you wish to proceed as an Owner-Builder, your permit application package will need to include: Owner-Builder Requirements to Sign a Permit Owner Acknowledgement and Information Verification Form - In addition to submitting a building permit application, you must complete and submit this form. At time of permit issuance, be ready to provide a Driver’s License or other proof of identification. You must be the Property Owner as recorded by the County Tax Assessor.

**Researcher notes.** Access: every live sanjoseca.gov URL tried, robots.txt included, returned HTTP 403 'Access Denied' (Akamai) to curl and to WebFetch. City pages were read from raw Internet Archive captures (id_ mode, fetched with curl, tags stripped with python3, the fee schedule PDF read with pdftotext). source_url is the capture URL; the official sanjoseca.gov URL is the part after the timestamp. The captured robots.txt (https://web.archive.org/web/20260501010517/https://www.sanjoseca.gov/robots.txt) disallows only /scripts, /admin and *.asmx for all agents. The city's E-Government Policy (sanjoseca.gov/home/showdocument?id=17869, capture 20260904222013) has no rule against copying or automated access. Internet Archive terms say access 'is granted for scholarship and research purposes only'. Re-check each city quote on the live page before marking a rule verified. Quote format: list items and paragraph breaks are joined with single spaces and bullet characters are left out; ' ... ' marks omitted text; the words are verbatim. sjpermits.org robots.txt is 'User-agent: * / Disallow: /', so the SJPermits portal was not fetched; online-permit availability comes from the city's Online Building Permits page. Municode (host of the San Jose Municipal Code) was not fetched. Its archived terms (https://web.archive.org/web/20190411032708/https://www.municode.com/terms-of-use/) say: 'You may not copy, modify, reproduce, republish, distribute, display, or transmit for commercial, non-profit or public purposes all or any portion of this Website, except to the extent permitted by these Terms and Conditions of Use.' The current terms page could not be loaded. SJMC text: quotes marked 'Ord. No. 31256' come from the council-agenda redline of that ordinance (draft dated 10/16/2025, Council Agenda 10/28/2025 Item 8.2(a), file 25-1131), downloaded through the Legistar Web API (webapi.legistar.com); sanjose.granicus.com robots.txt has 'User-agent: * / Disallow: /'. Each such quote is the enacted wording: struck-through text removed and underlined additions kept, checked against the rendered PDF page. Legistar matter 25-1187 (Final Adoption of Ordinances, dated 2025-10-30) lists 'Ordinance No. 31256' as passed for publication on 10/28/2025; the signed ordinance and the final vote were not retrieved. Code edition: San Jose adopted the 2025 California codes (not 2022) for permit applications made on or after January 1, 2026. SJMC 24.09.110(A)(6) does not adopt CRC Chapter 1, Division II, so CRC §R105.2 does not apply in San Jose; the city's exemption lists are SJMC 24.02.120 to 24.02.150. Section numbering: the When Is a Building Permit Required? page (updated 06/12/2025) cites 'Section 24.02.110' for the exempt list, but Ord. No. 31256 amends the exemption lists as 24.02.120 (building), 24.02.130 (plumbing), 24.02.140 (mechanical) and 24.02.150 (electrical). Fees: the fee schedule capture is the FY 2025-26 schedule ('Effective August 11, 2025', document 26047 version 637922894017900000, captured 2025-12-07). The Building Permit Fees page captured 2026-08-01 still says the schedule shows fees in effect as of August 11, 2025, but links a newer upload (version 639180865996470000) with no capture, so the current PDF could not be compared. A draft FY 2026-27 fee resolution (Council Agenda 06-09-2026 Item 3.4(b), Legistar file 26-683) sets different amounts ('Water Heater Replacement – Permit Center 0.25 x # of units $52'); its adoption was not confirmed, so it is not cited. Params: system_size_kw does not change the San Jose verdict or the online path; the city's online criteria are weight, point load, height, and ballast, which are not params. SolarAPP+: Gov. Code §65850.52 requires cities over 50,000 residents to offer an automated platform such as SolarAPP+ for systems up to 38.4 kW AC (see ca-baseline/solar.json). The captured Solar & Storage page does not mention SolarAPP+; whether SJPermits meets §65850.52 was not confirmed. Battery: the Online Building Permits table lists 'Stationary Storage Battery System' as 'Limited' for single-family/duplex; the city does not define 'Limited' beyond the anchorage criteria quoted. docs_required is empty because the Solar & Storage page lists documents only for the plan review path.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes

## Water heater (`water-heater`): draft

**Summary.** In San Jose, installing or replacing any water heater needs a plumbing permit; heat pump models also need an electrical permit, and other electric models need one for new electrical work.

| # | When | Verdict | Explanation | Cites |
|---|---|---|---|---|
| 1 | fuel type: heat pump | REQUIRED | A heat pump water heater needs both a plumbing permit and an electrical permit. For a single-family home or duplex you can get them online at SJPermits.org. | sj_wh_page, sj_wh_hp, sj_online_wh |
| 2 | fuel type: electric | REQUIRED | An electric water heater needs a plumbing permit, and an electrical permit for any new electrical work such as a new circuit. For a single-family home or duplex you can apply for both online in one session. | sj_wh_page, sj_wh_elec, sj_online_wh |

**Otherwise:** REQUIRED. Installing or replacing a water heater needs a plumbing permit in San Jose. San Jose's plumbing exemptions cover only stopping leaks, clearing stoppages, and repairs that do not replace or rearrange valves, pipes, or fixtures. (sj_wh_page, sj_130)

**Permit types:** Plumbing permit; Electrical permit (heat pump models, or any new electrical work)

**Fee note:** San Jose's FY 2025-26 fee schedule bills plumbing permit inspection at a minimum of $315 per hour, with a 30-minute default minimum per item, in addition to the permit issuance fee. For a water heater replacement pulled through Online Permits, the minimum permit issuance fee is $0.

- Note: Single-family homes and duplexes can get the permit online at SJPermits.org. If the property does not qualify, the city's Standard Plan Review Service applies. (sj_wh_online, sj_online_wh)
- Note: On the plan review path, an electric water heater application must include electrical load calculations showing the existing service is adequate. (sj_wh_load)
- Note: Schedule an inspection after the water heater is installed. (sj_wh_insp)
- Note: Every new or replacement water heater, and every existing residential water heater, must be braced, anchored, or strapped against earthquake motion. (sj_wh_strap, hsc19211)
- Note: Fees: plumbing inspection is a minimum of $315 per hour with a 30-minute default minimum per item, plus a permit issuance fee; water heater replacements pulled online have a $0 minimum issuance fee. (fee_plumb, fee_issue, fee_wh)
- Note: Online permits can be pulled only by the property owner or a qualified contractor. The city recommends that a licensed contractor pull the permit; an owner-builder must also submit the Owner Acknowledgement and Information Verification Form, show ID at issuance, and be the owner of record. (sj_online_intro, sj_who_ob)
- Note: San Jose adopted the 2025 California Plumbing Code; the 2025 codes apply to permit applications made on or after January 1, 2026. (sj_cpc, sj_eff)
- Note: With the 2025 code adoption, San Jose repealed its earlier local reach code amendments to the Energy Code and green building code. (sj_repeal, sj_reach_memo)
- Note: A July 2025 city staff memo says Bay Area Air District rules will require new water heaters to meet a zero-NOx standard in phases beginning in 2027. Confirm the dates with the Air District. (sj_nox)

**Citations**

- `sj_wh_page` San Jose Permit Center, Water Heaters (updated 04/14/2026), <https://web.archive.org/web/20260514020002id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/water-heaters>

  > Installing or replacing a water heater requires a plumbing permit. Depending on the type of water heater, an electrical permit may also be required.

- `sj_wh_hp` San Jose Permit Center, Water Heaters (updated 04/14/2026), Heat Pump Water Heaters, <https://web.archive.org/web/20260514020002id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/water-heaters>

  > Permits. Heat pumps require both plumbing and electrical permits.

- `sj_online_wh` San Jose, Online Building Permits at SJPermits.org, Plumbing Permit table, <https://web.archive.org/web/20260801184719id_/https://www.sanjoseca.gov/business/development-services-permit-center/online-permits-at-sjpermits-org/building-online-permits>

  > Plumbing Permit Single-family / Duplex Multifamily Commercial / Industrial ... Water Heater - New Electric Heat Pump Yes No No Water Heater - New Tankless Gas Yes No No Water Heaters Yes Yes Yes

- `sj_wh_elec` San Jose Permit Center, Water Heaters (updated 04/14/2026), Tankless Water Heaters, <https://web.archive.org/web/20260514020002id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/water-heaters>

  > All new electrical work requires an electrical permit. For single-family/duplex projects, the plumbing and electrical permits can be applied for in one session at SJPermits.org.

- `sj_130` SJMC §24.02.130 (Ord. No. 31256), <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37111/file>

  > A plumbing permit shall not be required for the following: A. The stopping of leaks in drains, soil, waste or vent pipe, provided, however, that should any concealed trap, drainpipe, soil, waste or vent pipe become defective and it becomes necessary to remove and replace the same with new material, such work shall be considered as new work and a permit shall be obtained and inspection made as provided in this title. B. The clearing of stoppages or the repairing of leaks in pipes, valves or fixtures, and the removal and reinstallation of water closets, provided such repairs do not involve or require the replacement or rearrangement of valves, pipes or fixtures. C. Reserved.

- `sj_wh_online` San Jose Permit Center, Water Heaters (updated 04/14/2026), How to Apply, <https://web.archive.org/web/20260514020002id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/water-heaters>

  > Single-family/duplex properties - Use SJPermits.org to obtain an online permit. If the property does not qualify, use the Standard Plan Review Service.

- `sj_wh_load` San Jose Permit Center, Water Heaters (updated 04/14/2026), Standard Plan Review Service, <https://web.archive.org/web/20260514020002id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/water-heaters>

  > If installing an electric water heater, provide electrical load calculations to confirm existing electrical service is adequate.

- `sj_wh_insp` San Jose Permit Center, Water Heaters (updated 04/14/2026), Installation Requirements, <https://web.archive.org/web/20260514020002id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/water-heaters>

  > After installing the water heater, schedule an inspection.

- `sj_wh_strap` San Jose Permit Center, Water Heaters (updated 04/14/2026), Strapping & Bracing, <https://web.archive.org/web/20260514020002id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/water-heaters>

  > The California Plumbing Code mandates that all types of water heaters are required to be braced and strapped to resist moving or tipping during an earthquake. This applies to new and replacement water heaters and existing water heaters.

- `hsc19211` Cal. Health & Safety Code §19211(a), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=19211.>

  > Notwithstanding Section 19100, all new and replacement water heaters, and all existing residential water heaters, shall be braced, anchored, or strapped to resist falling or horizontal displacement due to earthquake motion. At a minimum, any water heater shall be secured in accordance with the California Plumbing Code, or modifications made thereto by a city, county, or city and county pursuant to Section 17958.5.

- `fee_plumb` San Jose Building Division Fee Schedule FY 2025-26 (effective August 11, 2025), Residential Sub-Trade Permits, Plumbing Permits, p. 5, <https://web.archive.org/web/20251207120823id_/https://www.sanjoseca.gov/home/showpublisheddocument/26047/637922894017900000>

  > Plumbing Permit Fees (site construction and other miscellaneous plumbing permits) not involving the addition of new building footage shall be the greater of (a) a minimum of $315 per hour of actual inspection time, or (b) calculated on an itemized basis as listed below. These Plumbing Permit Fees are in addition to the Permit Issuance Fees. All items default to a minimum time allocation of 30 minutes of inspection time (20 minutes minimum per unit if more than 1) except for the following:

- `fee_issue` San Jose Building Division Fee Schedule FY 2025-26 (effective August 11, 2025), Building Residential Fees, p. 3, <https://web.archive.org/web/20251207120823id_/https://www.sanjoseca.gov/home/showpublisheddocument/26047/637922894017900000>

  > Permit Issuance Fees shall be $227 per hour for processing and coordination time expended or the amounts set forth below, whichever is greater. Minimum permit issuance fee for all permits using Online Permits service is 50% of the specified processing fee.

- `fee_wh` San Jose Building Division Fee Schedule FY 2025-26 (effective August 11, 2025), Building Special and Miscellaneous Fees, p. 9, <https://web.archive.org/web/20251207120823id_/https://www.sanjoseca.gov/home/showpublisheddocument/26047/637922894017900000>

  > Minimum permit issuance fee for all permits using Online Permits service is 50% of the specified processing fee with the exception of water heater replacements which costs $0.

- `sj_online_intro` San Jose, Online Building Permits at SJPermits.org, <https://web.archive.org/web/20260801184719id_/https://www.sanjoseca.gov/business/development-services-permit-center/online-permits-at-sjpermits-org/building-online-permits>

  > You can download a building permit for 56 types of simple projects at SJPermits.org. ... Only property owners and qualified contractors may apply for an online building permit.

- `sj_who_ob` San Jose Permit Center, Who Can Apply for a Building Permit? (updated 01-13-2026), <https://web.archive.org/web/20260517000302id_/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/who-can-apply-for-a-permit>

  > We highly recommend that the licensed contractor rather than the property owner pull the permit. ... If you wish to proceed as an Owner-Builder, your permit application package will need to include: Owner-Builder Requirements to Sign a Permit Owner Acknowledgement and Information Verification Form - In addition to submitting a building permit application, you must complete and submit this form. At time of permit issuance, be ready to provide a Driver’s License or other proof of identification. You must be the Property Owner as recorded by the County Tax Assessor.

- `sj_cpc` SJMC §24.04.100 (Ord. No. 31256), <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37111/file>

  > Except as otherwise provided for in this chapter, the California Plumbing Code, 2025 edition together with those omissions, amendments, exceptions and additions thereto as amended in Title 24 of the California Code of Regulations are approved and adopted

- `sj_eff` San Jose staff memo, Council file 25-1131 (Oct. 6, 2025), <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37104/file>

  > The 2025 California Building Standards Code will apply to any building or structure for which an application for a building permit is made on or after January 1, 2026.

- `sj_repeal` Ord. No. 31257, Sections 2 and 6, <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37110/file>

  > Sections 24.10.110, 24.10.120, and 24.10.130, and Parts 2 and 3 of Chapter 24.10 of Title 24 of the San José Municipal Code are hereby repealed. ... Sections 24.12.110, 24.12.120, and 24.12.130, and Parts 2 through 8 of Chapter 24.12 of Title 24 of the San José Municipal Code are hereby repealed.

- `sj_reach_memo` San Jose staff memo, Council file 25-1131 (Oct. 6, 2025), <https://webapi.legistar.com/v1/sanjose/matters/15178/attachments/37104/file>

  > However, staff proposes to remove the current reach code amendments and one currently adopted local technical amendment as those amendments are now part of the 2025 codes.

- `sj_nox` San Jose staff memo, Council file 25-803 (July 21, 2025), <https://webapi.legistar.com/v1/sanjose/matters/14973/attachments/36521/file>

  > In March 2023, the Bay Area Air District adopted rule amendments, with the goal of reducing Nitrogen Oxide (NOx) emissions, that will affect the sale and installation of water and space heating appliances in the greater San Francisco Bay Region. In a phased approach beginning in 2027, new water heaters must meet the zero-NOx standard. Beginning in 2029, new furnaces must meet the zero-NOx standards.

**Researcher notes.** Access: every live sanjoseca.gov URL tried, robots.txt included, returned HTTP 403 'Access Denied' (Akamai) to curl and to WebFetch. City pages were read from raw Internet Archive captures (id_ mode, fetched with curl, tags stripped with python3, the fee schedule PDF read with pdftotext). source_url is the capture URL; the official sanjoseca.gov URL is the part after the timestamp. The captured robots.txt (https://web.archive.org/web/20260501010517/https://www.sanjoseca.gov/robots.txt) disallows only /scripts, /admin and *.asmx for all agents. The city's E-Government Policy (sanjoseca.gov/home/showdocument?id=17869, capture 20260904222013) has no rule against copying or automated access. Internet Archive terms say access 'is granted for scholarship and research purposes only'. Re-check each city quote on the live page before marking a rule verified. Quote format: list items and paragraph breaks are joined with single spaces and bullet characters are left out; ' ... ' marks omitted text; the words are verbatim. sjpermits.org robots.txt is 'User-agent: * / Disallow: /', so the SJPermits portal was not fetched; online-permit availability comes from the city's Online Building Permits page. Municode (host of the San Jose Municipal Code) was not fetched. Its archived terms (https://web.archive.org/web/20190411032708/https://www.municode.com/terms-of-use/) say: 'You may not copy, modify, reproduce, republish, distribute, display, or transmit for commercial, non-profit or public purposes all or any portion of this Website, except to the extent permitted by these Terms and Conditions of Use.' The current terms page could not be loaded. SJMC text: quotes marked 'Ord. No. 31256' come from the council-agenda redline of that ordinance (draft dated 10/16/2025, Council Agenda 10/28/2025 Item 8.2(a), file 25-1131), downloaded through the Legistar Web API (webapi.legistar.com); sanjose.granicus.com robots.txt has 'User-agent: * / Disallow: /'. Each such quote is the enacted wording: struck-through text removed and underlined additions kept, checked against the rendered PDF page. Legistar matter 25-1187 (Final Adoption of Ordinances, dated 2025-10-30) lists 'Ordinance No. 31256' as passed for publication on 10/28/2025; the signed ordinance and the final vote were not retrieved. Code edition: San Jose adopted the 2025 California codes (not 2022) for permit applications made on or after January 1, 2026. SJMC 24.09.110(A)(6) does not adopt CRC Chapter 1, Division II, so CRC §R105.2 does not apply in San Jose; the city's exemption lists are SJMC 24.02.120 to 24.02.150. Section numbering: the When Is a Building Permit Required? page (updated 06/12/2025) cites 'Section 24.02.110' for the exempt list, but Ord. No. 31256 amends the exemption lists as 24.02.120 (building), 24.02.130 (plumbing), 24.02.140 (mechanical) and 24.02.150 (electrical). Fees: the fee schedule capture is the FY 2025-26 schedule ('Effective August 11, 2025', document 26047 version 637922894017900000, captured 2025-12-07). The Building Permit Fees page captured 2026-08-01 still says the schedule shows fees in effect as of August 11, 2025, but links a newer upload (version 639180865996470000) with no capture, so the current PDF could not be compared. A draft FY 2026-27 fee resolution (Council Agenda 06-09-2026 Item 3.4(b), Legistar file 26-683) sets different amounts ('Water Heater Replacement – Permit Center 0.25 x # of units $52'); its adoption was not confirmed, so it is not cited. Reach codes: Ord. No. 31257 (Council Agenda 10/28/2025 Item 8.2(b)) repealed SJMC 24.10 Parts 2 and 3 and 24.12 Parts 2 through 8, the city's earlier local green building and Energy Code amendments. A proposed Existing Single-Family Building Reach Code (Legistar files 25-803 and 25-942) would have required a heat pump when an air conditioner is replaced or added, and electric-ready wiring near gas appliances. An unofficial meeting summary (citizenportal.ai) reports 'The motion failed after a 5–4 recorded vote and did not take effect.' It is not cited, and its adoption status was not confirmed from an official record. The July 21, 2025 staff memo (file 25-803) says AB 130 prohibits new residential building standards, including reach codes, 'from October 1, 2025, through June 1, 2031.' Inferred, not quoted: no San Jose rule found requires a heat pump or all-electric replacement in an existing home. Params: like_for_like does not change the verdict for a single-family home or duplex. The Water Heaters page uses like-for-like only for its multifamily and commercial online path, which this record does not model. Electric water heaters: the page says an electrical permit 'may also be required' depending on the type and that 'All new electrical work requires an electrical permit'. It does not say whether a plug-for-plug electric replacement on an existing circuit needs one, so the electric outcome ties the electrical permit to new electrical work. Fee quote fee_wh comes from the Special and Miscellaneous Fees section; whether it also applies to the plumbing sub-trade issuance fee was not confirmed. docs_required is empty because the city lists documents only for the Standard Plan Review path.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes

## Window or door replacement (`window-door`): draft

**Summary.** In San Jose, a retrofit window set into the existing opening without touching the frame, flashing, or exterior wall finish needs no building permit, unless the home is on the Historic Resources Inventory.

| # | When | Verdict | Explanation | Cites |
|---|---|---|---|---|
| 1 | property is on a historic register: yes | REQUIRED | On a property listed on the Historic Resources Inventory, even a retrofit window needs a permit, and Planning clearance comes first. | c2, c6, c12 |
| 2 | changes framing or structure: yes | REQUIRED | Altering the window frame (header, studs, sill, or supports), for example to repair damage or lower the sill for egress, requires a building permit. | c3, c7 |
| 3 | fits the existing opening: no | REQUIRED | Changing the opening size alters the window frame, and only a retrofit window installed within the existing opening is exempt. | c2, c3, c7 |
| 4 | changes the flashing or nailing fin: yes | REQUIRED | Altering the window flashing, including removing the nailing fin, requires a building permit. | c4 |
| 5 | removes or changes the exterior finish: yes | REQUIRED | Removing exterior wall finish such as stucco to take out a window requires a building permit. | c5 |
| 6 | fits the existing opening: yes and changes framing or structure: no and changes the flashing or nailing fin: no and removes or changes the exterior finish: no and property is on a historic register: no | NOT_REQUIRED | A retrofit window installed within the existing opening, with no change to the frame, flashing, or exterior wall finish, on a property not on the Historic Resources Inventory, needs no building permit. | c1, c2, c8 |

**Otherwise:** REQUIRED. If the window is not a pure retrofit into the existing opening, or you are unsure about the frame, flashing, exterior finish, or historic status, plan on a building permit. (c1, c3, c4, c5, c6)

**Permit types:** Building permit (Simple Projects Service for qualifying residential properties; Standard Plan Review otherwise)

**Fee note:** The FY 2025-26 fee schedule (effective August 11, 2025) charges residential exterior alterations, windows included, a base permit issuance fee of $227 and a base plan review fee of $325. This is the latest archived copy; a FY 2026-27 schedule may now apply, so check sanjoseca.gov/buildingfees.

- Note: Even without a permit, the replacement window must meet current construction standards. (c11)
- Note: New glazing must be safety (tempered or similar) glass when the opening is in a hazardous location under current new-construction standards. (c9)
- Note: Replacement windows must meet new-construction size rules, including emergency egress; sleeping-room and basement windows need at least a 5.7 sq. ft. opening. (c10, c17)
- Note: Historic properties need a Planning clearance, or possibly a Historic Preservation permit, before the building permit application. (c12)
- Note: In a Planned Development zone, replacements must follow the zone architectural standards and any HOA CC&Rs. (c16)
- Note: Qualifying residential projects use the Simple Projects Service, which needs no plans. (c13)
- Note: Inspections are listed on the Permit Card. (c14)
- Note: Fee details come from the FY 2025-26 schedule and may have changed. (c15)
- Note: Bring a completed Building Permit Application, Form 311 if the owner is applying, and any required Planning clearance; Standard Plan Review also needs a site plan. (c18, c19, c20, c21)

**Citations**

- `c1` San Jose Permit Center, Window Replacements (updated 04/14/2026), <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > If simply installing a retrofit window, a building permit is not required.

- `c2` San Jose Permit Center, Window Replacements (updated 04/14/2026), Definitions, <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > Retrofit window - A retrofit window is one that is installed within the existing opening with no alterations to the surrounding window frame or flashing. If the property is on the City's Historic Resources Inventory, then a retrofit window requires a permit.

- `c3` San Jose Permit Center, Window Replacements (updated 04/14/2026), <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > The window frame is altered, such as to handle damage repair or to lower the sill to comply with egress requirements.

- `c4` San Jose Permit Center, Window Replacements (updated 04/14/2026), <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > The window flashing is altered, including when removing the nailing fin.

- `c5` San Jose Permit Center, Window Replacements (updated 04/14/2026), <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > The exterior wall finish is removed, such as when removing stucco to remove a window.

- `c6` San Jose Permit Center, Window Replacements (updated 04/14/2026), <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > The property is on the City’s Historic Resources Inventory.

- `c7` San Jose Permit Center, Window Replacements (updated 04/14/2026), Definitions, <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > Window frame - Consists of the header, king stud, cripple stud, sill, and associated supports.

- `c8` San Jose Permit Center, When Is a Building Permit Required? (updated 06/12/2025), Other exemptions, window bullet, <https://web.archive.org/web/20260813091205/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/when-is-a-building-permit-required>

  > Window replacements that do not involve any kind of alteration to the framing, flashing, or exterior wall.

- `c9` San Jose Permit Center, Window Replacements (updated 04/14/2026), Requirements for All Window Replacements, <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > Safety glass. New glazing in existing openings must be safety glass if the opening is in a hazardous location as defined in current standards for new construction.

- `c10` San Jose Permit Center, Window Replacements (updated 04/14/2026), Requirements for All Window Replacements, <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > Window size. The replacement window must meet size regulations that apply to new construction, including the egress size required for emergency exit.

- `c11` San Jose Permit Center, Window Replacements (updated 04/14/2026), Requirements for All Window Replacements, <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > Whether or not a building permit is required, the replacement window must conform to current construction standards, including:

- `c12` San Jose Permit Center, Window Replacements (updated 04/14/2026), Window Replacements on Historic Properties, <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > If yes, any kind of window replacement will require a Planning clearance or possibly a Historic Preservation permit or permit adjustment. This step must be accomplished BEFORE applying for the building permit.

- `c13` San Jose Permit Center, Window Replacements (updated 04/14/2026), How to Apply, <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > Residential Properties - Use the Simple Projects Service if your project meets the qualifications. No plans are required.

- `c14` San Jose Permit Center, Window Replacements (updated 04/14/2026), Inspections, <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > You will be issued a Permit Card that lists required inspections.

- `c15` San Jose Building Division Fee Schedule FY 2025-26 (effective 08/11/2025), Building Residential Fees, exterior and/or site alterations, <https://web.archive.org/web/20251019175438/https://www.sanjoseca.gov/home/showpublisheddocument?id=26047>

  > Exterior and/or site alterations, such (but not limited to) an accessory structure (shed, etc.), balconies and decks, porches, windows, pools, etc. will be charged a base permit issuance fee of $227 and a base plan review fee of $325.

- `c16` San Jose Permit Center, Window Replacements (updated 04/14/2026), Window Replacements in Planned Development Zones, <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > If yes, you must adhere to the architectural standards of the PD Zone and any HOA CCR rules.

- `c17` San Jose Permit Center, Window Replacements (updated 04/14/2026), Requirements for All Window Replacements, <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > Minimum 5.7 sq. ft. opening*

- `c18` San Jose Permit Center, Window Replacements (updated 04/14/2026), Simple Projects Service, Bring, <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > Form 311 Owner-Builder Acknowledgement and Verification of Information Form - Bring only if the property owner is the permit applicant.

- `c19` San Jose Permit Center, Window Replacements (updated 04/14/2026), Simple Projects Service, Bring, <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > If a historical property or in a Planned Development Zone, bring the required Planning clearance or permit.

- `c20` San Jose Permit Center, Window Replacements (updated 04/14/2026), Standard Plan Review Service, <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > Site Plan - Minimum 18” x 24” sheet. Show:

- `c21` San Jose Permit Center, Window Replacements (updated 04/14/2026), Simple Projects Service, Bring, <https://web.archive.org/web/20260514012915/https://www.sanjoseca.gov/businesses/development-services-permit-center/start-your-project/window-replacements>

  > Completed Building Permit Application - See instructions.

**Researcher notes.** Doors: no San Jose source found addresses exterior or interior door replacement. The Window Replacements page covers windows only, and door replacement is not in the SJMC 24.02.120 exemption list. This record therefore decides windows only; a door swap falls to the default (REQUIRED) without a door-specific source. Confirm with the Permit Center before relying on it for doors. Window exemption source: the window exemption appears on the city pages (c1, c8) but not in the SJMC 24.02.120 list (2025 ordinance), so it rests on Building Division guidance rather than code text. New params: alters_flashing (boolean, window flashing changed, including removing the nailing fin), removes_exterior_finish (boolean, exterior wall finish such as stucco removed to take out the window), historic_property (boolean, property is on the San Jose Historic Resources Inventory). changes_structure maps to "window frame is altered"; same_size_opening=false is treated as a frame alteration because the city defines the frame as the header, studs, sill, and supports around the opening. Energy: the Window Replacements page states no Title 24 energy (U-factor) requirement, so none is recorded. Fee: the exterior-alteration base fee in the FY 2025-26 schedule names windows; a newer schedule version linked from the fees page was not archived. Access: sanjoseca.gov returned HTTP 403 (Akamai "Access Denied") to curl and WebFetch, robots.txt included. The robots.txt read from a Wayback snapshot (20260501) disallows only /admin and *.asmx paths for User-agent *, and the City E-Government Policy (Administrative Policy 1.7.5, home/showdocument?id=17869) contains no restriction on automated access or copying. City page quotes therefore come from raw Internet Archive captures (the id_ form of each source_url, same timestamp), not from the live site. SJMC text comes from the 2025 code-adoption ordinance on sanjose.legistar.com (no robots.txt, no terms page found); Municode was not used because its Terms and Conditions of Use say: "You may not copy, modify, reproduce, republish, distribute, display, or transmit for commercial, non-profit or public purposes all or any portion of this Website, except to the extent permitted by these Terms and Conditions of Use." Code edition: San Jose adopted the 2025 California codes effective January 1, 2026 (Adopted Building Codes page, Wayback 20260318). The ordinance PDF is the 10/16/2025 council draft with redline. Legistar shows it passed for publication 10/28/2025 as Ordinance No. 31256 and listed for final adoption on the 11/18/2025 agenda (file 25-1187); the signed final ordinance was not retrieved. Only ordinance passages with no redline marks (checked visually on rendered pages 8-12) are quoted. Section number: the When Is a Building Permit Required? page (updated 06/12/2025) says "Municipal Code Section 24.02.110 lists all exempt projects", but the ordinance codifies "24.02.120 Building Permit Exemptions"; this record cites 24.02.120. San Jose does not adopt CRC Chapter 1, Division II (SJMC 24.09.110 A.6, unchanged in the 2025 ordinance), so CRC R105.2 is not the operative exemption list in San Jose; SJMC 24.02.120-24.02.150 are.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes
