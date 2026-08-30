import { route224Dawn, route224Lucas } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_224: Location = {
    name: 'Route 224',
    map: { male: route224Dawn, female: route224Lucas },
    mapAnchor: MapAnchor.BottomLeft,
    encountersKey: 'route-224',
    battles: [
        {
            battleKey: 'ace-trainer-ruben',
            metadata: [BattleMetadata.Optional],
            x: 30.5,
            y: 69.9,
        },
        {
            battleKey: 'psychic-brittney',
            metadata: [BattleMetadata.Optional],
            x: 8.5,
            y: 58.5,
        },
        {
            battleKey: 'psychic-maxwell',
            metadata: [BattleMetadata.Optional],
            x: 17.9,
            y: 51.2,
        },
        {
            battleKey: 'veteran-armando',
            metadata: [BattleMetadata.Optional],
            x: 33.6,
            y: 55.3,
        },
        {
            battleKey: 'black-belt-carl',
            metadata: [BattleMetadata.Optional],
            x: 58.4,
            y: 54.2,
        },
        {
            battleKey: 'ruin-maniac-larry',
            metadata: [BattleMetadata.Optional],
            x: 77.4,
            y: 43.8,
        },
        {
            battleKey: 'ace-trainer-jamie',
            metadata: [BattleMetadata.Optional],
            x: 80.6,
            y: 39.5,
        },
        {
            battleKey: 'dragon-tamer-hayden',
            metadata: [BattleMetadata.Optional],
            x: 63.3,
            y: 32.3,
        },
        {
            battleKey: 'pkmn-trainer-dawn-route-224',
            gender: 'male',
            metadata: [BattleMetadata.Miniboss],
            x: 69.4,
            y: 12.5,
        },
        {
            battleKey: 'pkmn-trainer-lucas-route-224',
            gender: 'female',
            metadata: [BattleMetadata.Miniboss],
            x: 69.4,
            y: 12.5,
        },
    ],
};

export default ROUTE_224;
