// Brute-force solve the exact IV (assumed identical across all 6 stats, EVs=0)
// that reproduces a trainer Pokémon's given stats exactly, using dp_trainers.json's
// raw computed stats rather than assuming Platinum's ivs:1 convention transfers.

const NATURE_MODS: Record<string, Partial<Record<string, number>>> = {
    // stat: multiplier, only non-1.0 entries needed
    Careful: { spa: 0.9, spd: 1.1 },
    Bold: { atk: 0.9, def: 1.1 },
    Naughty: { atk: 1.1, spd: 0.9 },
    Hasty: { def: 0.9, spe: 1.1 },
};

const calcStat = (
    base: number,
    iv: number,
    level: number,
    isHp: boolean,
    natureMod: number
): number => {
    const raw = Math.floor(((2 * base + iv) * level) / 100);
    return isHp ? raw + level + 10 : Math.floor((raw + 5) * natureMod);
};

const solve = (
    label: string,
    level: number,
    nature: string,
    baseStats: {
        hp: number;
        atk: number;
        def: number;
        spa: number;
        spd: number;
        spe: number;
    },
    actual: {
        hp: number;
        atk: number;
        def: number;
        spa: number;
        spd: number;
        spe: number;
    }
) => {
    const mods = NATURE_MODS[nature] ?? {};
    const matches: number[] = [];
    for (let iv = 0; iv <= 31; iv++) {
        const computed = {
            hp: calcStat(baseStats.hp, iv, level, true, 1),
            atk: calcStat(baseStats.atk, iv, level, false, mods.atk ?? 1),
            def: calcStat(baseStats.def, iv, level, false, mods.def ?? 1),
            spa: calcStat(baseStats.spa, iv, level, false, mods.spa ?? 1),
            spd: calcStat(baseStats.spd, iv, level, false, mods.spd ?? 1),
            spe: calcStat(baseStats.spe, iv, level, false, mods.spe ?? 1),
        };
        const allMatch =
            computed.hp === actual.hp &&
            computed.atk === actual.atk &&
            computed.def === actual.def &&
            computed.spa === actual.spa &&
            computed.spd === actual.spd &&
            computed.spe === actual.spe;
        if (allMatch) matches.push(iv);
    }
    console.log(
        `${label}: IVs consistent with ALL 6 stats: [${matches.join(', ')}]`
    );
};

// Tristan's Starly, base tier: level 5, base stats 40/55/30/30/30/60
solve(
    'Tristan Starly Lv5 (Careful)',
    5,
    'Careful',
    { hp: 40, atk: 55, def: 30, spa: 30, spd: 30, spe: 60 },
    { hp: 19, atk: 10, def: 8, spa: 7, spd: 8, spe: 11 }
);

// Tristan's Staravia rematch: level 40, base stats 55/75/50/40/40/80
solve(
    'Tristan Staravia Lv40 (Naughty)',
    40,
    'Naughty',
    { hp: 55, atk: 75, def: 50, spa: 40, spd: 40, spe: 80 },
    { hp: 94, atk: 71, def: 45, spa: 37, spd: 33, spe: 69 }
);

// Logan's Shinx: level 5, base stats 45/65/34/40/34/45
solve(
    'Logan Shinx Lv5 (Bold)',
    5,
    'Bold',
    { hp: 45, atk: 65, def: 34, spa: 40, spd: 34, spe: 45 },
    { hp: 19, atk: 9, def: 8, spa: 9, spd: 8, spe: 9 }
);

// Natalie's Bidoof: level 3, base stats 59/45/40/35/40/31
solve(
    'Natalie Bidoof Lv3 (Bold)',
    3,
    'Bold',
    { hp: 59, atk: 45, def: 40, spa: 35, spd: 40, spe: 31 },
    { hp: 16, atk: 6, def: 7, spa: 7, spd: 7, spe: 6 }
);

// Tristan's Staravia, second rematch: level 31
solve(
    'Tristan Staravia Lv31 (Hasty)',
    31,
    'Hasty',
    { hp: 55, atk: 75, def: 50, spa: 40, spd: 40, spe: 80 },
    { hp: 75, atk: 51, def: 32, spa: 29, spd: 29, spe: 59 }
);
