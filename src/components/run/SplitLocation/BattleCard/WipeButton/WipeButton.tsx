import styles from './WipeButton.module.scss';

type WipeButtonProps = {
    onClick: () => void;
};

const WipeButton: React.FC<WipeButtonProps> = ({ onClick }) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <button
            className={styles['wipe-button']}
            onClick={onClick}
            type="button"
        >
            Wipe
        </button>
    );
};

export default WipeButton;
