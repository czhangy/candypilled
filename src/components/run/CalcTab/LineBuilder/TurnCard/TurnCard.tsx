import Checkbox from '@/components/run/CalcTab/LineBuilder/TurnCard/Checkbox/Checkbox';
import CloseIcon from '@/lib/icons/CloseIcon';
import PlusIcon from '@/lib/icons/PlusIcon';
import { LINE_SIDES } from '@/lib/static/constants';
import {
    DropdownOption,
    GameDataSource,
    LinePokemon,
    LinePosition,
    LineSide,
    LineSlotFlag,
    LineTarget,
    LineTurn,
} from '@/lib/static/types';
import LineHelpers from '@/lib/utils/LineHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import OrderList from './OrderList/OrderList';
import SlotControls from './SlotControls/SlotControls';
import styles from './TurnCard.module.scss';
import TurnStage from './TurnStage/TurnStage';

type TurnCardProps = {
    canAddTurn: boolean;
    dataSource: GameDataSource;
    isFirstTurn: boolean;
    koedIds: string[];
    onActionMove: (position: LinePosition, offset: -1 | 1) => void;
    onAddTurn: () => void;
    onAppliedStatusChange: (
        side: LineSide,
        slot: number,
        status: string
    ) => void;
    onClear: () => void;
    onFlagToggle: (side: LineSide, slot: number, flag: LineSlotFlag) => void;
    onMoveChange: (
        side: LineSide,
        slot: number,
        move: string | undefined
    ) => void;
    onPokemonClear: (side: LineSide, slot: number) => void;
    onPokemonSelect: (
        side: LineSide,
        slot: number,
        pokemon: LinePokemon
    ) => void;
    onRiskyToggle: () => void;
    onTargetChange: (side: LineSide, slot: number, target: LineTarget) => void;
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
    onActionMove,
    onAddTurn,
    onAppliedStatusChange,
    onClear,
    onFlagToggle,
    onMoveChange,
    onPokemonClear,
    onPokemonSelect,
    onRiskyToggle,
    onTargetChange,
    onTextChange,
    pokemon,
    turn,
    turnNumber,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    // The targets a move from the slot at `index` on `side` can have: each
    // other Pokémon on the field (foes, then the partner) and the spreads.
    // None in a singles battle, where the one foe is implied.
    const getTargetOptions = (
        side: LineSide,
        index: number
    ): DropdownOption[] => {
        if (turn.player.length === 1) return [];

        const others = slots.flatMap((entry) =>
            entry.pokemon && !(entry.side === side && entry.index === index)
                ? [{ ...entry, pokemon: entry.pokemon }]
                : []
        );
        const toOption = (entry: (typeof others)[number]): DropdownOption => ({
            label: `${LineHelpers.getName(dataSource, entry.pokemon)} (${entry.side === side ? 'partner' : 'foe'})`,
            value: entry.position,
        });

        return [
            ...others.filter((entry) => entry.side !== side).map(toOption),
            ...others.filter((entry) => entry.side === side).map(toOption),
            { label: 'All foes', value: 'foes' },
            { label: 'All others', value: 'others' },
        ];
    };

    // "You" and "Partner" when an NPC ally fills your second slot, otherwise
    // the side's name, numbered when it has more than one slot.
    const getSlotLabel = (side: LineSide, index: number): string => {
        const name = side === 'player' ? 'You' : 'Foe';
        if (turn[side].length === 1) return name;
        if (side === 'player' && hasAlly) return index === 0 ? name : 'Partner';

        return `${name} ${index + 1}`;
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

    const hasAlly = pokemon.some(
        (candidate) => candidate.side === 'player' && candidate.isFixed
    );
    const slots = LineHelpers.getTurnSlots(turn).map((entry) => ({
        ...entry,
        pokemon: pokemon.find(
            (candidate) => candidate.id === entry.slot.pokemonId
        ),
    }));
    const orderItems = turn.order.map((position) => {
        const entry = slots.find(
            (candidate) => candidate.position === position
        );
        const name = entry?.pokemon
            ? LineHelpers.getName(dataSource, entry.pokemon)
            : '';
        const move = entry?.slot.move
            ? (MoveHelpers.getMoveData(dataSource, entry.slot.move)?.name ??
              entry.slot.move)
            : '';

        return { label: `${name}: ${move}`, position };
    });

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
                        onPokemonClear={onPokemonClear}
                        order={turn.order}
                        slots={slots}
                        variant={variant}
                    />
                    {orderItems.length >= 2 && (
                        <OrderList items={orderItems} onMove={onActionMove} />
                    )}
                </div>
                <div className={styles.controls}>
                    <input
                        className={styles.note}
                        onChange={handleTextChange}
                        placeholder="Notes for this turn…"
                        type="text"
                        value={turn.text}
                    />
                    {LINE_SIDES.map((side) =>
                        turn[side].map((slot, index) => (
                            <SlotControls
                                active={
                                    slots.find(
                                        (entry) =>
                                            entry.side === side &&
                                            entry.index === index
                                    )?.pokemon
                                }
                                dataSource={dataSource}
                                isFirstTurn={isFirstTurn}
                                key={`${side}:${index}`}
                                label={getSlotLabel(side, index)}
                                onAppliedStatusChange={(status: string) =>
                                    onAppliedStatusChange(side, index, status)
                                }
                                onFlagToggle={(flag: LineSlotFlag) =>
                                    onFlagToggle(side, index, flag)
                                }
                                onMoveChange={(move: string | undefined) =>
                                    onMoveChange(side, index, move)
                                }
                                onPokemonSelect={(selected: LinePokemon) =>
                                    onPokemonSelect(side, index, selected)
                                }
                                onTargetChange={(target: LineTarget) =>
                                    onTargetChange(side, index, target)
                                }
                                roster={pokemon.filter(
                                    (candidate) =>
                                        candidate.side === side &&
                                        LineHelpers.canOccupy(candidate, index)
                                )}
                                side={side}
                                slot={slot}
                                targetOptions={getTargetOptions(side, index)}
                                unavailableIds={[
                                    ...koedIds,
                                    ...turn[side].flatMap(
                                        (other, otherIndex) =>
                                            other.pokemonId &&
                                            otherIndex !== index
                                                ? [other.pokemonId]
                                                : []
                                    ),
                                ]}
                            />
                        ))
                    )}
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
