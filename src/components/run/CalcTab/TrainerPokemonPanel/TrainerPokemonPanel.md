# TrainerPokemonPanel

A fully-controlled panel for the damage calculator's defender side:
displays/edits the currently selected trainer team member's
battle-relevant details, in a species name and level row followed by
nature, ability, status condition, and stat spread (base/IV/EV/stage/
total). All editable values and their change handlers are owned by
`CalcTab` — this component holds no state of its own beyond derived display
values. The team member itself is selected via `TeamSelectPanel` (which in
turn depends on a trainer being selected via `BattleSelectPanel`); the
selected `BattlePokemon` is passed in as `mon`. Nature, level, and IVs/EVs
are locked to the team member's actual data (only ability, status
condition, and stat stage boosts are editable). Does not show moves. Shows
a placeholder message until a battle is selected.

## Props

| Prop              | Type                                                             | Required | Default | Description                                                                       |
| ----------------- | ---------------------------------------------------------------- | -------- | ------- | --------------------------------------------------------------------------------- |
| `abilityName`     | `string`                                                         | Yes      | -       | The current ability                                                               |
| `boosts`          | `Record<Exclude<keyof StatValues, 'hp'>, number>`                | Yes      | -       | The current in-battle stat stage boosts (-6..6)                                   |
| `game`            | `Game`                                                           | Yes      | -       | The current game; `generation` resolves stats/abilities                           |
| `hideEvs`         | `boolean`                                                        | Yes      | -       | Whether to omit the EV column (the global "Hide EVs" setting)                     |
| `isTailwind`      | `boolean`                                                        | Yes      | -       | Whether this Pokémon's side currently has Tailwind active                         |
| `mon`             | `BattlePokemon`                                                  | No       | -       | The selected team member; absent renders no Pokémon details                       |
| `onAbilityChange` | `(value: string) => void`                                        | Yes      | -       | Called when the ability dropdown changes                                          |
| `onBoostChange`   | `(stat: Exclude<keyof StatValues, 'hp'>, value: string) => void` | Yes      | -       | Called when a stat's stage dropdown changes                                       |
| `onStatusChange`  | `(value: string) => void`                                        | Yes      | -       | Called when the status dropdown changes                                           |
| `selectedBattle`  | `string`                                                         | No       | -       | The currently selected battle key; absent shows the "select a battle" placeholder |
| `status`          | `string`                                                         | Yes      | -       | The current battle status condition                                               |

## Computations

- `ivs` / `evs` — `mon`'s IVs/EVs normalized for display, read-only
- `baseStats` / `totalStats` — base stats resolved via `PokemonHelpers` for
  `game.generation`; totals computed via `StatHelpers.calculateStats` from
  base stats and `mon`'s fixed level/IVs/EVs/nature, with Speed doubled
  when `isTailwind` is true
- `abilityOptions` — every ability introduced at or before `game.generation`,
  via `AbilityHelpers.getAllAbilities`
