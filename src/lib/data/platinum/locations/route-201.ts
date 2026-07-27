import { route201 } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_201: Location = {
    name: 'Route 201',
    map: route201,
    encountersKey: 'sinnoh-route-201',
    battles: [
        {
            isMiniboss: true,
            trainerClass: 'pkmn-trainer-barry',
            name: 'Barry 1',
            teamsByStarter: {
                turtwig: [
                    {
                        slug: 'chimchar',
                        ability: 1,
                        gender: 'male',
                        level: 5,
                        moves: ['scratch', 'leer'],
                        nature: Nature.Calm,
                    },
                ],
                chimchar: [
                    {
                        slug: 'piplup',
                        ability: 1,
                        gender: 'male',
                        level: 5,
                        moves: ['pound', 'growl'],
                        nature: Nature.Bashful,
                    },
                ],
                piplup: [
                    {
                        slug: 'turtwig',
                        ability: 1,
                        gender: 'male',
                        level: 5,
                        moves: ['tackle', 'withdraw'],
                        nature: Nature.Docile,
                    },
                ],
            },
            x: 27.5,
            y: 64,
        },
    ],
};

export default ROUTE_201;
