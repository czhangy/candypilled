'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
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
    onBattleClick,
    onTagPartnerClick,
    priority,
    selectedBattle,
    tagPartnerBattleKey,
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
    // below is true on the very first render too, centering the map
    // immediately instead of only on a later map change.
    const [prevMap, setPrevMap] = useState<StaticImageData | null>(null);
    const [prevSelectedBattle, setPrevSelectedBattle] = useState<
        Battle | undefined
    >(undefined);
    const [pendingCenter, setPendingCenter] = useState(false);
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
        setPan({
            x: (effectiveViewportWidth - map.width) / 2,
            y: (effectiveViewportHeight - map.height) / 2,
        });
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
                    {!(EDIT_MODE_ON && previewPosition) &&
                        battles.map((battle) => (
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
