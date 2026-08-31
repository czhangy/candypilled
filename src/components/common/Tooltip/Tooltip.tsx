'use client';

import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Tooltip.module.scss';

type TooltipProps = {
    children: React.ReactNode;
    // Lets a caller override the trigger span's display/sizing (e.g. to
    // fill its parent) since the default `inline-flex` shrink-wraps to
    // its content.
    className?: string;
    position: 'center' | 'left' | 'right';
    text: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({
    children,
    className,
    position,
    text,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const GAP = 6;

    type BubblePlacement = {
        left: number;
        top: number;
    };

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const triggerRef = useRef<HTMLSpanElement>(null);

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [bubblePlacement, setBubblePlacement] =
        useState<BubblePlacement | null>(null);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleMouseEnter = (): void => {
        const rect = triggerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const left =
            position === 'left'
                ? rect.left
                : position === 'right'
                  ? rect.right
                  : rect.left + rect.width / 2;

        setBubblePlacement({ left, top: rect.top - GAP });
    };

    const handleMouseLeave = (): void => {
        setBubblePlacement(null);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <span
            className={[styles.tooltip, className].filter(Boolean).join(' ')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={triggerRef}
        >
            {children}
            {bubblePlacement &&
                createPortal(
                    <span
                        className={[
                            styles.bubble,
                            styles[`bubble--${position}`],
                        ].join(' ')}
                        role="tooltip"
                        style={{
                            left: bubblePlacement.left,
                            top: bubblePlacement.top,
                        }}
                    >
                        {text}
                    </span>,
                    document.body
                )}
        </span>
    );
};

export default Tooltip;
