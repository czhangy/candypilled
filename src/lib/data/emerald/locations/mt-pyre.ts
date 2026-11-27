import {
    mtPyre1f,
    mtPyre2f,
    mtPyre3f,
    mtPyre4f,
    mtPyre5f,
    mtPyre6f,
    mtPyreExterior,
    mtPyreSummit,
} from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const GRASS_WINONA = [{ method: EncounterMethod.Grass, split: 'Winona' }];

const MT_PYRE: Location = {
    name: 'Mt. Pyre',
    subareas: [
        {
            name: '1F',
            map: mtPyre1f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-1f',
            methodSplits: GRASS_WINONA,
            transitions: [
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '2F',
                    width: 16,
                    x: 52.27,
                    y: 7.89,
                },
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: 'Exterior',
                    width: 32,
                    x: 18.18,
                    y: 34.21,
                },
                {
                    height: 16,
                    location: 'Route 122',
                    width: 32,
                    x: 81.82,
                    y: 97.37,
                },
            ],
        },
        {
            name: '2F',
            map: mtPyre2f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-2f',
            methodSplits: GRASS_WINONA,
            battles: [
                {
                    battleKey: 'pokemaniac-mark',
                    x: 26.92,
                    y: 48.8,
                },
                {
                    battleKey: 'hex-maniac-leah',
                    x: 50.0,
                    y: 48.8,
                },
                {
                    battleKey: 'black-belt-zander',
                    x: 50.0,
                    y: 71.88,
                },
                {
                    battleKey: 'young-couple-dez-and-luke',
                    x: 23.08,
                    y: 71.88,
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '1F',
                    width: 16,
                    x: 19.23,
                    y: 11.54,
                },
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '3F',
                    width: 16,
                    x: 80.77,
                    y: 11.54,
                },
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '1F',
                    width: 16,
                    x: 88.46,
                    y: 73.08,
                },
            ],
        },
        {
            name: '3F',
            map: mtPyre3f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-3f',
            methodSplits: GRASS_WINONA,
            battles: [
                {
                    battleKey: 'psychic-f-kayla',
                    x: 88.46,
                    y: 33.41,
                },
                {
                    battleKey: 'pkmn-breeder-f-gabrielle',
                    x: 50.0,
                    y: 33.41,
                },
                {
                    battleKey: 'psychic-m-william',
                    x: 11.54,
                    y: 33.41,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '4F',
                    width: 16,
                    x: 19.23,
                    y: 11.54,
                },
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '2F',
                    width: 16,
                    x: 80.77,
                    y: 11.54,
                },
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '2F',
                    width: 16,
                    x: 50,
                    y: 96.15,
                },
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '2F',
                    width: 16,
                    x: 80.77,
                    y: 96.15,
                },
            ],
        },
        {
            name: '4F',
            map: mtPyre4f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-4f',
            methodSplits: GRASS_WINONA,
            battles: [
                {
                    battleKey: 'hex-maniac-tasha',
                    x: 88.46,
                    y: 56.49,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '5F',
                    width: 16,
                    x: 80.77,
                    y: 11.54,
                },
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '3F',
                    width: 16,
                    x: 19.23,
                    y: 42.31,
                },
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '3F',
                    width: 16,
                    x: 73.08,
                    y: 80.77,
                },
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '3F',
                    width: 16,
                    x: 19.23,
                    y: 96.15,
                },
            ],
        },
        {
            name: '5F',
            map: mtPyre5f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-5f',
            methodSplits: GRASS_WINONA,
            battles: [
                {
                    battleKey: 'black-belt-atsushi',
                    x: 26.92,
                    y: 56.49,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '6F',
                    width: 16,
                    x: 19.23,
                    y: 11.54,
                },
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '4F',
                    width: 16,
                    x: 80.77,
                    y: 42.31,
                },
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '4F',
                    width: 16,
                    x: 96.15,
                    y: 80.77,
                },
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '4F',
                    width: 16,
                    x: 96.15,
                    y: 96.15,
                },
            ],
        },
        {
            name: '6F',
            map: mtPyre6f,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'mt-pyre-6f',
            methodSplits: GRASS_WINONA,
            battles: [
                {
                    battleKey: 'hex-maniac-valerie',
                    x: 50.0,
                    y: 25.72,
                },
                {
                    battleKey: 'psychic-m-cedric',
                    x: 80.77,
                    y: 25.72,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '5F',
                    width: 16,
                    x: 19.23,
                    y: 11.54,
                },
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '5F',
                    width: 16,
                    x: 11.54,
                    y: 80.77,
                },
            ],
        },
        {
            name: 'Exterior',
            map: mtPyreExterior,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'mt-pyre-outside',
            methodSplits: GRASS_WINONA,
            transitions: [
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: 'Summit',
                    width: 32,
                    x: 52.63,
                    y: 20.59,
                },
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: '1F',
                    width: 16,
                    x: 27.63,
                    y: 83.33,
                },
            ],
        },
        {
            name: 'Summit',
            map: mtPyreSummit,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'mt-pyre-summit',
            methodSplits: GRASS_WINONA,
            battles: [
                {
                    battleKey: 'team-aqua-grunt-m-mt-pyre-summit-2',
                    x: 51.0,
                    y: 49.58,
                },
                {
                    battleKey: 'team-aqua-grunt-m-mt-pyre-summit-1',
                    x: 43.0,
                    y: 41.47,
                },
                {
                    battleKey: 'team-aqua-grunt-m-mt-pyre-summit-3',
                    customWidth: 86,
                    x: 47.0,
                    y: 30.66,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Mt. Pyre',
                    subarea: 'Exterior',
                    width: 48,
                    x: 47,
                    y: 85.14,
                },
            ],
        },
    ],
};

export default MT_PYRE;
