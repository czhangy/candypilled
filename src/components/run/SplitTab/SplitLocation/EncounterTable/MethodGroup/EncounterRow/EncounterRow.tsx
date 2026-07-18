import Image from 'next/image';
import { Encounter } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './EncounterRow.module.scss';

type EncounterRowProps = {
    displayChance: number | null;
    encounter: Encounter;
    isCaughtElsewhere: boolean;
    isCaughtHere: boolean;
    isSelected: boolean;
    onClick: () => void;
    variant: string;
};

const EncounterRow: React.FC<EncounterRowProps> = ({
    displayChance,
    encounter,
    isCaughtElsewhere,
    isCaughtHere,
    isSelected,
    onClick,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 48;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const getLevelLabel = (): string =>
        encounter.minLevel === encounter.maxLevel
            ? `Lv. ${encounter.minLevel}`
            : `Lv. ${encounter.minLevel}-${encounter.maxLevel}`;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const pokemon = PokemonHelpers.getPokemonData(encounter.species);
    const sprite = PokemonHelpers.getPokemonSprite(encounter.species, variant);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <tr
            className={[
                styles.row,
                isSelected && styles['row--selected'],
                isCaughtHere && styles['row--caught'],
                isCaughtElsewhere && styles['row--used'],
            ]
                .filter(Boolean)
                .join(' ')}
            onClick={onClick}
        >
            <td>
                <div className={styles.pokemon}>
                    <div className={styles['pokemon__sprite']}>
                        {sprite && (
                            <Image
                                alt={pokemon?.name ?? encounter.species}
                                height={SPRITE_SIZE}
                                src={sprite}
                                width={SPRITE_SIZE}
                            />
                        )}
                    </div>
                    <div className={styles['pokemon__info']}>
                        <span>{pokemon?.name ?? encounter.species}</span>
                    </div>
                </div>
            </td>
            <td>{getLevelLabel()}</td>
            <td className={styles.chance}>
                {encounter.chance !== null ? `${displayChance}%` : '—'}
            </td>
        </tr>
    );
};

export default EncounterRow;
