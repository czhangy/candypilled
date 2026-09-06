import {
    meteorFalls1f,
    meteorFalls1fBack,
    meteorFallsB1f,
    meteorFallsB1fBack,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const METEOR_FALLS: Location = {
    name: 'Meteor Falls',
    subareas: [
        {
            name: '1F',
            map: meteorFalls1f,
            mapAnchor: MapAnchor.Top,
            encountersKey: 'meteor-falls-area',
        },
        {
            name: '1F Back',
            map: meteorFalls1fBack,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'meteor-falls-back',
        },
        {
            name: 'B1F',
            map: meteorFallsB1f,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'meteor-falls-b1f',
        },
        {
            name: 'B1F Back',
            map: meteorFallsB1fBack,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'meteor-falls-backsmall-room',
        },
    ],
};

export default METEOR_FALLS;
