import Dropdown from '@/components/common/Dropdown/Dropdown';
import PickerSlot from '@/components/run/CalcTab/LineBuilder/PickerSlot/PickerSlot';
import { DropdownOption, Game, LinePokemon, Run } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import LineHelpers from '@/lib/utils/LineHelpers';
import PrepRow from './PrepRow/PrepRow';
import styles from './PrepSection.module.scss';

type PrepSectionProps = {
    game: Game;
    maxPlayerPokemon: number;
    onCurrentHpChange: (id: string, currentHp: number) => void;
    onHeldItemChange: (id: string, heldItem: string | undefined) => void;
    onMovePokemon: (id: string, offset: -1 | 1) => void;
    onSelectBattle: (battleKey: string) => void;
    onStatusChange: (id: string, status: string) => void;
    onTogglePokemon: (pokemon: LinePokemon) => void;
    playerPokemon: LinePokemon[];
    run: Run;
    selectedBattle: string | undefined;
};

const PrepSection: React.FC<PrepSectionProps> = ({
    game,
    maxPlayerPokemon,
    onCurrentHpChange,
    onHeldItemChange,
    onMovePokemon,
    onSelectBattle,
    onStatusChange,
    onTogglePokemon,
    playerPokemon,
    run,
    selectedBattle,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    // A selected Pokémon is shown with the edits made in its prep row, an
    // unselected one as it is in the box.
    const boxPokemon = LineHelpers.getBoxPokemonList(
        game,
        run.caughtPokemon
    ).map(
        (pokemon) =>
            playerPokemon.find((selected) => selected.id === pokemon.id) ??
            pokemon
    );
    const isTeamFull = playerPokemon.length >= maxPlayerPokemon;
    const columnLabels = [
        `Pokémon (${playerPokemon.length} / ${maxPlayerPokemon})`,
        'Held Item',
        'Status',
        'HP',
        'Order',
    ];
    const selectedIds = playerPokemon.map((pokemon) => pokemon.id);
    const battleOptions: DropdownOption[] = BattleHelpers.getAllBattleOptions(
        game,
        run.gender
    ).map((entry) => ({ label: entry.label, value: entry.battleKey }));
    const heldItemOptions: DropdownOption[] = [
        { label: 'None', value: '' },
        ...ItemHelpers.getBrowsableItems(game.dataSource, game.generation)
            .map((item) => ({ label: item.name, value: item.slug }))
            .sort((a, b) => a.label.localeCompare(b.label)),
    ];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['prep-section']}>
            <span className={styles.title}>Prep</span>
            <div className={styles.sections}>
                <div className={styles.section}>
                    <span className={styles.label}>Box</span>
                    {boxPokemon.length > 0 ? (
                        <div className={styles.grid}>
                            {boxPokemon.map((pokemon) => {
                                const isSelected = selectedIds.includes(
                                    pokemon.id
                                );

                                return (
                                    <PickerSlot
                                        dataSource={game.dataSource}
                                        isDisabled={isTeamFull && !isSelected}
                                        isSelected={isSelected}
                                        key={pokemon.id}
                                        onClick={onTogglePokemon}
                                        pokemon={pokemon}
                                        showStatus={false}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        <span className={styles.placeholder}>Box is empty</span>
                    )}
                </div>
                <div className={styles.section}>
                    <span className={styles.label}>Battle</span>
                    <Dropdown
                        dense
                        onChange={onSelectBattle}
                        options={battleOptions}
                        placeholder="Select a trainer…"
                        searchable
                        value={selectedBattle ?? ''}
                    />
                </div>
            </div>
            {playerPokemon.length > 0 && (
                <div className={styles.team}>
                    {columnLabels.map((label) => (
                        <span className={styles['column-label']} key={label}>
                            {label}
                        </span>
                    ))}
                    {playerPokemon.map((pokemon, index) => (
                        <PrepRow
                            canMoveDown={index < playerPokemon.length - 1}
                            canMoveUp={index > 0}
                            dataSource={game.dataSource}
                            heldItemOptions={heldItemOptions}
                            key={pokemon.id}
                            onCurrentHpChange={(currentHp: number) =>
                                onCurrentHpChange(pokemon.id, currentHp)
                            }
                            onHeldItemChange={(heldItem: string | undefined) =>
                                onHeldItemChange(pokemon.id, heldItem)
                            }
                            onMoveDown={() => onMovePokemon(pokemon.id, 1)}
                            onMoveUp={() => onMovePokemon(pokemon.id, -1)}
                            onStatusChange={(status: string) =>
                                onStatusChange(pokemon.id, status)
                            }
                            pokemon={pokemon}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PrepSection;
