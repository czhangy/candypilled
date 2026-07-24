# PokemonPanel

A compact, fully-controlled panel for the damage calculator that
displays/edits the currently selected box Pokémon's battle-relevant
details: species name and level in a combined row, nature, ability, status
condition, stat spread (base/IV/EV/stage/total), and moves. All editable
values and their change handlers are owned by `CalcTab` — this component
holds no state of its own beyond derived display values. The Pokémon itself
is selected via `BoxSelectPanel`; the selected `CaughtPokemon` is passed in
as `caught`.

## Props

| Prop              | Type                                                                           | Required | Default | Description                                                               |
| ----------------- | ------------------------------------------------------------------------------ | -------- | ------- | ------------------------------------------------------------------------- |
| `abilityName`     | `string`                                                                       | Yes      | -       | The current ability                                                       |
| `boosts`          | `Record<Exclude<keyof StatValues, 'hp'>, number>`                              | Yes      | -       | The current in-battle stat stage boosts (-6..6)                           |
| `caught`          | `CaughtPokemon`                                                                | No       | -       | The selected box Pokémon; absent renders an empty state                   |
| `evs`             | `StatValues`                                                                   | Yes      | -       | The current EVs                                                           |
| `game`            | `Game`                                                                         | Yes      | -       | The current game; its `generation` resolves base stats/ability/move lists |
| `hideEvs`         | `boolean`                                                                      | Yes      | -       | Whether to omit the EV column (the global "Hide EVs" setting)             |
| `ivs`             | `StatValues`                                                                   | Yes      | -       | The current IVs                                                           |
| `level`           | `number`                                                                       | Yes      | -       | The current level                                                         |
| `moves`           | `string[]`                                                                     | Yes      | -       | The current 4 move slots                                                  |
| `nature`          | `Nature`                                                                       | Yes      | -       | The current nature                                                        |
| `onAbilityChange` | `(value: string) => void`                                                      | Yes      | -       | Called when the ability dropdown changes                                  |
| `onBoostChange`   | `(stat: Exclude<keyof StatValues, 'hp'>, value: string) => void`               | Yes      | -       | Called when a stat's stage dropdown changes                               |
| `onEvChange`      | `(stat: keyof StatValues, event: React.ChangeEvent<HTMLInputElement>) => void` | Yes      | -       | Called when an EV input changes                                           |
| `onIvChange`      | `(stat: keyof StatValues, event: React.ChangeEvent<HTMLInputElement>) => void` | Yes      | -       | Called when an IV input changes                                           |
| `onLevelChange`   | `(event: React.ChangeEvent<HTMLInputElement>) => void`                         | Yes      | -       | Called when the level input changes                                       |
| `onMoveChange`    | `(index: number, value: string) => void`                                       | Yes      | -       | Called when a move slot changes                                           |
| `onNatureChange`  | `(value: string) => void`                                                      | Yes      | -       | Called when the nature dropdown changes                                   |
| `onStatusChange`  | `(value: string) => void`                                                      | Yes      | -       | Called when the status dropdown changes                                   |
| `status`          | `string`                                                                       | Yes      | -       | The current battle status condition                                       |

## Computations

- `baseStats` / `totalStats` — base stats resolved via `PokemonHelpers` for
  `game.generation`; totals computed via `StatHelpers.calculateStats` from
  base stats and the current `level`/`ivs`/`evs`/`nature`
- `abilityOptions` — every ability introduced at or before `game.generation`,
  via `AbilityHelpers.getAllAbilities` (not restricted to the selected
  species, for freeform theorycrafting)
- `natureOptions` — every value of the `Nature` enum
- `moveOptions` — every move introduced at or before `game.generation`, via
  `MoveHelpers.getAllMoves` (not restricted to the selected species'
  learnset, for freeform theorycrafting)
