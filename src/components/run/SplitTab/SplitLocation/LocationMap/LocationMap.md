# LocationMap

Renders a location's map image under a "Map" label, with a `TrainerMarker`
overlaid for each trainer at that location. An encounter table will be
added here in future work.

## Props

| Prop       | Type              | Required | Default | Description                                              |
| ---------- | ----------------- | -------- | ------- | -------------------------------------------------------- |
| `map`      | `StaticImageData` | Yes      | -       | Statically imported map image, with intrinsic dimensions |
| `alt`      | `string`          | Yes      | -       | Alt text for the map image                               |
| `trainers` | `Trainer[]`       | No       | `[]`    | Trainers to mark on the map                              |
