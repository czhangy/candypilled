# StarterSelectModal

A modal shown when starting a new run, prompting the user to choose a
starter Pokemon before the run is created. Clicking a starter marks it as
active without finalizing anything; a "Confirm" button, disabled until a
starter is active, finalizes the selection.

## Props

| Prop          | Type                        | Required | Default | Description                                            |
| ------------- | --------------------------- | -------- | ------- | ------------------------------------------------------ |
| `accentColor` | `string`                    | Yes      | -       | The game's accent color, applied to the modal          |
| `starters`    | `string[]`                  | Yes      | -       | The starter names to offer                             |
| `variant`     | `string`                    | Yes      | -       | The sprite variant to prefer, matching the game's slug |
| `onSelect`    | `(starter: string) => void` | Yes      | -       | Called with the confirmed starter's name               |
| `onClose`     | `() => void`                | Yes      | -       | Called when the modal is dismissed without choosing    |

## State

| State           | Type             | Initial value | Description                                       |
| --------------- | ---------------- | ------------- | ------------------------------------------------- |
| `activeStarter` | `string \| null` | `null`        | The starter currently highlighted but unconfirmed |

## Handlers

- **On starter select** — marks the clicked starter as active
- **On "Confirm" click** — calls `onSelect` with the active starter, if any
