import Modal from '@/components/common/Modal/Modal';
import { AiFlag, MoveAiRule } from '@/lib/static/types';
import styles from './AiMoveModal.module.scss';

type AiMoveModalProps = {
    accentColor: string;
    aiFlags: AiFlag[];
    buttonTextColor?: string;
    moveName: string;
    onClose: () => void;
    routines: MoveAiRule[] | undefined;
};

const AiMoveModal: React.FC<AiMoveModalProps> = ({
    accentColor,
    aiFlags,
    buttonTextColor,
    moveName,
    onClose,
    routines,
}) => {
    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const applicable = (routines ?? []).filter((routine) =>
        aiFlags.includes(routine.flag)
    );
    const message =
        aiFlags.length === 0
            ? 'This trainer has no AI flags, so it picks its moves at random.'
            : applicable.length === 0
              ? "None of this trainer's AI flags affect this move."
              : undefined;

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <Modal
            accentColor={accentColor}
            buttonTextColor={buttonTextColor}
            onClose={onClose}
            title={`AI: ${moveName}`}
        >
            {() => (
                <div className={styles['ai-move-modal']}>
                    {message && <p className={styles.message}>{message}</p>}
                    <ul className={styles.routines}>
                        {applicable.map((routine) => (
                            <li key={routine.flag}>
                                <span className={styles.flag}>
                                    {routine.flag}
                                </span>
                                <ul className={styles.details}>
                                    {routine.details.map((detail) => (
                                        <li key={detail}>{detail}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Modal>
    );
};

export default AiMoveModal;
