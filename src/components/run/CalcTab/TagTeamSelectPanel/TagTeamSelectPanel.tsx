import Image from 'next/image';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import RabbitIcon from '@/lib/icons/RabbitIcon';
import SnailIcon from '@/lib/icons/SnailIcon';
import { MAX_IV } from '@/lib/static/constants';
import { BattlePokemon, Game, SpeedComparison } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';
import styles from './TagTeamSelectPanel.module.scss';

type TagTeamSelectPanelProps = {
    enemySpeed: number | undefined;
    game: Game;
    onSelectMember: (index: string) => void;
    selectedMemberIndex?: string;
    selectedTagPartner?: string;
    starter: string;
};

const TagTeamSelectPanel: React.FC<TagTeamSelectPanelProps> = ({
    enemySpeed,
    game,
    onSelectMember,
    selectedMemberIndex,
    selectedTagPartner,
    starter,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const SPRITE_WIDTH = 40;
    const SPRITE_HEIGHT = 30;

    const SPEED_TOOLTIPS: Record<SpeedComparison, string> = {
        faster: 'Higher Speed',
        slower: 'Lower Speed',
        tie: 'Speed Tie',
    };

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    // The Pokémon's own (unboosted) Speed stat, for comparison against the
    // currently selected enemy's Speed.
    const getSpeed = (pokemon: BattlePokemon): number | undefined => {
        const displaySlug = PokemonHelpers.getDisplaySlug(
            game.dataSource,
            pokemon
        );
        const baseStats = PokemonHelpers.getPokemonStats(
            game.dataSource,
            displaySlug,
            game.generation
        );
        if (!baseStats) return undefined;

        return StatHelpers.calculateStats(
            baseStats,
            pokemon.level,
            StatHelpers.normalizeStats(pokemon.ivs, MAX_IV),
            StatHelpers.normalizeStats(pokemon.evs, 0),
            pokemon.nature
        ).spe;
    };

    const getSpeedComparison = (
        pokemon: BattlePokemon
    ): SpeedComparison | undefined => {
        if (enemySpeed === undefined) return undefined;

        const speed = getSpeed(pokemon);
        if (speed === undefined) return undefined;

        return speed === enemySpeed
            ? 'tie'
            : speed > enemySpeed
              ? 'faster'
              : 'slower';
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const team = BattleHelpers.getTagPartnerTeam(
        game,
        selectedTagPartner,
        starter
    );

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['tag-team-select-panel']}>
            {selectedTagPartner ? (
                <div className={styles.grid}>
                    {team.map((mon, index) => {
                        const displaySlug = PokemonHelpers.getDisplaySlug(
                            game.dataSource,
                            mon
                        );
                        const speedComparison = getSpeedComparison(mon);

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
                                            game.dataSource,
                                            displaySlug
                                        )?.name ?? mon.slug
                                    }
                                    height={SPRITE_HEIGHT}
                                    src={PokemonHelpers.getBoxSprite(
                                        displaySlug
                                    )}
                                    width={SPRITE_WIDTH}
                                />
                                {speedComparison === 'faster' && (
                                    <span className={styles['faster-icon']}>
                                        <Tooltip
                                            position="right"
                                            text={
                                                SPEED_TOOLTIPS[speedComparison]
                                            }
                                        >
                                            <RabbitIcon />
                                        </Tooltip>
                                    </span>
                                )}
                                {speedComparison === 'slower' && (
                                    <span className={styles['slower-icon']}>
                                        <Tooltip
                                            position="right"
                                            text={
                                                SPEED_TOOLTIPS[speedComparison]
                                            }
                                        >
                                            <SnailIcon />
                                        </Tooltip>
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            ) : (
                <span className={styles.placeholder}>Select a tag partner</span>
            )}
        </div>
    );
};

export default TagTeamSelectPanel;
