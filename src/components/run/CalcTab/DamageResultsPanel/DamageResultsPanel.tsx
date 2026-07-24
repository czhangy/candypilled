import { CalcPokemonInput } from '@/lib/static/types';
import styles from './DamageResultsPanel.module.scss';
import MoveDamageColumn from './MoveDamageColumn/MoveDamageColumn';

type DamageResultsPanelProps = {
    attackerMoves: string[];
    defenderMoves: string[];
    generation: number;
    playerInput: CalcPokemonInput | null;
    trainerInput: CalcPokemonInput | null;
};

const DamageResultsPanel: React.FC<DamageResultsPanelProps> = ({
    attackerMoves,
    defenderMoves,
    generation,
    playerInput,
    trainerInput,
}) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['damage-results-panel']}>
            <MoveDamageColumn
                attacker={playerInput}
                defender={trainerInput}
                generation={generation}
                moveNames={attackerMoves}
            />
            <MoveDamageColumn
                attacker={trainerInput}
                defender={playerInput}
                generation={generation}
                moveNames={defenderMoves}
            />
        </div>
    );
};

export default DamageResultsPanel;
