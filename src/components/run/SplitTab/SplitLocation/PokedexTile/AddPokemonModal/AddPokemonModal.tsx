import Modal from '@/components/common/Modal/Modal';
import { BattlePokemon } from '@/lib/static/types';
import PokemonForm from './PokemonForm/PokemonForm';

interface AddPokemonModalProps {
    accentColor?: string;
    allSpecies: string[];
    defaultSpecies: string;
    generation: number;
    onClose: () => void;
    onSubmit: (
        details: Pick<
            BattlePokemon,
            'ability' | 'ivs' | 'level' | 'moves' | 'name' | 'nature'
        >
    ) => void;
}

const AddPokemonModal: React.FC<AddPokemonModalProps> = ({
    accentColor,
    allSpecies,
    defaultSpecies,
    generation,
    onClose,
    onSubmit,
}) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal accentColor={accentColor} onClose={onClose} title="Add Pokemon">
            <PokemonForm
                allSpecies={allSpecies}
                defaultSpecies={defaultSpecies}
                generation={generation}
                lockSpecies={false}
                onSubmit={onSubmit}
                showAbility
                showLevel
                showMoves
                submitLabel="Add"
            />
        </Modal>
    );
};

export default AddPokemonModal;
