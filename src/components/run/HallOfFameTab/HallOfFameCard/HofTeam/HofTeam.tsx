'use client';

import { useState } from 'react';
import PokemonSlot from '@/components/run/SplitTab/SplitLocation/BattleCard/PokemonSlot/PokemonSlot';
import { CaughtPokemon, GameDataSource } from '@/lib/static/types';
import styles from './HofTeam.module.scss';
import ItemPickerModal from './ItemPickerModal/ItemPickerModal';
import MovePickerModal from './MovePickerModal/MovePickerModal';

type HofTeamProps = {
    dataSource: GameDataSource;
    generation: number;
    onChange: (team: CaughtPokemon[]) => void;
    team: CaughtPokemon[];
    variant: string;
    version: string;
};

const HofTeam: React.FC<HofTeamProps> = ({
    dataSource,
    generation,
    onChange,
    team,
    variant,
    version,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const TEAM_SLOT_COUNT = 6;

    type PickerTarget =
        | { index: number; kind: 'item' }
        | { index: number; kind: 'move'; moveSlug: string };

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [pickerTarget, setPickerTarget] = useState<PickerTarget | null>(null);

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const paddedTeam = Array.from(
        { length: TEAM_SLOT_COUNT },
        (_, index) => team[index] ?? null
    );

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleSelectItem = (index: number): void => {
        setPickerTarget({ index, kind: 'item' });
    };

    const handleSelectMove = (index: number, moveSlug: string): void => {
        setPickerTarget({ index, kind: 'move', moveSlug });
    };

    const handleItemPicked = (slug: string | undefined): void => {
        if (!pickerTarget) return;
        const target = pickerTarget;
        onChange(
            team.map((pokemon, index) =>
                index === target.index
                    ? { ...pokemon, heldItem: slug }
                    : pokemon
            )
        );
        setPickerTarget(null);
    };

    const handleMovePicked = (slug: string): void => {
        if (!pickerTarget || pickerTarget.kind !== 'move') return;
        const target = pickerTarget;
        onChange(
            team.map((pokemon, index) =>
                index === target.index
                    ? {
                          ...pokemon,
                          moves: pokemon.moves.map((move) =>
                              move === target.moveSlug ? slug : move
                          ),
                      }
                    : pokemon
            )
        );
        setPickerTarget(null);
    };

    const handlePickerClose = (): void => {
        setPickerTarget(null);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['hof-team']}>
            {paddedTeam.map((pokemon, index) => (
                <PokemonSlot
                    dataSource={dataSource}
                    generation={generation}
                    hofDisplay
                    isReadOnly
                    isTagPartner={false}
                    key={pokemon ? pokemon.location : `empty-${index}`}
                    onSelectItem={() => handleSelectItem(index)}
                    onSelectMove={(slug) => handleSelectMove(index, slug)}
                    pokemon={pokemon}
                    position="single"
                    variant={variant}
                    version={version}
                />
            ))}
            {pickerTarget?.kind === 'item' && (
                <ItemPickerModal
                    dataSource={dataSource}
                    generation={generation}
                    onClose={handlePickerClose}
                    onSelect={handleItemPicked}
                    selectedItem={team[pickerTarget.index]?.heldItem}
                />
            )}
            {pickerTarget?.kind === 'move' && (
                <MovePickerModal
                    dataSource={dataSource}
                    generation={generation}
                    onClose={handlePickerClose}
                    onSelect={handleMovePicked}
                    selectedMove={pickerTarget.moveSlug}
                />
            )}
        </div>
    );
};

export default HofTeam;
