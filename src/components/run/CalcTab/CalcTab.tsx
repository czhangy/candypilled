import { Game, Run } from '@/lib/static/types';
import BattleSelectPanel from './BattleSelectPanel/BattleSelectPanel';
import styles from './CalcTab.module.scss';
import PokemonPanel from './PokemonPanel/PokemonPanel';
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
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['calc-tab']}>
            <PokemonPanel game={game} run={run} />
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
                />
            </div>
        </div>
    );
};

export default CalcTab;
