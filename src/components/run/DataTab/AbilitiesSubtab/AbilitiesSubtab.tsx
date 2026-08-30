import { useMemo, useSyncExternalStore } from 'react';
import SearchableList from '@/components/common/SearchableList/SearchableList';
import SpeciesListPanel from '@/components/run/DataTab/SpeciesListPanel/SpeciesListPanel';
import { ABILITIES } from '@/lib/data/abilities';
import { Game } from '@/lib/static/types';
import EncounterHelpers from '@/lib/utils/EncounterHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SettingsHelpers from '@/lib/utils/SettingsHelpers';
import styles from './AbilitiesSubtab.module.scss';
import AbilityDetail from './AbilityDetail/AbilityDetail';

type AbilitiesSubtabProps = {
    game: Game;
    onSelectAbility: (slug: string) => void;
    onSelectSpeciesLink: (slug: string) => void;
    selectedAbility?: string;
};

const AbilitiesSubtab: React.FC<AbilitiesSubtabProps> = ({
    game,
    onSelectAbility,
    onSelectSpeciesLink,
    selectedAbility,
}) => {
    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const settings = useSyncExternalStore(
        SettingsHelpers.subscribe,
        SettingsHelpers.getSnapshot,
        SettingsHelpers.getServerSnapshot
    );
    const gameSpecies = useMemo(
        () =>
            EncounterHelpers.getGameSpecies(
                game,
                settings['show-national-dex-data'] ?? false
            ),
        [game, settings]
    );
    const availableAbilities = useMemo(
        () =>
            Object.values(ABILITIES)
                .filter(
                    (ability) =>
                        ability.introducedInGeneration <= game.generation &&
                        PokemonHelpers.getSpeciesWithAbility(
                            game.dataSource,
                            gameSpecies,
                            ability.slug,
                            game.generation
                        ).length > 0
                )
                .sort((a, b) => a.name.localeCompare(b.name)),
        [game, gameSpecies]
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const effectiveAbility =
        selectedAbility ?? availableAbilities[0]?.slug ?? '';
    const givenTo = PokemonHelpers.getSpeciesWithAbility(
        game.dataSource,
        gameSpecies,
        effectiveAbility,
        game.generation
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['abilities-subtab']}>
            <SearchableList
                emptyMessage="No abilities found"
                items={availableAbilities}
                onSelectItem={onSelectAbility}
                searchAriaLabel="Search abilities"
                searchPlaceholder="Search abilities..."
                selectedItem={effectiveAbility}
                sortAlphabetically
            />
            <AbilityDetail
                abilitySlug={effectiveAbility}
                generation={game.generation}
            />
            <SpeciesListPanel
                entries={givenTo}
                onSelectSpecies={onSelectSpeciesLink}
                title="Given To"
            />
        </div>
    );
};

export default AbilitiesSubtab;
