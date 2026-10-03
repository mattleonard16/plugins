# Rules to verify: California

Generated from `data/rules`. To approve a rule after checking it: `pnpm verify-rule <jurisdiction> <project> --by <your name>`.

## EV charger (`ev-charger`): draft

**Summary.** In California, cities and counties must approve EV charging station installations through a building permit or similar nondiscretionary permit, using an expedited checklist process.

**Otherwise:** REQUIRED. State law requires cities and counties to approve applications to install EV charging stations through a building permit or similar nondiscretionary permit, with review limited to health and safety. The statute does not address plugging a portable charger into an existing outlet; local electrical permit exemptions decide that case. (g7_b1, g7_b3, g7_i3)

**Permit types:** Building permit or similar nondiscretionary permit

- Note: Every city and county had to adopt an expedited, checklist-based permit process for EV charging stations by September 30, 2016 or 2017, depending on population. (g7_g1)
- Note: For 1 to 25 chargers at one site, state law deems an application complete 5 business days after submission, and approved 20 business days after it is deemed complete, when the statute's other conditions are met. (g71_b1, g71)
- Note: A city or county cannot make permit approval depend on approval by a homeowners association. (g7_h)
- Note: An owner who builds or improves a structure on their own property can be exempt from state contractor licensing under the conditions in B&P Code §7044; this is a licensing exemption, not a permit exemption. (bpc7044)

**Citations**

- `g7_b1` Cal. Gov. Code §65850.7(b)(1), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.7.>

  > A city, county, or city and county shall administratively approve an application to install electric vehicle charging stations through the issuance of a building permit or similar nondiscretionary permit.

- `g7_b3` Cal. Gov. Code §65850.7(b)(3), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.7.>

  > Review of an application to install an electric vehicle charging station or hydrogen-fueling station shall be limited to the building official’s review of whether it meets all health and safety requirements of local, state, and federal law.

- `g7_i3` Cal. Gov. Code §65850.7(i)(3), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.7.>

  > “Electric vehicle charging station” or “charging station” means any level of electric vehicle supply equipment station that is designed and built in compliance with Article 625 of the California Electrical Code, as it reads on the effective date of this section, and delivers electricity from a source outside an electric vehicle into a plug-in electric vehicle.

- `g7_g1` Cal. Gov. Code §65850.7(g)(1)(A), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.7.>

  > On or before September 30, 2016, every city, county, or city and county with a population of 200,000 or more residents, and, on or before September 30, 2017, every city, county, or city and county with a population of less than 200,000 residents, shall, in consultation with the local fire department or district and the utility director, if the city, county, or city and county operates a utility, adopt an ordinance, consistent with the goals and intent of this section, that creates an expedited, streamlined permitting process for electric vehicle charging stations. In developing an expedited permitting process, the city, county, or city and county shall adopt a checklist of all requirements with which electric vehicle charging stations shall comply to be eligible for expedited review.

- `g71_b1` Cal. Gov. Code §65850.71(b)(1), (c)(1), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.71.>

  > An application to install an electric vehicle charging station submitted to the building official of a city, county, or city and county shall be deemed complete if, after the applicable time period described in paragraph (2) has elapsed, both of the following are true: ... An application to install an electric vehicle charging station shall be deemed approved if the applicable time period described in paragraph (2) has elapsed and all of the following are true:

- `g71` Cal. Gov. Code §65850.71(b)(2)(A), (c)(2)(A), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.71.>

  > Five business days after submission of the application to the city, county, or city and county, if the application is for at least 1, but not more than 25 electric vehicle charging stations at a single site. ... Twenty business days after the application was deemed complete, if the application is for at least 1, but not more than 25 electric vehicle charging stations at a single site.

- `g7_h` Cal. Gov. Code §65850.7(h), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.7.>

  > A city, county, or city and county shall not condition approval for any electric vehicle charging station or hydrogen-fueling station permit on the approval of the station by an association, as that term is defined in Section 4080 of the Civil Code.

- `bpc7044` Cal. Bus. & Prof. Code §7044(a)(1), (a)(3), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7044.>

  > This chapter does not apply to any of the following: (1)An owner who builds or improves a structure on his or her property, provided that both of the following conditions are met: (A)None of the improvements are intended or offered for sale. (B)The property owner personally performs all of the work or any work not performed by the owner is performed by the owner’s employees with wages as their sole compensation. ... (3)A homeowner improving his or her principal place of residence or appurtenances thereto, provided that all of the following conditions exist: (A)The work is performed prior to sale. (B)The homeowner has actually resided in the residence for the 12 months prior to completion of the work. (C)The homeowner has not availed himself or herself of the exemption in this paragraph on more than two structures more than once during any three-year period.

