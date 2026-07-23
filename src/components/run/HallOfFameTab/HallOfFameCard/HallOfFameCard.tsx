import { useState } from 'react';
import PokemonSlot from '@/components/run/SplitTab/SplitLocation/BattleCard/PokemonSlot/PokemonSlot';
import { CaughtPokemon } from '@/lib/static/types';
import styles from './HallOfFameCard.module.scss';
import HofSlot from './HofSlot/HofSlot';
import PokemonPickerModal from './PokemonPickerModal/PokemonPickerModal';

type HallOfFameCardProps = {
    availablePokemon: CaughtPokemon[];
    generation: number;
    onSave: (team: CaughtPokemon[]) => void;
    savedTeam: CaughtPokemon[] | null;
    variant: string;
    version: string;
};

const HallOfFameCard: React.FC<HallOfFameCardProps> = ({
    availablePokemon,
    generation,
    onSave,
    savedTeam,
    variant,
    version,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const TEAM_SLOT_COUNT = 6;

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [team, setTeam] = useState<(CaughtPokemon | null)[]>(
        Array.from({ length: TEAM_SLOT_COUNT }, () => null)
    );
    const [pickerSlotIndex, setPickerSlotIndex] = useState<number | null>(null);

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const chosenLocations = team
        .filter((pokemon): pokemon is CaughtPokemon => pokemon !== null)
        .map((pokemon) => pokemon.location);
    const pickablePokemon = availablePokemon.filter(
        (pokemon) => !chosenLocations.includes(pokemon.location)
    );
    const canSave = team.some((pokemon) => pokemon !== null);
    const paddedSavedTeam =
        savedTeam &&
        Array.from(
            { length: TEAM_SLOT_COUNT },
            (_, index) => savedTeam[index] ?? null
        );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleSlotClick = (index: number): void => {
        setPickerSlotIndex(index);
    };

    const handlePickerSelect = (pokemon: CaughtPokemon): void => {
        setTeam(
            team.map((slot, i) => (i === pickerSlotIndex ? pokemon : slot))
        );
    };

    const handlePickerClose = (): void => {
        setPickerSlotIndex(null);
    };

    const handleSaveClick = (): void => {
        onSave(
            team.filter((pokemon): pokemon is CaughtPokemon => pokemon !== null)
        );
    };

    const handleNoop = (): void => {};

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['hall-of-fame-card']}>
            <span className={styles.label}>Hall of Fame Team</span>
            <div className={styles.content}>
                {paddedSavedTeam ? (
                    <div className={styles['saved-team']}>
                        {paddedSavedTeam.map((pokemon, index) => (
                            <PokemonSlot
                                generation={generation}
                                isReadOnly
                                key={
                                    pokemon
                                        ? pokemon.location
                                        : `empty-${index}`
                                }
                                onSelectAbility={handleNoop}
                                onSelectMove={handleNoop}
                                onSelectSpecies={handleNoop}
                                pokemon={pokemon}
                                variant={variant}
                                version={version}
                            />
                        ))}
                    </div>
                ) : (
                    <>
                        <div className={styles.team}>
                            {team.map((pokemon, index) => (
                                <HofSlot
                                    key={
                                        pokemon
                                            ? pokemon.location
                                            : `empty-${index}`
                                    }
                                    onClick={() => handleSlotClick(index)}
                                    pokemon={pokemon}
                                    variant={variant}
                                />
                            ))}
                        </div>
                        <button
                            className={styles.save}
                            disabled={!canSave}
                            onClick={handleSaveClick}
                            type="button"
                        >
                            Save to Hall of Fame
                        </button>
                    </>
                )}
            </div>
            {pickerSlotIndex !== null && (
                <PokemonPickerModal
                    onClose={handlePickerClose}
                    onSelect={handlePickerSelect}
                    pokemon={pickablePokemon}
                    variant={variant}
                />
            )}
        </div>
    );
};

export default HallOfFameCard;
