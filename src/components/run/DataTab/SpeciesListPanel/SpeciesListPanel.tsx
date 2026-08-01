import Image from 'next/image';
import { LearnsetMove } from '@/lib/static/types';
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

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleSpeciesClick = (slug: string): void => {
        onSelectSpecies(slug);
    };

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getMethodLabel = (moves: LearnsetMove[]): string =>
        moves.map(MoveHelpers.getLearnsetMethodLabel).join(', ');

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
