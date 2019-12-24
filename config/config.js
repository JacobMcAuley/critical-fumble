const CRITICAL_FUMBLE_DESC =
{
    fumble: [
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
            roll: [80],
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
            roll: [100],
            description: "No!  Your attack ricochets back and you hit yourself. Apply the maximum critical damage to yourself as if you had hit your target."

        }
    ],
    bludgeoning: [
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
    piercing: [
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
    slashing: [
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