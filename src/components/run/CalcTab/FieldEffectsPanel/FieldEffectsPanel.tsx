import Dropdown from '@/components/common/Dropdown/Dropdown';
import Toggle from '@/components/common/Toggle/Toggle';
import {
    CalcFieldGlobal,
    CalcFieldState,
    CalcSideConditions,
    DropdownOption,
} from '@/lib/static/types';
import styles from './FieldEffectsPanel.module.scss';

type FieldEffectsPanelProps = {
    field: CalcFieldState;
    generation: number;
    onChange: (field: CalcFieldState) => void;
};

const FieldEffectsPanel: React.FC<FieldEffectsPanelProps> = ({
    field,
    generation,
    onChange,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const WEATHER_OPTIONS: (DropdownOption & {
        introducedInGeneration: number;
        removedInGeneration?: number;
    })[] = [
        { label: 'None', value: '', introducedInGeneration: 1 },
        { label: 'Sun', value: 'Sun', introducedInGeneration: 3 },
        { label: 'Rain', value: 'Rain', introducedInGeneration: 3 },
        { label: 'Sand', value: 'Sand', introducedInGeneration: 3 },
        {
            label: 'Hail',
            value: 'Hail',
            introducedInGeneration: 3,
            removedInGeneration: 9,
        },
        { label: 'Snow', value: 'Snow', introducedInGeneration: 9 },
        {
            label: 'Harsh Sunshine',
            value: 'Harsh Sunshine',
            introducedInGeneration: 6,
        },
        {
            label: 'Heavy Rain',
            value: 'Heavy Rain',
            introducedInGeneration: 6,
        },
        {
            label: 'Strong Winds',
            value: 'Strong Winds',
            introducedInGeneration: 6,
        },
    ];

    const TERRAIN_OPTIONS: (DropdownOption & {
        introducedInGeneration: number;
    })[] = [
        { label: 'None', value: '', introducedInGeneration: 1 },
        { label: 'Electric', value: 'Electric', introducedInGeneration: 6 },
        { label: 'Grassy', value: 'Grassy', introducedInGeneration: 6 },
        { label: 'Misty', value: 'Misty', introducedInGeneration: 6 },
        { label: 'Psychic', value: 'Psychic', introducedInGeneration: 7 },
    ];

    const SPIKES_COUNTS = [0, 1, 2, 3];

    const GLOBAL_TOGGLES: {
        introducedInGeneration: number;
        key: Exclude<keyof CalcFieldGlobal, 'terrain' | 'weather'>;
        label: string;
    }[] = [
        { key: 'isCrit', label: 'Critical Hit', introducedInGeneration: 1 },
        { key: 'isGravity', label: 'Gravity', introducedInGeneration: 4 },
        {
            key: 'isMagicRoom',
            label: 'Magic Room',
            introducedInGeneration: 5,
        },
        {
            key: 'isWonderRoom',
            label: 'Wonder Room',
            introducedInGeneration: 5,
        },
        {
            key: 'isAuraBreak',
            label: 'Aura Break',
            introducedInGeneration: 6,
        },
        {
            key: 'isFairyAura',
            label: 'Fairy Aura',
            introducedInGeneration: 6,
        },
        { key: 'isDarkAura', label: 'Dark Aura', introducedInGeneration: 6 },
        {
            key: 'isBeadsOfRuin',
            label: 'Beads of Ruin',
            introducedInGeneration: 9,
        },
        {
            key: 'isSwordOfRuin',
            label: 'Sword of Ruin',
            introducedInGeneration: 9,
        },
        {
            key: 'isTabletsOfRuin',
            label: 'Tablets of Ruin',
            introducedInGeneration: 9,
        },
        {
            key: 'isVesselOfRuin',
            label: 'Vessel of Ruin',
            introducedInGeneration: 9,
        },
    ];

    const SIDE_CONDITION_TOGGLES: {
        introducedInGeneration: number;
        key: Exclude<keyof CalcSideConditions, 'spikes'>;
        label: string;
    }[] = [
        { key: 'isSR', label: 'Stealth Rock', introducedInGeneration: 4 },
        {
            key: 'steelsurge',
            label: 'Steelsurge',
            introducedInGeneration: 8,
        },
        { key: 'isReflect', label: 'Reflect', introducedInGeneration: 1 },
        {
            key: 'isLightScreen',
            label: 'Light Screen',
            introducedInGeneration: 1,
        },
        {
            key: 'isAuroraVeil',
            label: 'Aurora Veil',
            introducedInGeneration: 7,
        },
        { key: 'isTailwind', label: 'Tailwind', introducedInGeneration: 4 },
        {
            key: 'isHelpingHand',
            label: 'Helping Hand',
            introducedInGeneration: 3,
        },
        {
            key: 'isProtected',
            label: 'Protect',
            introducedInGeneration: 2,
        },
        { key: 'isSeeded', label: 'Leech Seed', introducedInGeneration: 1 },
        {
            key: 'isSaltCured',
            label: 'Salt Cure',
            introducedInGeneration: 8,
        },
        {
            key: 'isForesight',
            label: 'Foresight',
            introducedInGeneration: 2,
        },
        {
            key: 'isFlowerGift',
            label: 'Flower Gift',
            introducedInGeneration: 4,
        },
        {
            key: 'isPowerTrick',
            label: 'Power Trick',
            introducedInGeneration: 4,
        },
        {
            key: 'isFriendGuard',
            label: 'Friend Guard',
            introducedInGeneration: 5,
        },
        { key: 'isBattery', label: 'Battery', introducedInGeneration: 7 },
        {
            key: 'isPowerSpot',
            label: 'Power Spot',
            introducedInGeneration: 7,
        },
        {
            key: 'isSteelySpirit',
            label: 'Steely Spirit',
            introducedInGeneration: 8,
        },
        { key: 'wildfire', label: 'Wildfire', introducedInGeneration: 9 },
        { key: 'cannonade', label: 'Cannonade', introducedInGeneration: 9 },
        { key: 'volcalith', label: 'Volcalith', introducedInGeneration: 9 },
        { key: 'vinelash', label: 'Vinelash', introducedInGeneration: 9 },
        {
            key: 'isSwitching',
            label: 'Switching Out',
            introducedInGeneration: 1,
        },
    ];

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const isAvailable = (
        introducedInGeneration: number,
        removedInGeneration?: number
    ): boolean =>
        generation >= introducedInGeneration &&
        (removedInGeneration === undefined || generation < removedInGeneration);

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const weatherOptions = WEATHER_OPTIONS.filter((option) =>
        isAvailable(option.introducedInGeneration, option.removedInGeneration)
    );
    const terrainOptions = TERRAIN_OPTIONS.filter((option) =>
        isAvailable(option.introducedInGeneration)
    );
    const globalToggles = GLOBAL_TOGGLES.filter((toggle) =>
        isAvailable(toggle.introducedInGeneration)
    );
    const sideConditionToggles = SIDE_CONDITION_TOGGLES.filter((toggle) =>
        isAvailable(toggle.introducedInGeneration)
    );
    const isTerrainAvailable = terrainOptions.length > 1;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleWeatherChange = (value: string): void => {
        onChange({ ...field, weather: value });
    };

    const handleTerrainChange = (value: string): void => {
        onChange({ ...field, terrain: value });
    };

    const handleGlobalToggle = (
        key: Exclude<keyof CalcFieldGlobal, 'terrain' | 'weather'>
    ): void => {
        onChange({ ...field, [key]: !field[key] });
    };

    const handleSideToggle = (
        side: 'playerSide' | 'trainerSide',
        key: Exclude<keyof CalcSideConditions, 'spikes'>
    ): void => {
        onChange({
            ...field,
            [side]: { ...field[side], [key]: !field[side][key] },
        });
    };

    const handleSpikesChange = (
        side: 'playerSide' | 'trainerSide',
        count: number
    ): void => {
        onChange({
            ...field,
            [side]: { ...field[side], spikes: count },
        });
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['field-effects-panel']}>
            <h3 className={styles.title}>Field</h3>
            <div className={styles.row}>
                <div className={styles.field}>
                    <span className={styles.label}>Weather</span>
                    <Dropdown
                        dense
                        onChange={handleWeatherChange}
                        options={weatherOptions}
                        value={field.weather}
                    />
                </div>
                {isTerrainAvailable && (
                    <div className={styles.field}>
                        <span className={styles.label}>Terrain</span>
                        <Dropdown
                            dense
                            onChange={handleTerrainChange}
                            options={terrainOptions}
                            value={field.terrain}
                        />
                    </div>
                )}
            </div>
            <div className={styles.toggles}>
                {globalToggles.map(({ key, label }) => (
                    <div className={styles.toggle} key={key}>
                        <span className={styles['toggle-label']}>{label}</span>
                        <Toggle
                            checked={field[key]}
                            label={label}
                            onChange={() => handleGlobalToggle(key)}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.sides}>
                {(['playerSide', 'trainerSide'] as const).map((side) => (
                    <div className={styles.side} key={side}>
                        <span className={styles['side-label']}>
                            {side === 'playerSide'
                                ? "Player's Side"
                                : "Enemy's Side"}
                        </span>
                        <div className={styles.toggles}>
                            {sideConditionToggles.map(({ key, label }) => (
                                <div className={styles.toggle} key={key}>
                                    <span className={styles['toggle-label']}>
                                        {label}
                                    </span>
                                    <Toggle
                                        checked={field[side][key]}
                                        label={label}
                                        onChange={() =>
                                            handleSideToggle(side, key)
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={styles.field}>
                            <span className={styles.label}>Spikes</span>
                            <div className={styles['spikes-buttons']}>
                                {SPIKES_COUNTS.map((count) => (
                                    <button
                                        className={[
                                            styles['spikes-button'],
                                            field[side].spikes === count &&
                                                styles['spikes-button--active'],
                                        ]
                                            .filter(Boolean)
                                            .join(' ')}
                                        key={count}
                                        onClick={() =>
                                            handleSpikesChange(side, count)
                                        }
                                        type="button"
                                    >
                                        {count}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FieldEffectsPanel;
