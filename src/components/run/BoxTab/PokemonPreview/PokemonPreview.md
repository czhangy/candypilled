# PokemonPreview

Displays every recorded attribute of the currently selected caught Pokémon:
a small sprite alongside its name (suffixed with a blue ♂ or pink ♀ gender
symbol, omitted for a genderless species), level, nature, ability,
catch location, and held item, followed by its full evolution
line, its calculated stats, a 2x2 grid of its moves, and its full learnset.
Its ability, held item, and moves link out to their corresponding views
in the Abilities, Items, and Moves tabs, its nature links to its entry
on the Natures page in a new tab (suffixed with its stat effect, e.g.
"[+Atk -SpA]", omitted for a neutral nature), and its catch location links to that
location's card in the Splits tab if the location matches one there
(shown as plain text, with no hover effect, otherwise). Its evolution
line and learnset entries also link out to those species' and moves'
corresponding views. A button
(labeled "Dead" or "Revive" depending on current status) lets the
Pokémon's status be toggled between alive and dead — toggling to dead
also clears its held item (see `BoxTab.md`). If the Pokémon's level exceeds the
current split's level cap, its level is highlighted red. Each stat
boosted by the Pokémon's nature is highlighted red, and each stat
hindered by it is highlighted blue.

## Props

| Prop                | Type                               | Required | Default | Description                                                                            |
| ------------------- | ---------------------------------- | -------- | ------- | -------------------------------------------------------------------------------------- |
| `canSelectLocation` | `boolean`                          | Yes      | -       | Whether the previewed Pokémon's location matches a split, making it clickable          |
| `dataSource`        | `GameDataSource`                   | Yes      | -       | The game's dataset, used to resolve species/move/ability/item data                     |
| `generation`        | `number`                           | Yes      | -       | The game's generation, used to resolve each move's values and the Pokémon's base stats |
| `levelCap`          | `number \| null`                   | Yes      | -       | The current split's level cap, used to highlight an over-leveled Pokémon's level       |
| `onSelectAbility`   | `(slug: string) => void`           | Yes      | -       | Called with the Pokémon's ability slug when it's clicked                               |
| `onSelectItem`      | `(slug: string) => void`           | Yes      | -       | Called with the Pokémon's held item slug when it's clicked                             |
| `onSelectLocation`  | `(location: string) => void`       | Yes      | -       | Called with the Pokémon's catch location when it's clicked                             |
| `onSelectMove`      | `(slug: string) => void`           | Yes      | -       | Called with a move's slug when it's clicked (in the moves grid or the learnset)        |
| `onSelectSpecies`   | `(slug: string) => void`           | Yes      | -       | Called with a species slug when it's clicked in the evolution line                     |
| `onToggleStatus`    | `(pokemon: CaughtPokemon) => void` | Yes      | -       | Called with the previewed Pokémon when the status button is clicked                    |
| `pokemon`           | `CaughtPokemon`                    | No       | -       | The currently selected caught Pokémon, if any                                          |
| `variant`           | `string`                           | Yes      | -       | The game slug used to resolve the Pokémon's sprite art                                 |
| `version`           | `string`                           | Yes      | -       | The game's version, used to resolve its learnset                                       |

## Computations

- `displaySlug` — the species slug actually shown (sprite, name, ability,
  stats), resolved from `pokemon.slug` and `pokemon.heldItem` via
  `PokemonHelpers.getDisplaySlug`; differs from `pokemon.slug` only for a
  species with a held-item form change (e.g. Giratina holding the Griseous
  Orb resolves to Origin Forme) while its evolution options and moves
  stay tied to `pokemon.slug`'s identity
- `abilitySlug` — the selected ability's slug, taken directly from
  `pokemon.ability`
- `abilityName` — the selected ability's display name, resolved from
  `abilitySlug` via `AbilityHelpers`
- `heldItemSlug` — the held item's slug, resolved from `pokemon.heldItem`
- `heldItemName` — the held item's display name, resolved from
  `heldItemSlug` via `ItemHelpers`
- `moveSlots` — `pokemon.moves` padded to four entries so empty move slots
  render as placeholder cards
- `ivs` — the Pokémon's IVs normalized into a full `StatValues` via
  `StatHelpers.normalizeStats`, passed to each `MoveCard` to resolve
  Hidden Power's actual type and reused for `stats`
- `hideTradeEvos` — the global "Disable Trade Evolutions" setting's
  current value, read from `localStorage` via `SettingsHelpers`, passed to
  `EvolutionLine` to filter out trade-only evolutions
- `evolutionLine` — the previewed Pokémon's full evolution family, via
  `EvolutionHelpers.getFullEvolutionLine`, rendered by `EvolutionLine`
- `learnset` — the previewed Pokémon's full learnset for `version`, via
  `PokemonHelpers.getPokemonLearnset`, rendered by `LearnsetList`
- `isOverCap` — whether the previewed Pokémon's `level` exceeds `levelCap`
- `stats` — the Pokémon's actual stat values, derived from its base stats,
  level, IVs, EVs, and nature via `StatHelpers.calculateStats`, with IVs and EVs
  normalized into a full `StatValues` via `StatHelpers.normalizeStats`
- `renderStatValues` — renders a Pokémon's calculated stats as a per-stat
  grid, highlighting each stat red or blue if the Pokémon's nature boosts
  or hinders it, via `NatureHelpers.getNatureModifier`
