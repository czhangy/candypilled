# PokemonPanel

A compact, fully-controlled panel for the damage calculator that
displays/edits a Pokémon's battle-relevant details: species name and level
in a combined row, nature, ability, status condition, stat spread
(base/IV/EV/stage/total), and moves. All editable values and their change
handlers are owned by `CalcTab` — this component holds no state of its own
beyond derived display values. `CalcTab` renders two instances: one for the
player's box Pokémon (species selected via `BoxSelectPanel`) and one for the
opposing trainer's team member (species selected via `TeamSelectPanel`,
which in turn depends on a trainer being selected via `BattleSelectPanel`).
The two instances differ only in which optional props `CalcTab` supplies:
omitting `onEvChange`/`onIvChange` renders that side's EVs/IVs as read-only
(used for the trainer side, whose EVs/IVs are fixed by the battle data),
and omitting `onMoveChange` hides the moves section entirely (used for the
trainer side, since its moveset isn't user-editable). Passing `placeholder`
replaces the entire panel with a message instead of the Pokémon's details
(used for the trainer side before a battle is selected).

## Props

| Prop              | Type                                                                           | Required | Default | Description                                                                             |
| ----------------- | ------------------------------------------------------------------------------ | -------- | ------- | --------------------------------------------------------------------------------------- |
| `abilityName`     | `string`                                                                       | Yes      | -       | The current ability                                                                     |
| `boosts`          | `Record<Exclude<keyof StatValues, 'hp'>, number>`                              | Yes      | -       | The current in-battle stat stage boosts (-6..6)                                         |
| `evs`             | `StatValues`                                                                   | No       | -       | The current EVs; absent renders as though nothing is known (used with no `pokemonName`) |
| `game`            | `Game`                                                                         | Yes      | -       | The current game; its `generation` resolves base stats/ability/move lists               |
| `hideEvs`         | `boolean`                                                                      | Yes      | -       | Whether to omit the EV column (the global "Hide EVs" setting)                           |
| `isTailwind`      | `boolean`                                                                      | Yes      | -       | Whether this Pokémon's side currently has Tailwind active                               |
| `ivs`             | `StatValues`                                                                   | No       | -       | The current IVs                                                                         |
| `level`           | `number`                                                                       | Yes      | -       | The current level                                                                       |
| `moves`           | `string[]`                                                                     | No       | -       | The current 4 move slots; unused when `onMoveChange` is absent                          |
| `nature`          | `Nature`                                                                       | Yes      | -       | The current nature                                                                      |
| `onAbilityChange` | `(value: string) => void`                                                      | Yes      | -       | Called when the ability dropdown changes                                                |
| `onBoostChange`   | `(stat: Exclude<keyof StatValues, 'hp'>, value: string) => void`               | Yes      | -       | Called when a stat's stage dropdown changes                                             |
| `onEvChange`      | `(stat: keyof StatValues, event: React.ChangeEvent<HTMLInputElement>) => void` | No       | -       | Called when an EV input changes; omitting it renders EVs as read-only text              |
| `onIvChange`      | `(stat: keyof StatValues, event: React.ChangeEvent<HTMLInputElement>) => void` | No       | -       | Called when an IV input changes; omitting it renders IVs as read-only text              |
| `onLevelChange`   | `(event: React.ChangeEvent<HTMLInputElement>) => void`                         | Yes      | -       | Called when the level input changes                                                     |
| `onMoveChange`    | `(index: number, value: string) => void`                                       | No       | -       | Called when a move slot changes; omitting it hides the moves section entirely           |
| `onNatureChange`  | `(value: string) => void`                                                      | Yes      | -       | Called when the nature dropdown changes                                                 |
| `onStatusChange`  | `(value: string) => void`                                                      | Yes      | -       | Called when the status dropdown changes                                                 |
| `placeholder`     | `string`                                                                       | No       | -       | If present, replaces the panel's content with this message                              |
| `pokemonName`     | `string`                                                                       | No       | -       | The selected Pokémon's species name; absent shows "None selected" and hides its details |
| `speedComparison` | `SpeedComparison \| undefined`                                                 | Yes      | -       | How this Pokémon's Speed compares to the opponent's; passed through to `StatsTable`     |
| `status`          | `string`                                                                       | Yes      | -       | The current battle status condition                                                     |

## Computations

- `baseStats` / `totalStats` — base stats resolved via `PokemonHelpers` for
  `game.generation`; totals computed via `StatHelpers.calculateStats` from
  base stats and the current `level`/`ivs`/`evs`/`nature`, with each
  non-HP stat further adjusted by its `boosts` stage via
  `StatHelpers.applyBoost`, and Speed additionally doubled when
  `isTailwind` is true
- `abilityOptions` — every ability introduced at or before `game.generation`,
  via `AbilityHelpers.getAllAbilities` (not restricted to the selected
  species, for freeform theorycrafting)
- `natureOptions` — every value of the `Nature` enum
- `moveOptions` — every move introduced at or before `game.generation`, via
  `MoveHelpers.getAllMoves` (not restricted to the selected species'
  learnset, for freeform theorycrafting); only computed when `onMoveChange`
  is provided, since it's otherwise unused
