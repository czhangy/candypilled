# NumericInput

A digit-only text input for editing a bounded numeric value. Unlike a
native `type="number"` input, it can be freely cleared while typing — the
value is only normalized and clamped to its `min`/`max` range once a digit
commits or the field loses focus.

## Props

| Prop       | Type                      | Required | Default | Description                                                           |
| ---------- | ------------------------- | -------- | ------- | --------------------------------------------------------------------- |
| `dense`    | `boolean`                 | Yes      | -       | Renders the compact stat-table style (smaller, centered, fixed width) |
| `disabled` | `boolean`                 | Yes      | -       | Whether the input is disabled                                         |
| `id`       | `string`                  | No       | -       | Element id, for associating with a `<label htmlFor>`                  |
| `max`      | `number`                  | Yes      | -       | The upper bound the value is clamped to                               |
| `min`      | `number`                  | Yes      | -       | The lower bound the value is clamped to                               |
| `onChange` | `(value: number) => void` | Yes      | -       | Called with the committed, clamped numeric value                      |
| `value`    | `number`                  | Yes      | -       | The current committed value                                           |
