# PokemonSlot

A single team member slot within a battle card, showing that Pokemon's
sprite (matching the game's sprite variant) above its name (with type
badges beneath it), then a metadata list of its held item (preceded by
an icon), ability, nature, and moveset. Non-neutral natures are
annotated with their stat
effects, shown in a smaller font on the same line (e.g. "Adamant [+Atk
-SpA]"). Each Pokemon's name is prefixed with its level (e.g. "Lv.5
Chimchar"). The ability is clickable, linking to that ability's
details, and the nature is clickable, opening its entry on the Natures
page in a new tab; both have a background that darkens further on
hover, and when the "Highlight Dangerous Moves/Abilities" setting is
on, abilities and moves flagged as dangerous are shown in red text.
When `pokemon` is `null`, an empty placeholder slot is shown instead.

## Props

| Prop              | Type                     | Required | Default | Description                                                                       |
| ----------------- | ------------------------ | -------- | ------- | --------------------------------------------------------------------------------- |
| `generation`      | `number`                 | Yes      | -       | The game's generation, used to resolve the Pokemon's types and ability            |
| `onSelectAbility` | `(name: string) => void` | Yes      | -       | Called with the Pokemon's ability when it's clicked                               |
| `onSelectMove`    | `(name: string) => void` | Yes      | -       | Called with a move's name when it's clicked within the moveset                    |
| `pokemon`         | `BattlePokemon \| null`  | Yes      | -       | The Pokemon to display, or `null` to render an empty slot                         |
| `variant`         | `string`                 | Yes      | -       | The sprite variant to prefer, matching the game's slug                            |
| `version`         | `string`                 | Yes      | -       | The game's version slug, used to derive the moveset when `pokemon.moves` is unset |

## Computations

- `getTypes` — the Pokemon's types at `generation`, rendered as badges
  (`/types/{type}.png`) beneath its name
- `getAbility` — the Pokemon's ability, using its `ability` field as
  an override when set and otherwise falling back to its slot-1
  ability at `generation`, resolved via `PokemonHelpers`
- `highlightDangerous` — whether the "Highlight Dangerous
  Moves/Abilities" setting is on, read via `SettingsHelpers` and
  passed to `MoveList`; also gates whether
  `AbilityHelpers.isDangerousAbility` renders the ability button's
  text in red
- `pokemon.ivs` is normalized into a full `StatValues` via
  `StatHelpers.normalizeStats` and passed to `MoveList` to resolve
  Hidden Power's actual type
- `moves` — `pokemon.moves` when explicitly set, otherwise the moveset
  the Pokemon would know at its level in `version`, derived via
  `PokemonHelpers.getMovesAtLevel`

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, expected to be
  set by a parent; used for the held item text
