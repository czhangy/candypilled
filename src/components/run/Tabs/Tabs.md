# Tabs

A horizontal row of labeled tabs where one tab is active at a time, indicated
by an accent-colored underline.

## Props

| Prop          | Type                              | Required | Default | Description                                 |
| ------------- | --------------------------------- | -------- | ------- | ------------------------------------------- |
| `tabs`        | `{ id: string; label: string }[]` | Yes      | -       | The tabs to render, in order                |
| `activeTab`   | `string`                          | Yes      | -       | The `id` of the currently active tab        |
| `onTabChange` | `(id: string) => void`            | Yes      | -       | Called with a tab's `id` when it is clicked |
