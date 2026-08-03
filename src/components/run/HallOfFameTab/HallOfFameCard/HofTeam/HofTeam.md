# HofTeam

A saved Hall of Fame team, shown in the same full battle-card detail
as `PokemonSlot` (sprite, types, held item, ability, nature, and
moves), padded out to six slots. Species, gender, level, ability, and
nature are fixed and non-interactive, matching how the team was
actually caught and recorded, but the held item and each moveset slot
are clickable, opening a picker to change them.

## Props

| Prop         | Type                              | Required | Default | Description                                                            |
| ------------ | --------------------------------- | -------- | ------- | ---------------------------------------------------------------------- |
| `generation` | `number`                          | Yes      | -       | The game's generation, passed through to `PokemonSlot` and the pickers |
| `onChange`   | `(team: CaughtPokemon[]) => void` | Yes      | -       | Called with the updated team whenever a held item or move is changed   |
| `team`       | `CaughtPokemon[]`                 | Yes      | -       | The saved team, unpadded                                               |
| `variant`    | `string`                          | Yes      | -       | Game slug used to resolve the correct sprite style                     |
| `version`    | `string`                          | Yes      | -       | The game's version slug, passed through to `PokemonSlot`               |

## State

| State          | Type                                                                                           | Initial value | Description                                                              |
| -------------- | ---------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------ |
| `pickerTarget` | `{ index: number; kind: 'item' } \| { index: number; kind: 'move'; moveSlug: string } \| null` | `null`        | Which slot's held item or which move is currently being replaced, if any |

## Computations

- `paddedTeam` — `team` padded out to six slots so it renders through
  a fixed six-slot layout, matching the un-editable saved-team display
  it replaces

## Handlers

- `handleItemPicked` — replaces the target slot's `heldItem` with the
  picked slug (or `undefined` for "None") and calls `onChange` with
  the full updated team
- `handleMovePicked` — replaces the target slot's specific move
  (matched by its old slug, since a Pokémon can't know the same move
  twice) with the picked slug and calls `onChange` with the full
  updated team
