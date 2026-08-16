import { useState, useSyncExternalStore } from 'react';
import EvolutionLine from '@/components/run/SplitTab/SplitLocation/PokedexTile/EvolutionLine/EvolutionLine';
import LearnsetList from '@/components/run/SplitTab/SplitLocation/PokedexTile/LearnsetList/LearnsetList';
import LocationsList from '@/components/run/SplitTab/SplitLocation/PokedexTile/LocationsList/LocationsList';
import PokemonSummary from '@/components/run/SplitTab/SplitLocation/PokedexTile/PokemonSummary/PokemonSummary';
import StatsChart from '@/components/run/SplitTab/SplitLocation/PokedexTile/StatsChart/StatsChart';
import { Nature } from '@/lib/static/enums';
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
                  | 'gender'
                  | 'ivs'
                  | 'level'
                  | 'moves'
                  | 'nature'
                  | 'slug'
              >
          ) => void;
          onRemovePokemon: () => void;
      }
    | {
          mode: 'choose';
      }
) & {
    game: Game;
    generation: number;
    onSelectAbility: (slug: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectMove: (slug: string) => void;
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

    // A caught Pokémon's nature and gender aren't actually knowable until
    // it's inspected in-game, so a catch is recorded with placeholder
    // defaults rather than prompting for them up front.
    const DEFAULT_CATCH_LEVEL = 1;

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

    const handleCatchButtonClick = (): void => {
        if (rest.mode !== 'catch') return;

        if (isCaughtHere) {
            rest.onRemovePokemon();
            return;
        }

        if (!defaultCatchSpecies) return;

        const level = rest.defaultLevel ?? DEFAULT_CATCH_LEVEL;
        rest.onAddPokemon({
            ability:
                PokemonHelpers.getPokemonAbilities(
                    game.dataSource,
                    defaultCatchSpecies,
                    generation
                )?.slot1 ?? '',
            evs: undefined,
            gender: undefined,
            ivs: 0,
            level,
            moves: PokemonHelpers.getMovesAtLevel(
                game.dataSource,
                defaultCatchSpecies,
                game.version,
                level
            ),
            nature: Nature.Unknown,
            slug: defaultCatchSpecies,
        });
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const pokemon = species
        ? PokemonHelpers.getPokemonData(game.dataSource, species)
        : undefined;
    const sprite = species
        ? PokemonHelpers.getPokemonSprite(game.dataSource, species, variant)
        : undefined;
    const types = species
        ? (PokemonHelpers.getPokemonTypes(
              game.dataSource,
              species,
              generation
          ) ?? [])
        : [];
    const abilities = species
        ? PokemonHelpers.getPokemonAbilities(
              game.dataSource,
              species,
              generation
          )
        : undefined;
    const abilityEntries: AbilityEntry[] = abilities
        ? [
              { slug: abilities.slot1 },
              ...(abilities.slot2 ? [{ slug: abilities.slot2 }] : []),
              ...(abilities.hidden
                  ? [{ hidden: true, slug: abilities.hidden }]
                  : []),
          ]
        : [];
    const catchRate = species
        ? PokemonHelpers.getPokemonCatchRate(game.dataSource, species)
        : undefined;
    const hideTradeEvos = settings['disable-trade-evos'] ?? false;
    const evolutionLine = species
        ? EvolutionHelpers.getFullEvolutionLine(
              game.dataSource,
              species,
              generation
          )
        : undefined;
    const stats = species
        ? PokemonHelpers.getPokemonStats(game.dataSource, species, generation)
        : undefined;
    const learnset = species
        ? PokemonHelpers.getPokemonLearnset(
              game.dataSource,
              species,
              game.version
          )
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
            game.dataSource,
            pokemon.slug,
            rest.encounter,
            generation
        );
    const isOtherCaughtHere =
        rest.mode === 'catch' && !!rest.encounter && !isCaughtHere;
    const isEvolutionLineCaught =
        rest.mode === 'catch' &&
        !!pokemon &&
        rest.dupes.some((slug) =>
            EvolutionHelpers.isSameEvolutionLine(
                game.dataSource,
                pokemon.slug,
                slug,
                generation
            )
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
            <div className={styles.header}>Pokédex</div>
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
                interactive={rest.mode !== 'choose'}
                onSelectAbility={onSelectAbility}
                placeholder={`Select a Pokémon to view its details or ${rest.mode} it`}
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
                            dataSource={game.dataSource}
                            generation={generation}
                            interactive={rest.mode !== 'choose'}
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

export default PokedexTile;
