# TypesPage

The page for `/types`. Shows the full 18-type effectiveness chart, with a
toggle to switch between the current (Gen 6+) type chart and the pre-Gen 6
chart, which predates the Fairy type and a few other matchup changes.

## State

| State        | Type      | Initial value | Description                                    |
| ------------ | --------- | ------------- | ---------------------------------------------- |
| `isGen6Plus` | `boolean` | `true`        | Whether the Gen 6+ or pre-Gen 6 chart is shown |
