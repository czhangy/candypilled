# TrainerSprite

The first trainer's sprite in a tag battle, shown above the second
trainer's full `TrainerPanel` within `BattleCard`'s stacked layout so
each trainer's row can be visually attributed to the trainer that owns
it. Carries no metadata of its own — field condition, items, and the
defeat toggle stay on the bottom `TrainerPanel`, since a tag battle is
still defeated as a single unit.

## Props

| Prop                 | Type                 | Required | Default | Description                                                                                      |
| -------------------- | -------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------ |
| `alt`                | `string`             | Yes      | -       | Alt text for the sprite image                                                                    |
| `trainerAssetFolder` | `TrainerAssetFolder` | Yes      | -       | The game's `trainerAssetFolder`, i.e. which `public/trainers/` folder to resolve the sprite from |
| `trainerClass`       | `string`             | Yes      | -       | The first trainer's TRAINER_CLASSES slug, used to resolve their sprite                           |
