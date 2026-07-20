# TagFilter

A filter icon button that opens a checklist of tags below it. Checking
a tag adds it to the active filter, letting the caller narrow a list
down to Pokémon carrying every checked tag. Long tag labels are
truncated with an ellipsis rather than wrapping or overflowing. The
button is highlighted in the game's accent color while at least one tag
is checked. The menu closes on an outside click. It slides down while
fading in when it opens, and reverses that animation on close before
unmounting (skipped in favor of an instant close when the user prefers
reduced motion).

## Props

| Prop           | Type                       | Required | Default | Description                                 |
| -------------- | -------------------------- | -------- | ------- | ------------------------------------------- |
| `onChange`     | `(tags: string[]) => void` | Yes      | -       | Called with the updated set of checked tags |
| `selectedTags` | `string[]`                 | Yes      | -       | The currently checked tags                  |
| `tags`         | `string[]`                 | Yes      | -       | Every tag offered in the checklist          |

## State

| State       | Type      | Initial value | Description                                                       |
| ----------- | --------- | ------------- | ----------------------------------------------------------------- |
| `isOpen`    | `boolean` | `false`       | Whether the menu is open                                          |
| `isClosing` | `boolean` | `false`       | Whether the menu is playing its close animation before unmounting |

## Effects

- **On `isOpen` becoming true** — listens for clicks outside the
  component and closes the menu when one occurs

## Handlers

- **On the trigger click** — toggles `isOpen`
- **On a tag's checkbox change** — adds or removes that tag from
  `selectedTags` via `onChange`
- **On closing the menu** — clears `isOpen` and sets `isClosing` unless
  the user prefers reduced motion, in which case the menu unmounts
  immediately
- **On the menu's close animation ending** — clears `isClosing`, letting
  the menu unmount

## SCSS Variable Dependencies

- `--accent-color` — used to highlight the trigger while active and to
  color checked checkboxes, expected to be set by a parent
