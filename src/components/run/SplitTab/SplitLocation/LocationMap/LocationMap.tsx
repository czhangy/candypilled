'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Battle, Game } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import styles from './LocationMap.module.scss';
import TrainerMarker from './TrainerMarker/TrainerMarker';

type LocationMapProps = {
    alt: string;
    battles?: Battle[];
    game: Game;
    id?: string;
    isBattleDefeated: (battle: Battle) => boolean;
    isBattleNextPB: (battle: Battle) => boolean;
    map: StaticImageData;
    onBattleClick: (battle: Battle) => void;
    priority: boolean;
    selectedBattle?: Battle;
};

const LocationMap: React.FC<LocationMapProps> = ({
    alt,
    battles = [],
    game,
    id,
    isBattleDefeated,
    isBattleNextPB,
    map,
    onBattleClick,
    priority,
    selectedBattle,
}) => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const EDIT_MODE_ON = process.env.NODE_ENV !== 'production';

    // -------------------------------------------------------------------------
    // STATE
    // -------------------------------------------------------------------------

    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [prevMap, setPrevMap] = useState(map);
    const [prevSelectedBattle, setPrevSelectedBattle] = useState<
        Battle | undefined
    >(undefined);
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

    if (map !== prevMap) {
        setPrevMap(map);
        setPan({ x: 0, y: 0 });
    } else if (
        selectedBattle !== prevSelectedBattle &&
        (viewportSize.width > 0 || viewportSize.height > 0)
    ) {
        setPrevSelectedBattle(selectedBattle);
        if (selectedBattle) {
            const markerX = (selectedBattle.x / 100) * map.width;
            const markerY = (selectedBattle.y / 100) * map.height;
            setPan({
                x: clampPanAxis(
                    viewportSize.width / 2 - markerX,
                    viewportSize.width,
                    map.width
                ),
                y: clampPanAxis(
                    viewportSize.height / 2 - markerY,
                    viewportSize.height,
                    map.height
                ),
            });
        }
    }

    const displayPan = {
        x: clampPanAxis(pan.x, viewportSize.width, map.width),
        y: clampPanAxis(pan.y, viewportSize.height, map.height),
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
                    viewportSize.width,
                    map.width
                ),
                y: clampPanAxis(
                    origin.panY + (event.clientY - origin.y),
                    viewportSize.height,
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
                onPointerDown={handlePointerDown}
                onPointerLeave={handlePointerLeave}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                ref={viewportRef}
                style={{ height: map.height }}
            >
                <div
                    className={styles.image}
                    ref={imageRef}
                    style={
                        {
                            '--pan-x': `${displayPan.x}px`,
                            '--pan-y': `${displayPan.y}px`,
                        } as React.CSSProperties
                    }
                >
                    <Image
                        alt={alt}
                        draggable={false}
                        priority={priority}
                        src={map}
                    />
                    {battles.map((battle) => (
                        <TrainerMarker
                            game={game}
                            isDefeated={isBattleDefeated(battle)}
                            isNextPersonalBest={isBattleNextPB(battle)}
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
                                isDefeated={false}
                                isNextPersonalBest={false}
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
