import { useSyncExternalStore } from 'react';
import SearchableList from '@/components/common/SearchableList/SearchableList';
import SpeciesListPanel from '@/components/run/DataTab/SpeciesListPanel/SpeciesListPanel';
import { MOVES } from '@/lib/data/moves';
import { Game } from '@/lib/static/types';
import EncounterHelpers from '@/lib/utils/EncounterHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import MoveDetail from './MoveDetail/MoveDetail';
import styles from './MovesSubtab.module.scss';

type MovesSubtabProps = {
    game: Game;
    onSelectMove: (slug: string) => void;
    onSelectSpeciesLink: (slug: string) => void;
    selectedMove?: string;
};

const MovesSubtab: React.FC<MovesSubtabProps> = ({
    game,
    onSelectMove,
    onSelectSpeciesLink,
    selectedMove,
}) => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const settings = useSyncExternalStore(
        SettingsHelpers.subscribe,
        SettingsHelpers.getSnapshot,
        SettingsHelpers.getServerSnapshot
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const gameSpecies = EncounterHelpers.getGameSpecies(
        game,
        settings['show-national-dex-data'] ?? false
    );
    const availableMoves = Object.values(MOVES)
        .filter(
            (move) =>
                move.introducedInGeneration <= game.generation &&
                PokemonHelpers.getSpeciesWithMove(
                    gameSpecies,
                    move.slug,
                    game.version
                ).length > 0
        )
        .sort((a, b) => a.name.localeCompare(b.name));
    const effectiveMove = selectedMove ?? availableMoves[0]?.slug ?? '';
    const learnedBy = PokemonHelpers.getSpeciesWithMove(
        gameSpecies,
        effectiveMove,
        game.version
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['moves-subtab']}>
            <SearchableList
                emptyMessage="No moves found"
                items={availableMoves}
                onSelectItem={onSelectMove}
                searchAriaLabel="Search moves"
                searchPlaceholder="Search moves..."
                selectedItem={effectiveMove}
                sortAlphabetically
            />
            <MoveDetail generation={game.generation} moveSlug={effectiveMove} />
            <SpeciesListPanel
                entries={learnedBy}
                onSelectSpecies={onSelectSpeciesLink}
                title="Learned By"
            />
        </div>
    );
};

export default MovesSubtab;
