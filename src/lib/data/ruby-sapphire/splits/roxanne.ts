import LITTLEROOT_TOWN from '@/lib/data/ruby-sapphire/locations/littleroot-town';
import OLDALE_TOWN from '@/lib/data/ruby-sapphire/locations/oldale-town';
import PETALBURG_CITY from '@/lib/data/ruby-sapphire/locations/petalburg-city';
import PETALBURG_WOODS from '@/lib/data/ruby-sapphire/locations/petalburg-woods';
import ROUTE_101 from '@/lib/data/ruby-sapphire/locations/route-101';
import ROUTE_102 from '@/lib/data/ruby-sapphire/locations/route-102';
import ROUTE_103 from '@/lib/data/ruby-sapphire/locations/route-103';
import ROUTE_104 from '@/lib/data/ruby-sapphire/locations/route-104';
import RUSTBORO_CITY from '@/lib/data/ruby-sapphire/locations/rustboro-city';
import RUSTBORO_GYM from '@/lib/data/ruby-sapphire/locations/rustboro-gym';
import { Split } from '@/lib/static/types';

const ROXANNE: Split = {
    name: 'Roxanne',
    locations: [
        LITTLEROOT_TOWN,
        ROUTE_101,
        OLDALE_TOWN,
        ROUTE_103,
        ROUTE_102,
        PETALBURG_CITY,
        ROUTE_104,
        PETALBURG_WOODS,
        RUSTBORO_CITY,
        RUSTBORO_GYM,
    ],
    // FLAG_BADGE01_GET = SYSTEM_FLAGS (0x800) + 0x07, per pokeruby's
    // include/constants/flags.h -- see ONBOARDING.md for the full table.
    saveCondition: { type: 'badge', bit: 2055 },
};

export default ROXANNE;
