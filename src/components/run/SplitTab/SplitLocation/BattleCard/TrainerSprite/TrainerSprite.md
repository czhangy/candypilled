# TrainerSprite

The first trainer's sprite in a tag battle, shown above the second
trainer's full `TrainerPanel` within `BattleCard`'s stacked layout so
each trainer's row can be visually attributed to the trainer that owns
it. Carries no metadata of its own — field condition, items, and the
defeat toggle stay on the bottom `TrainerPanel`, since a tag battle is
still defeated as a single unit.

## Props

| Prop           | Type     | Required | Default | Description                                                              |
| -------------- | -------- | -------- | ------- | ------------------------------------------------------------------------ |
| `alt`          | `string` | Yes      | -       | Alt text for the sprite image                                            |
| `name`         | `string` | Yes      | -       | The first trainer's name, forwarded to `TrainerHelpers.getTrainerSprite` |
| `trainerClass` | `string` | Yes      | -       | The first trainer's class, used to resolve their sprite                  |
| `variant`      | `string` | Yes      | -       | The sprite variant to prefer, matching the game's slug                   |
