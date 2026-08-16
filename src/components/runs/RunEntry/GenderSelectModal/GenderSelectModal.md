# GenderSelectModal

A modal prompting the player to choose their protagonist's gender when
starting a new run, shown only for a game where that choice affects
in-game content (`Game.genders` is set). Each option renders as a
clickable sprite (`Game.genders.male`/`.female`) rather than a plain text
label; clicking one highlights it without confirming, and a "SELECT"
button in the footer (disabled until a gender is picked) confirms the
choice, mirroring `StarterSelectModal`'s pick-then-confirm flow. Precedes
starter selection in the new-run flow.

## Props

| Prop       | Type                                   | Required | Default | Description                                                     |
| ---------- | -------------------------------------- | -------- | ------- | --------------------------------------------------------------- |
| `game`     | `Game`                                 | Yes      | -       | The active game, used for the modal's accent/button text colors |
| `genders`  | `{ male: string; female: string }`     | Yes      | -       | The game's protagonist sprite paths, from `Game.genders`        |
| `onClose`  | `() => void`                           | Yes      | -       | Called when the modal is dismissed without a selection          |
| `onSelect` | `(gender: 'male' \| 'female') => void` | Yes      | -       | Called with the confirmed gender when "SELECT" is clicked       |

## State

| State          | Type                         | Initial value | Description                                          |
| -------------- | ---------------------------- | ------------- | ---------------------------------------------------- |
| `activeGender` | `'male' \| 'female' \| null` | `null`        | The currently highlighted (not yet confirmed) gender |

## Handlers

- **On a gender sprite click** — sets `activeGender` to that gender,
  highlighting it
- **On "SELECT" click** — calls `onSelect` with `activeGender`; no-ops if
  nothing is selected yet (the button is disabled in that state)
