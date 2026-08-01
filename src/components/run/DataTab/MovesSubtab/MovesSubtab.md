# MovesSubtab

The "Moves" subtab of a run page's Data tab. Displays a searchable,
alphabetical list of every move available in the game's generation, the
currently selected move's details, and a panel listing every Pokémon
that learns it, left to right.

## Props

| Prop                  | Type                     | Required | Default | Description                                                                                                        |
| --------------------- | ------------------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| `game`                | `Game`                   | Yes      | -       | The game to resolve moves and their learners from                                                                  |
| `onSelectMove`        | `(slug: string) => void` | Yes      | -       | Called with a move's slug when it's clicked in the list                                                            |
| `onSelectSpeciesLink` | `(slug: string) => void` | Yes      | -       | Called with a Pokémon's slug when it's clicked in the "Learned By" panel; switches to that Pokémon's Pokédex entry |
| `selectedMove`        | `string`                 | No       | -       | The currently selected move's slug, if any; owned by `RunPage` so a move link elsewhere on the page can select it  |

## Computations

- `gameSpecies` — every species obtainable in `game` (or, when the global
  "Show National Dex Data" setting is on, every species in
  `game.generation` regardless of obtainability), resolved via
  `EncounterHelpers.getGameSpecies`
- `availableMoves` — every move introduced at or before `game.generation`
  that at least one of `gameSpecies` learns, sorted alphabetically by name,
  passed to `SearchableList`
- `effectiveMove` — `selectedMove`, defaulting to `availableMoves`' first
  entry when unset, passed to `SearchableList` and `MoveDetail` so a
  detail view is always shown rather than a "no selection" placeholder
- `learnedBy` — every one of `gameSpecies` that learns `effectiveMove` in
  `game.version`, passed to `SpeciesListPanel`
