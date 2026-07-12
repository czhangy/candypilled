# LocationMap

Renders a location's map image under a "Map" label, with a `TrainerMarker`
overlaid for each trainer at that location. An encounter table will be
added here in future work.

## Props

| Prop       | Type        | Required | Default | Description                       |
| ---------- | ----------- | -------- | ------- | --------------------------------- |
| `src`      | `string`    | Yes      | -       | Path to the map image             |
| `alt`      | `string`    | Yes      | -       | Alt text for the map image        |
| `width`    | `number`    | Yes      | -       | Intrinsic width of the map image  |
| `height`   | `number`    | Yes      | -       | Intrinsic height of the map image |
| `trainers` | `Trainer[]` | Yes      | -       | Trainers to mark on the map       |
