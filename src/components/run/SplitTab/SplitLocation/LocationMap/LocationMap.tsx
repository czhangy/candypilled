import Image, { StaticImageData } from 'next/image';
import { Battle } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import styles from './LocationMap.module.scss';
import TrainerMarker from './TrainerMarker/TrainerMarker';

type LocationMapProps = {
    alt: string;
    battles?: Battle[];
    isBattleDefeated: (battle: Battle) => boolean;
    isBattleNextPB: (battle: Battle) => boolean;
    map: StaticImageData;
    onBattleClick: (battle: Battle) => void;
    selectedBattle?: Battle;
};

const LocationMap: React.FC<LocationMapProps> = ({
    alt,
    battles = [],
    isBattleDefeated,
    isBattleNextPB,
    map,
    onBattleClick,
    selectedBattle,
}) => {
    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return (
        <div className={styles['location-map']}>
            <span className={styles.label}>Map</span>
            <div className={styles.image}>
                <Image alt={alt} src={map} />
                {battles.map((battle) => (
                    <TrainerMarker
                        isDefeated={isBattleDefeated(battle)}
                        isNextPersonalBest={isBattleNextPB(battle)}
                        isSelected={selectedBattle === battle}
                        key={BattleHelpers.getBattleKey(battle)}
                        mapHeight={map.height}
                        mapWidth={map.width}
                        onClick={onBattleClick}
                        trainer={battle}
                    />
                ))}
            </div>
        </div>
    );
};

export default LocationMap;
