// Curated excerpts from pokeemerald (src/battle_main.c, src/pokemon.c),
// verified independently against this repo -- NOT assumed identical to
// pokeruby's copy of this file. The formulas below turned out to match
// pokeruby's exactly (same nameHash/personality/IV construction, same
// nature/gender/ability derivation), but this was confirmed by reading
// pokeemerald's own source, not copied over.
//
// Struct shapes (TrainerMonNoItemDefaultMoves etc.) and the Trainer/
// TrainerMonPtr union live in include/data.h here, NOT in a battle_setup.h
// like pokeruby -- see data.h in this same reference cache.
//
// Species gender ratio/abilities live in gSpeciesInfo (src/data/pokemon/
// species_info.h in this cache), NOT gBaseStats -- pokeemerald renamed/
// restructured this table relative to pokeruby.

// --- src/battle_main.c ---

static u8 CreateNPCTrainerParty(struct Pokemon *party, u16 trainerNum, bool8 firstTrainer)
{
    u32 nameHash = 0;
    u32 personalityValue;
    u8 fixedIV;
    s32 i, j;
    u8 monsCount;

    if (trainerNum == TRAINER_SECRET_BASE)
        return 0;

    if (gBattleTypeFlags & BATTLE_TYPE_TRAINER && !(gBattleTypeFlags & (BATTLE_TYPE_FRONTIER
                                                                        | BATTLE_TYPE_EREADER_TRAINER
                                                                        | BATTLE_TYPE_TRAINER_HILL)))
    {
        if (firstTrainer == TRUE)
            ZeroEnemyPartyMons();

        if (gBattleTypeFlags & BATTLE_TYPE_TWO_OPPONENTS)
        {
            if (gTrainers[trainerNum].partySize > PARTY_SIZE / 2)
                monsCount = PARTY_SIZE / 2;
            else
                monsCount = gTrainers[trainerNum].partySize;
        }
        else
        {
            monsCount = gTrainers[trainerNum].partySize;
        }

        for (i = 0; i < monsCount; i++)
        {
            if (gTrainers[trainerNum].doubleBattle == TRUE)
                personalityValue = 0x80;
            else if (gTrainers[trainerNum].encounterMusic_gender & F_TRAINER_FEMALE)
                personalityValue = 0x78; // Use personality more likely to result in a female Pokémon
            else
                personalityValue = 0x88; // Use personality more likely to result in a male Pokémon

            for (j = 0; gTrainers[trainerNum].trainerName[j] != EOS; j++)
                nameHash += gTrainers[trainerNum].trainerName[j];

            switch (gTrainers[trainerNum].partyFlags)
            {
            case 0:
            {
                const struct TrainerMonNoItemDefaultMoves *partyData = gTrainers[trainerNum].party.NoItemDefaultMoves;

                for (j = 0; gSpeciesNames[partyData[i].species][j] != EOS; j++)
                    nameHash += gSpeciesNames[partyData[i].species][j];

                personalityValue += nameHash << 8;
                fixedIV = partyData[i].iv * MAX_PER_STAT_IVS / 255;
                CreateMon(&party[i], partyData[i].species, partyData[i].lvl, fixedIV, TRUE, personalityValue, OT_ID_RANDOM_NO_SHINY, 0);
                break;
            }
            // ... F_TRAINER_PARTY_CUSTOM_MOVESET / F_TRAINER_PARTY_HELD_ITEM /
            // both cases follow the same nameHash + fixedIV + CreateMon
            // pattern, then layer on SetMonData for moves/heldItem -- see
            // trainers.h in this cache for which partyFlags value a given
            // trainer uses, and data.h for which struct that selects.
            }
        }

        gBattleTypeFlags |= gTrainers[trainerNum].doubleBattle;
    }

    return gTrainers[trainerNum].partySize;
}

// --- src/pokemon.c ---

// CreateBoxMon's IV assignment (fixedIV path, i.e. trainer mons -- not the
// USE_RANDOM_IVS wild-mon path):
//     if (fixedIV < USE_RANDOM_IVS)
//     {
//         SetBoxMonData(boxMon, MON_DATA_HP_IV, &fixedIV);
//         SetBoxMonData(boxMon, MON_DATA_ATK_IV, &fixedIV);
//         SetBoxMonData(boxMon, MON_DATA_DEF_IV, &fixedIV);
//         SetBoxMonData(boxMon, MON_DATA_SPEED_IV, &fixedIV);
//         SetBoxMonData(boxMon, MON_DATA_SPATK_IV, &fixedIV);
//         SetBoxMonData(boxMon, MON_DATA_SPDEF_IV, &fixedIV);
//     }
// -- i.e. a trainer mon's single `iv` field (0-255, scaled by
// MAX_PER_STAT_IVS/255 = 31/255 in CreateNPCTrainerParty above) is applied
// identically to all six stats. Same one-line scale as documented for
// pokeruby, confirmed independently here.

// CreateBoxMon's ability assignment:
if (gSpeciesInfo[species].abilities[1])
{
    value = personality & 1;
    SetBoxMonData(boxMon, MON_DATA_ABILITY_NUM, &value);
}
// -- if a species has no second ability (abilities[1] == ABILITY_NONE),
// MON_DATA_ABILITY_NUM defaults to 0 (ability slot 0) since it's never set.

u8 GetNatureFromPersonality(u32 personality)
{
    return personality % NUM_NATURES;
}

u8 GetGenderFromSpeciesAndPersonality(u16 species, u32 personality)
{
    switch (gSpeciesInfo[species].genderRatio)
    {
    case MON_MALE:
    case MON_FEMALE:
    case MON_GENDERLESS:
        return gSpeciesInfo[species].genderRatio;
    }

    if (gSpeciesInfo[species].genderRatio > (personality & 0xFF))
        return MON_FEMALE;
    else
        return MON_MALE;
}

u8 GetAbilityBySpecies(u16 species, u8 abilityNum)
{
    if (abilityNum)
        gLastUsedAbility = gSpeciesInfo[species].abilities[1];
    else
        gLastUsedAbility = gSpeciesInfo[species].abilities[0];
    // ...
}
