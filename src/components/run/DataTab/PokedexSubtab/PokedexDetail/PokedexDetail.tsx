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
    onSelectAbility: (slug: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectMove: (slug: string) => void;
    onSelectSpecies: (species: string) => void;
    species: string;
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

    const pokemon = PokemonHelpers.getPokemonData(game.dataSource, species);
    const sprite = PokemonHelpers.getPokemonSprite(
        game.dataSource,
        species,
        variant
    );
    const types =
        PokemonHelpers.getPokemonTypes(
            game.dataSource,
            species,
            game.generation
        ) ?? [];
    const abilities = PokemonHelpers.getPokemonAbilities(
        game.dataSource,
        species,
        game.generation
    );
    const abilityEntries: AbilityEntry[] = abilities
        ? [
              { slug: abilities.slot1 },
              ...(abilities.slot2 ? [{ slug: abilities.slot2 }] : []),
              ...(abilities.hidden
                  ? [{ hidden: true, slug: abilities.hidden }]
                  : []),
          ]
        : [];
    const catchRate = PokemonHelpers.getPokemonCatchRate(
        game.dataSource,
        species
    );
    const hideTradeEvos = settings['disable-trade-evos'] ?? false;
    const evolutionLine = EvolutionHelpers.getFullEvolutionLine(
        game.dataSource,
        species,
        game.generation
    );
    const stats = PokemonHelpers.getPokemonStats(
        game.dataSource,
        species,
        game.generation
    );
    const learnset = PokemonHelpers.getPokemonLearnset(
        game.dataSource,
        species,
        game.version
    );
    const locations = EncounterHelpers.getEncounterLocations(game, species);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['pokedex-detail']}>
            <div className={styles.header}>Pokédex</div>
            <div className={styles.content}>
                {pokemon && (
                    <>
                        <PokemonSummary
                            abilityEntries={abilityEntries}
                            catchRate={catchRate}
                            dataSource={game.dataSource}
                            interactive
                            onSelectAbility={onSelectAbility}
                            pokemon={pokemon}
                            sprite={sprite}
                            types={types}
                        />
                        <EvolutionLine
                            currentSlug={species}
                            dataSource={game.dataSource}
                            hideTradeEvos={hideTradeEvos}
                            onSelectSpecies={onSelectSpecies}
                            step={evolutionLine}
                            variant={variant}
                        />
                        <StatsChart stats={stats} />
                        <div className={styles.details}>
                            <div className={styles['details-tabs']}>
                                <button
                                    aria-pressed={
                                        activeDetailTab === 'learnset'
                                    }
                                    className={[
                                        styles['details-tab'],
                                        activeDetailTab === 'learnset' &&
                                            styles['details-tab--active'],
                                    ]
                                        .filter(Boolean)
                                        .join(' ')}
                                    onClick={() =>
                                        handleDetailTabChange('learnset')
                                    }
                                    type="button"
                                >
                                    Learnset
                                </button>
                                <button
                                    aria-pressed={
                                        activeDetailTab === 'locations'
                                    }
                                    className={[
                                        styles['details-tab'],
                                        activeDetailTab === 'locations' &&
                                            styles['details-tab--active'],
                                    ]
                                        .filter(Boolean)
                                        .join(' ')}
                                    onClick={() =>
                                        handleDetailTabChange('locations')
                                    }
                                    type="button"
                                >
                                    Locations
                                </button>
                            </div>
                            {activeDetailTab === 'learnset' ? (
                                <LearnsetList
                                    dataSource={game.dataSource}
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
                    </>
                )}
            </div>
        </div>
    );
};

export default PokedexDetail;
