'use client';

import { GameContext } from '@/lib/context/GameContext';
import { Game } from '@/lib/static/types';

type GameProviderProps = {
    children: React.ReactNode;
    game: Game;
};

const GameProvider: React.FC<GameProviderProps> = ({ children, game }) => (
    <GameContext.Provider value={game}>{children}</GameContext.Provider>
);

export default GameProvider;
