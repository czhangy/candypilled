import { route210North, route210South } from '@/lib/data/platinum/maps';
import { FieldCondition } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_210: Location = {
    name: 'Route 210',
    subareas: [
        {
            name: 'South',
            map: route210South,
            encountersKey: 'sinnoh-route-210-south-towards-solaceon-town',
            battles: [
                {
                    isOptional: true,
                    battleKey: 'rancher::Marco',
                    x: 34.6,
                    y: 77,
                },
                {
                    isOptional: true,
                    battleKey: 'jogger::Wyatt',
                    x: 71.4,
                    y: 69,
                },
                {
                    isOptional: true,
                    isTrueDouble: true,
                    customHeight: 40,
                    battleKey: 'belle-and-pa::Ava & Matt',
                    x: 60.3,
                    y: 56.4,
                },
                {
                    isOptional: true,
                    isTrueDouble: true,
                    customWidth: 36,
                    battleKey: 'twins::Teri & Tia',
                    x: 42.5,
                    y: 45.5,
                },
                {
                    isOptional: true,
                    battleKey: 'pkmn-breeder-m::Kahlil',
                    x: 31.7,
                    y: 36.2,
                },
                {
                    isOptional: true,
                    battleKey: 'pkmn-breeder-f::Amber',
                    x: 60,
                    y: 30.8,
                },
            ],
        },
        {
            name: 'North',
            map: route210North,
            encountersKey: 'sinnoh-route-210-west-towards-celestic-town',
            battles: [
                {
                    isOptional: true,
                    battleKey: 'ninja-boy::Brennan',
                    x: 73.5,
                    y: 81.7,
                },
                {
                    isOptional: true,
                    battleKey: 'ninja-boy::Fabian',
                    x: 86.3,
                    y: 80.6,
                },
                {
                    isOptional: true,
                    battleKey: 'ninja-boy::Bruce',
                    x: 96.7,
                    y: 70,
                },
                {
                    isOptional: true,
                    battleKey: 'ninja-boy::Joel',
                    fieldCondition: FieldCondition.Fog,
                    x: 88.2,
                    y: 29,
                },
                {
                    battleKey: 'ace-trainer-f::Alyssa',
                    fieldCondition: FieldCondition.Fog,
                    x: 70.4,
                    y: 32.6,
                },
                {
                    isOptional: true,
                    isTrueDouble: true,
                    customWidth: 36,
                    battleKey: 'double-team::Zac & Jen',
                    fieldCondition: FieldCondition.Fog,
                    x: 61.6,
                    y: 22.6,
                },
                {
                    isOptional: true,
                    battleKey: 'ace-trainer-m::Ernest',
                    fieldCondition: FieldCondition.Fog,
                    x: 56.8,
                    y: 10.2,
                },
                {
                    isOptional: true,
                    battleKey: 'ninja-boy::Davido',
                    fieldCondition: FieldCondition.Fog,
                    x: 20.1,
                    y: 9.2,
                },
                {
                    battleKey: 'black-belt::Adam',
                    fieldCondition: FieldCondition.Fog,
                    x: 40.1,
                    y: 34.2,
                },
                {
                    isOptional: true,
                    battleKey: 'ninja-boy::Nathan',
                    fieldCondition: FieldCondition.Fog,
                    x: 47.5,
                    y: 30.7,
                },
                {
                    battleKey: 'bird-keeper::Brianna',
                    fieldCondition: FieldCondition.Fog,
                    x: 32.8,
                    y: 29.3,
                },
                {
                    isOptional: true,
                    battleKey: 'veteran::Brian',
                    fieldCondition: FieldCondition.Fog,
                    x: 15.1,
                    y: 22.8,
                },
                {
                    isOptional: true,
                    battleKey: 'dragon-tamer::Patrick',
                    fieldCondition: FieldCondition.Fog,
                    x: 84,
                    y: 15.9,
                },
            ],
        },
    ],
};

export default ROUTE_210;
