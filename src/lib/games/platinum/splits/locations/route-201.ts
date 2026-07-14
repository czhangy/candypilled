import { route201 } from '@/lib/assets/platinum/locations';
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
                        level: 5,
                        moves: ['Scratch', 'Leer'],
                        nature: Nature.Calm,
                        ability: 'Blaze',
                    },
                ],
                Chimchar: [
                    {
                        name: 'Piplup',
                        level: 5,
                        moves: ['Pound', 'Growl'],
                        nature: Nature.Bashful,
                        ability: 'Torrent',
                    },
                ],
                Piplup: [
                    {
                        name: 'Turtwig',
                        level: 5,
                        moves: ['Tackle', 'Withdraw'],
                        nature: Nature.Docile,
                        ability: 'Overgrow',
                    },
                ],
            },
            x: 27.5,
            y: 64,
        },
    ],
};

export default ROUTE_201;
