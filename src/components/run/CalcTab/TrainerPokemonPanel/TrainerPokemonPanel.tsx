import Dropdown from '@/components/common/Dropdown/Dropdown';
import StatsTable from '@/components/run/CalcTab/StatsTable/StatsTable';
import {
    BattlePokemon,
    DropdownOption,
    Game,
    StatValues,
} from '@/lib/static/types';
import AbilityHelpers from '@/lib/utils/AbilityHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import styles from './TrainerPokemonPanel.module.scss';

type TrainerPokemonPanelProps = {
    abilityName: string;
    boosts: Record<Exclude<keyof StatValues, 'hp'>, number>;
    game: Game;
    hideEvs: boolean;
    isTailwind: boolean;
    mon?: BattlePokemon;
    onAbilityChange: (value: string) => void;
    onBoostChange: (
        stat: Exclude<keyof StatValues, 'hp'>,
        value: string
    ) => void;
    onStatusChange: (value: string) => void;
    selectedBattle?: string;
    status: string;
};

const TrainerPokemonPanel: React.FC<TrainerPokemonPanelProps> = ({
    abilityName,
    boosts,
    game,
    hideEvs,
    isTailwind,
    mon,
    onAbilityChange,
    onBoostChange,
    onStatusChange,
    selectedBattle,
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

    const ivs = mon ? StatHelpers.normalizeStats(mon.ivs, 31) : undefined;
    const evs = mon ? StatHelpers.normalizeStats(mon.evs, 0) : undefined;

    const baseStats = mon
        ? PokemonHelpers.getPokemonStats(mon.name, game.generation)
        : undefined;
    const rawTotalStats =
        mon && baseStats && ivs && evs
            ? StatHelpers.calculateStats(
                  baseStats,
                  mon.level,
                  ivs,
                  evs,
                  mon.nature
              )
            : undefined;
    const totalStats =
        rawTotalStats && isTailwind
            ? { ...rawTotalStats, spe: rawTotalStats.spe * 2 }
            : rawTotalStats;

    const abilityOptions: DropdownOption[] = AbilityHelpers.getAllAbilities(
        game.generation
    ).map((name) => ({ label: name, value: name }));

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['trainer-pokemon-panel']}>
            {!selectedBattle && (
                <p className={styles.placeholder}>Select a battle above</p>
            )}
            {selectedBattle && (
                <>
                    <div className={styles.row}>
                        <div className={styles.field}>
                            <span className={styles.label}>Pokémon</span>
                            <span className={styles.value}>
                                {mon?.name ?? 'None selected'}
                            </span>
                        </div>
                        <div className={styles.field}>
                            <span className={styles.label}>Level</span>
                            <span className={styles.value}>
                                {mon?.level ?? '-'}
                            </span>
                        </div>
                    </div>
                    {mon && (
                        <>
                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <span className={styles.label}>Nature</span>
                                    <span className={styles.value}>
                                        {mon.nature ?? 'None'}
                                    </span>
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
                                totalStats={totalStats}
                            />
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default TrainerPokemonPanel;
