import { BattleData } from '@/lib/static/types';
import data from './battles.json';

export const BATTLES: Record<string, BattleData> = data as Record<
    string,
    BattleData
>;
