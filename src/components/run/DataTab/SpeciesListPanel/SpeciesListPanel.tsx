import Image from 'next/image';
import { LearnsetMethod, LearnsetMove } from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './SpeciesListPanel.module.scss';

type SpeciesListPanelProps = {
    entries: {
        slug: string;
        name: string;
        dexNumber: number;
        // Only set for moves; abilities have no method to display.
        moves?: LearnsetMove[];
    }[];
    onSelectSpecies: (slug: string) => void;
    title: string;
};

const SpeciesListPanel: React.FC<SpeciesListPanelProps> = ({
    entries,
    onSelectSpecies,
    title,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_WIDTH = 40;
    const SPRITE_HEIGHT = 30;

    // Preference order when a Pokémon learns a move through more than one
    // method: level-up is the most informative (it also conveys the
    // level), machine next, tutor last.
    const METHOD_PRIORITY: LearnsetMethod[] = ['level-up', 'machine', 'tutor'];

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleSpeciesClick = (slug: string): void => {
        onSelectSpecies(slug);
    };

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getPrimaryMove = (moves: LearnsetMove[]): LearnsetMove | undefined =>
        METHOD_PRIORITY.map((method) =>
            moves.find((move) => move.method === method)
        ).find((move): move is LearnsetMove => move !== undefined);

    const getMethodLabel = (moves: LearnsetMove[]): string => {
        const primaryMove = getPrimaryMove(moves);
        return primaryMove
            ? MoveHelpers.getLearnsetMethodLabel(primaryMove)
            : '';
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    // Sorted by method priority (level-up, then machine, then tutor), with
    // level-up entries ordered by ascending level, and dex number as the
    // tie breaker throughout. Entries with no moves (the Abilities subtab)
    // all share the same (lack of) priority, so they simply sort by dex
    // number.
    const sortedEntries = [...entries].sort((a, b) => {
        const primaryA = a.moves ? getPrimaryMove(a.moves) : undefined;
        const primaryB = b.moves ? getPrimaryMove(b.moves) : undefined;
        const priorityA = primaryA
            ? METHOD_PRIORITY.indexOf(primaryA.method)
            : -1;
        const priorityB = primaryB
            ? METHOD_PRIORITY.indexOf(primaryB.method)
            : -1;

        if (priorityA !== priorityB) return priorityA - priorityB;

        if (
            primaryA?.method === 'level-up' &&
            primaryB?.method === 'level-up'
        ) {
            const levelDiff = (primaryA.level ?? 0) - (primaryB.level ?? 0);
            if (levelDiff !== 0) return levelDiff;
        }

        return a.dexNumber - b.dexNumber;
    });

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['species-list-panel']}>
            <div className={styles.header}>{title}</div>
            <ul className={styles.list}>
                {sortedEntries.map((entry) => (
                    <li key={entry.slug}>
                        <button
                            className={styles.row}
                            onClick={() => handleSpeciesClick(entry.slug)}
                            type="button"
                        >
                            <Image
                                alt={entry.name}
                                height={SPRITE_HEIGHT}
                                src={PokemonHelpers.getBoxSprite(entry.slug)}
                                width={SPRITE_WIDTH}
                            />
                            <span className={styles.name}>{entry.name}</span>
                            {entry.moves && (
                                <span className={styles.method}>
                                    {getMethodLabel(entry.moves)}
                                </span>
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SpeciesListPanel;
