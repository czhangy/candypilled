# StarterSelectModal

A modal shown when starting a new run, prompting the user to choose a
starter Pokemon before the run is created. It has two steps: first, a
two-column layout pairs a vertical list of starter sprites
(`StarterSelect`) on the left with a `PokedexTile` on the right previewing
whichever starter is picked, with the left column pinned in place as the
tile's content scrolls past it, and a "Select" button at the bottom
right of the modal; clicking it advances to the second step, a
`PokemonForm` (species field omitted, fixed to the chosen starter;
level, ability, and moves fields hidden, defaulting to level 5 and the
species' first ability) for setting the chosen starter's nature and IVs.
The modal's title switches from "Choose your starter" to the chosen
starter's name on this step. A "Back" link above the form returns to the
first step without losing the prior selection. Submitting the form calls
`onSelect` with the full caught-Pokemon details, located at `"Starter"`
if the global "Starter As Separate Encounter" setting is enabled,
otherwise at the name of `game`'s wired location whose encounters use
the "starter" method (i.e. the actual starting route).

## Props

| Prop       | Type                               | Required | Default | Description                                                                       |
| ---------- | ---------------------------------- | -------- | ------- | --------------------------------------------------------------------------------- |
| `game`     | `Game`                             | Yes      | -       | The game the run belongs to, supplying its starters, accent color, and generation |
| `onSelect` | `(starter: CaughtPokemon) => void` | Yes      | -       | Called with the confirmed starter's full details                                  |
| `onClose`  | `() => void`                       | Yes      | -       | Called when the modal is dismissed without choosing                               |

## State

| State             | Type                  | Initial value | Description                                                                                                          |
| ----------------- | --------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------- |
| `activeStarter`   | `string \| null`      | `null`        | The starter currently chosen from `StarterSelect`                                                                    |
| `speciesOverride` | `string \| undefined` | `undefined`   | The species being previewed via an evolution line click in `PokedexTile`, if any                                     |
| `chosenSpecies`   | `string \| null`      | `null`        | The species confirmed via the "Select" button; when set, the modal shows `PokemonForm` instead of the selection step |

## Computations

- `variant` — the game's slug, used to resolve sprites in
  `StarterSelect` and `PokedexTile`
- `chosenSpeciesName` — `chosenSpecies`'s canonical display name,
  resolved via `PokemonHelpers`; shown as the modal's title on the
  `PokemonForm` step
- `defaultSpecies` — `activeStarter` if set, otherwise
  `speciesOverride`; the species the "Select" button confirms, and
  whose absence disables it
- `separateStarterEncounter` — the global "Starter As Separate
  Encounter" setting's current value, read from `localStorage` via
  `SettingsHelpers`
- `starterLocation` — `"Starter"` when `separateStarterEncounter` is
  enabled, otherwise `game`'s starting route name (resolved via
  `EncounterHelpers.getStarterLocationName`)

## Handlers

- **On starter select** — sets `activeStarter` to the clicked starter
  and clears `speciesOverride`
- **On `PokedexTile` evolution select** — sets `speciesOverride` to the
  clicked evolution stage's species
- **On "Select" click** — sets `chosenSpecies` to `defaultSpecies`'s
  canonical name, advancing to the `PokemonForm` step
- **On "Back" click** — clears `chosenSpecies`, returning to the
  selection step
- **On `PokemonForm` submit** — calls `onSelect` with the submitted
  details plus `location: starterLocation` and a `status` of
  `PokemonStatus.Alive`
