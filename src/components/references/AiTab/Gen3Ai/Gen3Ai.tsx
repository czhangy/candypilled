import AiGuide from '@/components/references/AiTab/AiGuide/AiGuide';
import { Gen3AiFlag } from '@/lib/static/enums';
import { AiEntry, AiSection } from '@/lib/static/types';

const Gen3Ai: React.FC = () => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MOVE_OVERVIEW = [
        'Every move the AI can use starts each turn at a score of 100. Each flag the trainer has then runs once per move and adds to or subtracts from that score. The AI uses the highest-scoring move, breaking ties at random.',
        'A trainer with no flags leaves every move at 100, so it picks moves at random.',
        'Flags are set per trainer. Switching and item use are not controlled by them: any trainer can switch Pokémon and use items.',
        'Percentages below are the chance that a bonus or penalty applies when the AI scores a move.',
        'Emerald adds Double Battle to every double battle. When two trainers fight you together, both run with the combined flags of the two. A tag partner such as Steven has no flags of its own and runs with the opposing flags.',
        'Ruby and Sapphire have no Double Battle flag.',
    ];

    const FLAGS: AiEntry[] = [
        {
            title: Gen3AiFlag.CheckBadMove,
            summary: "Stops the AI from picking moves that can't work.",
            details: [
                'A large penalty (-10 to -12) for a move the target is immune to: type immunity, Volt Absorb or Water Absorb against Electric or Water moves, Flash Fire against Fire, Levitate against Ground, Wonder Guard unless the move is super effective, and Soundproof against sound moves.',
                'A penalty for stat moves that change nothing: raising a stat already at +6, or lowering one already at -6 or protected by an ability such as Clear Body, White Smoke, Hyper Cutter or Keen Eye.',
                'A penalty for other redundant moves, such as Sleep on a target that is already statused or protected by Safeguard, or a screen that is already up.',
            ],
        },
        {
            title: Gen3AiFlag.TryToFaint,
            summary:
                'Goes for knockouts, and otherwise prefers its strongest attack.',
            details: [
                '+4 to a move that can KO the target. Priority moves such as Quick Attack get +6, and Explosion gets no bonus.',
                '-1 to any damaging move that is not the strongest one the AI has.',
                'Emerald only: 69% chance of +2 for a 4x super-effective move.',
            ],
        },
        {
            title: Gen3AiFlag.CheckViability,
            summary:
                "Judges whether each move's effect is worth using right now.",
            details: [
                "Weighs each move's effect against the situation: HP, speed, current stat stages, and the target's types and moves.",
                'Examples: stat boosts become less attractive as the AI\u2019s own stats rise, Roar is discouraged unless the target has a stat boosted to +3 or more, and Light Screen is discouraged at low HP or against a target with no special-type typing.',
            ],
        },
        {
            title: Gen3AiFlag.SetupFirstTurn,
            summary: 'Encourages setup moves on the first turn of the battle.',
            details: [
                '69% chance of +2 on the first turn only, for stat boosts and drops, Conversion, Light Screen, Reflect, Focus Energy, confusion moves, Poison, Paralysis, Substitute, Leech Seed, Minimize and Curse.',
            ],
        },
        {
            title: Gen3AiFlag.Risky,
            summary: 'Takes gambles.',
            details: [
                '50% chance of +2 for Sleep, Explosion, Mirror Move, one-hit KO moves, high-crit moves, confusion moves, Metronome, Psywave, Counter, Destiny Bond, Swagger, Attract, Present, all-stats-up hits, Belly Drum, Mirror Coat, Focus Punch, Revenge and Teeter Dance.',
            ],
        },
        {
            title: Gen3AiFlag.PreferPowerExtremes,
            summary: "Nudges the AI toward moves it doesn't rank by damage.",
            details: [
                '61% chance of +2 for status moves, fixed or variable damage moves, and moves with a drawback or charge turn: Explosion, Dream Eater, Razor Wind, Sky Attack, Hyper Beam, Skull Bash, Solar Beam, Spit Up, Focus Punch, Superpower, Eruption and Overheat.',
            ],
        },
        {
            title: Gen3AiFlag.PreferBatonPass,
            summary: 'Sets up stat boosts to pass on with Baton Pass.',
            details: [
                'Only applies to non-damaging moves, and only while the AI has another Pokémon to pass to.',
                "Emerald: if the AI knows Baton Pass, Swords Dance, Dragon Dance and Calm Mind get +5 on the battle's first turn, -10 below 60% HP, and +1 otherwise. Baton Pass itself is encouraged once its user is boosted.",
                'Ruby and Sapphire: a simpler version that gives other non-damaging moves +3 (92% chance).',
            ],
        },
        {
            title: Gen3AiFlag.DoubleBattle,
            summary:
                "Emerald only. Added automatically in every double battle, and not in any trainer's data.",
            details: [
                'Attacks aimed at its own partner get -30 unless there is a reason, such as a Fire move on a partner with an unused Flash Fire, or Helping Hand and Skill Swap.',
                'Earthquake and Magnitude get +2 if the partner has Levitate or is Flying type, and -10 if it is Fire, Electric or Poison type.',
                'Electric moves are discouraged when the other opponent has Lightning Rod.',
            ],
        },
        {
            title: Gen3AiFlag.HpAware,
            summary:
                "Avoids moves that don't suit the current HP of either Pokémon.",
            details: [
                'Each rule gives -2 with an 80% chance.',
                'Above 70% HP: healing moves, Explosion, Destiny Bond, Endure, Flail, Overheat, Memento and Grudge.',
                'At 70% HP or below: stat-changing and setup moves. At 30% or below, also Mirror Coat, Rage, Solar Beam and Eruption.',
                'Against a target at 70% HP or below: stat-changing moves. At 30% or below, also Sleep, Toxic, Explosion, one-hit KO moves, Super Fang and confusion moves.',
            ],
        },
        {
            title: Gen3AiFlag.TrySunnyDayStart,
            summary: 'Opens with Sunny Day, though it does not always trigger.',
            details: ['+5 to Sunny Day on the AI Pokémon’s first turn out.'],
        },
    ];

    const SWITCH_OUT_OVERVIEW = [
        'Checked at the start of every turn, before the AI picks a move. The reasons below are checked in order, and the first one that applies decides.',
        'It never switches while trapped (by Wrap and similar moves, Mean Look, Ingrain, or an opposing Shadow Tag, Arena Trap or Magnet Pull), or when it has no other Pokémon able to battle.',
        'Every trainer can switch, whatever flags they have.',
        'Which Pokémon it brings in depends on the reason. When a reason does not name one, the Switch-In AI rules below choose.',
    ];

    const SWITCH_OUT_REASONS: AiEntry[] = [
        {
            title: '1. Perish Song',
            summary: 'About to faint to Perish Song.',
            details: ['Always switches when its Perish Song count reaches 0.'],
        },
        {
            title: '2. Wonder Guard',
            summary:
                "Facing a Wonder Guard Pokémon that it can't hit super effectively.",
            details: [
                'Single battles only.',
                'Switches to a teammate that has a super-effective move, with about a 2 in 3 chance for each such teammate.',
            ],
        },
        {
            title: '3. Absorb ability',
            summary: 'A teammate would absorb the attack that just hit it.',
            details: [
                'Applies when the last damaging move to hit it was Fire, Water or Electric type, and a teammate has Flash Fire, Water Absorb or Volt Absorb. It does not apply if the active Pokémon already has that ability.',
                '50% chance to switch to each such teammate.',
                'If the active Pokémon has a super-effective move, this is skipped 2 times in 3.',
            ],
        },
        {
            title: '4. Natural Cure',
            summary: 'Asleep with Natural Cure.',
            details: [
                'Only applies at half HP or more.',
                'If it was not hit by a damaging move last turn, it switches at least half the time.',
                'If it was hit, it first looks for a teammate that is immune to that move, then one that resists it, that also has a move super effective against your Pokémon. It switches to the first one it finds.',
                'Otherwise, it switches about half the time.',
            ],
        },
        {
            title: 'Stays in when ahead',
            isBreakpoint: true,
            summary: 'The last two reasons are skipped if either is true.',
            details: [
                'It has a super-effective move against your Pokémon. Each such move counts 9 times in 10.',
                'Its stat boosts add up to +4 or more.',
            ],
        },
        {
            title: '5. Immune teammate',
            summary:
                'A teammate is immune to the attack that just hit it, and can hit your Pokémon super effectively.',
            details: [
                'The attack must have been a damaging move.',
                '50% chance to switch to each such teammate. Its super-effective move can be a status move.',
            ],
        },
        {
            title: '6. Resisting teammate',
            summary:
                'A teammate resists the attack that just hit it, and can hit your Pokémon super effectively.',
            details: [
                'The attack must have been a damaging move.',
                '33% chance to switch to each such teammate. Its super-effective move can be a status move.',
            ],
        },
    ];

    const SWITCH_IN_OVERVIEW = [
        'This is how the AI picks its next Pokémon after one faints, or when a reason to switch does not name one. Every trainer uses the same logic, whatever flags they have.',
        'It bases the choice on your Pokémon on the field. In a double battle, it picks one of your two at random.',
        'Only types and moves matter. Ties go to the Pokémon earlier in the party.',
    ];

    const SWITCH_IN_STEPS: AiEntry[] = [
        {
            title: '1. Weakest to you, with a super-effective move',
            summary:
                'Picks the Pokémon that takes the most damage from your types, as long as it can hit you super effectively.',
            details: [
                "Pokémon are ranked by how weak they are to your Pokémon's types. One that is immune to you is never picked.",
                'The weakest Pokémon is chosen if it knows a move that is super effective against your Pokémon. Status moves do not count. If it has none, the next-weakest is checked.',
            ],
        },
        {
            title: '2. Most damage',
            summary:
                'If none qualified, picks the Pokémon whose moves would hit your Pokémon hardest.',
            details: [
                "Damage is based on the last move used in the battle, adjusted for each candidate move's type effectiveness and STAB. A candidate's own stats and move power are not considered.",
                'Status moves are treated like attacks, so they can be picked on type alone. Fixed and variable damage moves, such as Seismic Toss and Return, are ignored.',
            ],
        },
        {
            title: '3. Party order',
            summary:
                'If no move can damage your Pokémon, sends out the first Pokémon in its party that can battle.',
            details: [],
        },
    ];

    const SECTIONS: AiSection[] = [
        {
            title: 'Move Selection',
            overview: MOVE_OVERVIEW,
            entries: FLAGS,
        },
        {
            title: 'Switch AI',
            overview: SWITCH_OUT_OVERVIEW,
            entries: SWITCH_OUT_REASONS,
        },
        {
            title: 'Switch-In AI',
            overview: SWITCH_IN_OVERVIEW,
            entries: SWITCH_IN_STEPS,
        },
    ];

    // -------------------------------------------------------------------------
    // MARKUP
    // -------------------------------------------------------------------------

    return <AiGuide sections={SECTIONS} />;
};

export default Gen3Ai;
