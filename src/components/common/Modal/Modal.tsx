'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '@/lib/icons/CloseIcon';
import styles from './Modal.module.scss';

type ModalProps = {
    accentColor?: string;
    buttonTextColor?: string;
    children: React.ReactNode;
    maxWidth?: string;
    onClose: () => void;
    title?: string;
};

const Modal: React.FC<ModalProps> = ({
    accentColor,
    buttonTextColor,
    children,
    maxWidth,
    onClose,
    title,
}) => {
    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [isClosing, setIsClosing] = useState(false);

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const requestClose = useCallback((): void => {
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReducedMotion) {
            onClose();
        } else {
            setIsClosing(true);
        }
    }, [onClose]);

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
            if (event.key === 'Escape') requestClose();
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [requestClose]);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleOverlayClick = (): void => {
        requestClose();
    };

    const handleCloseButtonClick = (): void => {
        requestClose();
    };

    const handleContentClick = (
        event: React.MouseEvent<HTMLDivElement>
    ): void => {
        event.stopPropagation();
    };

    const handleAnimationEnd = (): void => {
        if (isClosing) onClose();
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return createPortal(
        <div
            className={[styles.overlay, isClosing && styles['overlay--closing']]
                .filter(Boolean)
                .join(' ')}
            onAnimationEnd={handleAnimationEnd}
            onClick={handleOverlayClick}
            style={
                {
                    ...(accentColor && { '--accent-color': accentColor }),
                    ...(buttonTextColor && {
                        '--button-text-color': buttonTextColor,
                    }),
                    ...(maxWidth && { '--modal-max-width': maxWidth }),
                } as React.CSSProperties
            }
        >
            <div className={styles.modal} onClick={handleContentClick}>
                <div className={styles.header}>
                    {title && <span className={styles.title}>{title}</span>}
                    <button
                        aria-label="Close"
                        className={styles['close-button']}
                        onClick={handleCloseButtonClick}
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