**Researcher notes.** Code text not retrieved: CRC §R105.2, the CPC and CMC Chapter 1 exempt-work sections, and the CEC permit provisions. ICC (codes.iccsafe.org) was not fetched. ICC's terms (https://www.iccsafe.org/terms-of-use/) prohibit 'use of data mining, robots, or similar data gathering and extraction tools with any Service or E-Content'. https://www.dgs.ca.gov/BSC/Codes returned HTTP 403. IAPMO's epubs reader is a JavaScript app and was not used, so no CPC or CMC text was pulled from it. energy.ca.gov Conditions of Use (https://www.energy.ca.gov/conditions-of-use) say 'No material or information from this site may be copied, reproduced, republished, uploaded, posted, transmitted, or distributed except as authorized' and 'Use or modification of these materials or information for commercial or profit-making purposes is prohibited', so Energy Code material was not used. For that reason no ca-baseline file was written for water-heater, hvac, or electrical-panel. Statutes: leginfo.legislature.ca.gov robots.txt is 'User-agent: * / Disallow: /', so statute text came from the Legislative Counsel's official bulk database, https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (listed 2026-09-27; LAW_SECTION_TBL files read with HTTP range requests). source_url points to each section's leginfo display page, which was not fetched. Quotes collapse whitespace, and subdivision labels run into the text as the database stores them, for example '(A)A solar'. B&P Code §7044 exempts qualifying owners from contractor licensing; it does not exempt the work from permits. Default verdict: REQUIRED is the conservative reading for both install types. Gov. Code §65850.7 covers applications 'to install' charging stations and defines a charging station as equipment built to CEC Article 625; it says nothing about a portable cord set plugged into an existing receptacle. The model-code exemption for connecting portable equipment could not be read (see above). San Jose's Level 1 rule is in data/rules/san-jose/ev-charger.json. Version: the quoted §65850.7 is the version effective January 1, 2025 (Stats. 2024, Ch. 607), which 'shall remain in effect only until January 1, 2030'; the database notes a later operative version, which was not reviewed.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes

## Shed or accessory structure (`shed`): draft

**Summary.** Under the 2025 California Residential Code, a one-story detached shed of 120 square feet or less is exempt from a building permit; larger or multi-story sheds need one, and your city may set stricter rules.

| # | When | Verdict | Explanation | Cites |
|---|---|---|---|---|
| 1 | floor area at most 120 sq ft and number of stories at most 1 and has electrical: no and has plumbing: no | NOT_REQUIRED | A one-story detached accessory structure (other than a storm shelter) with a floor area of 120 square feet or less is exempt from a building permit under the state code. | c1, c2 |
| 2 | floor area at most 120 sq ft and number of stories at most 1 | DEPENDS | The structure itself is exempt from a building permit, but the exemption covers the building only. Electrical or plumbing work in it is governed by separate rules that this record has not sourced, so ask the local building department. | c1, c2 |

**Otherwise:** REQUIRED. A shed over 120 square feet or more than one story falls outside the state's only exemption for detached accessory structures, so it needs a building permit. (c1, c2)

**Permit types:** Building permit

- Note: Being exempt from a permit does not allow work that breaks the code or other local laws. (c1)
- Note: In wildland-urban interface (fire hazard) areas, a small shed exempt from a permit may still have to meet the California Wildland-Urban Interface Code (Title 24, Part 7). (c4)

**Citations**

- `c1` 2025 CRC §R105.2 (preamble), as printed in the SFM 05/24 Final Express Terms for the 2025 CRC, BSC Commission meeting 2025-02-26, <https://www.dgs.ca.gov/-/media/Divisions/BSC/03-Rulemaking/2024-Triennial-Cycle/Commission-Meetings/2025-02-26/SFM-05-24-FET-PT2_5.docx>

  > R105.2 Work exempt from permit. Exemption from permit requirements of this code shall not be deemed to grant authorization for any work to be done in any manner in violation of the provisions of this code or any other laws or ordinances of this jurisdiction. Permits shall not be required for the following:

- `c2` 2025 CRC §R105.2 Building item 1, as printed in the SFM 05/24 Final Express Terms for the 2025 CRC, BSC Commission meeting 2025-02-26, <https://www.dgs.ca.gov/-/media/Divisions/BSC/03-Rulemaking/2024-Triennial-Cycle/Commission-Meetings/2025-02-26/SFM-05-24-FET-PT2_5.docx>

  > 1. Other than storm shelters, one-story detached accessory structures, provided that the floor area does not exceed 120 square feet (11.15 m2).

- `c3` HCD 07/24 Final Express Terms for the 2025 CRC, Item 2 (adoption scope of §R105.2), <https://www.dgs.ca.gov/-/media/Divisions/BSC/03-Rulemaking/2024-Triennial-Cycle/Commission-Meetings/2025-02-26/HCD-07-24-FET-PT2_5.docx>

  > HCD proposes to adopt Chapter 1, Division II, Sections R101.2, R105.2 (Building: 1 – 10 only), R106.1, R106.1.1, R106.1.3, R106.1.4, R106.1.5, R106.2, R109.1, R109.1.1, R109.1.1.1, R109.1.3, R109.1.4, R109.1.4.1, R109.1.4.2, R109.1.5, R109.1.5.1, R109.1.5.2, R109.1.5.3, R109.1.6, R109.1.6.1, and R109.1.6.2 only from the 2024 International Residential Code (IRC) into the 2025 CRC and bring forward existing California amendments from the 2022 CRC into the 2025 CRC without modification.

- `c4` BSC 2025 Summary of California Code Changes (07/2025), CRC Part 2.5 Chapter 1, State Fire Marshal entry for §R105.2, <https://www.dgs.ca.gov/-/media/Divisions/BSC/05-Resources/Guidebooks/2025-Title-24-CA-Code-Changes---New-07-25.pdf>

  > R105.2 Work exempt from permit Updated the pointer to the new CWUIC that is applicable even if the project is exempt from permits.

**Researcher notes.** Edition: 2025 CRC (Title 24 Part 2.5), effective January 1, 2026. San Jose cites the 2025 codes as of Jan. 1, 2026. Source limits: the published 2025 CRC and CBC text is on the ICC viewer (codes.iccsafe.org), which I did not fetch. ICC Terms of Use (https://www.iccsafe.org/about/terms-of-use/) exclude 'use of data mining, robots, or similar data gathering and extraction tools with any Service or E-Content', and say no part of a Service may be reproduced 'on a third-party or government website' without consent. The BSC errata and supplements are also hosted on iccsafe.org, so I skipped them too. Instead, c1 and c2 are quoted from the State Fire Marshal's Final Express Terms on dgs.ca.gov (robots.txt: 'Allow: /'). In that document's legend, upright text is model code and italic text is an existing California amendment. '120 square feet (11.15 m2)' is italic, so it is the California amendment. HCD's 2018 Initial Express Terms (https://www.dgs.ca.gov/-/media/Divisions/BSC/03-Rulemaking/2018-Triennial-Cycle/2018-CAC-Review/BFO/HCD/HCD0418IETPt25.pdf) show it replacing the 2018 IRC's 200 sq ft. I did not check the 2024 IRC model value. The '2' in 'm2' is a superscript in the source. In the same item, 'Section 710A' is struck through and replaced with 'Part 7 California Wildland Urban-Interface Code'. I did not quote that sentence because plain-text extraction mixes the struck and inserted words. Note 2 relies on the BSC summary (c4) instead. c3 (HCD's Final Express Terms) confirms HCD adopted R105.2 Building items 1-10 from the 2024 IRC and carried existing California amendments forward 'without modification'. These are rulemaking documents approved at the BSC meeting of February 26, 2025. I could not compare them with the printed 2025 CRC because the ICC text was not fetched. Not sourced: R105.1 (the general requirement for a permit), so the REQUIRED default rests on R105.2 being the list of exemptions. Also not sourced: the R105.2 Electrical and Plumbing exemption lists, hence the DEPENDS outcome for wired or plumbed sheds. CBC §105.2 (for buildings outside the CRC's scope) was not sourced: HCD's Part 2 Final Express Terms adopt 105.2 Building items 1-13 but do not reprint the text. Local amendments: per docs/DESIGN.md, a state_only answer must turn NOT_REQUIRED into DEPENDS. Cities may tighten this exemption. San Jose, for example, also requires a permit for any electricity or plumbing.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes

## Rooftop solar (`solar`): draft

**Summary.** In California, solar installations need a building permit or similar nondiscretionary permit, and cities and counties must offer faster review for small home systems.

| # | When | Verdict | Explanation | Cites |
|---|---|---|---|---|
| 1 | includes battery storage: yes and system size (AC nameplate rating) at most 38.4 kW AC | REQUIRED | A home solar system up to 38.4 kW AC with a paired battery still needs a permit. Most cities and counties must offer an online, automated platform such as SolarAPP+ that issues permits in real time to a licensed contractor, unless the system configuration is not eligible for SolarAPP+. | g52_b1, g52_b2, g52_c |
| 2 | system size (AC nameplate rating) at most 10 kW AC | REQUIRED | A system no larger than 10 kW AC on a single-family home or duplex, within the local height limit, is a small residential rooftop solar energy system. It still needs a permit, but every city and county must offer an expedited process for it with only one inspection. | g5_b, g5_j3, g5_g1, g5_h |
| 3 | system size (AC nameplate rating) at most 38.4 kW AC | REQUIRED | A home solar system up to 38.4 kW AC needs a permit. Most cities and counties must offer an online, automated platform such as SolarAPP+ that issues permits in real time to a licensed contractor, unless the system configuration is not eligible for SolarAPP+. | g5_b, g52_b1, g52_b2, g52_c |

**Otherwise:** REQUIRED. Cities and counties must approve solar installations through a building permit or similar nondiscretionary permit, with review limited to health and safety requirements. (g5_b)

**Permit types:** Building permit or similar nondiscretionary permit

- Note: A city or county cannot make solar permit approval depend on approval by a homeowners association. (g5_i)
- Note: The automated platform rule does not apply in cities under 5,000 people or in counties under 150,000 people, including each city in those counties. (g52_c)
- Note: An owner who builds or improves a structure on their own property can be exempt from state contractor licensing under the conditions in B&P Code §7044; this is a licensing exemption, not a permit exemption. (bpc7044)

**Citations**

- `g52_b1` Cal. Gov. Code §65850.52(b)(1)(A), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.52.>

  > Pursuant to the compliance schedule in subdivision (c), a city, county, or city and county, in consultation with the local fire department, district, or authority, shall implement an online, automated permitting platform, such as SolarAPP+, that meets both of the following requirements: (A)The platform verifies code compliance and issues permits in real time or allows the city, county, or city and county to issue permits in real time to a licensed contractor for a residential solar energy system that is no larger than 38.4 kilowatts alternating current nameplate rating and a residential energy storage system paired with a residential solar energy system that is no larger than 38.4 kilowatts alternating current nameplate rating.

- `g52_b2` Cal. Gov. Code §65850.52(b)(2), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.52.>

  > A city, county, or city and county is not required to permit an application for a residential solar energy system or a residential energy storage system paired with a residential solar energy system through the online automated permitting platform pursuant to this section if the system configuration is not eligible for SolarAPP+ at the time the application is submitted to the jurisdiction.

- `g52_c` Cal. Gov. Code §65850.52(c), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.52.>

  > A city with a population of fewer than 5,000 and a county with a population of fewer than 150,000, including each city within that county, is exempt from subdivision (b). (2)A city with a population of 50,000 or fewer that is not exempt pursuant to paragraph (1) shall satisfy the requirements of subdivision (b) by September 30, 2024. (3)A city, county, or city and county with a population of greater than 50,000 that is not exempt pursuant to paragraph (1) shall satisfy the requirements of subdivision (b) by September 30, 2023.

- `g5_b` Cal. Gov. Code §65850.5(b), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.5.>

  > A city or county shall administratively approve applications to install solar energy systems through the issuance of a building permit or similar nondiscretionary permit. Review of the application to install a solar energy system shall be limited to the building official’s review of whether it meets all health and safety requirements of local, state, and federal law.

- `g5_j3` Cal. Gov. Code §65850.5(j)(3), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.5.>

  > “Small residential rooftop solar energy system” means all of the following: (A)A solar energy system that is no larger than 10 kilowatts alternating current nameplate rating or 30 kilowatts thermal. (B)A solar energy system that conforms to all applicable state fire, structural, electrical, and other building codes as adopted or amended by the city, county, or city and county and paragraph (3) of subdivision (c) of Section 714 of the Civil Code. (C)A solar energy system that is installed on a single or duplex family dwelling. (D)A solar panel or module array that does not exceed the maximum legal building height as defined by the authority having jurisdiction.

- `g5_g1` Cal. Gov. Code §65850.5(g)(1), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.5.>

  > On or before September 30, 2015, every city, county, or city and county, in consultation with the local fire department or district and the utility director, if the city, county, or city and county operates a utility, shall adopt an ordinance, consistent with the goals and intent of subdivision (a), that creates an expedited, streamlined permitting process for small residential rooftop solar energy systems.

- `g5_h` Cal. Gov. Code §65850.5(h), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.5.>

  > For a small residential rooftop solar energy system eligible for expedited review, only one inspection shall be required, which shall be done in a timely manner and may include a consolidated inspection, except that a separate fire safety inspection may be performed in a city, county, or city and county that does not have an agreement with a local fire authority to conduct a fire safety inspection on behalf of the fire authority.

- `g5_i` Cal. Gov. Code §65850.5(i), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=65850.5.>

  > A city, county, or city and county shall not condition approval for any solar energy system permit on the approval of a solar energy system by an association, as that term is defined in Section 4080 of the Civil Code.

- `bpc7044` Cal. Bus. & Prof. Code §7044(a)(1), (a)(3), <https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7044.>

  > This chapter does not apply to any of the following: (1)An owner who builds or improves a structure on his or her property, provided that both of the following conditions are met: (A)None of the improvements are intended or offered for sale. (B)The property owner personally performs all of the work or any work not performed by the owner is performed by the owner’s employees with wages as their sole compensation. ... (3)A homeowner improving his or her principal place of residence or appurtenances thereto, provided that all of the following conditions exist: (A)The work is performed prior to sale. (B)The homeowner has actually resided in the residence for the 12 months prior to completion of the work. (C)The homeowner has not availed himself or herself of the exemption in this paragraph on more than two structures more than once during any three-year period.

**Researcher notes.** Code text not retrieved: CRC §R105.2, the CPC and CMC Chapter 1 exempt-work sections, and the CEC permit provisions. ICC (codes.iccsafe.org) was not fetched. ICC's terms (https://www.iccsafe.org/terms-of-use/) prohibit 'use of data mining, robots, or similar data gathering and extraction tools with any Service or E-Content'. https://www.dgs.ca.gov/BSC/Codes returned HTTP 403. IAPMO's epubs reader is a JavaScript app and was not used, so no CPC or CMC text was pulled from it. energy.ca.gov Conditions of Use (https://www.energy.ca.gov/conditions-of-use) say 'No material or information from this site may be copied, reproduced, republished, uploaded, posted, transmitted, or distributed except as authorized' and 'Use or modification of these materials or information for commercial or profit-making purposes is prohibited', so Energy Code material was not used. For that reason no ca-baseline file was written for water-heater, hvac, or electrical-panel. Statutes: leginfo.legislature.ca.gov robots.txt is 'User-agent: * / Disallow: /', so statute text came from the Legislative Counsel's official bulk database, https://downloads.leginfo.legislature.ca.gov/pubinfo_2025.zip (listed 2026-09-27; LAW_SECTION_TBL files read with HTTP range requests). source_url points to each section's leginfo display page, which was not fetched. Quotes collapse whitespace, and subdivision labels run into the text as the database stores them, for example '(A)A solar'. B&P Code §7044 exempts qualifying owners from contractor licensing; it does not exempt the work from permits. Units: Gov. Code §§65850.5 and 65850.52 measure size in 'kilowatts alternating current nameplate rating'. The system_size_kw param does not say AC or DC; the tool should ask for the AC rating, because a DC array rating is usually higher. The 10 kW outcome also requires a single-family or duplex dwelling, code conformance, and an array within the local height limit (§65850.5(j)(3)); the explanation states these, but they are not params. Battery: §65850.52 covers 'a residential energy storage system paired with a residential solar energy system'. No statute found sets a separate battery permit threshold; stand-alone batteries are not covered here. Real-time permits under §65850.52 go 'to a licensed contractor'; an owner-builder may need the jurisdiction's standard process. All outcomes are REQUIRED; no state source found exempts any solar installation from a permit.

- [ ] Every quote matches the live official page (swap archive links for official URLs)
- [ ] Every outcome and the default follow from the quotes
