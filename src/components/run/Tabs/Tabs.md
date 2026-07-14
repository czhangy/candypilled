# Tabs

A horizontal row of labeled tabs where one tab is active at a time, indicated
by an underline in the game's accent color.

## Props

| Prop          | Type                                                           | Required | Default    | Description                                 |
| ------------- | -------------------------------------------------------------- | -------- | ---------- | ------------------------------------------- |
| `tabs`        | `{ id: string; label: React.ReactNode; ariaLabel?: string }[]` | Yes      | -          | The tabs to render, in order                |
| `activeTab`   | `string`                                                       | Yes      | -          | The `id` of the currently active tab        |
| `align`       | `'center' \| 'left'`                                           | No       | `'center'` | How the tabs are aligned within the row     |
| `onTabChange` | `(id: string) => void`                                         | Yes      | -          | Called with a tab's `id` when it is clicked |

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, set by `RunPage`
