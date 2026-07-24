import { useId } from 'react';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { MAX_LEVEL, MIN_LEVEL } from '@/lib/static/constants';
import { Nature } from '@/lib/static/enums';
import {
    DropdownOption,
    Game,
    SpeedComparison,
    StatValues,
} from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import styles from './PokemonPanel.module.scss';
import StatsTable from './StatsTable/StatsTable';

type PokemonPanelProps = {
    abilityName: string;
    boosts: Record<Exclude<keyof StatValues, 'hp'>, number>;
    evs?: StatValues;
    game: Game;
    hideEvs: boolean;
    isTailwind: boolean;
    ivs?: StatValues;
    level: number;
    moves?: string[];
    nature: Nature;
    onAbilityChange: (value: string) => void;
    onBoostChange: (
        stat: Exclude<keyof StatValues, 'hp'>,
        value: string
    ) => void;
    onEvChange?: (
        stat: keyof StatValues,
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    onIvChange?: (
        stat: keyof StatValues,
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    onLevelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onMoveChange?: (index: number, value: string) => void;
    onNatureChange: (value: string) => void;
    onStatusChange: (value: string) => void;
    placeholder?: string;
    pokemonName?: string;
    speedComparison: SpeedComparison | undefined;
    status: string;
};

const PokemonPanel: React.FC<PokemonPanelProps> = ({
    abilityName,
    boosts,
    evs,
    game,
    hideEvs,
    isTailwind,
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
    placeholder,
    pokemonName,
    speedComparison,
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
    // HOOKS
    // -------------------------------------------------------------------------

    const levelInputId = useId();

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const baseStats = pokemonName
        ? PokemonHelpers.getPokemonStats(pokemonName, game.generation)
        : undefined;
    const rawTotalStats =
        baseStats && evs && ivs
            ? StatHelpers.calculateStats(baseStats, level, ivs, evs, nature)
            : undefined;
    const totalStats = rawTotalStats
        ? {
              ...rawTotalStats,
              atk: StatHelpers.applyBoost(rawTotalStats.atk, boosts.atk),
              def: StatHelpers.applyBoost(rawTotalStats.def, boosts.def),
              spa: StatHelpers.applyBoost(rawTotalStats.spa, boosts.spa),
              spd: StatHelpers.applyBoost(rawTotalStats.spd, boosts.spd),
              spe:
                  StatHelpers.applyBoost(rawTotalStats.spe, boosts.spe) *
                  (isTailwind ? 2 : 1),
          }
        : undefined;

    const abilityOptions: DropdownOption[] = AbilityHelpers.getAllAbilities(
        game.generation
    ).map((name) => ({ label: name, value: name }));
    const natureOptions: DropdownOption[] = Object.values(Nature).map(
        (name) => ({ label: name, value: name })
    );
    const moveOptions: DropdownOption[] = onMoveChange
        ? [
              { label: 'None', value: '' },
              ...MoveHelpers.getAllMoves(game.generation).map((name) => ({
                  label: name,
                  value: name,
              })),
          ]
        : [];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['pokemon-panel']}>
            {placeholder ? (
                <p className={styles.placeholder}>{placeholder}</p>
            ) : (
                <>
                    <div className={styles.row}>
                        <div className={styles.field}>
                            <span className={styles.label}>Pokémon</span>
                            <span className={styles.value}>
                                {pokemonName ?? 'None selected'}
                            </span>
                        </div>
                        <div className={styles.field}>
                            <label
                                className={styles.label}
                                htmlFor={levelInputId}
                            >
                                Level
                            </label>
                            <input
                                className={styles.input}
                                disabled={!pokemonName}
                                id={levelInputId}
                                max={MAX_LEVEL}
                                min={MIN_LEVEL}
                                onChange={onLevelChange}
                                type="number"
                                value={level}
                            />
                        </div>
                    </div>
                    {pokemonName && (
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
                                    <span className={styles.label}>
                                        Ability
                                    </span>
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
                                speedComparison={speedComparison}
                                totalStats={totalStats}
                            />
                            {onMoveChange && (
                                <div className={styles.field}>
                                    <span className={styles.label}>Moves</span>
                                    <div className={styles.moves}>
                                        {moves?.map((move, index) => (
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
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default PokemonPanel;
