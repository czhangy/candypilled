# BattleCard

Displays details for the battle currently selected on the location map,
under a "Battle", "Miniboss", or "Boss" label matching `LocationMap`'s
header style. Lays out a trainer name header above a portrait
(`TrainerPanel`) and a row of Pokémon team slots (`PokemonSlot`,
padded to six with empty slots when the team is smaller). Within the trainer name header,
the name itself is a button that calls `onSelectTrainer` with the
battle's key, jumping to that trainer in the Calc tab. For a tag battle (a second trainer present
in `game.battles`' entry for this battle), the card instead stacks
two full rows, one per trainer, each
with its own six-slot team: the first trainer's row shows just a bare
`TrainerSprite`, and the second trainer's row shows the full
`TrainerPanel` (with all the shared metadata, since the whole tag
battle's metadata is shared) so each
trainer's Pokémon stay visually attributed to the trainer that owns
them. See `TrainerPanel.md`, `TrainerSprite.md`, and `PokemonSlot.md`
for the portrait and team slot behavior in detail. The trainer name
header also has an edit icon button that opens `BattleNotesModal` for
writing a free-text note about the battle, saved to local storage
keyed by the battle and the current game; see `BattleNotesModal.md`.

## Props

| Prop              | Type                          | Required | Default | Description                                                                         |
| ----------------- | ----------------------------- | -------- | ------- | ----------------------------------------------------------------------------------- |
| `battle`          | `Battle`                      | Yes      | -       | The currently selected battle                                                       |
| `game`            | `Game`                        | Yes      | -       | The active game, used to look up this battle's trainer info via `game.battles`      |
| `generation`      | `number`                      | Yes      | -       | The game's generation, used to resolve each Pokémon's types and abilities           |
| `onSelectAbility` | `(slug: string) => void`      | Yes      | -       | Called with a Pokémon's ability slug when it's clicked                              |
| `onSelectItem`    | `(slug: string) => void`      | Yes      | -       | Called with a Pokémon's held item slug when it's clicked                            |
| `onSelectMove`    | `(slug: string) => void`      | Yes      | -       | Called with a move's slug when it's clicked within a Pokémon's moveset              |
| `onSelectSpecies` | `(slug: string) => void`      | Yes      | -       | Called with a Pokémon's species slug when its sprite or name is clicked             |
| `onSelectTrainer` | `(battleKey: string) => void` | Yes      | -       | Called with the battle's key when the trainer name text is clicked                  |
| `starter`         | `string`                      | Yes      | -       | The run's chosen starter, used to resolve a miniboss's starter-specific team        |
| `variant`         | `string`                      | Yes      | -       | The sprite variant to prefer, matching the game's slug                              |
| `version`         | `string`                      | Yes      | -       | The game's version slug, used to derive a Pokémon's moveset when not explicitly set |

## State

| State              | Type      | Initial value | Description                                      |
| ------------------ | --------- | ------------- | ------------------------------------------------ |
| `isNotesModalOpen` | `boolean` | `false`       | Whether `BattleNotesModal` is currently rendered |

## Computations

- `teamGroups` — one entry per trainer (one for a normal battle, two
  for a tag battle), each resolved via `BattleHelpers.getTeamGroups`
  from `game.battles`' entry for that trainer's `teamsByStarter`
  (keyed by the run's starter) when present, falling back to its
  `team` otherwise; each group's team is padded to `TEAM_SLOT_COUNT`
  (6) with `null`s and rendered as its own row of `PokemonSlot`s
- `isStacked` — whether the battle has a second trainer, so the card
  should render two rows instead of one; passed down so `TrainerPanel`
  and each `PokemonSlot` can round the correct corners and omit the
  border edge they share with the row above them

## Handlers

- **On the notes edit icon click** — sets `isNotesModalOpen` to `true`
- **On `BattleNotesModal`'s close** — sets `isNotesModalOpen` to `false`

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, set by `RunPage`
