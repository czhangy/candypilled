import { useState } from 'react';
import { CaughtPokemon, GameDataSource } from '@/lib/static/types';
import styles from './HallOfFameCard.module.scss';
import HofSlot from './HofSlot/HofSlot';
import HofTeam from './HofTeam/HofTeam';
import PokemonPickerModal from './PokemonPickerModal/PokemonPickerModal';

type HallOfFameCardProps = {
    availablePokemon: CaughtPokemon[];
    dataSource: GameDataSource;
    generation: number;
    onSave: (team: CaughtPokemon[]) => void;
    onUpdateTeam: (team: CaughtPokemon[]) => void;
    savedTeam: CaughtPokemon[] | null;
    variant: string;
    version: string;
};

const HallOfFameCard: React.FC<HallOfFameCardProps> = ({
    availablePokemon,
    dataSource,
    generation,
    onSave,
    onUpdateTeam,
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

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['hall-of-fame-card']}>
            <span className={styles.label}>Hall of Fame Team</span>
            <div className={styles.content}>
                {savedTeam ? (
                    <HofTeam
                        dataSource={dataSource}
                        generation={generation}
                        onChange={onUpdateTeam}
                        team={savedTeam}
                        variant={variant}
                        version={version}
                    />
                ) : (
                    <>
                        <div className={styles.team}>
                            {team.map((pokemon, index) => (
                                <HofSlot
                                    dataSource={dataSource}
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
                    dataSource={dataSource}
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
