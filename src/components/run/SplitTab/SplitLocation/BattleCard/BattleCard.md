# BattleCard

Displays details for the battle currently selected on the location map,
under a "Battle", "Miniboss", or "Boss" label matching `LocationMap`'s
header style. Lays out a trainer name header above a portrait
(`TrainerPanel`) and a row of Pokémon team slots (`PokemonSlot`,
padded to six with empty slots when the team is smaller). Within the trainer name header,
the name itself is a button that calls `onSelectTrainer` with the
battle's key, jumping to that trainer in the Calc tab. A trainer can carry
several independent teams (e.g. a starter-conditioned team, or several
unconditioned randomized-roster options), every one of which renders as
its own row once filtered for the current run — and a tag battle (a second
trainer present in `game.battles`' entry for this battle) adds that
trainer's own row(s) on top. Whenever more than one row results, the card
stacks them: every row but the last shows just a bare `TrainerSprite`, and
the very last row shows the full `TrainerPanel` (with all the shared
metadata, since the whole battle's metadata is shared) so a multi-row
battle still reads as one card. See `TrainerPanel.md`, `TrainerSprite.md`,
and `PokemonSlot.md` for the portrait and team slot behavior in detail.
The trainer name header also has an edit icon button that opens
`BattleNotesModal` for writing a free-text note about the battle, saved to
local storage keyed by the battle and the current game; see
`BattleNotesModal.md`.

## Props

| Prop              | Type                          | Required | Default | Description                                                                                                     |
| ----------------- | ----------------------------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `battle`          | `Battle`                      | Yes      | -       | The currently selected battle                                                                                   |
| `game`            | `Game`                        | Yes      | -       | The active game, used to look up this battle's trainer info via `game.battles`                                  |
| `generation`      | `number`                      | Yes      | -       | The game's generation, used to resolve each Pokémon's types and abilities                                       |
| `onSelectAbility` | `(slug: string) => void`      | Yes      | -       | Called with a Pokémon's ability slug when it's clicked                                                          |
| `onSelectItem`    | `(slug: string) => void`      | Yes      | -       | Called with a Pokémon's held item slug when it's clicked                                                        |
| `onSelectMove`    | `(slug: string) => void`      | Yes      | -       | Called with a move's slug when it's clicked within a Pokémon's moveset                                          |
| `onSelectSpecies` | `(slug: string) => void`      | Yes      | -       | Called with a Pokémon's species slug when its sprite or name is clicked                                         |
| `onSelectTrainer` | `(battleKey: string) => void` | Yes      | -       | Called with the battle's key when the trainer name text is clicked                                              |
| `starter`         | `string`                      | Yes      | -       | The run's chosen starter, used to filter each trainer's teams down to the ones whose condition (if any) matches |
| `variant`         | `string`                      | Yes      | -       | The sprite variant to prefer, matching the game's slug                                                          |
| `version`         | `string`                      | Yes      | -       | The game's version slug, used to derive a Pokémon's moveset when not explicitly set                             |

## State

| State              | Type      | Initial value | Description                                      |
| ------------------ | --------- | ------------- | ------------------------------------------------ |
| `isNotesModalOpen` | `boolean` | `false`       | Whether `BattleNotesModal` is currently rendered |

## Computations

- `teamGroups` — one entry per trainer (one for a normal battle, two
  for a tag battle), each resolved via `BattleHelpers.getTeamGroups`
  from `game.battles`' entry for that trainer's `teams`, filtered down
  to the ones whose `condition` (if any) matches the run's starter
- `rows` — `teamGroups` flattened to one row per (trainer, surviving
  team) pair, so a trainer with multiple teams that all matched gets
  one row per team, same as a tag battle gets one row per trainer;
  each row's team is padded to `TEAM_SLOT_COUNT` (6) with `null`s and
  rendered as its own row of `PokemonSlot`s
- `isStacked` — whether `rows` has more than one entry, so the card
  should render multiple rows instead of one; passed down so
  `TrainerPanel` and each `PokemonSlot` can round the correct corners
  and omit the border edge they share with the row above them

## Handlers

- **On the notes edit icon click** — sets `isNotesModalOpen` to `true`
- **On `BattleNotesModal`'s close** — sets `isNotesModalOpen` to `false`

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, set by `RunPage`
