import { useState, useSyncExternalStore } from 'react';
import AddPokemonModal from '@/components/run/SplitTab/SplitLocation/PokedexTile/AddPokemonModal/AddPokemonModal';
import EvolutionLine from '@/components/run/SplitTab/SplitLocation/PokedexTile/EvolutionLine/EvolutionLine';
import LearnsetList from '@/components/run/SplitTab/SplitLocation/PokedexTile/LearnsetList/LearnsetList';
import LocationsList from '@/components/run/SplitTab/SplitLocation/PokedexTile/LocationsList/LocationsList';
import PokemonSummary from '@/components/run/SplitTab/SplitLocation/PokedexTile/PokemonSummary/PokemonSummary';
import StatsChart from '@/components/run/SplitTab/SplitLocation/PokedexTile/StatsChart/StatsChart';
import { AbilityEntry, CaughtPokemon, Game } from '@/lib/static/types';
import EncounterHelpers from '@/lib/utils/EncounterHelpers';
import EvolutionHelpers from '@/lib/utils/EvolutionHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import styles from './PokedexTile.module.scss';

type PokedexTileProps = (
    | {
          defaultLevel?: number;
          dupes: string[];
          encounter?: string;
          isEggEncounter: boolean;
          isLocationMissed: boolean;
          isStarterEncounter: boolean;
          mode: 'catch';
          onAddPokemon: (
              details: Pick<
                  CaughtPokemon,
                  | 'ability'
                  | 'evs'
                  | 'ivs'
                  | 'level'
                  | 'moves'
                  | 'name'
                  | 'nature'
                  | 'tags'
              >,
              location: string
          ) => void;
          onRemovePokemon: () => void;
      }
    | {
          mode: 'choose';
      }
) & {
    game: Game;
    generation: number;
    onSelectAbility: (name: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectMove: (name: string) => void;
    onSelectSpecies: (species: string) => void;
    originalSpecies?: string;
    species?: string;
    usedLocations: string[];
    variant: string;
};

const PokedexTile: React.FC<PokedexTileProps> = ({
    game,
    generation,
    onSelectAbility,
    onSelectLocation,
    onSelectMove,
    onSelectSpecies,
    originalSpecies,
    species,
    usedLocations,
    variant,
    ...rest
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
    const [isAddPokemonModalOpen, setIsAddPokemonModalOpen] = useState(false);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleDetailTabChange = (tab: DetailTab): void => {
        setActiveDetailTab(tab);
    };

    const handleCatchButtonClick = (): void => {
        if (rest.mode !== 'catch') return;

        if (isCaughtHere) {
            rest.onRemovePokemon();
        } else {
            setIsAddPokemonModalOpen(true);
        }
    };

    const handleCloseAddPokemonModal = (): void => {
        setIsAddPokemonModalOpen(false);
    };

    const handleAddPokemon = (
        details: Pick<
            CaughtPokemon,
            | 'ability'
            | 'evs'
            | 'ivs'
            | 'level'
            | 'moves'
            | 'name'
            | 'nature'
            | 'tags'
        >,
        location: string
    ): void => {
        if (rest.mode !== 'catch') return;
        rest.onAddPokemon(details, location);
        setIsAddPokemonModalOpen(false);
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
        ? (PokemonHelpers.getPokemonTypes(species, generation) ?? [])
        : [];
    const abilities = species
        ? PokemonHelpers.getPokemonAbilities(species, generation)
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
        ? EvolutionHelpers.getFullEvolutionLine(species, generation)
        : undefined;
    const hasEvolutionBranches =
        !!evolutionLine && evolutionLine.evolvesTo.length > 0;
    const stats = species
        ? PokemonHelpers.getPokemonStats(species, generation)
        : undefined;
    const learnset = species
        ? PokemonHelpers.getPokemonLearnset(species, generation)
        : undefined;
    const locations = species
        ? EncounterHelpers.getEncounterLocations(game, species)
        : [];
    const defaultCatchSpecies = originalSpecies ?? species;
    const isCaughtHere =
        rest.mode === 'catch' &&
        !!pokemon &&
        !!rest.encounter &&
        EvolutionHelpers.isSameEvolutionLine(
            pokemon.name,
            rest.encounter,
            generation
        );
    const isOtherCaughtHere =
        rest.mode === 'catch' && !!rest.encounter && !isCaughtHere;
    const isEvolutionLineCaught =
        rest.mode === 'catch' &&
        !!pokemon &&
        rest.dupes.some((name) =>
            EvolutionHelpers.isSameEvolutionLine(pokemon.name, name, generation)
        );
    const isCatchDisabled =
        rest.mode === 'catch' &&
        !isCaughtHere &&
        (isOtherCaughtHere || isEvolutionLineCaught || rest.isLocationMissed);
    const isCatchButtonHidden =
        rest.mode === 'catch' && rest.isStarterEncounter;
    const isEggEncounter = rest.mode === 'catch' && rest.isEggEncounter;
    const catchButtonLabel = isCaughtHere
        ? isEggEncounter
            ? 'HATCHED'
            : 'CAUGHT'
        : isEggEncounter
          ? 'HATCH'
          : 'CATCH';

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['pokedex-tile']}>
            <div className={styles.header}>Pokedex</div>
            {pokemon && rest.mode === 'catch' && !isCatchButtonHidden && (
                <button
                    className={[
                        styles['catch-button'],
                        isCaughtHere && styles['catch-button--caught'],
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    disabled={isCatchDisabled}
                    onClick={handleCatchButtonClick}
                    type="button"
                >
                    {catchButtonLabel}
                </button>
            )}
            <PokemonSummary
                abilityEntries={abilityEntries}
                catchRate={catchRate}
                mode={rest.mode}
                onSelectAbility={onSelectAbility}
                pokemon={pokemon}
                sprite={sprite}
                types={types}
            />
            {rest.mode === 'catch' &&
                isAddPokemonModalOpen &&
                defaultCatchSpecies && (
                    <AddPokemonModal
                        accentColor={game.accentColor}
                        allSpecies={EncounterHelpers.getAllEncounterSpecies(
                            game
                        )}
                        buttonTextColor={game.textContrastColor}
                        defaultLevel={rest.defaultLevel}
                        defaultLocation=""
                        defaultSpecies={defaultCatchSpecies}
                        existingLocations={[]}
                        generation={generation}
                        onClose={handleCloseAddPokemonModal}
                        onSubmit={handleAddPokemon}
                        showLocation={isEggEncounter}
                    />
                )}
            {pokemon && (
                <div className={styles.evolution}>
                    <span className={styles['evolution-label']}>
                        Evolution Line
                    </span>
                    <div className={styles['evolution-content']}>
                        {hasEvolutionBranches && evolutionLine ? (
                            <EvolutionLine
                                currentName={species}
                                hideTradeEvos={hideTradeEvos}
                                onSelectSpecies={onSelectSpecies}
                                step={evolutionLine}
                                variant={variant}
                            />
                        ) : (
                            <span className={styles['evolution-empty']}>
                                No evolution line
                            </span>
                        )}
                    </div>
                </div>
            )}
            {pokemon && stats && (
                <div className={styles.stats}>
                    <span className={styles['stats-label']}>Base Stats</span>
                    <div className={styles['stats-content']}>
                        <StatsChart stats={stats} />
                    </div>
                </div>
            )}
            {pokemon && (
                <div className={styles.details}>
                    {rest.mode === 'choose' ? (
                        <div className={styles['details-tabs']}>
                            <span
                                className={[
                                    styles['details-tab'],
                                    styles['details-tab--active'],
                                ].join(' ')}
                            >
                                Learnset
                            </span>
                        </div>
                    ) : (
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
                                onClick={() =>
                                    handleDetailTabChange('learnset')
                                }
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
                                onClick={() =>
                                    handleDetailTabChange('locations')
                                }
                                type="button"
                            >
                                Locations
                            </button>
                        </div>
                    )}
                    {rest.mode === 'choose' ||
                    activeDetailTab === 'learnset' ? (
                        <LearnsetList
                            generation={generation}
                            interactive={rest.mode !== 'choose'}
                            moves={learnset ?? []}
                            onSelectMove={onSelectMove}
                        />
                    ) : (
                        <LocationsList
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

export default PokedexTile;
