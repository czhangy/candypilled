import Subtabs from '@/components/common/Subtabs/Subtabs';
import { Game, Run } from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
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
    onSelectMove: (slug: string) => void;
    onSelectMoveLink: (slug: string) => void;
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
        { id: 'tms', label: 'TMs' },
    ];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['data-tab']}>
            <Subtabs
                activeSubtab={activeSubtab}
                onSubtabChange={onSubtabChange}
                subtabs={SUBTABS}
            />
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
                    game={game}
                    onSelectMove={onSelectMove}
                    selectedMove={selectedMove}
                />
            )}
            {activeSubtab === 'abilities' && (
                <AbilitiesSubtab
                    game={game}
                    onSelectAbility={onSelectAbility}
                    selectedAbility={selectedAbility}
                />
            )}
            {activeSubtab === 'items' && (
                <ItemsSubtab
                    game={game}
                    items={ItemHelpers.getBrowsableItems(
                        game.dataSource,
                        game.generation
                    )}
                    noun="items"
                    onSelectItem={onSelectItem}
                    onSelectLocation={onSelectLocation}
                    selectedItem={selectedItem}
                    showDescription
                />
            )}
            {activeSubtab === 'tms' && (
                <ItemsSubtab
                    game={game}
                    items={ItemHelpers.getBrowsableTms(
                        game.dataSource,
                        game.generation
                    )}
                    noun="TMs"
                    onSelectItem={onSelectItem}
                    onSelectLocation={onSelectLocation}
                    selectedItem={selectedItem}
                    showDescription={false}
                />
            )}
        </div>
    );
};

export default DataTab;
