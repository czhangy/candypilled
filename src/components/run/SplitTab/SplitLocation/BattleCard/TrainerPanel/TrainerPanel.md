# TrainerPanel

The trainer portrait shown beside a battle's team, made up of a field
condition section above the sprite (e.g. "Rain") and a held items
section below it, showing one row per item stacked vertically in the
same cell, each row giving the item's count followed by its sprite
(e.g. "2x" beside a Potion sprite), each hidden when not present on
the battle. A "Fog" field condition is followed by an asterisk whose
tooltip reads "Can be cleared using Defog". An "Optional" section
appears below that for battles that aren't required to progress,
followed by a double battle section reading "Double Battle" or, if the
player's whole party is forced into the fight, "True Double Battle". A
"Tag Double" section appears below that for battles fought alongside
an ally trainer, followed by a "Back To Back" section for battles that
immediately follow another without a chance to heal in between, and a
"Gauntlet" section for battles that are part of a longer chain of
consecutive trainers. A "Defeat" button at the bottom toggles the
trainer's defeated state; once defeated it reads "Defeated" and turns
green, and can be clicked again to undo.

## Props

| Prop               | Type         | Required | Default | Description                                            |
| ------------------ | ------------ | -------- | ------- | ------------------------------------------------------ |
| `battle`           | `Battle`     | Yes      | -       | The battle whose trainer is displayed                  |
| `isDefeated`       | `boolean`    | Yes      | -       | Whether this battle has already been marked defeated   |
| `onToggleDefeated` | `() => void` | Yes      | -       | Called when the defeat button is clicked               |
| `variant`          | `string`     | Yes      | -       | The sprite variant to prefer, matching the game's slug |

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, expected to be
  set by a parent; used for the field condition asterisk and the
  defeat button's text
