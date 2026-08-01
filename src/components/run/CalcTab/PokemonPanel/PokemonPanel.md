# PokemonPanel

A compact, fully-controlled panel for the damage calculator that
displays/edits a Pokémon's battle-relevant details: species (a dropdown,
suffixed with a blue ♂ or pink ♀ gender symbol when `gender` is set — the
symbol itself is clickable to toggle gender when the species is neither
genderless nor locked to a single gender) and level in a combined row,
nature and status condition in a row below that, ability and held item in
a row below that, stat spread (base/IV/EV/stage/total), and moves. All
editable values and their change
handlers are owned by `CalcTab` — this component holds no state of its own
beyond derived display values. `CalcTab` renders two instances, both fully
editable: one for the player's box Pokémon (initial species selected via
`BoxSelectPanel`) and one for the opposing trainer's team member (initial
species selected via `TeamSelectPanel`, which in turn depends on a trainer
being selected via `BattleSelectPanel`) — the box/team selection only seeds
the starting Pokémon; `onSpeciesChange` lets it be freely overridden
afterward for what-if theorycrafting. Passing `placeholder` replaces the
entire panel with a message instead of the Pokémon's details (used for the
trainer side before a battle is selected).

## Props

| Prop               | Type                                                                           | Required | Default | Description                                                                             |
| ------------------ | ------------------------------------------------------------------------------ | -------- | ------- | --------------------------------------------------------------------------------------- |
| `abilityName`      | `string`                                                                       | Yes      | -       | The current ability                                                                     |
| `boosts`           | `Record<Exclude<keyof StatValues, 'hp'>, number>`                              | Yes      | -       | The current in-battle stat stage boosts (-6..6)                                         |
| `evs`              | `StatValues`                                                                   | Yes      | -       | The current EVs                                                                         |
| `game`             | `Game`                                                                         | Yes      | -       | The current game; its `generation` resolves base stats/ability/held item/move lists     |
| `gender`           | `'male' \| 'female'`                                                           | No       | -       | The Pokémon's gender; absent shows no symbol next to its name                           |
| `heldItem`         | `string`                                                                       | Yes      | -       | The current held item, empty meaning none                                               |
| `hideEvs`          | `boolean`                                                                      | Yes      | -       | Whether to omit the EV column (the global "Hide EVs" setting)                           |
| `isTailwind`       | `boolean`                                                                      | Yes      | -       | Whether this Pokémon's side currently has Tailwind active                               |
| `ivs`              | `StatValues`                                                                   | Yes      | -       | The current IVs                                                                         |
| `level`            | `number`                                                                       | Yes      | -       | The current level                                                                       |
| `moves`            | `string[]`                                                                     | Yes      | -       | The current 4 move slots                                                                |
| `nature`           | `Nature`                                                                       | Yes      | -       | The current nature                                                                      |
| `onAbilityChange`  | `(value: string) => void`                                                      | Yes      | -       | Called when the ability dropdown changes                                                |
| `onBoostChange`    | `(stat: Exclude<keyof StatValues, 'hp'>, value: string) => void`               | Yes      | -       | Called when a stat's stage dropdown changes                                             |
| `onEvChange`       | `(stat: keyof StatValues, event: React.ChangeEvent<HTMLInputElement>) => void` | Yes      | -       | Called when an EV input changes                                                         |
| `onGenderChange`   | `(gender: 'male' \| 'female') => void`                                         | Yes      | -       | Called with the toggled gender when the gender symbol is clicked                        |
| `onHeldItemChange` | `(value: string) => void`                                                      | Yes      | -       | Called when the held item dropdown changes                                              |
| `onIvChange`       | `(stat: keyof StatValues, event: React.ChangeEvent<HTMLInputElement>) => void` | Yes      | -       | Called when an IV input changes                                                         |
| `onLevelChange`    | `(event: React.ChangeEvent<HTMLInputElement>) => void`                         | Yes      | -       | Called when the level input changes                                                     |
| `onMoveChange`     | `(index: number, value: string) => void`                                       | Yes      | -       | Called when a move slot changes                                                         |
| `onNatureChange`   | `(value: string) => void`                                                      | Yes      | -       | Called when the nature dropdown changes                                                 |
| `onSpeciesChange`  | `(slug: string) => void`                                                       | Yes      | -       | Called when the species dropdown changes                                                |
| `onStatusChange`   | `(value: string) => void`                                                      | Yes      | -       | Called when the status dropdown changes                                                 |
| `placeholder`      | `string`                                                                       | No       | -       | If present, replaces the panel's content with this message                              |
| `pokemonSlug`      | `string`                                                                       | No       | -       | The selected Pokémon's species slug; absent shows "None selected" and hides its details |
| `speedComparison`  | `SpeedComparison \| undefined`                                                 | Yes      | -       | How this Pokémon's Speed compares to the opponent's; passed through to `StatsTable`     |
| `status`           | `string`                                                                       | Yes      | -       | The current battle status condition                                                     |

## Computations

- `canToggleGender` — whether the gender symbol is rendered as a clickable
  toggle rather than plain text: `pokemonSlug` is set and the species is
  neither genderless (`PokemonHelpers.isGenderless`) nor locked to a single
  gender (`PokemonHelpers.getFixedGender`)
- `baseStats` / `totalStats` — base stats resolved via `PokemonHelpers` for
  `game.generation`; totals computed via `StatHelpers.calculateStats` from
  base stats and the current `level`/`ivs`/`evs`/`nature`, with each
  non-HP stat further adjusted by its `boosts` stage via
  `StatHelpers.applyBoost`, and Speed additionally doubled when
  `isTailwind` is true
- `speciesOptions` — every species introduced at or before
  `game.generation`, via `PokemonHelpers.getAllSpecies`, keyed by slug
  (rather than display name, since multiple forms can share a name)
- `abilityOptions` — every ability introduced at or before `game.generation`,
  via `AbilityHelpers.getAllAbilities` (not restricted to the selected
  species, for freeform theorycrafting)
- `natureOptions` — every value of the `Nature` enum except
  `Nature.Unknown`, labeled with its stat effect (e.g. "Adamant
  [+Atk -SpA]") via `NatureHelpers.getNatureEffect`, unsuffixed for a
  neutral nature
- `moveOptions` — every move introduced at or before `game.generation`, via
  `MoveHelpers.getAllMoves` (not restricted to the selected species'
  learnset, for freeform theorycrafting)
- `availableItems` — every held item introduced at or before
  `game.generation` and not yet removed as of `game.generation`
- `heldItemOptions` — `availableItems` mapped into dropdown options and
  sorted alphabetically, with a "None" option (empty value) prepended
