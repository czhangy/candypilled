import { useState } from 'react';
import { CalcPokemonInput } from '@/lib/static/types';
import DamageCalcHelpers from '@/lib/utils/DamageCalcHelpers';
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
    // CONSTANTS
    // -------------------------------------------------------------------------

    type ActiveMove = {
        index: number;
        side: 'attacker' | 'defender';
    };

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [activeMove, setActiveMove] = useState<ActiveMove>({
        index: 0,
        side: 'attacker',
    });

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const activeMoveName =
        activeMove.side === 'attacker'
            ? (attackerMoves[activeMove.index] ?? '')
            : (defenderMoves[activeMove.index] ?? '');
    const activeAttacker =
        activeMove.side === 'attacker' ? playerInput : trainerInput;
    const activeDefender =
        activeMove.side === 'attacker' ? trainerInput : playerInput;
    const attackerLabel =
        activeMove.side === 'attacker' ? "Player's" : "Enemy's";
    const defenderLabel =
        activeMove.side === 'attacker' ? "Enemy's" : "Player's";
    const description =
        activeMoveName && activeAttacker && activeDefender
            ? DamageCalcHelpers.getDescription(
                  generation,
                  activeAttacker,
                  activeDefender,
                  activeMoveName,
                  attackerLabel,
                  defenderLabel
              )
            : null;
    const possibleDamageAmounts =
        activeMoveName && activeAttacker && activeDefender
            ? DamageCalcHelpers.getPossibleDamageAmounts(
                  generation,
                  activeAttacker,
                  activeDefender,
                  activeMoveName
              )
            : null;

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleSelectAttackerMove = (index: number): void => {
        setActiveMove({ index, side: 'attacker' });
    };

    const handleSelectDefenderMove = (index: number): void => {
        setActiveMove({ index, side: 'defender' });
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['damage-results-panel']}>
            <div className={styles.columns}>
                <MoveDamageColumn
                    activeIndex={
                        activeMove.side === 'attacker' ? activeMove.index : null
                    }
                    attacker={playerInput}
                    defender={trainerInput}
                    generation={generation}
                    moveNames={attackerMoves}
                    onSelectMove={handleSelectAttackerMove}
                />
                <MoveDamageColumn
                    activeIndex={
                        activeMove.side === 'defender' ? activeMove.index : null
                    }
                    attacker={trainerInput}
                    defender={playerInput}
                    generation={generation}
                    moveNames={defenderMoves}
                    onSelectMove={handleSelectDefenderMove}
                />
            </div>
            {description && <p className={styles.description}>{description}</p>}
            {possibleDamageAmounts && (
                <p className={styles['possible-damage']}>
                    Possible damage amounts: ({possibleDamageAmounts.join(', ')}
                    )
                </p>
            )}
        </div>
    );
};

export default DamageResultsPanel;
