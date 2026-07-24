import { useState, useSyncExternalStore } from 'react';
import EvolutionLine from '@/components/run/SplitTab/SplitLocation/PokedexTile/EvolutionLine/EvolutionLine';
import LearnsetList from '@/components/run/SplitTab/SplitLocation/PokedexTile/LearnsetList/LearnsetList';
import LocationsList from '@/components/run/SplitTab/SplitLocation/PokedexTile/LocationsList/LocationsList';
import PokemonSummary from '@/components/run/SplitTab/SplitLocation/PokedexTile/PokemonSummary/PokemonSummary';
import StatsChart from '@/components/run/SplitTab/SplitLocation/PokedexTile/StatsChart/StatsChart';
import { AbilityEntry, Game } from '@/lib/static/types';
import EncounterHelpers from '@/lib/utils/EncounterHelpers';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import styles from './PokedexDetail.module.scss';

type PokedexDetailProps = {
    game: Game;
    onSelectAbility: (name: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectMove: (name: string) => void;
    onSelectSpecies: (species: string) => void;
    species?: string;
    usedLocations: string[];
    variant: string;
};

const PokedexDetail: React.FC<PokedexDetailProps> = ({
    game,
    onSelectAbility,
    onSelectLocation,
    onSelectMove,
    onSelectSpecies,
    species,
    usedLocations,
    variant,
}) => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const settings = useSyncExternalStore(
        SettingsHelpers.subscribe,
        SettingsHelpers.getSnapshot,
        SettingsHelpers.getServerSnapshot
    );

    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    type DetailTab = 'learnset' | 'locations';

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [activeDetailTab, setActiveDetailTab] =
        useState<DetailTab>('learnset');

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleDetailTabChange = (tab: DetailTab): void => {
        setActiveDetailTab(tab);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const pokemon = species
        ? PokemonHelpers.getPokemonData(species)
        : undefined;
    const sprite = species
        ? PokemonHelpers.getPokemonSprite(species, variant)
        : undefined;
    const types = species
        ? (PokemonHelpers.getPokemonTypes(species, game.generation) ?? [])
        : [];
    const abilities = species
        ? PokemonHelpers.getPokemonAbilities(species, game.generation)
        : undefined;
    const abilityEntries: AbilityEntry[] = abilities
        ? [
              { name: abilities.slot1 },
              ...(abilities.slot2 ? [{ name: abilities.slot2 }] : []),
              ...(abilities.hidden
                  ? [{ hidden: true, name: abilities.hidden }]
                  : []),
          ]
        : [];
    const catchRate = species
        ? PokemonHelpers.getPokemonCatchRate(species)
        : undefined;
    const hideTradeEvos = settings['disable-trade-evos'] ?? false;
    const evolutionLine = species
        ? EvolutionHelpers.getFullEvolutionLine(species, game.generation)
        : undefined;
    const stats = species
        ? PokemonHelpers.getPokemonStats(species, game.generation)
        : undefined;
    const learnset = species
        ? PokemonHelpers.getPokemonLearnset(species, game.version)
        : undefined;
    const locations = species
        ? EncounterHelpers.getEncounterLocations(game, species)
        : [];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['pokedex-detail']}>
            <div className={styles.header}>Pokédex</div>
            <PokemonSummary
                abilityEntries={abilityEntries}
                catchRate={catchRate}
                interactive
                onSelectAbility={onSelectAbility}
                placeholder="Select a Pokémon to view its details"
                pokemon={pokemon}
                sprite={sprite}
                types={types}
            />
            <EvolutionLine
                currentName={species}
                hideTradeEvos={hideTradeEvos}
                onSelectSpecies={onSelectSpecies}
                step={evolutionLine}
                variant={variant}
            />
            <StatsChart stats={stats} />
            {pokemon && (
                <div className={styles.details}>
                    <div className={styles['details-tabs']}>
                        <button
                            aria-pressed={activeDetailTab === 'learnset'}
                            className={[
                                styles['details-tab'],
                                activeDetailTab === 'learnset' &&
                                    styles['details-tab--active'],
                            ]
                                .filter(Boolean)
                                .join(' ')}
                            onClick={() => handleDetailTabChange('learnset')}
                            type="button"
                        >
                            Learnset
                        </button>
                        <button
                            aria-pressed={activeDetailTab === 'locations'}
                            className={[
                                styles['details-tab'],
                                activeDetailTab === 'locations' &&
                                    styles['details-tab--active'],
                            ]
                                .filter(Boolean)
                                .join(' ')}
                            onClick={() => handleDetailTabChange('locations')}
                            type="button"
                        >
                            Locations
                        </button>
                    </div>
                    {activeDetailTab === 'learnset' ? (
                        <LearnsetList
                            generation={game.generation}
                            interactive
                            moves={learnset ?? []}
                            onSelectMove={onSelectMove}
                        />
                    ) : (
                        <LocationsList
                            interactive
                            locations={locations}
                            onSelectLocation={onSelectLocation}
                            usedLocations={usedLocations}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default PokedexDetail;
