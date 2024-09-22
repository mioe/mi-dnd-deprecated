export type Stat = 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma' | 'proficiencyBonus'

export type Skill = 'acrobatics' | 'animalHandling' | 'arcana' | 'athletics' | 'deception' | 'history' | 'insight' | 'intimidation' | 'investigation' | 'medicine' | 'nature' | 'perception' | 'performance' | 'persuasion' | 'religion' | 'sleightOfHand' | 'stealth' | 'survival'

export interface CoreStat {
	initiative: number
	speed: number
	proficiencyBonus: number
	armor: number
	armorType: string
	strength: number
	dexterity: number
	constitution: number
	intelligence: number
	wisdom: number
	charisma: number
}

export interface HeroStat extends CoreStat{
	maxHit: number
	currentHit: number
	tempHit: number
	savingThrows: Stat[]
	skills: Skill[]
	passiveWisdom: number
	spellcastingAbility: Stat
	spellSaveDc: number
	spellAttackBonus: number
}
