import Modal from '@/components/common/Modal/Modal';
import PokemonForm from '@/components/run/SplitTab/SplitLocation/PokedexTile/AddPokemonModal/PokemonForm/PokemonForm';
import { BattlePokemon, CaughtPokemon } from '@/lib/static/types';
import StatHelpers from '@/lib/utils/StatHelpers';

interface EditPokemonModalProps {
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
}

const EditPokemonModal: React.FC<EditPokemonModalProps> = ({
    accentColor,
    generation,
    onClose,
    onSubmit,
    pokemon,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MOVE_SLOT_COUNT = 4;

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

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
                defaultEvs={StatHelpers.normalize(pokemon.evs, 0)}
                defaultIvs={StatHelpers.normalize(pokemon.ivs, 31)}
                defaultLevel={pokemon.level}
                defaultMoves={defaultMoves}
                defaultNature={pokemon.nature}
                defaultSpecies={pokemon.name}
                generation={generation}
                lockSpecies
                onSubmit={onSubmit}
                showAbility
                showEvs
                showLevel
                showMoves
                submitLabel="Save"
            />
        </Modal>
    );
};

export default EditPokemonModal;
