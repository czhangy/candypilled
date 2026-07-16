# StarterSelectModal

A modal shown when starting a new run, prompting the user to choose a
starter Pokemon before the run is created. It has two steps: first, a
two-column layout pairs a vertical list of starter sprites
(`StarterSelect`) on the left with a `PokedexTile` on the right previewing
whichever starter is picked, with the left column pinned in place as the
tile's content scrolls past it; clicking the tile's "SELECT" button
advances to the second step, a `PokemonForm` (species field omitted,
fixed to the chosen starter; level, ability, and moves fields hidden,
defaulting to level 5 and the species' first ability) for setting the
chosen starter's nature and IVs. The modal's title switches from "Choose your starter" to
the chosen starter's name on this step. A "Back" link above the form
returns to the first step without losing the prior selection. Submitting
the form calls `onSelect` with the full caught-Pokemon details, located
at `"Starter"`.

## Props

| Prop       | Type                               | Required | Default | Description                                                                       |
| ---------- | ---------------------------------- | -------- | ------- | --------------------------------------------------------------------------------- |
| `game`     | `Game`                             | Yes      | -       | The game the run belongs to, supplying its starters, accent color, and generation |
| `onSelect` | `(starter: CaughtPokemon) => void` | Yes      | -       | Called with the confirmed starter's full details                                  |
| `onClose`  | `() => void`                       | Yes      | -       | Called when the modal is dismissed without choosing                               |

## State

| State             | Type                  | Initial value | Description                                                                                                                 |
| ----------------- | --------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `activeStarter`   | `string \| null`      | `null`        | The starter currently chosen from `StarterSelect`                                                                           |
| `speciesOverride` | `string \| undefined` | `undefined`   | The species being previewed via an evolution line click in `PokedexTile`, if any                                            |
| `chosenSpecies`   | `string \| null`      | `null`        | The species confirmed via the tile's "SELECT" button; when set, the modal shows `PokemonForm` instead of the selection step |

## Computations

- `variant` — the game's slug, used to resolve sprites in
  `StarterSelect` and `PokedexTile`
- `chosenSpeciesName` — `chosenSpecies`'s canonical display name,
  resolved via `PokemonHelpers`; shown as the modal's title on the
  `PokemonForm` step

## Handlers

- **On starter select** — sets `activeStarter` to the clicked starter
  and clears `speciesOverride`
- **On `PokedexTile` evolution select** — sets `speciesOverride` to the
  clicked evolution stage's species
- **On `PokedexTile` "SELECT" click** — sets `chosenSpecies` to the
  displayed species, advancing to the `PokemonForm` step
- **On "Back" click** — clears `chosenSpecies`, returning to the
  selection step
- **On `PokemonForm` submit** — calls `onSelect` with the submitted
  details plus `location: "Starter"`
