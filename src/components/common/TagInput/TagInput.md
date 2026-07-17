# TagInput

A freeform tag editor. Existing tags are shown as removable chips, and
typing into the trailing text field and pressing Enter or `,` (or
blurring the field) adds the typed text as a new tag.

## Props

| Prop       | Type                       | Required | Default | Description                                    |
| ---------- | -------------------------- | -------- | ------- | ---------------------------------------------- |
| `onChange` | `(tags: string[]) => void` | Yes      | -       | Called with the updated tag list on any change |
| `tags`     | `string[]`                 | Yes      | -       | The current list of tags                       |

## State

| State   | Type     | Initial value | Description                             |
| ------- | -------- | ------------- | --------------------------------------- |
| `draft` | `string` | `''`          | The text currently typed into the field |

## Handlers

- **On the draft input change** — updates `draft`
- **On Enter, `,`, or blur in the draft input** — trims `draft`, and if
  non-empty and not already present in `tags`, appends it via
  `onChange`; always clears `draft` afterward
- **On Backspace in an empty draft input** — removes the last tag, matching
  the common chip-input convention of backspacing to delete
- **On a tag's remove button click** — removes that tag via `onChange`
