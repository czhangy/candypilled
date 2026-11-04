import { useState } from 'react';
import {
    CalcField,
    CalcPokemonInput,
    GameDataSource,
    StatValues,
} from '@/lib/static/types';
import DamageCalcHelpers from '@/lib/utils/DamageCalcHelpers';
import styles from './DamageResultsPanel.module.scss';
import MoveDamageColumn from './MoveDamageColumn/MoveDamageColumn';

type DamageResultsPanelProps = {
    attackerField: CalcField;
    attackerIvs: StatValues;
    attackerMoves: string[];
    dataSource: GameDataSource;
    defenderField: CalcField;
    defenderIvs: StatValues;
    defenderMoves: string[];
    generation: number;
    playerInput: CalcPokemonInput | null;
    trainerInput: CalcPokemonInput | null;
};

const DamageResultsPanel: React.FC<DamageResultsPanelProps> = ({
    attackerField,
    attackerIvs,
    attackerMoves,
    dataSource,
    defenderField,
    defenderIvs,
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
    const activeField =
        activeMove.side === 'attacker' ? attackerField : defenderField;
    const attackerLabel =
        activeMove.side === 'attacker' ? "Player's" : "Enemy's";
    const defenderLabel =
        activeMove.side === 'attacker' ? "Enemy's" : "Player's";
    const canDescribeActiveMove =
        !!activeMoveName &&
        !!activeAttacker &&
        !!activeDefender &&
        !DamageCalcHelpers.isUncalculableMove(dataSource, activeMoveName);
    const description =
        canDescribeActiveMove && activeAttacker && activeDefender
            ? DamageCalcHelpers.getDescription(
                  generation,
                  dataSource,
                  activeAttacker,
                  activeDefender,
                  activeMoveName,
                  activeField,
                  attackerLabel,
                  defenderLabel
              )
            : null;
    const possibleDamageAmounts =
        canDescribeActiveMove && activeAttacker && activeDefender
            ? DamageCalcHelpers.getPossibleDamageAmounts(
                  generation,
                  dataSource,
                  activeAttacker,
                  activeDefender,
                  activeMoveName,
                  activeField
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
                    dataSource={dataSource}
                    defender={trainerInput}
                    field={attackerField}
                    generation={generation}
                    ivs={attackerIvs}
                    moveNames={attackerMoves}
                    onSelectMove={handleSelectAttackerMove}
                />
                <MoveDamageColumn
                    activeIndex={
                        activeMove.side === 'defender' ? activeMove.index : null
                    }
                    attacker={trainerInput}
                    dataSource={dataSource}
                    defender={playerInput}
                    field={defenderField}
                    generation={generation}
                    ivs={defenderIvs}
                    moveNames={defenderMoves}
                    onSelectMove={handleSelectDefenderMove}
                />
            </div>
            {description && (
                <div className={styles.description}>
                    {description.lines.length === 1 ? (
                        <p>
                            {description.heading}: {description.lines[0]}
                            {description.koText && ` -- ${description.koText}`}
                        </p>
                    ) : (
                        <>
                            <p>
                                {description.heading}
                                {description.koText &&
                                    ` -- ${description.koText}`}
                            </p>
                            <ul>
                                {description.lines.map((line) => (
                                    <li key={line}>{line}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            )}
            {possibleDamageAmounts && (
                <p className={styles['possible-damage']}>
                    Possible damage amounts
                    {possibleDamageAmounts.perHit ? ' (per hit)' : ''}: (
                    {possibleDamageAmounts.amounts.join(', ')})
                </p>
            )}
        </div>
    );
};

export default DamageResultsPanel;
