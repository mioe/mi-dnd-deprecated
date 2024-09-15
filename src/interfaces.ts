export type Stat = 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma'

export interface CoreStat {
	initiative: number
	armor: number
	speed: number

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

	proficiencyBonus: number

	savingThrows: Stat[]

	skills: ('acrobatics' | 'animalHandling' | 'arcana' | 'athletics' | 'deception' | 'history' | 'insight' | 'intimidation' | 'investigation' | 'medicine' | 'nature' | 'perception' | 'performance' | 'persuasion' | 'religion' | 'sleightOfHand' | 'stealth' | 'survival')[]

	passiveWisdom: number

	spellcastingAbility: Stat
	spellSaveDc: number
	spellAttackBonus: number
}
