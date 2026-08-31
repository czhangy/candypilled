'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { MapAnchor } from '@/lib/static/enums';
import { Battle, Game } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import styles from './LocationMap.module.scss';
import TrainerMarker from './TrainerMarker/TrainerMarker';

type LocationMapProps = {
    alt: string;
    battles?: Battle[];
    game: Game;
    id?: string;
    map: StaticImageData;
    mapAnchor: MapAnchor;
    onBattleClick: (battle: Battle) => void;
    priority: boolean;
    selectedBattle?: Battle;
};

const LocationMap: React.FC<LocationMapProps> = ({
    alt,
    battles = [],
    game,
    id,
    map,
    mapAnchor,
    onBattleClick,
    priority,
    selectedBattle,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const EDIT_MODE_ON = process.env.NODE_ENV !== 'production';
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
    // below is true on the very first render too, applying `mapAnchor`
    // immediately instead of only on a later map change.
    const [prevMap, setPrevMap] = useState<StaticImageData | null>(null);
    const [prevSelectedBattle, setPrevSelectedBattle] = useState<
        Battle | undefined
    >(undefined);
    const [pendingCenterAnchor, setPendingCenterAnchor] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
    const [previewPosition, setPreviewPosition] = useState<{
        x: number;
        y: number;
    } | null>(null);
    const [justCopied, setJustCopied] = useState(false);

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const viewportRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
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

    // Whether an anchor centers the map along a given axis, as opposed to
    // pinning it to one edge of that axis. A centered axis can't be resolved
    // without a real viewport measurement, so it's deferred (see the
    // RENDERING section below).
    const anchorCentersX = (anchor: MapAnchor): boolean =>
        anchor === MapAnchor.Top ||
        anchor === MapAnchor.Bottom ||
        anchor === MapAnchor.Center;
    const anchorCentersY = (anchor: MapAnchor): boolean =>
        anchor === MapAnchor.Left ||
        anchor === MapAnchor.Right ||
        anchor === MapAnchor.Center;

    // For an axis that isn't centered, expressed as an extreme value that
    // clampPanAxis pins to the relevant edge regardless of viewport size, so
    // it resolves immediately without waiting on a viewport measurement. A
    // centered axis gets a placeholder `0` here, corrected once
    // `pendingCenterAnchor` resolves.
    const getAnchorPan = (anchor: MapAnchor): { x: number; y: number } => ({
        x: anchorCentersX(anchor)
            ? 0
            : anchor === MapAnchor.TopRight ||
                anchor === MapAnchor.BottomRight ||
                anchor === MapAnchor.Right
              ? -Infinity
              : 0,
        y: anchorCentersY(anchor)
            ? 0
            : anchor === MapAnchor.BottomLeft ||
                anchor === MapAnchor.BottomRight ||
                anchor === MapAnchor.Bottom
              ? -Infinity
              : 0,
    });

    const formatCoordinate = (value: number): string => {
        const fixed = value.toFixed(1);
        return fixed.endsWith('.0') ? fixed.slice(0, -2) : fixed;
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
        setPan(getAnchorPan(mapAnchor));
        setPendingCenterAnchor(
            anchorCentersX(mapAnchor) || anchorCentersY(mapAnchor)
        );
    } else if (selectedBattle !== prevSelectedBattle && hasMeasuredViewport) {
        setPrevSelectedBattle(selectedBattle);
        setPendingCenterAnchor(false);
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
    } else if (pendingCenterAnchor && hasMeasuredViewport && !selectedBattle) {
        setPendingCenterAnchor(false);
        setPan((prevPan) => ({
            x: anchorCentersX(mapAnchor)
                ? (effectiveViewportWidth - map.width) / 2
                : prevPan.x,
            y: anchorCentersY(mapAnchor)
                ? (effectiveViewportHeight - map.height) / 2
                : prevPan.y,
        }));
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
        if (EDIT_MODE_ON && event.shiftKey) return;
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
        if (isDragging) {
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
            return;
        }

        if (EDIT_MODE_ON && event.shiftKey) {
            const rect = imageRef.current!.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;

            setPreviewPosition({
                x: Math.round(x * 10) / 10,
                y: Math.round(y * 10) / 10,
            });
        } else if (previewPosition) {
            setPreviewPosition(null);
        }
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

    const handlePointerLeave = (): void => {
        setPreviewPosition(null);
    };

    const handleImageClick = async (
        event: React.MouseEvent<HTMLDivElement>
    ): Promise<void> => {
        if (!EDIT_MODE_ON || !event.shiftKey) return;

        const rect = imageRef.current!.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        await navigator.clipboard.writeText(
            `x: ${formatCoordinate(x)},\ny: ${formatCoordinate(y)},`
        );

        setJustCopied(true);
        setTimeout(() => setJustCopied(false), 800);
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
                    EDIT_MODE_ON &&
                        previewPosition &&
                        styles['viewport--editing'],
                ]
                    .filter(Boolean)
                    .join(' ')}
                onClick={EDIT_MODE_ON ? handleImageClick : undefined}
                onLostPointerCapture={handleLostPointerCapture}
                onPointerDown={handlePointerDown}
                onPointerLeave={handlePointerLeave}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                ref={viewportRef}
                style={{ height: map.height + EDGE_BUFFER_PX * 2 }}
            >
                <div
                    className={styles.image}
                    ref={imageRef}
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
                            isPreview={false}
                            isSelected={selectedBattle === battle}
                            key={BattleHelpers.getBattleKey(battle)}
                            mapHeight={map.height}
                            mapWidth={map.width}
                            onClick={onBattleClick}
                            trainer={battle}
                        />
                    ))}
                    {EDIT_MODE_ON && previewPosition && (
                        <>
                            <TrainerMarker
                                game={game}
                                isPreview
                                isSelected={false}
                                mapHeight={map.height}
                                mapWidth={map.width}
                                onClick={() => {}}
                                trainer={{
                                    battleKey: '',
                                    metadata: [],
                                    x: previewPosition.x,
                                    y: previewPosition.y,
                                }}
                            />
                            <span
                                className={styles['coord-label']}
                                style={
                                    {
                                        '--x': `${previewPosition.x}%`,
                                        '--y': `${previewPosition.y}%`,
                                    } as React.CSSProperties
                                }
                            >
                                {justCopied
                                    ? 'Copied!'
                                    : `${previewPosition.x.toFixed(1)}, ${previewPosition.y.toFixed(1)}`}
                            </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LocationMap;
