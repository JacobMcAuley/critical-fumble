
/*https://sterlingvermin.files.wordpress.com/2016/09/critical-hits-revisited.pdf*/
export const CRITICAL_FUMBLE_DESC =
{
    fumble : {
        roll: "1d100",
        table: [
            {
                roll: [1,5],
                description: "Slipped. You must make a successful DC 10 DEX Save or immediately fall prone."
            },
            {
                roll: [6,9],
                description: "Pulled up lame. You must make a successful DC 10 CON save or your speed is halved until the end of the encounter."
            },
            {
                roll: [10,10],
                description: "Something in your eye. Your melee attacks only do half damage for the remainder of the encounter."
            },
            {
                roll: [11,15],
                description: "Wicked backswing. You strike yourself slightly on your backswing and take 1d8 damage."
            },
            {
                roll: [16,19],
                description: "Wind knocked out of you. You become exhausted to level 1 of that condition."
            },
            {
                roll: [20,20],
                description: "Loss of confidence. You gain disadvantage for your attacks against this opponent for the remainder of the encounter."
            },
            {
                roll: [21,25],
                description: "Shook yourself up. You are stunned for 1 rd."
            },
            {
                roll: [26,29],
                description: "Give them hope. Your target’s allies within 30 feet gain a d6 inspiration die that can be used during this encounter."
            },
            {
                roll: [30,30],
                description: "Panic attack. You must make a successful DC 10 WIS Save or become frightened for the remainder of the encounter."
            },
            {
                roll: [31,35],
                description: "Dropped weapon. Your drop your weapon and it falls 10’ from your location in a random direction."
            },
            {
                roll: [36,39],
                description: "Discombobulated. You become incapacitated for 1 rd."
            },
            {
                roll: [40,40],
                description: "You’ve fallen and you can’t get up. You immediately fall prone and lose all movement this round."
            },
            {
                roll: [41,45],
                description: "Bad timing. You drop to last in the imitative order for the combat but do not act again this turn."
            },
            {
                roll: [46,49],
                description: "Broken bone. You break a bone in your hand. You suffer disadvantage for the rest of the encounter and take 1d6 damage every rd. until healed."
            },
            {
                roll: [50,50],
                description: "Allies of the target within 20’ will attack you with their next turn, unless they would suffer an Attack of Opportunity to do so."
            },
            {
                roll: [51,55],
                description: "Your swing unbalances you so much that your target may take one melee attack against you as a reaction."
            },
            {
                roll: [56,59],
                description: "Your own worst enemy. You suffer the effects of a bane spell for the remainder of the encounter."
            },
            {
                roll: [60,60],
                description: "Unguarded.  All adjacent allies of your target may immediately take an attack of opportunity against you."
            },
            {
                roll: [61,65],
                description: "Costly mistake. Your target may reroll all 1s and 2s on the damage roll for his next successful melee attack vs. you."
            },
            {
                roll: [66,69],
                description: "Revealed intentions. You and your allies all suffer disadvantage for your next attack."
            },
            {
                roll: [70,70],
                description: "Wrong target.  You mistakenly strike an ally adjacent to you with your attack."
            },
            {
                roll: [71,75],
                description: "Lodged weapon.  Your weapon becomes stuck in the floor or a nearby object. You must make a DC 14 STR check to remove it as an action."
            },
            {
                roll: [76,79],
                description: "Devastating error. As a free action your opponent may immediately make one melee attack with advantage against you as a reaction.  "
            },
            {
                roll: [80, 80],
                description: "Shattered.  Your weapon breaks if it is non-magical. Enchanted weapons must make a DC 8 Save and get a +1 to their roll for every + of the weapon."
            },
            {
                roll: [81,85],
                description: "Thrown weapon. You lose your grip and throw your weapon. It lands 30’ from your location in a random direction."
            },
            {
                roll: [86,89],
                description: "Panic attack.  You immediately suffer the effects of the Confusion spell for 1 rd."
            },
            {
                roll: [90,90],
                description: "Horrible aftermath.  Roll twice on this chart and apply both effects to yourself."
            },
            {
                roll: [91,95],
                description: "Self-inflicted wound.  Your attack ricochets back and you hit yourself. Roll your damage as if you had hit your target and apply it to yourself."
            },
            {
                roll: [96,99],
                description: "Did you see that?  Your attack ricochets back and you hit yourself. Apply the maximum damage to yourself as if you had hit your target."
            },
            {
                roll: [100,100],
                description: "No!  Your attack ricochets back and you hit yourself. Apply the maximum critical damage to yourself as if you had hit your target."

            }
        ]
    },    
    bludgeoning: {    
        roll: "1d20",
        table: [
            {
                roll: [1,1],
                description: "You call that a crit? Roll damage as normal."
            },
            {
                roll: [2,3],
                description: "Smashed off balance! Roll damage as normal and the next attack against the creature has advantage."
            },
            {
                roll: [4,6],
                description: "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice"
            },
            {
                roll: [7,8],
                description: "Sent reeling! Do not roll your damage dice, instead deal the maximum result possible with those dice and push the creature up to 15 feet in any direction."
            },
            {
                roll: [9,11],
                description: "Great hit! Roll your damage dice twice and add them together"
            },
            {
                roll: [12,13],
                description: "Take a seat! Roll damage dice twice and add them together and the creature is knocked prone."
            },
            {
                roll: [14,16],
                description: "Rocked and rolled! Roll damage dice twice and add them together, push the creature up to 15 feet away, and the creature is knocked prone."
            },
            {
                roll: [17,18],
                description: "Grievous injury! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add the result. Then roll on the Minor Injury chart. If the creature is wearing heavy armor roll on the Major Injury chart instead."
            },        
            {
                roll: [19,19],
                description: "Crushed! Deal the twice maximum result of your damage dice and roll on the major injury chart."
            },        
            {
                roll: [20,20],
                description: "Splat! Deal the maximum result of your damage dice twice, the creature is stunned until the end of your next turn, and roll on the major injury chart."
            }        
        ],
    },
    piercing: {
        roll: "1d20",
        table : [
            {
                roll: [1,1],
                description: "You call that a crit? Roll damage as normal."
            },
            {
                roll: [2,3],
                description: "Lunge and thrust! Roll damage dice twice and use the higher result."
            },
            {
                roll: [4,6],
                description: "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice."
            },
            {
                roll: [7,8],
                description: "Stabbed! Roll your damage dice twice and add them together"
            },
            {
                roll: [9,11],
                description: "Great hit! Roll your damage dice twice and add them together"
            },
            {
                roll: [12,13],
                description: "Swiss cheese! Roll twice as many damage dice as normal. Then roll twice on the minor injury chart and use the lower result"
            },
            {
                roll: [14,16],
                description: "Punctured! Roll your damage dice twice and add them together and roll on the minor injury chart"
            },
            {
                roll: [17,18],
                description: "Cruel prick! Roll your damage dice twice and add them together and roll on the major injury chart."
            },        
            {
                roll: [19,19],
                description: "Run through! Deal twice the maximum result of your damage dice and roll on the major injury chart."
            },        
            {
                roll: [20,20],
                description: "Pierce! Deal the maximum result of your damage dice twice, roll on the minor injury chart, and roll on the major injury chart."
            }        
        ],
    },
    slashing : { 
        roll: "1d20",  
        table : [
            {
                roll: [1,1],
                description: "You call that a crit? Roll damage as normal."
            },
            {
                roll: [2,3],
                description: "Sliced and diced! Roll damage as normal and the creature loses 1d6 hit points at the start of its next turn."
            },
            {
                roll: [4,6],
                description: "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice."
            },
            {
                roll: [7,8],
                description: "Open gash! Roll your damage dice as normal and the creature is bleeding. For the next minute the creature loses 1d4 damage at the start of each of its turns until it uses an action to staunch this wound."
            },
            {
                roll: [9,11],
                description: "Great hit! Roll your damage dice twice and add them together"
            },
            {
                roll: [12,13],
                description: "Deep slice! Roll your damage dice twice and add them together and the creature is bleeding. For the next minute the creature loses 1d8 hit points at the start of each of its turns until it uses an action to staunch this wound."
            },
            {
                roll: [14,16],
                description: "Lacerated! Roll your damage dice twice and add them together and the creature is bleeding. For the next minute the creature loses 1d12 hit points at the start of each of its turns until it uses an action to staunch this wound."
            },
            {
                roll: [17,18],
                description: "Severed! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add the result. Then roll on the Minor Injury chart. If the creature is wearing light or no armor roll on the Major Injury chart instead"
            },        
            {
                roll: [19,19],
                description: "Dissected! Deal twice the maximum result of your damage dice and roll on the major injury chart."
            },        
            {
                roll: [20,20],
                description: "Slash! Deal the maximum result of your damage dice twice, roll on the major injury chart, and the creature is bleeding. For the next minute the creature loses 2d8 hit points at the start of each of its turns until it uses an action to staunch this wound."
            }        
        ],

    },
    acid: {
        roll: "1d20",
        table : [
            {
                roll: [1,1],
                description: "You call that a crit? Roll damage as normal."
            },
            {
                roll: [2,3],
                description: "Scalding bile! Roll damage as normal and the creature is scarred. While scarred the creature has disadvantage on all Charisma ability checks except Charisma (Intimidation). Being scarred can be healed in the same way as a minor injury"
            },
            {
                roll: [4,6],
                description: "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice."
            },
            {
                roll: [7,8],
                description: "Melted flesh! Roll your damage as normal and the creature is disfigured. While disfigured the creature has disadvantage on all Charisma ability checks except Charisma (Intimidation). Being disfigured can be removed with the spell greater restoration."
            },
            {
                roll: [9,11],
                description: "Great hit! Roll your damage dice twice and add them together."
            },
            {
                roll: [12,13],
                description: "Boiling flesh! Roll twice as many damage dice as normal and if the creature is wearing armor its AC modifier is reduced by 1 until it can be repaired (for 1/4th the price of new armor of the same type) or cleaned (if the armor is magical). If the creature is not wearing armor, roll on the minor injury chart."
            },
            {
                roll: [14,16],
                description: "Horrific mutilation! Roll twice as many damage dice as normal and roll on the minor injury chart. Additionally, the creature is disfigured. While disfigured the creature has disadvantage on all Charisma ability checks except Charisma (Intimidation). Being disfigured can be removed with the spell greater restoration."
            },
            {
                roll: [17,18],
                description: "Caustic trauma! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. If the creature is wearing armor, roll on the minor injury chart and its AC modifier is reduced by 2 until it can be repaired (for half the price of new armor of the same type) or cleaned (if the armor is magical). If the creature is not wearing armor, roll on the major injury chart."
            },        
            {
                roll: [19,19],
                description: "Vitriolic! Deal twice the maximum result of your damage dice and roll on the major injury chart."
            },        
            {
                roll: [20,20],
                description: "Acid bath! Deal twice the maximum result of your damage dice. If the creature is wearing armor, the armor is destroyed (if non-magical) or rendered useless until cleaned during a long rest (if magical) and roll on the major injury chart. If the creature is not wearing armor, roll on the major injury chart and the creature is disfigured. While disfigured the creature has disadvantage on all Charisma ability checks except Charisma (Intimidation). Being disfigured can be removed with the spell greater restoration."
            }        
        ],
    },
    cold: {
        roll: "1d20",
        table : [
            {
                roll: [1,1],
                description: "You call that a crit? Roll damage as normal."
            },
            {
                roll: [2,3],
                description: "Chills! Roll damage as normal and the creature may only move half its movement speed on its next turn"
            },
            {
                roll: [4,6],
                description: "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice."
            },
            {
                roll: [7,8],
                description: "Frosty! Roll your damage as normal and the creature’s movement speed is 0 until the end of its next turn."
            },
            {
                roll: [9,11],
                description: "Great hit! Roll your damage dice twice and add them together."
            },
            {
                roll: [12,13],
                description: "Freezing! Roll twice as many damage dice as normal and the creature is paralyzed until the end of its next turn."
            },
            {
                roll: [14,16],
                description: "Frozen! Roll twice as many damage dice as normal and the creature is paralyzed until the end of its next turn. If the creature takes damage before the end of its next turn, roll on the minor injury chart."
            },
            {
                roll: [17,18],
                description: "Ice block! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. The creature is paralyzed until the end of its next turn and rolls on the minor injury chart."
            },        
            {
                roll: [19,19],
                description: "Glacial! Deal twice the maximum result of your damage dice and roll on the major injury chart"
            },        
            {
                roll: [20,20],
                description: "Subzero! Deal twice the maximum result of your damage dice, roll on the major injury chart, and the creature is paralyzed for the next minute. The creature may attempt a saving throw at the end of each of its turns (DC 16) to end this effect. If it fails this saving throw three times it is frozen solid and becomes a petrified but frozen solid in a block of ice rather than turned to stone."
            }        
        ],
    },    
    fire: {
        roll: "1d20",
        table : [
            {
                roll: [1,1],
                description: "You call that a crit? Roll damage as normal."
            },
            {
                roll: [2,3],
                description: "Heat wave! Roll damage as normal and attack rolls for attacks that deal fire damage have advantage when made against the creature until the end of its next turn."
            },
            {
                roll: [4,6],
                description: "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice."
            },
            {
                roll: [7,8],
                description: "Hot flash! Roll your damage as normal and the creature is on fire. While the creature is on fire it takes 2d4 fire damage at the start of each of its turns. The creature can end this condition by dropping prone and using 5 feet of movement to roll on the ground"
            },
            {
                roll: [9,11],
                description: "Great hit! Roll your damage dice twice and add them together."
            },
            {
                roll: [12,13],
                description: "Ablaze! Roll twice as many damage dice as normal and the creature is on fire. While the creature is on fire it takes 2d6 fire damage at the start of each of its turns. The creature can end this condition by dropping prone and using 5 feet of movement to roll on the ground."
            },
            {
                roll: [14,16],
                description: "Burnt to a crisp! Roll twice as many damage dice as normal and the creature is charred. If the creature has resistance to fire, it loses that resistance. If the creature does not have resistance to fire, it gains vulnerability to fire. Both of these effects can be ended the same as a minor injury."
            },
            {
                roll: [17,18],
                description: "Hellfire! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result then roll on the minor injury chart. Additionally, the creature is on fire. While the creature is on fire it takes 2d6 fire damage at the start of each of its turns. The creature can end this condition by dropping prone and using 5 feet of movement to roll on the ground."
            },        
            {
                roll: [19,19],
                description: "Combustion! Deal twice the maximum result of your damage dice and roll on the major injury chart."
            },        
            {
                collection: "RollTable",
                roll: [20,20],
                description: "Inferno! Deal twice the maximum result of your damage dice and roll on the major injury chart. Additionally, the creature is on fire. While the creature is on fire it takes 2d8 fire damage at the start of each of its turns. The creature can end this condition by dropping prone and using 5 feet of movement to roll on the ground."
            }        
        ],
    },
    force: {
        roll: "1d20",
        table : [
            {
                roll: [1,1],
                description: "You call that a crit? Roll damage as normal."
            },
            {
                roll: [2,3],
                description: "Spellstruck! Roll damage as normal and the creature has disadvantage on saving throws against spells until the end of its next turn."
            },
            {
                roll: [4,6],
                description: "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice."
            },
            {
                roll: [7,8],
                description: "Eldritch incandescence! Roll your damage as normal and spell attack rolls against the creature have advantage until the end of its next turn."
            },
            {
                roll: [9,11],
                description: "Great hit! Roll your damage dice twice and add them together."
            },
            {
                roll: [12,13],
                description: "Bewitching blow! Roll twice as many damage dice as normal and the creature is spellbound until the end of its next turn. While spellbound it makes saving throws against spells with disadvantage and spell attack rolls against it have advantage"
            },
            {
                roll: [14,16],
                description: "Mystic magnet! Roll twice as many damage dice as normal and the creature is spellbound for the next minute. While spellbound it makes saving throws against spells with disadvantage and spell attack rolls against it have advantage. At the end of each of the creature’s turns it can make an Intelligence saving throw (DC 14) to end this effect"
            },
            {
                roll: [17,18],
                description: "Ensorcelled! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result then roll on the minor injury chart. Additionally, the creature is spellbound for the next minute. While spellbound it makes saving throws against spells with disadvantage and spell attack rolls against it have advantage. At the end of each of the creature’s turns it can make an Intelligence saving throw (DC 16) to end this effect."
            },        
            {
                roll: [19,19],
                description: "Arcane injury! Deal twice the maximum result of your damage dice and roll on the major injury chart."
            },        
            {
                roll: [20,20],
                description: "Magically mauled! Deal twice the maximum result of your damage dice and roll on the major injury chart. Additionally, the creature is spellbound for the next minute. While spellbound it makes saving throws against spells with disadvantage and spell attack rolls against it have advantage. At the end of each of the creature’s turns it can make an Intelligence saving throw (DC 18) to end this effect."
            }        
        ],
    },
    lightning: {
        roll: "1d20",
        table : [
            {
                roll: [1,1],
                description: "You call that a crit? Roll damage as normal."
            },
            {
                roll: [2,3],
                description: "Shocking! Roll damage as normal and the creature cannot use reactions until the end of its next turn"
            },
            {
                roll: [4,6],
                description: "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice."
            },
            {
                roll: [7,8],
                description: "Sparks fly! Roll your damage as normal and you may choose one other creature within 15 ft. of the victim. That creature must succeed on a Dexterity saving throw (DC 14) or take half as much damage."
            },
            {
                roll: [9,11],
                description: "Great hit! Roll your damage dice twice and add them together."
            },
            {
                roll: [12,13],
                description: "Electric arc! Roll twice as many damage dice as normal and you may choose one other creature within 15 ft. of the victim. That creature must succeed on a Dexterity saving throw (DC 18) or take half as much damage."
            },
            {
                roll: [14,16],
                description: "Fulminate! Roll twice as many damage dice as normal and roll on the minor injury chart. If the creature is wearing metal armor roll on the major injury chart instead."
            },
            {
                roll: [17,18],
                description: "Lit up! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. The creature and each creature you choose within 15 ft. of it cannot take reactions until the end of their next turn. Then roll on the minor injury chart."
            },        
            {
                roll: [19,19],
                description: "Electrocuted! Deal twice the maximum result of your damage dice and roll on the major injury chart."
            },        
            {
                roll: [20,20],
                description: "Lightning rod! Deal twice the maximum result of your damage dice and you may choose one other creature within 15 ft. of the victim. That creature must succeed on a Dexterity saving throw (DC 20) or take half as much damage. Then roll on the major injury chart."
            }        
        ],
    },
    necrotic: {
        roll: "1d20",
        table : [
            {
                roll: [1,1],
                description: "You call that a crit? Roll damage as normal."
            },
            {
                roll: [2,3],
                description: "Spoil! Roll damage as normal and the creature cannot regain hit points until the end of its next turn."
            },
            {
                roll: [4,6],
                description: "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice."
            },
            {
                roll: [7,8],
                description: "Fester! Roll your damage as normal and the creature’s maximum hit points are reduced by the same amount."
            },
            {
                roll: [9,11],
                description: "Great hit! Roll your damage dice twice and add them together."
            },
            {
                roll: [12,13],
                description: "Decay! Roll twice as many damage dice as normal and the creature’s maximum hit points are reduced by the same amount."
            },
            {
                roll: [14,16],
                description: "Rot! Roll twice as many damage dice as normal and the creature cannot regain hit points for the next minute. It may make a saving throw (DC 16) at the end of each of its turns to end this effect."
            },
            {
                roll: [17,18],
                description: "Blight! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. The creature’s maximum hit points are reduced by the same amount. Then roll on the minor injury chart."
            },        
            {
                roll: [19,19],
                description: "Atrophy! Deal twice the maximum result of your damage dice and roll on the major injury chart."
            },        
            {
                roll: [20,20],
                description: "Putrefy! Deal twice the maximum result of your damage dice, the creature’s maximum hit points are reduced by the same amount, and the creature cannot regain hit points until the end of its next turn. Then roll on the major injury chart."
            }        
        ],
    },
    poison: {
        roll: "1d20",
        table : [
            {
                roll: [1,1],
                description: "You call that a crit? Roll damage as normal."
            },
            {
                roll: [2,3],
                description: "Nauseous! Roll damage as normal and the creature has disadvantage on its next ability check, attack roll, or saving throw."
            },
            {
                roll: [4,6],
                description: "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice."
            },
            {
                roll: [7,8],
                description: "Sickened! Roll your damage as normal and the creature has disadvantage on all ability checks, attack rolls, and saving throws until the end of its next turn"
            },
            {
                roll: [9,11],
                description: "Great hit! Roll your damage dice twice and add them together."
            },
            {
                roll: [12,13],
                description: "Poisoned! Roll twice as many damage dice as normal and the creature is poisoned for the next minute. The creature may attempt a saving throw at the end of each of its turns (DC 12) to end this effect."
            },
            {
                roll: [14,16],
                description: "Contaminated! Roll twice as many damage dice as normal and the creature is poisoned for the next minute. The creature may attempt a saving throw at the end of each of its turns (DC 16) to end this effect."
            },
            {
                roll: [17,18],
                description: "Toxic shock! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. Then roll on the minor injury chart and the creature is poisoned for the next minute. The creature may attempt a saving throw at the end of each of its turns (DC 12) to end this effect."
            },        
            {
                roll: [19,19],
                description: "System failure! Deal twice the maximum result of your damage dice and roll on the major injury chart."
            },        
            {
                roll: [20,20],
                description: "Biological breakdown! Deal twice the maximum result of your damage dice, roll on the major injury chart, and the creature is poisoned for the next minute. The creature may attempt a saving throw at the end of each of its turns (DC 16) to end this effect."
            }        
        ],
    },
    psychic: {
        roll: "1d20",
        table : [
            {
                roll: [1,1],
                description: "You call that a crit? Roll damage as normal."
            },
            {
                roll: [2,3],
                description: "Disoriented! Roll your damage dice as normal and you control the creature’s movement on its next turn"
            },
            {
                roll: [4,6],
                description: "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice."
            },
            {
                roll: [7,8],
                description: "Confused! Roll your damage dice as normal and the creature cannot differentiate friend from foe until the end of its next turn."
            },
            {
                roll: [9,11],
                description: "Great hit! Roll your damage dice twice and add them together."
            },
            {
                roll: [12,13],
                description: "Dominated! Roll twice as many damage dice as normal and you control the creature’s action on its next turn."
            },
            {
                roll: [14,16],
                description: "Psychological fracture! Roll twice as many damage dice as normal and roll on the Insanity chart with disadvantage."
            },
            {
                roll: [17,18],
                description: "Psychological break! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. Then roll on the Insanity chart."
            },        
            {
                roll: [19,19],
                description: "Madness! Deal twice the maximum result of your damage dice and roll on the Insanity chart."
            },        
            {
                roll: [20,20],
                description: "Mind melt! Deal twice the maximum result of your damage dice and roll on the Insanity chart with advantage."
            }        
        ],
    },  
    radiant: {
        roll: "1d20",
        table : [
            {
                roll: [1,1],
                description: "You call that a crit? Roll damage as normal."
            },
            {
                roll: [2,3],
                description: "Dazzled! Roll damage as normal and the creature cannot willingly move closer to you until the end of its next turn."
            },
            {
                roll: [4,6],
                description: "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice."
            },
            {
                roll: [7,8],
                description: "Disheartening blast! Roll your damage as normal and the creature is frightened until the end of its next turn"
            },
            {
                roll: [9,11],
                description: "Great hit! Roll your damage dice twice and add them together."
            },
            {
                roll: [12,13],
                description: "Awed! Roll twice as many damage dice as normal and the creature is frightened until the end of its next turn."
            },
            {
                roll: [14,16],
                description: "Holy terror! Roll twice as many damage dice as normal and roll on the minor injury chart. Additionally, the creature is frightened for the next minute. It can make a Wisdom saving throw (DC 16) at the end of each of its turns to end this effect."
            },
            {
                roll: [17,18],
                description: "Righteous mark! Deal the maximum amount of damage for your normal damage dice then roll your damage dice and add that result, then roll on the minor injury chart. Additionally, the creature glows for the next minute. While glowing it produces bright light up 10 feet and dim light up to 30 feet and all successful attacks against the creature deal an additional 1d4 radiant damage."
            },        
            {
                roll: [19,19],
                description: "Wrath of the gods! Deal twice the maximum result of your damage dice and roll on the major injury chart"
            },        
            {
                roll: [20,20],
                description: "Smote! Deal twice the maximum result of your damage dice and roll on the major injury chart. Additionally, the creature glows for the next minute. While glowing it produces bright light up 10 feet and dim light up to 30 feet and all successful attacks against the creature deal an additional 1d6 radiant damage."
            }        
        ],
    },
    thunder: {
        roll: "1d20",
        table : [
            {
                roll: [1,1],
                description: "You call that a crit? Roll damage as normal."
            },
            {
                roll: [2,3],
                description: "Boom! Roll damage as normal and the creature is deafened until the end of its next turn."
            },
            {
                roll: [4,6],
                description: "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice."
            },
            {
                roll: [7,8],
                description: "Ka-boom! Roll your damage as normal and the creature is deafened for one minute."
            },
            {
                roll: [9,11],
                description: "Great hit! Roll your damage dice twice and add them together."
            },
            {
                roll: [12,13],
                description: "Thunder clap! Roll twice as many damage dice as normal and the creature is stunned until the start of its next turn and deafened for one minute."
            },
            {
                roll: [14,16],
                description: "Burst ear drums! Roll twice as many damage dice as normal and the creature is deafened permanently. Then roll on the minor injury chart."
            },
            {
                roll: [17,18],
                description: "Concussive blast! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add that result. The creature stunned until the end of its next turn and deafened permanently. Then roll on the minor injury chart."
            },        
            {
                roll: [19,19],
                description: "Wall of sound! Deal twice the maximum result of your damage dice and roll on the major injury chart."
            },        
            {
                roll: [20,20],
                description: "Sonic salvo! Deal twice the maximum result of your damage dice, the creature is deafened permanently, and stunned until the end of its next round. Then roll on the major injury chart."
            }        
        ],
    },
    minor: {
        roll: "1d20",
        table : [
            {
                roll: [1,3],
                description: "Injured leg! The creature’s movement speed is reduced by 10 ft"
            },
            {
                roll: [4,8],
                description: "Injured arm! Randomly determine one of the creature’s arms. That arm cannot be used to hold a shield and the creature has disadvantage on any rolls involving the use of that arm."
            },
            {
                roll: [9,11],
                description: "Multiple injuries! The creature’s maximum hit points are reduced by an amount equivalent to half of the damage dealt by the attack."
            },
            {
                roll: [12,16],
                description: "Badly beaten! The creature has disadvantage on Constitution saving throws"
            },
            {
                roll: [17,19],
                description: "Ringing blow! The creature is stunned until the end of its next turn and deafened until it completes a the recuperate downtime activity."
            },   
            {
                roll: [20,20],
                description: "Blow to the head! The creature is unconscious for 2d12 hours."
            }
        ],
    },
    major: {
        roll: "1d20",
        table : [
            {
                roll: [1,3],
                description: "Crippled leg! The creature’s movement speed is reduced by 10 feet and it has disadvantage on Dexterity saving throws."
            },
            {
                roll: [4,8],
                description: "Crippled arm! Randomly determine one of the creature’s arms. That arm cannot be used to hold an item and any ability check requiring that arm automatically fails or has disadvantage (DM’s choice)."
            },
            {
                roll: [9,11],
                description: "Severely wounded! The creature’s maximum hit points are reduced by an amount equivalent to the damage dealt by the attack."

            },
            {
                roll: [12,16],
                description: "Edge of death! The creature has disadvantage on Constitution and death saving throws."
            },
            {
                roll: [17,19],
                description: "My eyes! The creature is blinded."
            },
            {
                roll: [20, 20],
                description: "Decapitated! The creature is dead."
            }
        ],
    }, 
    insanity: {
        roll: "1d20",
        table : [
            {
                roll: [1,1],
                description: "Synesthesia. You can hear colors, smell sounds, or taste textures. Regardless of the specific manifestation, you have disadvantage on all Perception and Investigation skill checks."
            },       
            {
                roll: [2,2],
                description: "Kleptomania. Once per day when you are in a personal residence or marketplace, the DM can call on you to succeed on a Wisdom saving throw (DC 12) or attempt to steal an item of insignificant practical and monetary value. "
            },   
            {
                roll: [3,3],
                description: "Paranoia. Once per day following an interaction with another creature (including other PCs) the DM can call on you to succeed on a Wisdom saving throw (DC 12) or you suspect that creature is secretly plotting against you."
            },   
            {
                roll: [4,4],
                description: "Obsession. Choose a person or personal interest you are obsessed with. Once per day, when you are presented with an opportunity to interact with or learn more about the subject of your obsession the DM can call on you to succeed on a Wisdom saving throw (DC 14) or ignore everything else to obsess over the object of your fascination."
            },   
            {
                roll: [5,5],
                description: "Addiction. Choose a behavior or substance you have used. Once per day, when you are presented with an opportunity to do the behavior or use the substance the DM can call on you to succeed on a Wisdom saving throw (DC 14) or ignore everything else to indulge in your vice."
            },   
            {
                roll: [6,6],
                description: "Odd Thinking. Once per day when you hear a rational explanation for an event or occurrence, your DM may call on you to succeed on a Wisdom saving throw (DC 12) or you reject the rational explanation for a conspiratorial or fantastical explanation."
            },   
            {
                roll: [7,7],
                description: "Narcissism. When you take an action or series of action that doesn’t directly benefit you, you must pass a Wisdom saving throw (DC 11) or you can’t take that action / series of actions. If any self-sacrifice on your part would be required the DC of the saving throw is increased to 16"
            },   
            {
                roll: [8,8],
                description: "Delusional. When you gain this insanity the DM will tell you a belief that you have. No matter what evidence is presented to the contrary so long as you have this insanity you cannot be persuaded that this belief is not true."
            },   
            {
                roll: [9,9],
                description: "Pica. Once per day the DM can call on you to pass a Wisdom saving throw (DC 14) or immediately eat one non-food object (such as dirt, napkins, or a small piece of jewelry) of the DM’s choice."
            },   
            {
                roll: [10,10],
                description: "Retrograde amnesia. You forget everything about your personal life prior to the moment you received this insanity."
            },   
            {
                roll: [11,11],
                description: "Overwhelmed. If you do not have immunity or resistance to psychic damage, you gain vulnerability to psychic damage. If you have resistance to psychic damage, you lose it. If you have immunity to psychic damage, you lose it but gain resistance to psychic damage."
            },   
            {
                roll: [12,12],
                description: "Anterograde amnesia. Whenever you try to recall a fact you learned since you received this insanity, make a Wisdom saving throw (DC 12). If you fail you cannot recall the fact."
            },   
            {
                roll: [13,13],
                description: "Dependence. You must pass a Wisdom saving throw (DC 14) to take an action that one or more of your allies disapprove of"
            },   
            {
                roll: [14,14],
                description: "Anxious. You have disadvantage on saving throws against being frightened. Additionally, once per day the DM can call on you to succeed a Wisdom saving throw (DC 14) or be frightened by a creature of the DM’s choosing for the next minute."
            },   
            {
                roll: [15,15],
                description: "Mute. Whenever you wish to speak allowed (including casting a spell that has verbal components) you must succeed on a Wisdom saving throw (DC 13) to do so."
            },   
            {
                roll: [16,16],
                description: "Narcolepsy. You have disadvantage on saving throws against sleeping or unconsciousness. Once per day the DM may call on you to succeed on a Constitution saving throw (DC 12) or fall unconscious for one minute or until you take damage or another creature spends their action trying to rouse you."
            },   
            {
                roll: [17,17],
                description: "Insomnia. You cannot take long rests and your short rests take 8 hours to complete"
            },   
            {
                roll: [18,18],
                description: "Homicidal. After each long rest you must pass a Wisdom saving throw (DC 14) or be overcome with the urge to end the life of a humanoid creature and you cannot benefit from another long rest until you do so."
            },   
            {
                roll: [19,19],
                description: "Suicidal. After each long rest you must pass a Wisdom saving throw (DC 12) or make an attempt to end your own life."
            },   
            {
                roll: [20,20],
                description: "Catatonia. You are unconscious for 10d10 years."
            },   

        ],
    }
}

