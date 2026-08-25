# PokemonSlot

A single team member slot within a battle card, showing that Pokémon's
sprite (matching the game's sprite variant) above its name (with type
badges beneath it), then a metadata list of its held item (preceded by
an icon), ability, nature, and moveset. Non-neutral natures are
annotated with their stat
effects, shown in a smaller font on the same line (e.g. "Adamant [+Atk
-SpA]"). Each Pokémon's name is prefixed with its level (e.g. "Lv.5
Chimchar", omitted when `hofDisplay`) and suffixed with a blue ♂ or
pink ♀ gender symbol, omitted when `pokemon.gender` is unset (e.g. for
a genderless species).
Unless `isReadOnly`, the sprite and name are clickable,
opening that Pokémon's Pokédex entry in a new tab, the held item is
clickable, linking to that item's details, the ability is
clickable, linking to that ability's details, and the nature is
clickable, opening its entry on the Natures page in a new tab; all
have a background that darkens further on hover. When
`hofDisplay` is true, the held item and moveset stay
interactive even while `isReadOnly`, for contexts (e.g. a saved Hall
of Fame team) that allow editing only those two fields; in that mode
the held item is clickable even when the Pokémon isn't holding one, so
one can be assigned. Abilities and
moves flagged as dangerous are shown in red text regardless of
`isReadOnly`, unless the "Hide Dangerous Moves/Abilities" setting is
on or `hofDisplay` is true. When `pokemon` is `null`, an empty
placeholder slot is shown instead.

## Props

| Prop              | Type                                        | Required | Default | Description                                                                                                                                                                                                                            |
| ----------------- | ------------------------------------------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dataSource`      | `GameDataSource`                            | Yes      | -       | The game's dataset, used to resolve species/move/ability/item data                                                                                                                                                                     |
| `generation`      | `number`                                    | Yes      | -       | The game's generation, used to resolve the Pokémon's types                                                                                                                                                                             |
| `hofDisplay`      | `boolean`                                   | Yes      | -       | Hides the level prefix, disables dangerous move/ability highlighting, and (combined with `isReadOnly`) keeps the held item and moveset clickable while species, ability, and nature stay non-interactive                               |
| `isReadOnly`      | `boolean`                                   | Yes      | -       | Renders the sprite/name, held item, ability, and nature as plain, non-interactive text when true (held item and moveset excepted when `hofDisplay`)                                                                                    |
| `onSelectAbility` | `(slug: string) => void`                    | No       | -       | Called with the Pokémon's ability slug when it's clicked; unused when `isReadOnly`                                                                                                                                                     |
| `onSelectItem`    | `(slug: string) => void`                    | No       | -       | Called with the Pokémon's held item slug when it's clicked; unused when `isReadOnly` and not `hofDisplay`                                                                                                                              |
| `onSelectMove`    | `(slug: string) => void`                    | No       | -       | Called with a move's slug when it's clicked within the moveset; unused when `isReadOnly` and not `hofDisplay`                                                                                                                          |
| `onSelectSpecies` | `(slug: string) => void`                    | No       | -       | Called with the Pokémon's `displaySlug` when its sprite or name is clicked; unused when `isReadOnly`                                                                                                                                   |
| `pokemon`         | `BattlePokemon \| null`                     | Yes      | -       | The Pokémon to display, or `null` to render an empty slot                                                                                                                                                                              |
| `position`        | `'single' \| 'top' \| 'middle' \| 'bottom'` | Yes      | -       | Which row of `BattleCard`'s team this slot belongs to, controlling which corner (if it's the last slot in its row) gets rounded and whether the top border is omitted (`'middle'`/`'bottom'`, to avoid doubling up with the row above) |
| `variant`         | `string`                                    | Yes      | -       | The sprite variant to prefer, matching the game's slug                                                                                                                                                                                 |
| `version`         | `string`                                    | Yes      | -       | The game's version slug, used to derive the moveset when `pokemon.moves` is unset                                                                                                                                                      |

## Computations

- `displaySlug` — the Pokémon's species slug for display purposes,
  resolved via `PokemonHelpers.getDisplaySlug`; differs from `pokemon.slug`
  for a species with a held-item form change (e.g. Giratina holding the
  Griseous Orb resolves to Origin Forme), and feeds `speciesName`,
  `sprite`, and `getTypes`
- `speciesName` — the Pokémon's display name, resolved from
  `displaySlug` via `PokemonHelpers`
- `heldItem` — the held item's display name, resolved from
  `pokemon.heldItem` (a slug) via `ItemHelpers`
- `heldItemSprite` — the sprite for `pokemon.heldItem`, resolved via
  `ItemHelpers.getHeldItemSprite`; the icon is omitted (held item text
  still shows) when no held item data matches
- `getTypes` — the Pokémon's types at `generation`, rendered as badges
  (`/types/{type}.png`) beneath its name
- `abilitySlug` — the Pokémon's ability slug, taken directly from
  `pokemon.ability`; its display name is then resolved via
  `AbilityHelpers`
- `highlightDangerous` — whether the "Hide Dangerous Moves/Abilities"
  setting is off (i.e. highlighting is on by default) and `hofDisplay`
  is false, read via `SettingsHelpers` and passed to `MoveList`; also
  gates whether `AbilityHelpers.isDangerousAbility` renders the ability
  button's text in red
- `pokemon.ivs` is normalized into a full `StatValues` via
  `StatHelpers.normalizeStats` and passed to `MoveList` to resolve
  Hidden Power's actual type
- `moves` — `pokemon.moves` when explicitly set, otherwise the moveset
  the Pokémon would know at its level in `version`, derived via
  `PokemonHelpers.getMovesAtLevel`
- `isItemAndMovesReadOnly` — `isReadOnly && !hofDisplay`; fed to
  the held item block and `MoveList` in place of `isReadOnly` directly
- `canClickItem` — whether the held item renders as a button: true
  whenever the item isn't read-only and either a held item exists or
  `hofDisplay` is true (so an empty item slot can still be clicked to
  assign one in HOF display mode)

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, expected to be
  set by a parent; used for the held item text and the sprite/name
  link's hover color
