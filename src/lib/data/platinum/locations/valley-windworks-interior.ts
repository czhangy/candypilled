import { valleyWindworksInterior } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const VALLEY_WINDWORKS_INTERIOR: Location = {
    name: 'Valley Windworks Interior',
    map: valleyWindworksInterior,
    battles: [
        {
            isOptional: true,
            battleKey: 'galactic-grunt-m::5',
            x: 11.6,
            y: 45.2,
        },
        {
            isOptional: true,
            battleKey: 'galactic-grunt-m::6',
            x: 52.1,
            y: 15.4,
        },
        {
            isMiniboss: true,
            battleKey: 'commander-mars::Mars 1',
            x: 88.9,
            y: 40,
        },
    ],
};

export default VALLEY_WINDWORKS_INTERIOR;