export const CRITICAL_FUMBLE_LOOT = {
    CR_0_4: {
        roll: "1d100",
        collection : undefined,
        type : 0,
        table : [
            {
                roll : [1, 30],
                description: "5d6 CP",
                action: "5d6"
            },
            {
                roll : [31, 60],
                description: "4d6 SP",
                action: "4d6"
            },
            {
                roll : [61, 70],
                description: "3d6 EP",
                action: "3d6"
            },
            {
                roll : [71, 95],
                description: "3d6 GP",
                action: "3d6"
            },
            {
                roll : [96, 100],
                description: "1d6 PP",
                action: "1d6"
            },
        ]
    }
}


const CRITICAL_FUMBLE_CONFIG = [
    {
        module : "critical-fumble",
        key: "criticalTable",
        settings : {
            name : "Enables critical table",
            hint : "Allow for the critical table to be rolled on Natural 20s",
            scope : "world",
            config : true,
            default : true,
            type : Boolean,
            choices : undefined 
        }
    },
    {
        module : "critical-fumble",
        key: "fumbleTable",
        settings : {
            name : "Enables fumble table",
            hint : "Allow for the fumbe table to be rolled on Natural 1s",
            scope : "world",
            config : true,
            default : true,
            type : Boolean,
            choices : undefined 
        }
    }
]