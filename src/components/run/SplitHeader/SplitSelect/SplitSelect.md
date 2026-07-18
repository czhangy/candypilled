# SplitSelect

An inline split-name selector used in place of static text within
`SplitHeader`'s title. Renders the current split's name with a leading
chevron, styled to sit flush inside the surrounding heading text rather
than looking like a bordered form control. Clicking it opens a floating
menu, portaled to the document body and positioned below the trigger's
screen coordinates, listing every split in the game; clicking one selects
it and closes the menu. The menu also closes on an outside click.

## Props

| Prop       | Type                     | Required | Default | Description                                    |
| ---------- | ------------------------ | -------- | ------- | ---------------------------------------------- |
| `onChange` | `(name: string) => void` | Yes      | -       | Called with the selected split's name          |
| `options`  | `string[]`               | Yes      | -       | The names of every split in the game, in order |
| `value`    | `string`                 | Yes      | -       | The currently selected split's name            |

## State

| State           | Type                    | Initial value | Description                                                                                |
| --------------- | ----------------------- | ------------- | ------------------------------------------------------------------------------------------ |
| `isOpen`        | `boolean`               | `false`       | Whether the menu is shown                                                                  |
| `menuPlacement` | `MenuPlacement \| null` | `null`        | The portaled menu's screen position/size and inherited accent color, recomputed while open |

## Effects

- **On `isOpen` becoming true** — listens for clicks outside both the
  trigger and the portaled menu and closes the menu when one occurs
- **On `isOpen` becoming true** — computes `menuPlacement` from the
  trigger's bounding rect and the trigger's computed `--accent-color`,
  since the portaled menu no longer inherits it through the DOM tree;
  recomputes on window resize/scroll while open

## Handlers

- **On the trigger click** — toggles `isOpen`
- **On an option click** — calls `onChange` with that option and closes
  the menu
