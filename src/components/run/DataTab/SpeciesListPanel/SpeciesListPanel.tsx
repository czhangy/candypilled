import Image from 'next/image';
import { LearnsetMethod, LearnsetMove } from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './SpeciesListPanel.module.scss';

type SpeciesListPanelProps = {
    emptyMessage: string;
    entries: {
        slug: string;
        name: string;
        // Only set for moves; abilities have no method to display.
        moves?: LearnsetMove[];
    }[];
    onSelectSpecies: (slug: string) => void;
    title: string;
};

const SpeciesListPanel: React.FC<SpeciesListPanelProps> = ({
    emptyMessage,
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

    const getMethodLabel = (moves: LearnsetMove[]): string => {
        const primaryMove = METHOD_PRIORITY.map((method) =>
            moves.find((move) => move.method === method)
        ).find((move): move is LearnsetMove => move !== undefined);

        return primaryMove
            ? MoveHelpers.getLearnsetMethodLabel(primaryMove)
            : '';
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['species-list-panel']}>
            <div className={styles.header}>{title}</div>
            <ul
                className={[
                    styles.list,
                    entries.length === 0 && styles['list--empty'],
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                {entries.map((entry) => (
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
                {entries.length === 0 && (
                    <li className={styles.empty}>{emptyMessage}</li>
                )}
            </ul>
        </div>
    );
};

export default SpeciesListPanel;
