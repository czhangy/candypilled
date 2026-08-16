# HallOfFameCard

A card for building a Hall of Fame team: six slots that pick Pokémon from
the run's box, with a button to save the assembled team. When `savedTeam`
is already set (the current attempt already has a saved entry), the
picker slots are replaced with a `HofTeam` showing each
Pokémon's full battle-card detail (sprite, types, held item, ability,
nature, and moves), matching how a team is displayed elsewhere in the
app, with its held item and moves editable.

## Props

| Prop               | Type                              | Required | Default | Description                                                                  |
| ------------------ | --------------------------------- | -------- | ------- | ---------------------------------------------------------------------------- |
| `availablePokemon` | `CaughtPokemon[]`                 | Yes      | -       | Pokémon eligible to be picked into a team slot                               |
| `dataSource`       | `GameDataSource`                  | Yes      | -       | The game's dataset, passed to `HofSlot`, `HofTeam`, and `PokemonPickerModal` |
| `generation`       | `number`                          | Yes      | -       | The game's generation, passed to the saved-team display                      |
| `savedTeam`        | `CaughtPokemon[] \| null`         | Yes      | -       | The current attempt's saved Hall of Fame team, if any                        |
| `variant`          | `string`                          | Yes      | -       | Game slug used to resolve the correct sprite style                           |
| `version`          | `string`                          | Yes      | -       | The game's version slug, passed to the saved-team display                    |
| `onSave`           | `(team: CaughtPokemon[]) => void` | Yes      | -       | Called with the assembled team when saved                                    |
| `onUpdateTeam`     | `(team: CaughtPokemon[]) => void` | Yes      | -       | Called with the updated team when `savedTeam`'s item/move edits are made     |

## State

| State             | Type                        | Initial value      | Description                                             |
| ----------------- | --------------------------- | ------------------ | ------------------------------------------------------- |
| `team`            | `(CaughtPokemon \| null)[]` | Six `null` entries | The Pokémon currently assigned to each of the six slots |
| `pickerSlotIndex` | `number \| null`            | `null`             | Which slot's picker modal is open, if any               |

## Computations

- `pickablePokemon` — `availablePokemon` minus whichever Pokémon are
  already assigned to another slot, so the same Pokémon can't be picked
  twice
- `canSave` — whether at least one slot is filled, gating the save button
