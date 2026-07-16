import Modal from '@/components/common/Modal/Modal';
import { BattlePokemon } from '@/lib/static/types';
import PokemonForm from './PokemonForm/PokemonForm';

interface AddPokemonModalProps {
    accentColor?: string;
    allSpecies: string[];
    defaultLevel?: number;
    defaultSpecies: string;
    generation: number;
    onClose: () => void;
    onSubmit: (
        details: Pick<
            BattlePokemon,
            'ability' | 'evs' | 'ivs' | 'level' | 'moves' | 'name' | 'nature'
        >
    ) => void;
}

const AddPokemonModal: React.FC<AddPokemonModalProps> = ({
    accentColor,
    allSpecies,
    defaultLevel,
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
                defaultLevel={defaultLevel}
                defaultSpecies={defaultSpecies}
                generation={generation}
                lockSpecies={false}
                onSubmit={onSubmit}
                showAbility
                showEvs={false}
                showLevel
                showMoves
                submitLabel="Add"
            />
        </Modal>
    );
};

export default AddPokemonModal;
