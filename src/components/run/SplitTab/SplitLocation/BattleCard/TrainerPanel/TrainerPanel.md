# TrainerPanel

The trainer portrait shown beside a battle's team, made up of a field
condition section above the sprite, showing an icon beside its name
(e.g. "Rain"), and a held items
section below it, showing one row per item stacked vertically in the
same cell, each row giving the item's count followed by its sprite
(e.g. "2x" beside a Potion sprite), each hidden when not present on
the battle. "Fog" and "Deep Fog" field conditions share the same icon;
only "Fog" (which can be cleared with Defog) is followed by an
asterisk whose tooltip reads "Can be cleared using Defog" — "Deep Fog"
shows no asterisk. An "Optional" section
appears below that for battles that aren't required to progress,
followed by a double battle section reading "Double Battle" or, if the
player's whole party is forced into the fight, "True Double Battle". A
"Tag Double" section appears below that for battles fought alongside
an ally trainer, followed by a "Back To Back" section for battles that
immediately follow another without a chance to heal in between, and a
"Gauntlet" section for battles that are part of a longer chain of
consecutive trainers. For a tag battle, this panel
is always the bottom row and shows the second trainer's sprite
(`trainerClass`/`trainerName`, not the battle's own primary trainer);
the first trainer's sprite is shown above it by a bare `TrainerSprite`,
since the shared metadata only needs to appear once, on this panel.

## Props

| Prop                 | Type                 | Required | Default | Description                                                                                                                                                                                     |
| -------------------- | -------------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `battle`             | `Battle`             | Yes      | -       | The battle whose shared metadata (badges, field condition) is displayed                                                                                                                         |
| `isStacked`          | `boolean`            | Yes      | -       | Whether this panel is the bottom row of a two-trainer tag battle, rounding only its bottom-left corner and omitting its top border, instead of rounding both left corners as a standalone panel |
| `items`              | `BattleItem[]`       | No       | -       | The displayed trainer's held battle items, resolved from `game.battles` by the caller                                                                                                           |
| `trainerAssetFolder` | `TrainerAssetFolder` | Yes      | -       | The game's `trainerAssetFolder`, i.e. which `public/trainers/` folder to resolve the sprite from                                                                                                |
| `trainerClass`       | `string`             | Yes      | -       | The displayed trainer's TRAINER_CLASSES slug, used to resolve their display name and sprite                                                                                                     |
| `trainerName`        | `string`             | Yes      | -       | The displayed trainer's name, combined with their class for display                                                                                                                             |

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, expected to be
  set by a parent; used for the field condition asterisk
