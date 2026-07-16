import { route201 } from '@/lib/games/platinum/splits/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_201: Location = {
    name: 'Route 201',
    map: route201,
    encountersKey: 'sinnoh-route-201',
    battles: [
        {
            isMiniboss: true,
            trainerClass: 'PKMN Trainer',
            name: 'Barry 1',
            teamsByStarter: {
                Turtwig: [
                    {
                        name: 'Chimchar',
                        ability: 1,
                        level: 5,
                        moves: ['Scratch', 'Leer'],
                        nature: Nature.Calm,
                    },
                ],
                Chimchar: [
                    {
                        name: 'Piplup',
                        ability: 1,
                        level: 5,
                        moves: ['Pound', 'Growl'],
                        nature: Nature.Bashful,
                    },
                ],
                Piplup: [
                    {
                        name: 'Turtwig',
                        ability: 1,
                        level: 5,
                        moves: ['Tackle', 'Withdraw'],
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
