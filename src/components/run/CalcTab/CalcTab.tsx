import { Game, Run } from '@/lib/static/types';
import styles from './CalcTab.module.scss';
import PokemonPanel from './PokemonPanel/PokemonPanel';

type CalcTabProps = {
    game: Game;
    run: Run;
};

const CalcTab: React.FC<CalcTabProps> = ({ game, run }) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['calc-tab']}>
            <PokemonPanel game={game} run={run} />
        </div>
    );
};

export default CalcTab;
