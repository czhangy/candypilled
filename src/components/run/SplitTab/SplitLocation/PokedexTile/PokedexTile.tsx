import { useState } from 'react';
import Image from 'next/image';
import AddPokemonModal from '@/components/run/SplitTab/SplitLocation/PokedexTile/AddPokemonModal/AddPokemonModal';
import EvolutionLine from '@/components/run/SplitTab/SplitLocation/PokedexTile/EvolutionLine/EvolutionLine';
import LearnsetList from '@/components/run/SplitTab/SplitLocation/PokedexTile/LearnsetList/LearnsetList';
import LocationsList from '@/components/run/SplitTab/SplitLocation/PokedexTile/LocationsList/LocationsList';
import StatsChart from '@/components/run/SplitTab/SplitLocation/PokedexTile/StatsChart/StatsChart';
import { BattlePokemon, Game } from '@/lib/static/types';
import LocationHelpers from '@/lib/utils/LocationHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';
import styles from './PokedexTile.module.scss';

type PokedexTileProps = (
    | {
          dupes: string[];
          encounter?: string;
          mode: 'catch';
          onAddPokemon: (
              details: Pick<
                  BattlePokemon,
                  'ability' | 'ivs' | 'level' | 'moves' | 'name' | 'nature'
              >
          ) => void;
          onRemovePokemon: () => void;
      }
    | {
          mode: 'select';
          onSelect: (species: string) => void;
      }
) & {
    game: Game;
    generation: number;
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
    onSelectMove,
    onSelectSpecies,
    originalSpecies,
    species,
    usedLocations,
    variant,
    ...rest
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_SIZE = 80;
    const TYPE_BADGE_WIDTH = 32;
    const TYPE_BADGE_HEIGHT = 14;

    interface AbilityEntry {
        hidden?: boolean;
        name: string;
    }

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
        if (rest.mode === 'select') {
            if (pokemon) rest.onSelect(pokemon.name);
        } else if (isCaughtHere) {
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
            BattlePokemon,
            'ability' | 'ivs' | 'level' | 'moves' | 'name' | 'nature'
        >
    ): void => {
        if (rest.mode !== 'catch') return;
        rest.onAddPokemon(details);
        setIsAddPokemonModalOpen(false);
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const pokemon = species ? PokemonHelpers.get(species) : undefined;
    const sprite = species
        ? PokemonHelpers.getSprite(species, variant)
        : undefined;
    const types = species
        ? (PokemonHelpers.getTypes(species, generation) ?? [])
        : [];
    const abilities = species
        ? PokemonHelpers.getAbilities(species, generation)
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
        ? PokemonHelpers.getCatchRate(species)
        : undefined;
    const evolutionLine = species
        ? PokemonHelpers.getEvolutionLine(species, generation)
        : undefined;
    const hasEvolutionBranches =
        !!evolutionLine && evolutionLine.evolvesTo.length > 0;
    const stats = species
        ? PokemonHelpers.getStats(species, generation)
        : undefined;
    const learnset = species
        ? PokemonHelpers.getLearnset(species, generation)
        : undefined;
    const locations = species
        ? LocationHelpers.getEncounterLocations(game, species)
        : [];
    const defaultCatchSpecies = originalSpecies ?? species;
    const isCaughtHere =
        rest.mode === 'catch' && !!pokemon && rest.encounter === pokemon.name;
    const isOtherCaughtHere =
        rest.mode === 'catch' && !!rest.encounter && !isCaughtHere;
    const isEvolutionLineCaught =
        rest.mode === 'catch' &&
        !!pokemon &&
        rest.dupes.some((name) =>
            PokemonHelpers.isSameEvolutionLine(pokemon.name, name, generation)
        );
    const isCatchDisabled =
        rest.mode === 'catch' &&
        !isCaughtHere &&
        (isOtherCaughtHere || isEvolutionLineCaught);

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['pokedex-tile']}>
            <div className={styles.header}>Pokedex</div>
            <div
                className={[
                    styles.content,
                    !pokemon && styles['content--empty'],
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                {pokemon ? (
                    <>
                        <div className={styles.left}>
                            <div className={styles.sprite}>
                                {sprite && (
                                    <Image
                                        alt={pokemon.name}
                                        height={SPRITE_SIZE}
                                        src={sprite}
                                        width={SPRITE_SIZE}
                                    />
                                )}
                            </div>
                            <div className={styles.info}>
                                <span className={styles.name}>
                                    {pokemon.name}
                                </span>
                                {types.length > 0 && (
                                    <div className={styles.types}>
                                        {types.map((type) => (
                                            <Image
                                                alt={type}
                                                height={TYPE_BADGE_HEIGHT}
                                                key={type}
                                                src={`/types/${type}.png`}
                                                width={TYPE_BADGE_WIDTH}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles['right-top']}>
                                {abilityEntries.length > 0 && (
                                    <div className={styles.abilities}>
                                        <span
                                            className={
                                                styles['abilities-label']
                                            }
                                        >
                                            Abilities
                                        </span>
                                        <div
                                            className={styles['abilities-list']}
                                        >
                                            {abilityEntries.map((entry) => (
                                                <span
                                                    className={[
                                                        styles.ability,
                                                        entry.hidden &&
                                                            styles[
                                                                'ability--hidden'
                                                            ],
                                                    ]
                                                        .filter(Boolean)
                                                        .join(' ')}
                                                    key={entry.name}
                                                >
                                                    {StringHelpers.toTitleCase(
                                                        entry.name
                                                    )}
                                                    {entry.hidden &&
                                                        ' (Hidden)'}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={styles['right-bottom']}>
                                {catchRate !== undefined && (
                                    <div className={styles['catch-rate']}>
                                        <span
                                            className={
                                                styles['catch-rate-label']
                                            }
                                        >
                                            Catch Rate
                                        </span>
                                        <span className={styles.rate}>
                                            {catchRate}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <span className={styles.placeholder}>
                        Select a Pokemon to view its details or catch it
                    </span>
                )}
            </div>
            {pokemon && (
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
                    {rest.mode === 'select'
                        ? 'SELECT'
                        : isCaughtHere
                          ? 'CAUGHT'
                          : 'CATCH'}
                </button>
            )}
            {rest.mode === 'catch' &&
                isAddPokemonModalOpen &&
                defaultCatchSpecies && (
                    <AddPokemonModal
                        accentColor={game.accentColor}
                        allSpecies={LocationHelpers.getAllEncounterSpecies(
                            game
                        )}
                        defaultSpecies={defaultCatchSpecies}
                        generation={generation}
                        onClose={handleCloseAddPokemonModal}
                        onSubmit={handleAddPokemon}
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
                            generation={generation}
                            moves={learnset ?? []}
                            onSelectMove={onSelectMove}
                        />
                    ) : (
                        <LocationsList
                            locations={locations}
                            usedLocations={usedLocations}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default PokedexTile;
