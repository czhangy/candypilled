import { useSyncExternalStore } from 'react';
import Modal from '@/components/common/Modal/Modal';
import PokemonForm from '@/components/run/SplitTab/SplitLocation/PokedexTile/AddPokemonModal/PokemonForm/PokemonForm';
import { BattlePokemon, CaughtPokemon } from '@/lib/static/types';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';

type EditPokemonModalProps = {
    accentColor: string;
    generation: number;
    onClose: () => void;
    onSubmit: (
        details: Pick<
            BattlePokemon,
            'ability' | 'evs' | 'ivs' | 'level' | 'moves' | 'name' | 'nature'
        >
    ) => void;
    pokemon: CaughtPokemon;
};

const EditPokemonModal: React.FC<EditPokemonModalProps> = ({
    accentColor,
    generation,
    onClose,
    onSubmit,
    pokemon,
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

    const MOVE_SLOT_COUNT = 4;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const hideEvs = settings['hide-evs'] ?? false;
    const defaultMoves = Array.from(
        { length: MOVE_SLOT_COUNT },
        (_, index) => pokemon.moves[index] ?? ''
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={accentColor}
            onClose={onClose}
            title={`Edit ${pokemon.name}`}
        >
            <PokemonForm
                allSpecies={[]}
                defaultAbilitySlot={pokemon.ability}
                defaultEvs={StatHelpers.normalizeStats(pokemon.evs, 0)}
                defaultIvs={StatHelpers.normalizeStats(pokemon.ivs, 31)}
                defaultLevel={pokemon.level}
                defaultMoves={defaultMoves}
                defaultNature={pokemon.nature}
                defaultSpecies={pokemon.name}
                disabledReason=""
                generation={generation}
                lockSpecies
                onSubmit={onSubmit}
                showAbility
                showEvs={!hideEvs}
                showLevel
                showMoves
                submitLabel="Save"
            />
        </Modal>
    );
};

export default EditPokemonModal;
