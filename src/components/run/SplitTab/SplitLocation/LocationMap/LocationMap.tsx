'use client';

import { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Battle, Game } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import styles from './LocationMap.module.scss';
import TrainerMarker from './TrainerMarker/TrainerMarker';

type LocationMapProps = {
    alt: string;
    battles?: Battle[];
    game: Game;
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

    const [previewPosition, setPreviewPosition] = useState<{
        x: number;
        y: number;
    } | null>(null);
    const [justCopied, setJustCopied] = useState(false);

    // -------------------------------------------------------------------------
    // HOOKS
    // -------------------------------------------------------------------------

    const imageRef = useRef<HTMLDivElement>(null);

    // -------------------------------------------------------------------------
    // COMPUTATIONS
    // -------------------------------------------------------------------------

    const formatCoordinate = (value: number): string => {
        const fixed = value.toFixed(1);
        return fixed.endsWith('.0') ? fixed.slice(0, -2) : fixed;
    };

    // -------------------------------------------------------------------------
    // HANDLERS
    // -------------------------------------------------------------------------

    const handleImageMouseMove = (
        event: React.MouseEvent<HTMLDivElement>
    ): void => {
        const rect = imageRef.current!.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        setPreviewPosition({
            x: Math.round(x * 10) / 10,
            y: Math.round(y * 10) / 10,
        });
    };

    const handleImageMouseLeave = (): void => {
        setPreviewPosition(null);
    };

    const handleImageClick = async (
        event: React.MouseEvent<HTMLDivElement>
    ): Promise<void> => {
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
        <div className={styles['location-map']}>
            <span className={styles.label}>Map</span>
            <div
                className={[
                    styles.image,
                    EDIT_MODE_ON && styles['image--editing'],
                ]
                    .filter(Boolean)
                    .join(' ')}
                onClick={EDIT_MODE_ON ? handleImageClick : undefined}
                onMouseLeave={EDIT_MODE_ON ? handleImageMouseLeave : undefined}
                onMouseMove={EDIT_MODE_ON ? handleImageMouseMove : undefined}
                ref={imageRef}
            >
                <Image alt={alt} priority={priority} src={map} />
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
    );
};

export default LocationMap;
