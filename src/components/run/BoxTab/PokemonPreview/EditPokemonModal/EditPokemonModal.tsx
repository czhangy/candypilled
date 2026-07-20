import { useSyncExternalStore } from 'react';
import Modal from '@/components/common/Modal/Modal';
import PokemonForm from '@/components/run/SplitTab/SplitLocation/PokedexTile/AddPokemonModal/PokemonForm/PokemonForm';
import { CaughtPokemon } from '@/lib/static/types';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';

type EditPokemonModalProps = {
    accentColor: string;
    buttonTextColor?: string;
    generation: number;
    onClose: () => void;
    onSubmit: (
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
        >
    ) => void;
    pokemon: CaughtPokemon;
    version: string;
};

const EditPokemonModal: React.FC<EditPokemonModalProps> = ({
    accentColor,
    buttonTextColor,
    generation,
    onClose,
    onSubmit,
    pokemon,
    version,
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
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleFormSubmit = (
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
        requestClose: () => void
    ): void => {
        onSubmit(details);
        requestClose();
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={accentColor}
            buttonTextColor={buttonTextColor}
            onClose={onClose}
            title={`Edit ${pokemon.name}`}
        >
            {(requestClose) => (
                <PokemonForm
                    allSpecies={[]}
                    defaultAbilitySlot={pokemon.ability}
                    defaultEvs={StatHelpers.normalizeStats(pokemon.evs, 0)}
                    defaultIvs={StatHelpers.normalizeStats(pokemon.ivs, 31)}
                    defaultLevel={pokemon.level}
                    defaultMoves={defaultMoves}
                    defaultNature={pokemon.nature}
                    defaultSpecies={pokemon.name}
                    defaultTags={pokemon.tags}
                    disabledReason=""
                    generation={generation}
                    lockSpecies
                    onSubmit={(details) =>
                        handleFormSubmit(details, requestClose)
                    }
                    recalculateMovesOnLevelChange={false}
                    showAbility
                    showEvs={!hideEvs}
                    showLevel
                    showMoves
                    showTags
                    submitLabel="Save"
                    version={version}
                />
            )}
        </Modal>
    );
};

export default EditPokemonModal;
