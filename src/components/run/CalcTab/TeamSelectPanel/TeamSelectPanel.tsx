import Image from 'next/image';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import { BattlePokemon, CaughtPokemon, Game, Run } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import SwitchInHelpers from '@/lib/utils/SwitchInHelpers';
import styles from './TeamSelectPanel.module.scss';

type TeamSelectPanelProps = {
    disableSwitchInPredictions: boolean;
    game: Game;
    onSelectMember: (index: string) => void;
    run: Run;
    selectedBattle?: string;
    selectedMemberIndex?: string;
    target?: CaughtPokemon;
};

const TeamSelectPanel: React.FC<TeamSelectPanelProps> = ({
    disableSwitchInPredictions,
    game,
    onSelectMember,
    run,
    selectedBattle,
    selectedMemberIndex,
    target,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_WIDTH = 40;
    const SPRITE_HEIGHT = 30;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    // team index -> 1-based predicted switch-in order, for every team
    // member other than the currently selected one (the AI's send-in
    // decision only applies to whichever Pokémon faints, i.e. the one
    // currently selected for the calc).
    const getSwitchInRanks = (
        team: BattlePokemon[],
        selectedIndex: number | undefined
    ): Record<number, number> => {
        if (
            disableSwitchInPredictions ||
            selectedIndex === undefined ||
            !target
        ) {
            return {};
        }

        const faintedPokemon = team[selectedIndex];
        if (!faintedPokemon) return {};

        const candidateIndices = team
            .map((_, index) => index)
            .filter((index) => index !== selectedIndex);

        const order = SwitchInHelpers.getSwitchInOrder(
            candidateIndices.map((index) => team[index]),
            faintedPokemon,
            target,
            game.generation,
            game.version
        );

        return order.reduce<Record<number, number>>(
            (ranks, candidateIndex, rank) => ({
                ...ranks,
                [candidateIndices[candidateIndex]]: rank + 1,
            }),
            {}
        );
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const team = BattleHelpers.getSelectedTeam(
        game,
        selectedBattle,
        run.starter
    );
    const switchInRanks = getSwitchInRanks(
        team,
        selectedMemberIndex !== undefined
            ? Number(selectedMemberIndex)
            : undefined
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['team-select-panel']}>
            {!selectedBattle && (
                <span className={styles.placeholder}>
                    Select a battle above
                </span>
            )}
            {selectedBattle && (
                <div className={styles.grid}>
                    {team.map((mon, index) => {
                        const displaySlug = PokemonHelpers.getDisplaySlug(mon);

                        return (
                            <button
                                aria-pressed={
                                    String(index) === selectedMemberIndex
                                }
                                className={[
                                    styles.slot,
                                    String(index) === selectedMemberIndex &&
                                        styles['slot--selected'],
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                key={index}
                                onClick={() => onSelectMember(String(index))}
                                type="button"
                            >
                                <Image
                                    alt={
                                        PokemonHelpers.getPokemonData(
                                            displaySlug
                                        )?.name ?? mon.slug
                                    }
                                    height={SPRITE_HEIGHT}
                                    src={PokemonHelpers.getBoxSprite(
                                        displaySlug
                                    )}
                                    width={SPRITE_WIDTH}
                                />
                                {switchInRanks[index] !== undefined && (
                                    <span className={styles['switch-in-badge']}>
                                        <Tooltip
                                            position="right"
                                            text={`Predicted switch-in order: ${switchInRanks[index]}`}
                                        >
                                            {switchInRanks[index]}
                                        </Tooltip>
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default TeamSelectPanel;
