import {
    lakeVerityPostByron,
    lakeVerityPreByron,
} from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LAKE_VERITY: Location = {
    name: 'Lake Verity',
    subareas: [
        {
            name: 'Pre-Byron',
            map: lakeVerityPreByron,
            encountersKey: 'lake-verity-before-galactic-intervention',
        },
        {
            name: 'Post-Byron',
            map: lakeVerityPostByron,
            encountersKey: 'lake-verity-after-galactic-intervention',
            battles: [
                {
                    isDouble: true,
                    customWidth: 128,
                    trainerClass: 'Galactic Grunt M',
                    name: '15',
                    team: [
                        {
                            slug: 'croagunk',
                            ability: 1,
                            gender: 'male',
                            ivs: 3,
                            level: 37,
                            nature: Nature.Careful,
                        },
                    ],
                    secondTrainer: {
                        trainerClass: 'Galactic Grunt F',
                        name: '15',
                        team: [
                            {
                                slug: 'glameow',
                                ability: 1,
                                gender: 'female',
                                ivs: 3,
                                level: 33,
                                nature: Nature.Jolly,
                            },
                            {
                                slug: 'golbat',
                                ability: 1,
                                gender: 'female',
                                ivs: 3,
                                level: 33,
                                nature: Nature.Serious,
                            },
                            {
                                slug: 'murkrow',
                                ability: 1,
                                gender: 'female',
                                ivs: 3,
                                level: 36,
                                nature: Nature.Rash,
                            },
                        ],
                    },
                    x: 75.9,
                    y: 73.5,
                },
            ],
        },
    ],
};

export default LAKE_VERITY;
