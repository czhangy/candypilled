import { Game, Run } from '@/lib/static/types';
import AbilitiesSubtab from './AbilitiesSubtab/AbilitiesSubtab';
import styles from './DataTab.module.scss';
import ItemsSubtab from './ItemsSubtab/ItemsSubtab';
import MovesSubtab from './MovesSubtab/MovesSubtab';
import PokedexSubtab from './PokedexSubtab/PokedexSubtab';

type DataTabProps = {
    activeSubtab: string;
    game: Game;
    onSelectAbility: (slug: string) => void;
    onSelectAbilityLink: (slug: string) => void;
    onSelectItem: (slug: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectMove: (name: string) => void;
    onSelectMoveLink: (name: string) => void;
    onSelectSpecies: (species: string) => void;
    onSubtabChange: (id: string) => void;
    run: Run;
    selectedAbility?: string;
    selectedItem?: string;
    selectedMove?: string;
    selectedSpecies?: string;
};

const DataTab: React.FC<DataTabProps> = ({
    activeSubtab,
    game,
    onSelectAbility,
    onSelectAbilityLink,
    onSelectItem,
    onSelectLocation,
    onSelectMove,
    onSelectMoveLink,
    onSelectSpecies,
    onSubtabChange,
    run,
    selectedAbility,
    selectedItem,
    selectedMove,
    selectedSpecies,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SUBTABS = [
        { id: 'pokedex', label: 'Pokédex' },
        { id: 'moves', label: 'Moves' },
        { id: 'abilities', label: 'Abilities' },
        { id: 'items', label: 'Items' },
    ];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['data-tab']}>
            <div className={styles.subtabs}>
                {SUBTABS.map((subtab) => (
                    <button
                        className={[
                            styles.subtab,
                            subtab.id === activeSubtab &&
                                styles['subtab--active'],
                        ]
                            .filter(Boolean)
                            .join(' ')}
                        key={subtab.id}
                        onClick={() => onSubtabChange(subtab.id)}
                        type="button"
                    >
                        {subtab.label}
                    </button>
                ))}
            </div>
            {activeSubtab === 'pokedex' && (
                <PokedexSubtab
                    game={game}
                    onSelectAbility={onSelectAbilityLink}
                    onSelectLocation={onSelectLocation}
                    onSelectMove={onSelectMoveLink}
                    onSelectSpecies={onSelectSpecies}
                    run={run}
                    selectedSpecies={selectedSpecies}
                />
            )}
            {activeSubtab === 'moves' && (
                <MovesSubtab
                    generation={game.generation}
                    onSelectMove={onSelectMove}
                    selectedMove={selectedMove}
                />
            )}
            {activeSubtab === 'abilities' && (
                <AbilitiesSubtab
                    generation={game.generation}
                    onSelectAbility={onSelectAbility}
                    selectedAbility={selectedAbility}
                />
            )}
            {activeSubtab === 'items' && (
                <ItemsSubtab
                    generation={game.generation}
                    onSelectItem={onSelectItem}
                    selectedItem={selectedItem}
                />
            )}
        </div>
    );
};

export default DataTab;
