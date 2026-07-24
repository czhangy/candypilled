# FieldEffectsPanel

The damage calculator's field effects panel, positioned between the
attacker and defender columns: global weather/terrain plus every
`@smogon/calc` global toggle (Critical Hit, Gravity, Magic Room, Wonder
Room, Aura Break, Fairy Aura, Dark Aura, and the four Ruin abilities), and
each side's full set of screens/hazards/conditions (Stealth Rock,
Steelsurge, Spikes, Reflect, Light Screen, Aurora Veil, Tailwind, Helping
Hand, Protect, Leech Seed, Salt Cure, Foresight, Flower Gift, Power Trick,
Friend Guard, Battery, Power Spot, Steely Spirit, Wildfire, Cannonade,
Volcalith, Vinelash, and Switching Out). Nothing is scoped out for being
niche — every boolean `Field`/`Side` option `@smogon/calc` exposes is
represented (Critical Hit maps to the calculated move's `isCrit` option
rather than a `Field` property, but is grouped with the other global
toggles since it isn't a per-side concept). Fully controlled — the field
state and its change handler are owned by `CalcTab`. Every option/toggle is
filtered by `generation`, since these mechanics were introduced (and in a
few cases removed) across different generations (e.g. Aurora Veil is Gen
7+, Terrain is Gen 6+, Hail is replaced by Snow in Gen 9).

## Props

| Prop         | Type                              | Required | Default | Description                                                            |
| ------------ | --------------------------------- | -------- | ------- | ---------------------------------------------------------------------- |
| `field`      | `CalcFieldState`                  | Yes      | -       | The field's current editable state                                     |
| `generation` | `number`                          | Yes      | -       | The generation to gate option/toggle availability by                   |
| `onChange`   | `(field: CalcFieldState) => void` | Yes      | -       | Called with the fully updated field state whenever any control changes |

## Computations

- `isAvailable(introducedInGeneration, removedInGeneration?)` — whether a
  weather/terrain option or toggle applies at `generation`
- `weatherOptions` / `terrainOptions` / `globalToggles` /
  `sideConditionToggles` — `WEATHER_OPTIONS`/`TERRAIN_OPTIONS`/
  `GLOBAL_TOGGLES`/`SIDE_CONDITION_TOGGLES` filtered via `isAvailable`;
  `spikes` is rendered separately per side as a 0-3 Dropdown since it isn't
  boolean
- `isTerrainAvailable` — whether `terrainOptions` has more than just
  "None"; hides the Terrain field entirely for pre-Gen-6 generations
