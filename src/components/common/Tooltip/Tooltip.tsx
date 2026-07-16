import styles from './Tooltip.module.scss';

interface TooltipProps {
    children: React.ReactNode;
    position: 'center' | 'left' | 'right';
    text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, position, text }) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <span className={styles.tooltip}>
            {children}
            <span
                className={[styles.bubble, styles[`bubble--${position}`]].join(
                    ' '
                )}
                role="tooltip"
            >
                {text}
            </span>
        </span>
    );
};

export default Tooltip;
