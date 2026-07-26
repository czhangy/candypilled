# PokemonSlot

A single team member slot within a battle card, showing that Pokémon's
sprite (matching the game's sprite variant) above its name (with type
badges beneath it), then a metadata list of its held item (preceded by
an icon), ability, nature, and moveset. Non-neutral natures are
annotated with their stat
effects, shown in a smaller font on the same line (e.g. "Adamant [+Atk
-SpA]"). Each Pokémon's name is prefixed with its level (e.g. "Lv.5
Chimchar") and suffixed with a blue ♂ or pink ♀ gender symbol, omitted
when `pokemon.gender` is unset (e.g. for a genderless species).
Unless `isReadOnly`, the sprite and name are clickable,
opening that Pokémon's Pokédex entry in a new tab, the held item is
clickable, linking to that item's details, the ability is
clickable, linking to that ability's details, and the nature is
clickable, opening its entry on the Natures page in a new tab; all
have a background that darkens further on hover. When the "Highlight
Dangerous Moves/Abilities" setting is on, abilities and moves flagged
as dangerous are shown in red text regardless of `isReadOnly`. When
`pokemon` is `null`, an empty placeholder slot is shown instead.

## Props

| Prop              | Type                     | Required | Default | Description                                                                                         |
| ----------------- | ------------------------ | -------- | ------- | --------------------------------------------------------------------------------------------------- |
| `generation`      | `number`                 | Yes      | -       | The game's generation, used to resolve the Pokémon's types and ability                              |
| `isReadOnly`      | `boolean`                | Yes      | -       | Renders the sprite/name, held item, ability, and nature as plain, non-interactive text when true    |
| `onSelectAbility` | `(slug: string) => void` | No       | -       | Called with the Pokémon's ability slug when it's clicked; unused when `isReadOnly`                  |
| `onSelectItem`    | `(slug: string) => void` | No       | -       | Called with the Pokémon's held item slug when it's clicked; unused when `isReadOnly`                |
| `onSelectMove`    | `(slug: string) => void` | No       | -       | Called with a move's slug when it's clicked within the moveset; unused when `isReadOnly`            |
| `onSelectSpecies` | `(slug: string) => void` | No       | -       | Called with the Pokémon's species slug when its sprite or name is clicked; unused when `isReadOnly` |
| `pokemon`         | `BattlePokemon \| null`  | Yes      | -       | The Pokémon to display, or `null` to render an empty slot                                           |
| `variant`         | `string`                 | Yes      | -       | The sprite variant to prefer, matching the game's slug                                              |
| `version`         | `string`                 | Yes      | -       | The game's version slug, used to derive the moveset when `pokemon.moves` is unset                   |

## Computations

- `speciesName` — the Pokémon's display name, resolved from
  `pokemon.slug` via `PokemonHelpers`
- `heldItem` — the held item's display name, resolved from
  `pokemon.heldItem` (a slug) via `ItemHelpers`
- `heldItemSprite` — the sprite for `pokemon.heldItem`, resolved via
  `ItemHelpers.getHeldItemSprite`; the icon is omitted (held item text
  still shows) when no held item data matches
- `getTypes` — the Pokémon's types at `generation`, rendered as badges
  (`/types/{type}.png`) beneath its name
- `getAbilitySlug` — the Pokémon's ability slug, using its `ability`
  field as an override when set and otherwise falling back to its
  slot-1 ability at `generation`, resolved via `PokemonHelpers`; its
  display name is then resolved via `AbilityHelpers`
- `highlightDangerous` — whether the "Highlight Dangerous
  Moves/Abilities" setting is on, read via `SettingsHelpers` and
  passed to `MoveList`; also gates whether
  `AbilityHelpers.isDangerousAbility` renders the ability button's
  text in red
- `pokemon.ivs` is normalized into a full `StatValues` via
  `StatHelpers.normalizeStats` and passed to `MoveList` to resolve
  Hidden Power's actual type
- `moves` — `pokemon.moves` when explicitly set, otherwise the moveset
  the Pokémon would know at its level in `version`, derived via
  `PokemonHelpers.getMovesAtLevel`

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, expected to be
  set by a parent; used for the held item text and the sprite/name
  link's hover color
