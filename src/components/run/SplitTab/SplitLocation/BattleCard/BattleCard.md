# BattleCard

Displays details for the battle currently selected on the location map,
under a "Battle" label matching `LocationMap`'s header style. Lays out a
trainer name header above a portrait and a row of Pokemon team slots, each
showing that Pokemon's sprite (matching the game's sprite variant) above
its level, name, nature/ability, held item, and moveset. The portrait is
split into a field condition section above the sprite (e.g. "Rain") and
a held items section below it (e.g. "2x Potion"), both showing "-" when
not present on the battle. A "Defeat" button below the portrait toggles
the trainer's defeated state in storage; once defeated it reads
"Defeated" and turns green, and can be clicked again to undo.

## Props

| Prop               | Type         | Required | Default | Description                                            |
| ------------------ | ------------ | -------- | ------- | ------------------------------------------------------ |
| `battle`           | `Battle`     | Yes      | -       | The currently selected battle                          |
| `isDefeated`       | `boolean`    | Yes      | -       | Whether this battle has already been marked defeated   |
| `onToggleDefeated` | `() => void` | Yes      | -       | Called when the defeat button is clicked               |
| `variant`          | `string`     | Yes      | -       | The sprite variant to prefer, matching the game's slug |

## SCSS Variable Dependencies

- `--base-color` — the active game's base color, set by `RunPage`
- `--accent-color` — the active game's accent color, set by `RunPage`
