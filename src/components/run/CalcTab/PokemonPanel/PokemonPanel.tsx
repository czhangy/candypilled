import Dropdown from '@/components/common/Dropdown/Dropdown';
import StatsTable from '@/components/run/CalcTab/StatsTable/StatsTable';
import { MAX_LEVEL, MIN_LEVEL } from '@/lib/static/constants';
import { Nature } from '@/lib/static/enums';
import {
    CaughtPokemon,
    DropdownOption,
    Game,
    StatValues,
} from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import styles from './PokemonPanel.module.scss';

type PokemonPanelProps = {
    abilityName: string;
    boosts: Record<Exclude<keyof StatValues, 'hp'>, number>;
    caught?: CaughtPokemon;
    evs: StatValues;
    game: Game;
    hideEvs: boolean;
    ivs: StatValues;
    level: number;
    moves: string[];
    nature: Nature;
    onAbilityChange: (value: string) => void;
    onBoostChange: (
        stat: Exclude<keyof StatValues, 'hp'>,
        value: string
    ) => void;
    onEvChange: (
        stat: keyof StatValues,
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    onIvChange: (
        stat: keyof StatValues,
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    onLevelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onMoveChange: (index: number, value: string) => void;
    onNatureChange: (value: string) => void;
    onStatusChange: (value: string) => void;
    status: string;
};

const PokemonPanel: React.FC<PokemonPanelProps> = ({
    abilityName,
    boosts,
    caught,
    evs,
    game,
    hideEvs,
    ivs,
    level,
    moves,
    nature,
    onAbilityChange,
    onBoostChange,
    onEvChange,
    onIvChange,
    onLevelChange,
    onMoveChange,
    onNatureChange,
    onStatusChange,
    status,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const STATUS_OPTIONS: DropdownOption[] = [
        { label: 'Healthy', value: '' },
        { label: 'Burn', value: 'brn' },
        { label: 'Freeze', value: 'frz' },
        { label: 'Paralysis', value: 'par' },
        { label: 'Poison', value: 'psn' },
        { label: 'Badly Poisoned', value: 'tox' },
        { label: 'Sleep', value: 'slp' },
    ];

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const baseStats = caught
        ? PokemonHelpers.getPokemonStats(caught.name, game.generation)
        : undefined;
    const totalStats = baseStats
        ? StatHelpers.calculateStats(baseStats, level, ivs, evs, nature)
        : undefined;

    const abilityOptions: DropdownOption[] = AbilityHelpers.getAllAbilities(
        game.generation
    ).map((name) => ({ label: name, value: name }));
    const natureOptions: DropdownOption[] = Object.values(Nature).map(
        (name) => ({ label: name, value: name })
    );
    const moveOptions: DropdownOption[] = [
        { label: 'None', value: '' },
        ...MoveHelpers.getAllMoves(game.generation).map((name) => ({
            label: name,
            value: name,
        })),
    ];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['pokemon-panel']}>
            <div className={styles.row}>
                <div className={styles.field}>
                    <span className={styles.label}>Pokémon</span>
                    <span className={styles.value}>
                        {caught?.name ?? 'None selected'}
                    </span>
                </div>
                <div className={styles.field}>
                    <label
                        className={styles.label}
                        htmlFor="pokemon-panel-level"
                    >
                        Level
                    </label>
                    <input
                        className={styles.input}
                        disabled={!caught}
                        id="pokemon-panel-level"
                        max={MAX_LEVEL}
                        min={MIN_LEVEL}
                        onChange={onLevelChange}
                        type="number"
                        value={level}
                    />
                </div>
            </div>
            {caught && (
                <>
                    <div className={styles.row}>
                        <div className={styles.field}>
                            <span className={styles.label}>Nature</span>
                            <Dropdown
                                dense
                                onChange={onNatureChange}
                                options={natureOptions}
                                value={nature}
                            />
                        </div>
                        <div className={styles.field}>
                            <span className={styles.label}>Ability</span>
                            <Dropdown
                                dense
                                onChange={onAbilityChange}
                                options={abilityOptions}
                                searchable
                                value={abilityName}
                            />
                        </div>
                        <div className={styles.field}>
                            <span className={styles.label}>Status</span>
                            <Dropdown
                                dense
                                onChange={onStatusChange}
                                options={STATUS_OPTIONS}
                                value={status}
                            />
                        </div>
                    </div>
                    <StatsTable
                        baseStats={baseStats}
                        boosts={boosts}
                        evs={evs}
                        hideEvs={hideEvs}
                        ivs={ivs}
                        onBoostChange={onBoostChange}
                        onEvChange={onEvChange}
                        onIvChange={onIvChange}
                        totalStats={totalStats}
                    />
                    <div className={styles.field}>
                        <span className={styles.label}>Moves</span>
                        <div className={styles.moves}>
                            {moves.map((move, index) => (
                                <Dropdown
                                    dense
                                    key={index}
                                    onChange={(value) =>
                                        onMoveChange(index, value)
                                    }
                                    options={moveOptions}
                                    placeholder="None"
                                    searchable
                                    value={move}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default PokemonPanel;
