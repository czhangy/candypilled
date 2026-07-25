import { useSyncExternalStore } from 'react';
import Modal from '@/components/common/Modal/Modal';
import PokemonForm from '@/components/run/SplitTab/SplitLocation/PokedexTile/AddPokemonModal/PokemonForm/PokemonForm';
import { MOVE_SLOT_COUNT } from '@/lib/static/constants';
import { CaughtPokemon } from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
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
            | 'gender'
            | 'heldItem'
            | 'ivs'
            | 'level'
            | 'moves'
            | 'nature'
            | 'slug'
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
            | 'gender'
            | 'heldItem'
            | 'ivs'
            | 'level'
            | 'moves'
            | 'nature'
            | 'slug'
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
            title={`Edit ${PokemonHelpers.getPokemonData(pokemon.slug)?.name ?? pokemon.slug}`}
        >
            {(requestClose) => (
                <PokemonForm
                    allSpecies={[]}
                    defaultAbilitySlot={pokemon.ability}
                    defaultEvs={StatHelpers.normalizeStats(pokemon.evs, 0)}
                    defaultGender={pokemon.gender}
                    defaultHeldItem={pokemon.heldItem}
                    defaultIvs={StatHelpers.normalizeStats(pokemon.ivs, 31)}
                    defaultLevel={pokemon.level}
                    defaultMoves={defaultMoves}
                    defaultNature={pokemon.nature}
                    defaultSpecies={pokemon.slug}
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
                    showHeldItem
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
