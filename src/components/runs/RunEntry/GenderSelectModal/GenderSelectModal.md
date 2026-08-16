# GenderSelectModal

A modal prompting the player to choose their protagonist's gender when
starting a new run, shown only for a game where that choice affects
in-game content (`Game.hasGenderSelection`). Precedes starter selection
in the new-run flow.

## Props

| Prop       | Type                                   | Required | Default | Description                                                     |
| ---------- | -------------------------------------- | -------- | ------- | --------------------------------------------------------------- |
| `game`     | `Game`                                 | Yes      | -       | The active game, used for the modal's accent/button text colors |
| `onClose`  | `() => void`                           | Yes      | -       | Called when the modal is dismissed without a selection          |
| `onSelect` | `(gender: 'male' \| 'female') => void` | Yes      | -       | Called with the chosen gender                                   |
