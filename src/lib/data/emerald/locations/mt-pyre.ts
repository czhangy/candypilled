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
        },
        {
            name: 'Exterior',
            map: mtPyreExterior,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'mt-pyre-outside',
            methodSplits: GRASS_WINONA,
        },
        {
            name: 'Summit',
            map: mtPyreSummit,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'mt-pyre-summit',
            methodSplits: GRASS_WINONA,
            battles: [
                {
                    battleKey: 'team-aqua-grunt-m-mt-pyre-summit-1',
                    x: 43.0,
                    y: 41.47,
                },
                {
                    battleKey: 'team-aqua-grunt-m-mt-pyre-summit-2',
                    x: 51.0,
                    y: 49.58,
                },
                {
                    battleKey: 'team-aqua-grunt-m-mt-pyre-summit-3',
                    customWidth: 86,
                    x: 47.0,
                    y: 30.66,
                },
            ],
        },
    ],
};

export default MT_PYRE;
