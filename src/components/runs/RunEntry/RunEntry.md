# RunEntry

A list entry summarizing a single game's active run. If the game has no
stored run, placeholder values are shown instead (no attempt number, dashes
for split/box/death counts). The split indicator shows the run's current
split (the first not yet marked complete) unless the run has been given up
on, in which case it reads "Wiped" instead; the Hall of Fame count is always
shown. A "Continue" button
navigates to the game's dedicated run page (only shown if a run already
exists), a "New" button starts a fresh attempt for the game, confirming
with the user first if a run is already in progress, then prompting for
the protagonist's gender (only for a game where `Game.hasGenderSelection`
is true) followed by a starter before the run is created, and a "Data"
button opens a modal offering the game's reset action (only available
once a run already exists).

## Props

| Prop   | Type          | Required | Default | Description                                       |
| ------ | ------------- | -------- | ------- | ------------------------------------------------- |
| `game` | `Game`        | Yes      | -       | The game the run belongs to                       |
| `run`  | `Run \| null` | Yes      | -       | The run data to display, or `null` if none exists |

## State

| State                 | Type                              | Initial value | Description                                                                                               |
| --------------------- | --------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| `isConfirmOpen`       | `boolean`                         | `false`       | Whether the "start a new run" confirmation modal is open                                                  |
| `isDataModalOpen`     | `boolean`                         | `false`       | Whether the data (reset) modal is open                                                                    |
| `isGenderSelectOpen`  | `boolean`                         | `false`       | Whether the gender selection modal is open                                                                |
| `isStarterSelectOpen` | `boolean`                         | `false`       | Whether the starter selection modal is open                                                               |
| `selectedGender`      | `'male' \| 'female' \| undefined` | `undefined`   | The gender chosen in the gender selection modal, carried into the new run once the starter is also chosen |

## Handlers

- **On "Continue" click** — navigates to the game's run page (`runUrl`)
- **On "New" click** — if a run already exists, opens a confirmation modal;
  otherwise begins run creation directly (gender selection first if
  `game.hasGenderSelection`, otherwise straight to starter selection)
- **On confirmation modal close/cancel** — closes the modal without
  starting a new run; the Cancel button requests the modal's animated
  close directly, without going through this handler
- **On confirmation modal confirm** — begins run creation (same branching
  as "New" click) and requests the confirmation modal's animated close,
  which closes it once the exit animation finishes
- **On "Data" click** — opens the data modal
- **On data modal close** — closes the modal without resetting anything
- **On data modal reset confirm** — deletes all of the game's stored data
  via `LocalStorageHelpers.deleteRun`
- **On gender select modal close/cancel** — closes the modal without
  starting a new run
- **On gender select** — stores the chosen gender in `selectedGender`,
  closes the gender selection modal, and opens the starter selection modal
- **On starter select modal close/cancel** — closes the modal without
  starting a new run
- **On starter select** — writes a fresh run to storage for the game with
  the chosen starter's species and full details (as the first entry in
  `caughtPokemon`), `selectedGender` if the gender step ran, incrementing
  the attempt number, while carrying over
  the existing hall of fame count, then navigates to
  the game's run page (`runUrl`); the starter select modal closes itself,
  with its own exit animation,
  once `StarterSelectModal` requests its close

## Computations

- `currentSplitName` — the name of the first split (in game order) not yet
  present in the run's `completedSplits`, or the last split if every split
  is completed; `null` if there is no run
- `boxCount` — the number of Pokémon in the run's `caughtPokemon` that
  don't have a `status` of `PokemonStatus.Dead`; `null` if there is no run
- `deathCount` — the number of Pokémon in the run's `caughtPokemon` with a
  `status` of `PokemonStatus.Dead`; `null` if there is no run
- `runUrl` — the game's run page URL with no query params

## SCSS Variable Dependencies

- `--accent-color` — the game's theme color, set inline from `game.accentColor`
  and used to color the hall of fame text
