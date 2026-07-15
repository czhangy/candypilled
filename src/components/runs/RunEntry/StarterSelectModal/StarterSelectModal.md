# StarterSelectModal

A modal shown when starting a new run, prompting the user to choose a
starter Pokemon before the run is created. Choosing a starter finalizes the
selection immediately.

## Props

| Prop          | Type                        | Required | Default | Description                                            |
| ------------- | --------------------------- | -------- | ------- | ------------------------------------------------------ |
| `accentColor` | `string`                    | Yes      | -       | The game's accent color, applied to the modal          |
| `starters`    | `string[]`                  | Yes      | -       | The starter names to offer                             |
| `variant`     | `string`                    | Yes      | -       | The sprite variant to prefer, matching the game's slug |
| `onSelect`    | `(starter: string) => void` | Yes      | -       | Called with the chosen starter's name                  |
| `onClose`     | `() => void`                | Yes      | -       | Called when the modal is dismissed without choosing    |
