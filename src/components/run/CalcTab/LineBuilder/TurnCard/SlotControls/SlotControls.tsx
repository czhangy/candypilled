import Dropdown from '@/components/common/Dropdown/Dropdown';
import PickerSlot from '@/components/run/CalcTab/LineBuilder/PickerSlot/PickerSlot';
import Checkbox from '@/components/run/CalcTab/LineBuilder/TurnCard/Checkbox/Checkbox';
import { STATUS_OPTIONS } from '@/lib/static/constants';
import {
    DropdownOption,
    GameDataSource,
    LinePokemon,
    LineSide,
    LineSlot,
    LineSlotFlag,
    LineTarget,
} from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import styles from './SlotControls.module.scss';

type SlotControlsProps = {
    active: LinePokemon | undefined;
    dataSource: GameDataSource;
    isFirstTurn: boolean;
    label: string;
    onAppliedStatusChange: (status: string) => void;
    onFlagToggle: (flag: LineSlotFlag) => void;
    onMoveChange: (move: string | undefined) => void;
    onPokemonSelect: (pokemon: LinePokemon) => void;
    onTargetChange: (target: LineTarget) => void;
    roster: LinePokemon[];
    side: LineSide;
    slot: LineSlot;
    targetOptions: DropdownOption[];
    unavailableIds: string[];
};

// Everything for one slot of a turn: which Pokémon is in it, what it does,
// and what happens to it.
const SlotControls: React.FC<SlotControlsProps> = ({
    active,
    dataSource,
    isFirstTurn,
    label,
    onAppliedStatusChange,
    onFlagToggle,
    onMoveChange,
    onPokemonSelect,
    onTargetChange,
    roster,
    side,
    slot,
    targetOptions,
    unavailableIds,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const FLAGS: { flag: LineSlotFlag; label: string }[] = [
        { flag: 'isKo', label: 'KO' },
        { flag: 'isStatusCleared', label: 'Clear status' },
        { flag: 'isItemCleared', label: 'Clear item' },
    ];
    // Standing in for "no status" in the dropdown: an empty value is what
    // shows the "Status" placeholder, so clearing needs its own option.
    const NO_STATUS_VALUE = 'none';
    const APPLY_STATUS_OPTIONS: DropdownOption[] = [
        { label: 'None', value: NO_STATUS_VALUE },
        ...STATUS_OPTIONS.filter((option) => option.value),
    ];
    const NO_MOVE_OPTION: DropdownOption = { label: 'No move', value: '' };

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    // A flag can't be set with nothing to apply it to: no status/item left
    // to clear.
    const isFlagDisabled = (flag: LineSlotFlag): boolean =>
        !slot[flag] &&
        ((flag === 'isStatusCleared' && !active?.status) ||
            (flag === 'isItemCleared' && !active?.heldItem));

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleMoveChange = (move: string): void => {
        onMoveChange(move || undefined);
    };

    const handleTargetChange = (target: string): void => {
        onTargetChange(target as LineTarget);
    };

    const handleStatusChange = (status: string): void => {
        onAppliedStatusChange(status === NO_STATUS_VALUE ? '' : status);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const moveOptions: DropdownOption[] = [
        NO_MOVE_OPTION,
        ...(active?.moves ?? []).map((slug) => ({
            label: MoveHelpers.getMoveData(dataSource, slug)?.name ?? slug,
            value: slug,
        })),
    ];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['slot-controls']}>
            <span
                className={[styles.label, styles[`label--${side}`]].join(' ')}
            >
                {label}
            </span>
            {roster.length === 0 && (
                <span className={styles.placeholder}>Select Pokémon above</span>
            )}
            {roster.length > 0 && (
                <div className={styles.roster}>
                    {roster.map((candidate) => (
                        <PickerSlot
                            dataSource={dataSource}
                            isDisabled={unavailableIds.includes(candidate.id)}
                            isLocked={isFirstTurn}
                            isSelected={candidate.id === active?.id}
                            key={candidate.id}
                            onClick={onPokemonSelect}
                            pokemon={candidate}
                            showStatus
                        />
                    ))}
                </div>
            )}
            {active && (
                <>
                    <div className={styles.fields}>
                        <div className={styles.field}>
                            <Dropdown
                                dense
                                onChange={handleMoveChange}
                                options={moveOptions}
                                value={slot.move ?? ''}
                            />
                        </div>
                        {targetOptions.length > 0 && slot.move && (
                            <div className={styles.field}>
                                <Dropdown
                                    dense
                                    onChange={handleTargetChange}
                                    options={targetOptions}
                                    placeholder="Target"
                                    value={slot.target ?? ''}
                                />
                            </div>
                        )}
                        <div className={styles.field}>
                            <Dropdown
                                dense
                                onChange={handleStatusChange}
                                options={APPLY_STATUS_OPTIONS}
                                placeholder="Status"
                                value={slot.appliedStatus}
                            />
                        </div>
                    </div>
                    <div className={styles.flags}>
                        {FLAGS.map((entry) => (
                            <Checkbox
                                checked={slot[entry.flag]}
                                isDisabled={isFlagDisabled(entry.flag)}
                                key={entry.flag}
                                label={entry.label}
                                onChange={() => onFlagToggle(entry.flag)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default SlotControls;
