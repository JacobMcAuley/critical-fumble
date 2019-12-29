import {CRITICAL_FUMBLE_LOOT} from "../config/config.js"
import {CRITICAL_FUMBLE_CONFIG} from "../config/config.js"


class CriticalLoot{
    constructor(){
        this.tables = [];
        this.init();
        this.findTable();
    }

    findTable(){
        Object.keys(CRITICAL_FUMBLE_LOOT).forEach(async function(tableName){
            let tempTable = tableName.toUpperCase();
            let result = await RollTable.collection.entities.find(function(table){ return table.data.name == `Critical-Fumble ${tempTable}`})
            if(result == undefined){ 
                await this._generateTable(`Critical-Fumble ${tempTable}`, CRITICAL_FUMBLE_LOOT[tableName]);
            }
            else{
                this.tables.push(result);
            }
        }.bind(this))    
    }

    async _generateTable(tableName, data){
        let table = await RollTable.create({name: tableName, type: "base", folder: null, types: "base", formula: data.roll}, {displaySheet: false});
        for(const tableSlot of data.table){
            let flagData = {
                critical_fumble_actions : tableSlot.action
            }
            await table.createTableResult({collection: undefined,drawn: false, range: [tableSlot.roll[0], tableSlot.roll[1]] ,type: 0, weight: 1, text: tableSlot.description, flags: flagData})
        }
        this.tables.push(table);
    }

    init(){
        Hooks.on("updateToken", (token, id, actorData) => {
            try{
                this.validateData(token.actor.id, actorData)
            }catch(e){
                console.log(`Error in CreateChat: ${e} at ${e.lineNumber}`);
            }
        })
    }
    
    validateData(actorId, quickData){
        if(!game.settings.get('critical-fumble', 'lootTables'))
            return
        const actor = Actor.collection.get(actorId);
        if(actor.isPC)
            return;
        if(!this.isValidTarget(actor))
            return
        if(!this.isZeroHealth(quickData))
            return
        let table = this.getTableByCR(actor)
        if(table != undefined)
            this.rollTable(table);
    }

    
    isValidTarget(actor){
        let targets = []
        game.users.entities.forEach(user => { user.targets.forEach(target => {targets.push(target)}) })
        for(let i = 0; i < targets.length; ++i){
            if(targets[i].actor.id == actor.id)
                return true;
        }
        return false;
    }

    getTableByCR(actor){
        let cr = actor.data.data.details.cr;
        if(cr >= 0 && cr <= 4)
            return this.tables.find(tableName => tableName.data.name === `Critical-Fumble CR_0_4`);
        else if(cr >= 5 && cr <= 10)
            return this.tables.find(tableName => tableName.data.name === `Critical-Fumble CR_5_10`);
        else if(cr >= 11 && cr <= 16)
            return this.tables.find(tableName => tableName.data.name === `Critical-Fumble CR_0_4`);
        else if(cr >= 17)
            return this.tables.find(tableName => tableName.data.name === `Critical-Fumble CR_17`);
        else   
            throw("Unexpected CR");
    }

    isZeroHealth(actor){
        return actor.actorData.data.attributes.hp.value <= 0;
    }

    async rollTable(table){
        let [roll, result] = table.roll()
        result.img = "modules/critical-fumble/icons/coins.svg";
        if (result !== null ) {
            await table.draw({roll, result});
        }   
        let parsedRolls = result.flags['critical_fumble_actions'];
        this.handleRolls(parsedRolls); 
    }

    handleRolls(rolls){
        let coins = []
        
        for(let i = 0; i < rolls.length; ++i){
            let roll = this._roll(rolls[i].roll, rolls[i].description, rolls[i].multiplier); 
            coins.push({coinAmount: roll, cointType: rolls[i].description});
        }
        if(game.settings.get('critical-fumble', 'coinDistribution'))
            this._coinDistributePrompt(coins)
    }

    _roll = (newRoll, coin, multiplier) => {
        let roll = new Roll(`${newRoll} * ${multiplier}`).roll();
        let rollMode = "roll";
        let speaker = "Critical Fumble";
        let flavor = `Rolls for ${coin}`
        let sound = undefined;
        if(game.settings.get('critical-fumble', 'sounds'))
            sound = "modules/critical-fumble/sounds/money_drop.wav"

        roll.toMessage({
          speaker: speaker,
          flavor: flavor,
          rollMode: rollMode,
          sound: sound
        });

        return roll.total;
    };
    
    _coinDistributePrompt(coins){
        let amountDisplay = this._coinToString(coins);
        let d = new Dialog({
            title: "Distribute Coins?",
            content: `<p>Would you like to distribute ${amountDisplay} to all active players?</p>`,
            buttons: {
             yes: {
              icon: '<i class="fas fa-check"></i>',
              label: "Yes, distribute the coins.",
              callback: () => this._coinDistribute(coins)
             },
             no: {
              icon: '<i class="fas fa-times"></i>',
              label: "No, I will handle it later.",
              callback: () => {}
             }
            },
            default: "yes",
            close: () => {}
           });
           d.render(true);
    }

    _coinToString(coins){
        let string = "";
        for(let i = 0; i < coins.length; ++i){
            if(i == coins.length - 1){
                string += `${coins[i].coinAmount}${coins[i].cointType}.`
            }
            else{
                string += `${coins[i].coinAmount}${coins[i].cointType} +`
            }
            
        }
        return string;
    }

    _coinDistribute(coins){
        let users = game.users.entities;
        var length = game.users.entities.length - 1;
        for(let i = 0; i < coins.length; ++i){
            users.forEach(async user => {
                if(user.character != undefined && user.isGM == false){
                    let currency = duplicate(user.character.data.data.currency);
                    currency[coins[i].cointType.toLowerCase()] += Math.ceil(parseInt(coins[i].coinAmount / length));
                    await user.character.update({"data.currency" : currency});
                }
            })
        }
        return;
    }

}

Hooks.on('init', () => {
    CRITICAL_FUMBLE_CONFIG.forEach(function(setting){
        game.settings.register(setting.module, setting.key, setting.settings);
    });
})

Hooks.on("ready", () => {
    CriticalLoot = new CriticalLoot();
})
