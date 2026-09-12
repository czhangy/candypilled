import { sendoffSpring } from '@/lib/data/platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SENDOFF_SPRING: Location = {
    name: 'Sendoff Spring',
    map: sendoffSpring,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'sendoff-spring',
};

export default SENDOFF_SPRING;
