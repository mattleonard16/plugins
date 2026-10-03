export type ParamDef =
  | { name: string; type: "number"; unit: string; label: string }
  | { name: string; type: "boolean"; label: string }
  | { name: string; type: "enum"; options: readonly string[]; label: string };

export type ProjectDef = {
  slug: string;
  display_name: string;
  params: readonly ParamDef[];
};

const num = (name: string, unit: string, label: string): ParamDef => ({ name, type: "number", unit, label });
const bool = (name: string, label: string): ParamDef => ({ name, type: "boolean", label });
const oneOf = (name: string, options: readonly string[], label: string): ParamDef => ({ name, type: "enum", options, label });

const remodelParams = [
  bool("cosmetic_only", "only finish work: paint, tile, flooring, cabinets, countertops"),
  bool("replaces_fixtures_in_place", "replaces fixtures or appliances in their existing locations"),
  bool("mechanical_work", "includes exhaust fan, range hood, or other ducted ventilation work"),
  bool("moves_or_adds_plumbing", "moves or adds plumbing"),
  bool("electrical_work", "includes electrical work"),
  bool("structural_changes", "changes walls or structure"),
] as const;

// Param names are the contract between rule files and tool input. A rule may
// only reference params listed here; validate-data enforces that.
export const PROJECTS: readonly ProjectDef[] = [
  {
    slug: "deck",
    display_name: "Deck",
    params: [
      num("area_sqft", "sq ft", "deck area"),
      num("height_above_grade_in", "in", "deck height above grade"),
      bool("attached_to_dwelling", "attached to the house"),
      bool("serves_exit_door", "serves an exit door"),
      bool("serves_door_landing", "serves as a landing for any door"),
    ],
  },
  {
    slug: "fence",
    display_name: "Fence or wall",
    params: [
      num("height_ft", "ft", "fence height"),
      oneOf("material", ["masonry_or_concrete", "other"], "material"),
      oneOf("location", ["front_setback", "street_side_yard", "side_or_rear"], "location on the lot"),
    ],
  },
  {
    slug: "shed",
    display_name: "Shed or accessory structure",
    params: [
      num("floor_area_sqft", "sq ft", "floor area"),
      num("stories", "", "number of stories"),
      bool("has_electrical", "has electrical"),
      bool("has_plumbing", "has plumbing"),
    ],
  },
  {
    slug: "patio-cover",
    display_name: "Patio cover or pergola",
    params: [
      num("area_sqft", "sq ft", "covered area"),
      bool("attached_to_dwelling", "attached to the house"),
      bool("enclosed_walls", "has enclosing walls"),
      bool("has_electrical", "has electrical"),
      bool("has_plumbing", "has plumbing"),
    ],
  },
  {
    slug: "re-roof",
    display_name: "Re-roof",
    params: [
      oneOf("scope", ["repair", "full_replacement"], "repair or full replacement"),
      num("percent_of_roof", "%", "share of the existing roof repaired, replaced, or overlaid in any 12 months"),
      bool("involves_framing", "touches the roof framing"),
    ],
  },
  {
    slug: "window-door",
    display_name: "Window or door replacement",
    params: [
      bool("same_size_opening", "fits the existing opening"),
      bool("changes_structure", "changes framing or structure"),
      bool("alters_flashing", "changes the flashing or nailing fin"),
      bool("removes_exterior_finish", "removes or changes the exterior finish"),
      bool("historic_property", "property is on a historic register"),
    ],
  },
  {
    slug: "water-heater",
    display_name: "Water heater",
    params: [
      oneOf("fuel", ["gas", "electric", "heat_pump"], "fuel type"),
      bool("like_for_like", "same type and location as the old unit"),
    ],
  },
  {
    slug: "hvac",
    display_name: "HVAC replacement",
    params: [
      bool("like_for_like", "same type and location as the old unit"),
      bool("adds_or_changes_ductwork", "adds or changes ductwork"),
    ],
  },
  { slug: "electrical-panel", display_name: "Electrical panel upgrade", params: [] },
  {
    slug: "ev-charger",
    display_name: "EV charger",
    params: [
      oneOf("install_type", ["plug_into_existing_outlet", "new_circuit_or_hardwired"], "installation type"),
      oneOf("charger_level", ["level_1_120v", "level_2_240v"], "charger level"),
    ],
  },
  {
    slug: "solar",
    display_name: "Rooftop solar",
    params: [num("system_size_kw", "kW AC", "system size (AC nameplate rating)"), bool("battery_storage", "includes battery storage")],
  },
  { slug: "kitchen-remodel", display_name: "Kitchen remodel", params: remodelParams },
  { slug: "bathroom-remodel", display_name: "Bathroom remodel", params: remodelParams },
  {
    slug: "retaining-wall",
    display_name: "Retaining wall",
    params: [
      num("height_ft", "ft", "wall height, bottom of footing to top"),
      num("exposed_height_ft", "ft", "wall height above existing grade"),
      bool("supports_surcharge", "holds back a slope, driveway, or building load"),
    ],
  },
  { slug: "adu", display_name: "ADU (accessory dwelling unit)", params: [] },
];

const bySlug = new Map(PROJECTS.map((p) => [p.slug, p]));

export function getProject(slug: string): ProjectDef | undefined {
  return bySlug.get(slug);
}
