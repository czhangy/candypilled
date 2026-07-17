# TimeOfDayButtons

A row of icon toggle buttons for switching between an encounter
table's time-of-day conditions (morning, day, night), each wrapped in
a `Tooltip` naming its time of day on hover.

## Props

| Prop           | Type                     | Required | Default | Description                                                        |
| -------------- | ------------------------ | -------- | ------- | ------------------------------------------------------------------ |
| `onSelect`     | `(time: string) => void` | Yes      | -       | Called with a time-of-day condition when its button is clicked     |
| `selectedTime` | `string`                 | No       | -       | The currently selected time-of-day condition, styled active        |
| `times`        | `string[]`               | Yes      | -       | The time-of-day conditions to render buttons for, in display order |
