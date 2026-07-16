# PokemonPreview

Displays every recorded attribute of the currently selected caught Pokemon:
a small sprite alongside its level, nature, ability, catch location, and
held item, followed by its calculated stats and a 2x2 grid of its moves.
Its ability and moves link out to their corresponding views in the
Abilities and Moves tabs. A button (labeled "Dead" or "Revive" depending
on current status) lets the Pokemon's status be toggled between alive
and dead.

## Props

| Prop              | Type                               | Required | Default | Description                                                                            |
| ----------------- | ---------------------------------- | -------- | ------- | -------------------------------------------------------------------------------------- |
| `generation`      | `number`                           | Yes      | -       | The game's generation, used to resolve each move's values and the Pokemon's base stats |
| `onSelectAbility` | `(name: string) => void`           | Yes      | -       | Called with the Pokemon's ability name when it's clicked                               |
| `onSelectMove`    | `(name: string) => void`           | Yes      | -       | Called with a move's name when it's clicked                                            |
| `onToggleStatus`  | `(pokemon: CaughtPokemon) => void` | Yes      | -       | Called with the previewed Pokemon when the status button is clicked                    |
| `pokemon`         | `CaughtPokemon`                    | No       | -       | The currently selected caught Pokemon, if any                                          |
| `variant`         | `string`                           | Yes      | -       | The game slug used to resolve the Pokemon's sprite art                                 |

## Computations

- `ability` — the selected ability's name, resolved from `pokemon.ability`
  (a slot number) via `PokemonHelpers.getAbilityName` at `generation`
- `moveSlots` — `pokemon.moves` padded to four entries so empty move slots
  render as placeholder cards
- `normalizeStatValues` — expands a Pokemon's IVs or EVs, which
  `CaughtPokemon` may store as a single flat number or a per-stat
  `StatValues`, into a full `StatValues` for use in stat calculation
- `stats` — the Pokemon's actual stat values, derived from its base stats,
  level, IVs, EVs, and nature via `StatHelpers.calculate`
- `renderStatValues` — renders a Pokemon's calculated stats as a per-stat
  grid
