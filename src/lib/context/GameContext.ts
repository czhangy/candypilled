import { createContext, useContext } from 'react';
import { Game } from '@/lib/static/types';

// Lets RunLayout (a Server Component) hand the loaded Game down to RunPage
// without passing it as a page prop, since a page prop would re-serialize
// the full game data on every search-param-only navigation (tab switches).
export const GameContext = createContext<Game | null>(null);

/** The Game provided by the nearest GameContext.Provider ancestor. */
export const useGame = (): Game => {
    const game = useContext(GameContext);
    if (!game) {
        throw new Error('useGame used outside of a GameContext.Provider');
    }
    return game;
};
