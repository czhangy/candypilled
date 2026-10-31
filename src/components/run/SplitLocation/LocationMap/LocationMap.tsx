'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { MapAnchor } from '@/lib/static/enums';
import { Battle, Game } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import styles from './LocationMap.module.scss';
import TagPartnerButton from './TagPartnerButton/TagPartnerButton';
import TrainerMarker from './TrainerMarker/TrainerMarker';

type LocationMapProps = {
    alt: string;
    battles?: Battle[];
    game: Game;
    id?: string;
    isTagPartnerSelected?: boolean;
    map: StaticImageData;
    mapAnchor: MapAnchor;
    onBattleClick: (battle: Battle) => void;
    onTagPartnerClick?: () => void;
    priority: boolean;
    selectedBattle?: Battle;
    tagPartnerBattleKey?: string;
};

const LocationMap: React.FC<LocationMapProps> = ({
    alt,
    battles = [],
    game,
    id,
    isTagPartnerSelected,
    map,
    mapAnchor,
    onBattleClick,
    onTagPartnerClick,
    priority,
    selectedBattle,
    tagPartnerBattleKey,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    // Slack (2rem) reserved on all four sides of the image inside the
    // clipped viewport, so a marker anchored at an edge/corner (plus its
    // boss/miniboss badge, which itself extends further past the
    // marker's own edge) isn't cut off by the viewport's overflow.
    const EDGE_BUFFER_PX = 32;

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [pan, setPan] = useState({ x: 0, y: 0 });
    // Seeded as `null` rather than `map`, so the `map !== prevMap` check
    // below is true on the very first render too, centering the map
    // immediately instead of only on a later map change.
    const [prevMap, setPrevMap] = useState<StaticImageData | null>(null);
    const [prevSelectedBattle, setPrevSelectedBattle] = useState<
        Battle | undefined
    >(undefined);
    const [pendingCenter, setPendingCenter] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const viewportRef = useRef<HTMLDivElement>(null);
    const dragOriginRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const clampPanAxis = (
        pan: number,
        viewportLength: number,
        mapLength: number
    ): number => {
        if (mapLength <= viewportLength)
            return (viewportLength - mapLength) / 2;
        return Math.min(0, Math.max(viewportLength - mapLength, pan));
    };

    // The pan that puts mapAnchor's edge/corner flush against the
    // viewport, before clampPanAxis centers it back if the map is
    // actually smaller than the viewport on that axis.
    const getAnchorPan = (anchor: MapAnchor): { x: number; y: number } => {
        const left = 0;
        const right = effectiveViewportWidth - map.width;
        const top = 0;
        const bottom = effectiveViewportHeight - map.height;
        const centerX = (effectiveViewportWidth - map.width) / 2;
        const centerY = (effectiveViewportHeight - map.height) / 2;

        switch (anchor) {
            case MapAnchor.Top:
                return { x: centerX, y: top };
            case MapAnchor.Bottom:
                return { x: centerX, y: bottom };
            case MapAnchor.Left:
                return { x: left, y: centerY };
            case MapAnchor.Right:
                return { x: right, y: centerY };
            case MapAnchor.TopLeft:
                return { x: left, y: top };
            case MapAnchor.TopRight:
                return { x: right, y: top };
            case MapAnchor.BottomLeft:
                return { x: left, y: bottom };
            case MapAnchor.BottomRight:
                return { x: right, y: bottom };
            case MapAnchor.Center:
                return { x: centerX, y: centerY };
        }
    };

    // -------------------------------------------------------------------------
    // RENDERING
    // -------------------------------------------------------------------------

    const hasMeasuredViewport =
        viewportSize.width > 0 || viewportSize.height > 0;
    // Both axes reserve EDGE_BUFFER_PX on each end for marker bleed (see
    // EDGE_BUFFER_PX above), so panning/centering math is done against
    // these shrunk dimensions, not the raw measurement.
    const effectiveViewportWidth = Math.max(
        0,
        viewportSize.width - EDGE_BUFFER_PX * 2
    );
    const effectiveViewportHeight = Math.max(
        0,
        viewportSize.height - EDGE_BUFFER_PX * 2
    );

    if (map !== prevMap) {
        setPrevMap(map);
        setPan({ x: 0, y: 0 });
        setPendingCenter(true);
    } else if (selectedBattle !== prevSelectedBattle && hasMeasuredViewport) {
        setPrevSelectedBattle(selectedBattle);
        setPendingCenter(false);
        if (selectedBattle) {
            const markerX = (selectedBattle.x / 100) * map.width;
            const markerY = (selectedBattle.y / 100) * map.height;
            setPan({
                x: clampPanAxis(
                    effectiveViewportWidth / 2 - markerX,
                    effectiveViewportWidth,
                    map.width
                ),
                y: clampPanAxis(
                    effectiveViewportHeight / 2 - markerY,
                    effectiveViewportHeight,
                    map.height
                ),
            });
        }
    } else if (pendingCenter && hasMeasuredViewport && !selectedBattle) {
        setPendingCenter(false);
        setPan(getAnchorPan(mapAnchor));
    }

    const displayPan = {
        x: clampPanAxis(pan.x, effectiveViewportWidth, map.width),
        y: clampPanAxis(pan.y, effectiveViewportHeight, map.height),
    };

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------

    useEffect(() => {
        const viewport = viewportRef.current;
        if (!viewport) return;

        const observer = new ResizeObserver(([entry]) => {
            setViewportSize({
                width: entry.contentRect.width,
                height: entry.contentRect.height,
            });
        });
        observer.observe(viewport);

        return () => observer.disconnect();
    }, []);

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handlePointerDown = (
        event: React.PointerEvent<HTMLDivElement>
    ): void => {
        if ((event.target as HTMLElement).closest('button')) return;

        dragOriginRef.current = {
            x: event.clientX,
            y: event.clientY,
            panX: displayPan.x,
            panY: displayPan.y,
        };
        setIsDragging(true);
        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (
        event: React.PointerEvent<HTMLDivElement>
    ): void => {
        if (!isDragging) return;

        const origin = dragOriginRef.current;
        setPan({
            x: clampPanAxis(
                origin.panX + (event.clientX - origin.x),
                effectiveViewportWidth,
                map.width
            ),
            y: clampPanAxis(
                origin.panY + (event.clientY - origin.y),
                effectiveViewportHeight,
                map.height
            ),
        });
    };

    const handlePointerUp = (
        event: React.PointerEvent<HTMLDivElement>
    ): void => {
        if (!isDragging) return;

        setIsDragging(false);
        event.currentTarget.releasePointerCapture(event.pointerId);
    };

    // Fires whenever pointer capture ends for any reason (pointerup,
    // pointercancel, or the button being released outside the browser
    // window, which never delivers a pointerup to this element at all).
    // Relying on handlePointerUp alone leaves isDragging stuck true when
    // the release happens off-window.
    const handleLostPointerCapture = (): void => {
        setIsDragging(false);
    };

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['location-map']} id={id}>
            <span className={styles.label}>Map</span>
            <div
                className={[
                    styles.viewport,
                    isDragging && styles['viewport--dragging'],
                ]
                    .filter(Boolean)
                    .join(' ')}
                onLostPointerCapture={handleLostPointerCapture}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                ref={viewportRef}
                style={{ height: map.height + EDGE_BUFFER_PX * 2 }}
            >
                <div
                    className={styles.image}
                    style={
                        {
                            '--pan-x': `${displayPan.x + EDGE_BUFFER_PX}px`,
                            '--pan-y': `${displayPan.y + EDGE_BUFFER_PX}px`,
                        } as React.CSSProperties
                    }
                >
                    <Image
                        alt={alt}
                        draggable={false}
                        priority={priority}
                        src={map}
                        unoptimized
                    />
                    {battles.map((battle) => (
                        <TrainerMarker
                            game={game}
                            isSelected={selectedBattle === battle}
                            key={BattleHelpers.getBattleKey(battle)}
                            mapHeight={map.height}
                            mapWidth={map.width}
                            onClick={onBattleClick}
                            trainer={battle}
                        />
                    ))}
                </div>
                {tagPartnerBattleKey && (
                    <TagPartnerButton
                        battleKey={tagPartnerBattleKey}
                        game={game}
                        isSelected={!!isTagPartnerSelected}
                        onClick={onTagPartnerClick ?? (() => {})}
                    />
                )}
            </div>
        </div>
    );
};

export default LocationMap;
