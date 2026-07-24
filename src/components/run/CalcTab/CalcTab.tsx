import { useState } from 'react';
import { PokemonStatus } from '@/lib/static/enums';
import { Game, Run } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import BattleSelectPanel from './BattleSelectPanel/BattleSelectPanel';
import BoxSelectPanel from './BoxSelectPanel/BoxSelectPanel';
import styles from './CalcTab.module.scss';
import PokemonPanel from './PokemonPanel/PokemonPanel';
import TeamSelectPanel from './TeamSelectPanel/TeamSelectPanel';
import TrainerPokemonPanel from './TrainerPokemonPanel/TrainerPokemonPanel';

type CalcTabProps = {
    game: Game;
    onSelectBattle: (battleKey: string) => void;
    run: Run;
    selectedBattle?: string;
};

const CalcTab: React.FC<CalcTabProps> = ({
    game,
    onSelectBattle,
    run,
    selectedBattle,
}) => {
    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    // The first trainer in game order, defaulted to whenever no battle has
    // been explicitly selected yet.
    const getFirstBattleKey = (): string | undefined => {
        const firstBattle = BattleHelpers.getAllBattles(game)[0];
        return firstBattle
            ? BattleHelpers.getBattleKey(firstBattle)
            : undefined;
    };

    // The first living Pokémon in box order, defaulted to on load.
    const getFirstLivingLocation = (): string => {
        const firstLiving = run.caughtPokemon.find(
            (pokemon) => pokemon.status === PokemonStatus.Alive
        );
        return firstLiving?.location ?? '';
    };

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [selectedLocation, setSelectedLocation] = useState(
        getFirstLivingLocation
    );
    const [selectedMemberIndex, setSelectedMemberIndex] = useState('0');
    const [prevSelectedBattle, setPrevSelectedBattle] = useState(
        () => selectedBattle ?? getFirstBattleKey()
    );

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    // Falls back to the first trainer whenever the URL hasn't recorded an
    // explicit selection yet.
    const effectiveSelectedBattle = selectedBattle ?? getFirstBattleKey();

    // React docs' "adjusting state when a prop changes" pattern — resets the
    // team-member selection to the first team member during render (no
    // effect) whenever the selected trainer changes, since a member index
    // from the previous trainer's team doesn't apply to the newly selected
    // one.
    if (effectiveSelectedBattle !== prevSelectedBattle) {
        setPrevSelectedBattle(effectiveSelectedBattle);
        setSelectedMemberIndex('0');
    }

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['calc-tab']}>
            <div className={styles.attacker}>
                <PokemonPanel
                    game={game}
                    run={run}
                    selectedLocation={selectedLocation}
                />
                <BoxSelectPanel
                    onSelectPokemon={setSelectedLocation}
                    run={run}
                    selectedLocation={selectedLocation}
                />
            </div>
            <div className={styles.defender}>
                <BattleSelectPanel
                    game={game}
                    onSelectBattle={onSelectBattle}
                    selectedBattle={effectiveSelectedBattle}
                />
                <TrainerPokemonPanel
                    game={game}
                    run={run}
                    selectedBattle={effectiveSelectedBattle}
                    selectedMemberIndex={selectedMemberIndex}
                />
                <TeamSelectPanel
                    game={game}
                    onSelectMember={setSelectedMemberIndex}
                    run={run}
                    selectedBattle={effectiveSelectedBattle}
                    selectedMemberIndex={selectedMemberIndex}
                />
            </div>
        </div>
    );
};

export default CalcTab;
