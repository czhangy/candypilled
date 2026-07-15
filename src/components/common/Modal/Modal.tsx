'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '@/lib/icons/CloseIcon';
import styles from './Modal.module.scss';

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
    title?: string;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, title }) => {
    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    useEffect(() => {
        const { overflow } = document.body.style;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = overflow;
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent): void => {
            if (event.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleOverlayClick = (): void => {
        onClose();
    };

    const handleContentClick = (
        event: React.MouseEvent<HTMLDivElement>
    ): void => {
        event.stopPropagation();
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return createPortal(
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal} onClick={handleContentClick}>
                <div className={styles.header}>
                    {title && <span className={styles.title}>{title}</span>}
                    <button
                        aria-label="Close"
                        className={styles['close-button']}
                        onClick={onClose}
                        type="button"
                    >
                        <CloseIcon />
                    </button>
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
