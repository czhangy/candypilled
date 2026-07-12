# StarterSelect

A centered, labeled row of buttons for choosing a starter Pokemon at the
beginning of a run, one per option offered by the game. The currently
selected starter is highlighted in accent color.

## Props

| Prop       | Type                        | Required | Default | Description                                    |
| ---------- | --------------------------- | -------- | ------- | ---------------------------------------------- |
| `starters` | `string[]`                  | Yes      | -       | The starter names to render as buttons         |
| `selected` | `string \| null`            | Yes      | -       | The currently selected starter, if any         |
| `onSelect` | `(starter: string) => void` | Yes      | -       | Called with a starter's name when it's clicked |
