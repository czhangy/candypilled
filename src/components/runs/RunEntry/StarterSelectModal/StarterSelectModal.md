# StarterSelectModal

A modal shown when starting a new run, prompting the user to choose a
starter Pokemon before the run is created. A two-column layout pairs a
vertical list of starter sprites (`StarterSelect`) on the left with a
`PokedexTile` on the right previewing whichever starter is picked;
clicking the tile's "SELECT" button finalizes that starter and creates
the run. The left column stays pinned in place as the modal's content
scrolls past it.

## Props

| Prop       | Type                        | Required | Default | Description                                                                       |
| ---------- | --------------------------- | -------- | ------- | --------------------------------------------------------------------------------- |
| `game`     | `Game`                      | Yes      | -       | The game the run belongs to, supplying its starters, accent color, and generation |
| `onSelect` | `(starter: string) => void` | Yes      | -       | Called with the confirmed starter's name                                          |
| `onClose`  | `() => void`                | Yes      | -       | Called when the modal is dismissed without choosing                               |

## State

| State             | Type                  | Initial value | Description                                                                      |
| ----------------- | --------------------- | ------------- | -------------------------------------------------------------------------------- |
| `activeStarter`   | `string \| null`      | `null`        | The starter currently chosen from `StarterSelect`                                |
| `speciesOverride` | `string \| undefined` | `undefined`   | The species being previewed via an evolution line click in `PokedexTile`, if any |

## Computations

- `variant` — the game's slug, used to resolve sprites in
  `StarterSelect` and `PokedexTile`

## Handlers

- **On starter select** — sets `activeStarter` to the clicked starter
  and clears `speciesOverride`
- **On `PokedexTile` evolution select** — sets `speciesOverride` to the
  clicked evolution stage's species
- **On `PokedexTile` "SELECT" click** — calls `onSelect` with the
  displayed species
