# TrainerSprite

A non-final trainer's sprite within `BattleCard`'s stacked layout —
used for every row of a multi-row battle (a tag battle's first
trainer, or an earlier team in a gauntlet/back-to-back fight) except
the last, so each row can be visually attributed to the trainer that
owns it. Carries no metadata of its own — field condition, items, and
the defeat toggle stay on the bottom-most row's `TrainerPanel`, since
the whole stack is still defeated as a single unit.

## Props

| Prop                 | Type                 | Required | Default | Description                                                                                                                                            |
| -------------------- | -------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `alt`                | `string`             | Yes      | -       | Alt text for the sprite image                                                                                                                          |
| `position`           | `'top' \| 'middle'`  | Yes      | -       | Whether this is the first row of the stack (rounds its top-left corner) or an inner row (omits its top border to avoid doubling up with the row above) |
| `trainerAssetFolder` | `TrainerAssetFolder` | Yes      | -       | The game's `trainerAssetFolder`, i.e. which `public/trainers/` folder to resolve the sprite from                                                       |
| `trainerClass`       | `string`             | Yes      | -       | This row's trainer's TRAINER_CLASSES slug, used to resolve their sprite                                                                                |
