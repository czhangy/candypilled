import { Game, Run } from '@/lib/static/types';
import AbilitiesSubtab from './AbilitiesSubtab/AbilitiesSubtab';
import styles from './DataTab.module.scss';
import MovesSubtab from './MovesSubtab/MovesSubtab';
import PokedexSubtab from './PokedexSubtab/PokedexSubtab';

type DataTabProps = {
    activeSubtab: string;
    game: Game;
    onSelectAbility: (name: string) => void;
    onSelectAbilityLink: (name: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectMove: (name: string) => void;
    onSelectMoveLink: (name: string) => void;
    onSelectSpecies: (species: string) => void;
    onSubtabChange: (id: string) => void;
    run: Run;
    selectedAbility?: string;
    selectedMove?: string;
    selectedSpecies?: string;
};

const DataTab: React.FC<DataTabProps> = ({
    activeSubtab,
    game,
    onSelectAbility,
    onSelectAbilityLink,
    onSelectLocation,
    onSelectMove,
    onSelectMoveLink,
    onSelectSpecies,
    onSubtabChange,
    run,
    selectedAbility,
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
        </div>
    );
};

export default DataTab;
