import {
    mtPyre1f,
    mtPyre2f,
    mtPyre3f,
    mtPyre4f,
    mtPyre5f,
    mtPyre6f,
    mtPyreExterior,
    mtPyreSummitAqua,
    mtPyreSummitMagma,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const MT_PYRE: Location = {
    name: 'Mt. Pyre',
    subareas: [
        {
            name: '1F',
            map: mtPyre1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-1f',
        },
        {
            name: '2F',
            map: mtPyre2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-2f',
        },
        {
            name: '3F',
            map: mtPyre3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-3f',
        },
        {
            name: '4F',
            map: mtPyre4f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-4f',
        },
        {
            name: '5F',
            map: mtPyre5f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-5f',
        },
        {
            name: '6F',
            map: mtPyre6f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-6f',
        },
        {
            name: 'Exterior',
            map: mtPyreExterior,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'mt-pyre-outside',
        },
        {
            name: 'Summit',
            map: {
                Ruby: mtPyreSummitMagma,
                Sapphire: mtPyreSummitAqua,
            },
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'mt-pyre-summit',
        },
    ],
};

export default MT_PYRE;
