import Image from 'next/image';
import styles from './DexEntry.module.scss';

type DexEntryProps = {
    champed: boolean;
    name: string;
    onClick: () => void;
    sprite: string | undefined;
};

const DexEntry: React.FC<DexEntryProps> = ({
    champed,
    name,
    onClick,
    sprite,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 96;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <li>
            <button
                className={[
                    styles['dex-entry'],
                    !champed && styles['dex-entry--unchamped'],
                ]
                    .filter(Boolean)
                    .join(' ')}
                onClick={onClick}
                type="button"
            >
                <div className={styles['dex-entry__sprite']}>
                    {sprite && (
                        <Image
                            alt={champed ? name : ''}
                            height={SPRITE_SIZE}
                            src={sprite}
                            width={SPRITE_SIZE}
                        />
                    )}
                </div>
                {champed && (
                    <span className={styles['dex-entry__name']}>{name}</span>
                )}
            </button>
        </li>
    );
};

export default DexEntry;
