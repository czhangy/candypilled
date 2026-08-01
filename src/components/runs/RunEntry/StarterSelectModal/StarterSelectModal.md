# StarterSelectModal

A modal shown when starting a new run, prompting the user to choose a
starter Pokémon before the run is created. A two-column layout pairs a
vertical list of starter sprites (`StarterSelect`) on the left with a
`PokedexTile` on the right previewing whichever starter is picked, with
the left column pinned in place as the tile's content scrolls past it,
and a "Select" button at the bottom right of the modal. Clicking it
calls `onSelect` with the chosen starter's full caught-Pokémon details —
genderless, with all IVs at `0` and an unknown nature, since neither is
knowable before the starter is actually caught — located at the name of
`game`'s wired location whose encounters use the "starter" method (i.e.
the actual starting route).

## Props

| Prop       | Type                               | Required | Default | Description                                                                            |
| ---------- | ---------------------------------- | -------- | ------- | -------------------------------------------------------------------------------------- |
| `game`     | `Game`                             | Yes      | -       | The game the run belongs to, supplying its starters, accent/text color, and generation |
| `onSelect` | `(starter: CaughtPokemon) => void` | Yes      | -       | Called with the confirmed starter's full details                                       |
| `onClose`  | `() => void`                       | Yes      | -       | Called when the modal is dismissed without choosing                                    |

## State

| State             | Type                  | Initial value | Description                                                                      |
| ----------------- | --------------------- | ------------- | -------------------------------------------------------------------------------- |
| `activeStarter`   | `string \| null`      | `null`        | The starter currently chosen from `StarterSelect`                                |
| `speciesOverride` | `string \| undefined` | `undefined`   | The species being previewed via an evolution line click in `PokedexTile`, if any |

## Computations

- `variant` — the game's slug, used to resolve sprites in
  `StarterSelect` and `PokedexTile`
- `defaultSpecies` — `activeStarter` if set, otherwise
  `speciesOverride`; the species the "Select" button confirms, and
  whose absence disables it
- `starterLocation` — `game`'s starting route name, resolved via
  `EncounterHelpers.getStarterLocationName`

## Handlers

- **On starter select** — sets `activeStarter` to the clicked starter
  and clears `speciesOverride`
- **On `PokedexTile` evolution select** — sets `speciesOverride` to the
  clicked evolution stage's species
- **On "Select" click** — calls `onSelect` with `defaultSpecies`'s
  first ability, no gender, `0` IVs, level `5`, its moves known at
  level `5`, `Nature.Unknown`, `location: starterLocation`, and a
  `status` of `PokemonStatus.Alive`
