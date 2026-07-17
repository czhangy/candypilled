# Toggle

A binary switch control, styled as a sliding pill knob that fills with
the accent color when checked.

## Props

| Prop       | Type                         | Required | Default | Description                                  |
| ---------- | ---------------------------- | -------- | ------- | -------------------------------------------- |
| `checked`  | `boolean`                    | Yes      | -       | Whether the switch is on                     |
| `label`    | `string`                     | Yes      | -       | Accessible label announced to screen readers |
| `onChange` | `(checked: boolean) => void` | Yes      | -       | Called with the new checked state on click   |
