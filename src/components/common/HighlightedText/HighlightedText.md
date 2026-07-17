# HighlightedText

Renders text with the first case-insensitive substring matching a search
query wrapped in an accent-colored, bold span. Renders the plain text
unchanged when the query is empty or doesn't match.

## Props

| Prop    | Type     | Required | Default | Description                                |
| ------- | -------- | -------- | ------- | ------------------------------------------ |
| `query` | `string` | Yes      | -       | The search text whose match is highlighted |
| `text`  | `string` | Yes      | -       | The full text to render                    |

## SCSS Variable Dependencies

- `--accent-color` — used to color the matching substring
