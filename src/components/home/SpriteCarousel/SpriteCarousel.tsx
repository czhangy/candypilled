'use client';

import { useEffect, useReducer } from 'react';
import Image from 'next/image';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import styles from './SpriteCarousel.module.scss';

const SpriteCarousel: React.FC = () => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    type CarouselState = {
        animate: boolean;
        index: number;
    };

    type CarouselAction = { type: 'advance' } | { type: 'reset' };

    const SPRITES = [
        { name: 'bulbasaur', variant: 'firered-leafgreen' },
        { name: 'charmander', variant: 'firered-leafgreen' },
        { name: 'squirtle', variant: 'firered-leafgreen' },
        { name: 'chikorita', variant: 'heartgold-soulsilver' },
        { name: 'cyndaquil', variant: 'heartgold-soulsilver' },
        { name: 'totodile', variant: 'heartgold-soulsilver' },
        { name: 'treecko', variant: 'emerald' },
        { name: 'torchic', variant: 'emerald' },
        { name: 'mudkip', variant: 'emerald' },
        { name: 'turtwig', variant: 'platinum' },
        { name: 'chimchar', variant: 'platinum' },
        { name: 'piplup', variant: 'platinum' },
    ];
    const FRAMES = [...SPRITES, SPRITES[0]];
    const PAUSE_DURATION_MS = 1500;
    const SLIDE_DURATION_MS = 400;
    const CYCLE_DURATION_MS = PAUSE_DURATION_MS + SLIDE_DURATION_MS;

    const SPRITE_SIZE = 128;

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const carouselReducer = (
        state: CarouselState,
        action: CarouselAction
    ): CarouselState => {
        switch (action.type) {
            case 'advance':
                return { animate: true, index: state.index + 1 };
            case 'reset':
                return { animate: false, index: 0 };
        }
    };

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const [{ animate, index }, dispatch] = useReducer(carouselReducer, {
        animate: false,
        index: 0,
    });

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    // On mount — advances the carousel by one frame every cycle.
    useEffect(() => {
        const timer = setInterval(() => {
            dispatch({ type: 'advance' });
        }, CYCLE_DURATION_MS);

        return () => clearInterval(timer);
    }, [CYCLE_DURATION_MS]);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    // The last frame duplicates the first so the pan-out looks continuous;
    // once its transition lands, snap back to the real first frame with no
    // transition so the loop reads as seamless.
    const handleTrackTransitionEnd = (
        event: React.TransitionEvent<HTMLDivElement>
    ): void => {
        if (event.propertyName !== 'transform') return;
        if (index !== SPRITES.length) return;

        dispatch({ type: 'reset' });
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['sprite-carousel']}>
            <div
                className={[styles.track, animate && styles['track--animate']]
                    .filter(Boolean)
                    .join(' ')}
                onTransitionEnd={handleTrackTransitionEnd}
                style={
                    {
                        '--frame-count': FRAMES.length,
                        '--offset': `${(index / FRAMES.length) * 100}%`,
                        '--slide-duration': `${SLIDE_DURATION_MS}ms`,
                    } as React.CSSProperties
                }
            >
                {FRAMES.map((sprite, position) => {
                    const src = PokemonHelpers.getPokemonSprite(
                        sprite.name,
                        sprite.variant
                    );
                    if (!src) return null;

                    return (
                        <div
                            className={styles.frame}
                            key={`${sprite.name}-${position}`}
                        >
                            <Image
                                alt={sprite.name}
                                height={SPRITE_SIZE}
                                src={src}
                                width={SPRITE_SIZE}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SpriteCarousel;
