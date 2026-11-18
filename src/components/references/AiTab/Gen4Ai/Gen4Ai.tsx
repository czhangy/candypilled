import AiGuide from '@/components/references/AiTab/AiGuide/AiGuide';
import { Gen4AiFlag } from '@/lib/static/enums';
import { AiEntry, AiSection } from '@/lib/static/types';

const Gen4Ai: React.FC = () => {
    // -------------------------------------------------------------------------
    // CONSTANTS
    // -------------------------------------------------------------------------

    const MOVE_OVERVIEW = [
        'Every move the AI can use starts each turn at a score of 100 against each target. Each flag the trainer has then runs once per move and adds to or subtracts from that score. The AI uses the highest-scoring move, breaking ties at random.',
        'Flags are set per trainer. Switching and item use are not controlled by them.',
        'The AI always knows your held item and exact HP, but not your moves or ability until it sees them used or revealed.',
        'Percentages below are the chance that a bonus or penalty applies when the AI scores a move.',
        'Tag Strategy is added to every double battle automatically.',
        'Diamond and Pearl differ from Platinum in one Expert check: Icy Wind, Mud Shot and Rock Tomb are only treated as speed-lowering moves in Platinum.',
    ];

    const FLAGS: AiEntry[] = [
        {
            title: Gen4AiFlag.Basic,
            summary: "Stops the AI from picking moves that can't work.",
            details: [
                'A large penalty (-10 to -12) for a move the target is immune to: type immunity, Volt Absorb, Motor Drive, Water Absorb or Flash Fire, Levitate against Ground, Wonder Guard unless the move is super effective, and Soundproof against sound moves. Mold Breaker skips the ability checks.',
                'A penalty for moves with no effect right now: stat boosts already at +6, healing at full HP, a status the target already has, Fling with no item, Baton Pass with no teammates, and similar.',
            ],
        },
        {
            title: Gen4AiFlag.EvalAttack,
            summary:
                'Goes for knockouts, and otherwise prefers its strongest attack.',
            details: [
                '+4 to a move whose maximum non-critical damage roll KOs the target, and +2 more for +1 priority moves. Explosion gets no bonus.',
                '-1 to a move that is not the AI’s highest-damage move.',
                '80% chance of -2 for Explosion, Focus Punch and Sucker Punch when they would otherwise be its strongest move.',
                '69% chance of +2 for a 4x super-effective move.',
            ],
        },
        {
            title: Gen4AiFlag.Expert,
            summary:
                'The most thorough flag: strategy for almost every move effect.',
            details: [
                'Scores each move by its effect, depending on speed, HP, stat stages and the matchup.',
                'Covers stat boosts and drops, sleep, poison, paralysis and confusion, recovery, Protect, Spikes and Toxic Spikes, rain, sun and hail, Trick Room, Gravity, Baton Pass, Counter and Mirror Coat, item and ability swapping, and many more.',
            ],
        },
        {
            title: Gen4AiFlag.SetupFirstTurn,
            summary: 'Encourages setup moves on the first turn of the battle.',
            details: [
                '69% chance of +2 on the first turn only, for stat boosts and drops, Conversion, Light Screen, Reflect, Focus Energy, confusion moves, Poison, Paralysis, Burn, Substitute, Leech Seed, Minimize, Curse, Torment and similar moves.',
            ],
        },
        {
            title: Gen4AiFlag.Risky,
            summary: 'Takes gambles.',
            details: [
                '50% chance of +2 for Sleep, Explosion, Mirror Move, one-hit KO moves, high-crit moves, confusion moves, Metronome, Psywave, Counter, Destiny Bond, Swagger, Attract, Present, Belly Drum, Mirror Coat, Focus Punch, Revenge, Teeter Dance, Gyro Ball, Payback, Me First, Metal Burst and Sucker Punch.',
            ],
        },
        {
            title: Gen4AiFlag.PrioritizeExtremes,
            summary: "Nudges the AI toward moves it doesn't rank by damage.",
            details: [
                '61% chance of +2 for status moves and for damaging moves it does not rank by damage: Explosion, Dream Eater, charge and recharge moves such as Solar Beam and Hyper Beam, Spit Up, Focus Punch, Superpower, Eruption, Sucker Punch and Head Smash.',
            ],
        },
        {
            title: Gen4AiFlag.BatonPass,
            summary: 'Sets up stat boosts to pass on with Baton Pass.',
            details: [
                'Only applies to non-damaging moves, and only while the AI has another Pokémon to pass to.',
                "If the AI knows Baton Pass, Swords Dance, Dragon Dance, Calm Mind and Nasty Plot get +5 on the battle's first turn, -10 below 60% HP, and +1 otherwise. Baton Pass itself is encouraged once its user is boosted.",
            ],
        },
        {
            title: Gen4AiFlag.TagStrategy,
            summary:
                "Added automatically in every double battle, and not in any trainer's data.",
            details: [
                'Attacks aimed at its own partner get -30 unless there is a reason, such as a Fire, Electric or Water move on a partner whose Flash Fire, Motor Drive or Water Absorb it would trigger.',
                'Damaging moves get +1 when they are the AI side’s highest-damage move (50% chance), and super-effective moves get +1 (61% to 75% chance). Not-very-effective moves get -1 or -2 (75% chance) unless they KO or the target is on its last Pokémon.',
                'Special handling for Earthquake and Magnitude, Future Sight, weather moves, Gravity, Trick Room, Follow Me, Skill Swap, Helping Hand, and Electric, Fire and Water moves against partner abilities.',
            ],
        },
        {
            title: Gen4AiFlag.CheckHp,
            summary:
                "Avoids moves that don't suit the current HP of either Pokémon.",
            details: [
                'Each rule gives -2 with an 80% chance.',
                'Above 70% HP: healing moves, Explosion, Rest, Destiny Bond, Endure, Flail, Memento, Grudge, Healing Wish and Lunar Dance.',
                'At 70% HP or below: stat-changing and setup moves. At 30% or below, also Rage, Mirror Coat, Metal Burst, Eruption and Water Spout.',
                'Against a target at 70% HP or below: stat-changing moves. At 30% or below, also Sleep, Toxic, Explosion, one-hit KO moves, Super Fang, confusion moves, Paralysis and Burn.',
            ],
        },
        {
            title: Gen4AiFlag.Weather,
            summary: 'Opens with weather.',
            details: [
                '+5 to Sunny Day, Rain Dance, Sandstorm or Hail on the first turn of the battle, unless that weather is already active.',
            ],
        },
        {
            title: Gen4AiFlag.Harassment,
            summary: 'Prefers annoying, disruptive moves.',
            details: [
                '50% chance of +2 for Sleep, stat-lowering moves, Poison, Paralysis, Burn, confusion moves, Leech Seed, Encore, Spikes, Spite, Torment, Attract, Swagger, Flatter, Knock Off and similar moves.',
            ],
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
            title: '3. Attacks that cannot hurt',
            summary: 'None of its damaging moves can affect your Pokémon.',
            details: [
                'Needs at least two damaging moves.',
                'Switches to a teammate with a super-effective damaging move, about 90% of the time in single battles. If none, it switches to a teammate with a damaging move that hits normally, 75% of the time.',
                'In double battles the chances are lower, unless the teammate can hit both opponents.',
            ],
        },
        {
            title: '4. Absorb ability',
            summary: 'A teammate would absorb the attack that just hit it.',
            details: [
                'Applies when the last damaging move to hit it was Fire, Water or Electric type, and a teammate has Flash Fire, Water Absorb or Volt Absorb. Motor Drive and Dry Skin are not checked. It does not apply if the active Pokémon already has that ability.',
                '50% chance to switch to each such teammate.',
                'If the active Pokémon has a super-effective move, this is skipped 2 times in 3.',
            ],
        },
        {
            title: '5. Natural Cure',
            summary: 'Asleep with Natural Cure.',
            details: [
                'Only applies at half HP or more.',
                'If it was not hit by a damaging move last turn, it switches half the time.',
                'If it was hit, it first looks for a teammate that is immune to that move, then one that resists it, that also has a move super effective against your Pokémon. It switches to the first one it finds.',
                'Otherwise, it switches half the time.',
            ],
        },
        {
            title: 'Stays in when ahead',
            isBreakpoint: true,
            summary: 'The last two reasons are skipped if either is true.',
            details: [
                'It has a super-effective damaging move against your Pokémon. Each such move counts 9 times in 10.',
                'Its stat boosts add up to +4 or more.',
            ],
        },
        {
            title: '6. Immune teammate',
            summary:
                'A teammate is immune to the attack that just hit it, and can hit your Pokémon super effectively.',
            details: [
                'The attack must have been a damaging move.',
                '50% chance to switch to each such teammate. Its super-effective move can be a status move.',
            ],
        },
        {
            title: '7. Resisting teammate',
            summary:
                'A teammate resists the attack that just hit it, and can hit your Pokémon super effectively.',
            details: [
                'The attack must have been a damaging move.',
                '33% chance to switch to each such teammate. Its super-effective move can be a status move.',
            ],
        },
    ];

    const SWITCH_IN_OVERVIEW = [
        'This is how the AI picks its next Pokémon after one faints or uses U-Turn, or when a reason to switch does not name one. Every trainer uses the same logic, whatever flags they have.',
        'It bases the choice on a random living Pokémon on your side.',
        'Only types and moves matter. Ties go to the Pokémon earlier in the party.',
    ];

    const SWITCH_IN_STEPS: AiEntry[] = [
        {
            title: '1. Best typing, with a super-effective move',
            summary:
                'Picks the Pokémon whose types hit your Pokémon best, as long as it has a super-effective move.',
            details: [
                "Pokémon are ranked by how well their own types hit your Pokémon's types. Nothing but typing is considered at this point.",
                'The top-ranked Pokémon is chosen if it knows a move that is super effective against your Pokémon. Status moves count. If it has none, the next one is checked.',
            ],
        },
        {
            title: '2. Most damage',
            summary:
                'If none qualified, picks the Pokémon whose moves would do the most damage.',
            details: [
                'Every move is calculated at its maximum non-critical roll against your Pokémon, with type effectiveness applied.',
                'Fixed and variable damage moves, such as Low Kick, Return and Dragon Rage, are ignored.',
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

export default Gen4Ai;
