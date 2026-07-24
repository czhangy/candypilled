import { useState } from 'react';
import { Game, Run } from '@/lib/static/types';
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
    // STATE
    // -------------------------------------------------------------------------

    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedMemberIndex, setSelectedMemberIndex] = useState('');
    const [prevSelectedBattle, setPrevSelectedBattle] =
        useState(selectedBattle);

    // React docs' "adjusting state when a prop changes" pattern — resets the
    // team-member selection during render (no effect) since it no longer
    // applies once a different trainer is chosen via the URL.
    if (selectedBattle !== prevSelectedBattle) {
        setPrevSelectedBattle(selectedBattle);
        setSelectedMemberIndex('');
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
                    selectedBattle={selectedBattle}
                />
                <TrainerPokemonPanel
                    game={game}
                    run={run}
                    selectedBattle={selectedBattle}
                    selectedMemberIndex={selectedMemberIndex}
                />
                <TeamSelectPanel
                    game={game}
                    onSelectMember={setSelectedMemberIndex}
                    run={run}
                    selectedBattle={selectedBattle}
                    selectedMemberIndex={selectedMemberIndex}
                />
            </div>
        </div>
    );
};

export default CalcTab;
