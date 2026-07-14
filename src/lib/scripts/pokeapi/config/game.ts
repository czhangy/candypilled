// The single source of truth for which game the data-fetching and
// scaffolding scripts target. Every script that needs a game slug, region,
// or generation should derive it from here (directly, or via
// pokeapi/game-versions for the full GameVersion) rather than hardcoding it.
export const GAME_ID = 'platinum';
