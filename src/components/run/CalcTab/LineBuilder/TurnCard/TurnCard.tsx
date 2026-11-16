import Dropdown from '@/components/common/Dropdown/Dropdown';
import PickerSlot from '@/components/run/CalcTab/LineBuilder/PickerSlot/PickerSlot';
import CloseIcon from '@/lib/icons/CloseIcon';
import PlusIcon from '@/lib/icons/PlusIcon';
import { LINE_SIDES, STATUS_OPTIONS } from '@/lib/static/constants';
import {
    DropdownOption,
    GameDataSource,
    LinePokemon,
    LineSide,
    LineSlotFlag,
    LineTurn,
} from '@/lib/static/types';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import Checkbox from './Checkbox/Checkbox';
import styles from './TurnCard.module.scss';
import TurnStage from './TurnStage/TurnStage';

type TurnCardProps = {
    canAddTurn: boolean;
    dataSource: GameDataSource;
    isFirstTurn: boolean;
    koedIds: string[];
    onAddTurn: () => void;
    onAppliedStatusChange: (side: LineSide, status: string) => void;
    onClear: () => void;
    onFlagToggle: (side: LineSide, flag: LineSlotFlag) => void;
    onMoveChange: (side: LineSide, move: string | undefined) => void;
    onPlayerFirstChange: (isPlayerFirst: boolean) => void;
    onPokemonClear: (side: LineSide) => void;
    onPokemonSelect: (pokemon: LinePokemon) => void;
    onRiskyToggle: () => void;
    onTextChange: (text: string) => void;
    pokemon: LinePokemon[];
    turn: LineTurn;
    turnNumber: number;
    variant: string;
};

const TurnCard: React.FC<TurnCardProps> = ({
    canAddTurn,
    dataSource,
    isFirstTurn,
    koedIds,
    onAddTurn,
    onAppliedStatusChange,
    onClear,
    onFlagToggle,
    onMoveChange,
    onPlayerFirstChange,
    onPokemonClear,
    onPokemonSelect,
    onRiskyToggle,
    onTextChange,
    pokemon,
    turn,
    turnNumber,
    variant,
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

    const getMoveOptions = (attacker: LinePokemon): DropdownOption[] => [
        NO_MOVE_OPTION,
        ...attacker.moves.map((slug) => ({
            label: MoveHelpers.getMoveData(dataSource, slug)?.name ?? slug,
            value: slug,
        })),
    ];

    // A flag can't be set with nothing to apply it to: no Pokémon on the
    // field, or no status/item left to clear.
    const isFlagDisabled = (side: LineSide, flag: LineSlotFlag): boolean => {
        const active = activePokemon[side];
        if (!active) return true;
        if (turn[side][flag]) return false;

        return (
            (flag === 'isStatusCleared' && !active.status) ||
            (flag === 'isItemCleared' && !active.heldItem)
        );
    };

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleTextChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        onTextChange(event.target.value);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const activePokemon = {
        player: pokemon.find(
            (candidate) => candidate.id === turn.player.pokemonId
        ),
        trainer: pokemon.find(
            (candidate) => candidate.id === turn.trainer.pokemonId
        ),
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <section className={styles['turn-card']}>
            <div className={styles.header}>
                <h3 className={styles.title}>
                    Turn {turnNumber}
                    {turn.isRisky && (
                        <span aria-label="Risky" className={styles.mark}>
                            ?
                        </span>
                    )}
                </h3>
                <div className={styles['header-buttons']}>
                    <button
                        aria-label="Clear turn"
                        className={styles['clear-button']}
                        onClick={onClear}
                        type="button"
                    >
                        <CloseIcon />
                    </button>
                    {canAddTurn && (
                        <button
                            aria-label="Add turn"
                            className={styles['add-button']}
                            onClick={onAddTurn}
                            type="button"
                        >
                            <PlusIcon />
                        </button>
                    )}
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles['stage-column']}>
                    <TurnStage
                        dataSource={dataSource}
                        isLocked={isFirstTurn}
                        isPlayerFirst={turn.isPlayerFirst}
                        onPlayerFirstChange={onPlayerFirstChange}
                        onPokemonClear={onPokemonClear}
                        player={activePokemon.player}
                        playerMove={turn.player.move}
                        trainer={activePokemon.trainer}
                        trainerMove={turn.trainer.move}
                        variant={variant}
                    />
                    <div className={styles.flags}>
                        {LINE_SIDES.map((side) => (
                            <div className={styles['flag-column']} key={side}>
                                {FLAGS.map(({ flag, label }) => (
                                    <Checkbox
                                        checked={turn[side][flag]}
                                        isDisabled={isFlagDisabled(side, flag)}
                                        key={flag}
                                        label={label}
                                        onChange={() =>
                                            onFlagToggle(side, flag)
                                        }
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.controls}>
                    <input
                        className={styles.note}
                        onChange={handleTextChange}
                        placeholder="Notes for this turn…"
                        type="text"
                        value={turn.text}
                    />
                    {LINE_SIDES.map((side) => {
                        const roster = pokemon.filter(
                            (candidate) => candidate.side === side
                        );
                        const active = activePokemon[side];

                        return (
                            <div className={styles.side} key={side}>
                                <span
                                    className={[
                                        styles['side-label'],
                                        styles[`side-label--${side}`],
                                    ].join(' ')}
                                >
                                    {side === 'player' ? 'You' : 'Foe'}
                                </span>
                                {roster.length === 0 && (
                                    <span className={styles.placeholder}>
                                        Select Pokémon above
                                    </span>
                                )}
                                {!isFirstTurn && roster.length > 0 && (
                                    <div className={styles.roster}>
                                        {roster.map((candidate) => (
                                            <PickerSlot
                                                dataSource={dataSource}
                                                isDisabled={koedIds.includes(
                                                    candidate.id
                                                )}
                                                isSelected={
                                                    candidate.id === active?.id
                                                }
                                                key={candidate.id}
                                                onClick={onPokemonSelect}
                                                pokemon={candidate}
                                                showStatus
                                            />
                                        ))}
                                    </div>
                                )}
                                {active && (
                                    <div className={styles['move-row']}>
                                        <div className={styles['move-field']}>
                                            <Dropdown
                                                dense
                                                onChange={(move: string) =>
                                                    onMoveChange(
                                                        side,
                                                        move || undefined
                                                    )
                                                }
                                                options={getMoveOptions(active)}
                                                value={turn[side].move ?? ''}
                                            />
                                        </div>
                                        <div className={styles['move-field']}>
                                            <Dropdown
                                                dense
                                                onChange={(status: string) =>
                                                    onAppliedStatusChange(
                                                        side,
                                                        status ===
                                                            NO_STATUS_VALUE
                                                            ? ''
                                                            : status
                                                    )
                                                }
                                                options={APPLY_STATUS_OPTIONS}
                                                placeholder="Status"
                                                value={turn[side].appliedStatus}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    <div className={styles.risky}>
                        <Checkbox
                            checked={turn.isRisky}
                            isDisabled={false}
                            label="Risky"
                            onChange={onRiskyToggle}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TurnCard;
