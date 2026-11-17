import Image from 'next/image';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import NumericInput from '@/components/common/NumericInput/NumericInput';
import ReorderButtons from '@/components/run/CalcTab/LineBuilder/ReorderButtons/ReorderButtons';
import { STATUS_OPTIONS } from '@/lib/static/constants';
import {
    DropdownOption,
    GameDataSource,
    LinePokemon,
} from '@/lib/static/types';
import LineHelpers from '@/lib/utils/LineHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './PrepRow.module.scss';

type PrepRowProps = {
    canMoveDown: boolean;
    canMoveUp: boolean;
    dataSource: GameDataSource;
    heldItemOptions: DropdownOption[];
    onCurrentHpChange: (currentHp: number) => void;
    onHeldItemChange: (heldItem: string | undefined) => void;
    onMoveDown: () => void;
    onMoveUp: () => void;
    onStatusChange: (status: string) => void;
    pokemon: LinePokemon;
};

// Renders its five cells straight into the parent's grid, so the columns
// line up across every row.
const PrepRow: React.FC<PrepRowProps> = ({
    canMoveDown,
    canMoveUp,
    dataSource,
    heldItemOptions,
    onCurrentHpChange,
    onHeldItemChange,
    onMoveDown,
    onMoveUp,
    onStatusChange,
    pokemon,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_WIDTH = 40;
    const SPRITE_HEIGHT = 30;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleHeldItemChange = (heldItem: string): void => {
        onHeldItemChange(heldItem || undefined);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <>
            <div className={styles.identity}>
                <div className={styles.sprite}>
                    <Image
                        alt=""
                        height={SPRITE_HEIGHT}
                        src={PokemonHelpers.getBoxSprite(pokemon.slug)}
                        width={SPRITE_WIDTH}
                    />
                </div>
                <span className={styles.name}>
                    {LineHelpers.getName(dataSource, pokemon)}
                </span>
            </div>
            <Dropdown
                dense
                onChange={handleHeldItemChange}
                options={heldItemOptions}
                searchable
                value={pokemon.heldItem ?? ''}
            />
            <Dropdown
                dense
                onChange={onStatusChange}
                options={STATUS_OPTIONS}
                value={pokemon.status}
            />
            <div className={styles.hp}>
                <NumericInput
                    dense
                    disabled={pokemon.maxHp === 0}
                    max={pokemon.maxHp}
                    min={1}
                    onChange={onCurrentHpChange}
                    value={Math.min(pokemon.currentHp, pokemon.maxHp)}
                />
                <span className={styles['max-hp']}>/ {pokemon.maxHp}</span>
            </div>
            <ReorderButtons
                canMoveDown={canMoveDown}
                canMoveUp={canMoveUp}
                onMoveDown={onMoveDown}
                onMoveUp={onMoveUp}
            />
        </>
    );
};

export default PrepRow;
