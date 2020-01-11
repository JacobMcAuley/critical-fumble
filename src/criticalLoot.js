
import {CriticalFumbleBase} from "./criticalFumbleBase.js"

class CriticalLoot extends CriticalFumbleBase{
    constructor(){
        super();
        this.folderName = "Critical Fumble Loot";
        this.color = "red";
        this.compendiumName = "criticalfumbleloot";
        this.moduleScope = "critical-fumble";
        this.privateRollsSettingName = "privateLootRolls";
        this.init();
    }

    init(){
        super.init();
        Hooks.on("updateToken", this._onTokenUpdate.bind(this))
    }

    _onTokenUpdate(sceneData, sceneID, tokenData){
        let actor = game.actors.tokens[tokenData._id];
        if(!game.settings.get(this.moduleScope, 'lootTables'))
            return
        if(!actor || actor.isPC)
            return;
        if(!this.isValidTarget(actor))
            return
        if(!this.isTokenKilled(tokenData))
            return
        let table = this.getTableByCR(actor)
        if(table && game.user.isGM)
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
        let cr = getProperty(actor, "data.data.details.cr");
        if(cr >= 0 && cr <= 4)
            return this.tables.find(table => table.name === `Critical-Fumble CR_0_4`);
        else if(cr >= 5 && cr <= 10)
            return this.tables.find(table => table.name === `Critical-Fumble CR_5_10`);
        else if(cr >= 11 && cr <= 16)
            return this.tables.find(table => table.name === `Critical-Fumble CR_0_4`);
        else if(cr >= 17)
            return this.tables.find(table => table.name === `Critical-Fumble CR_17`);
        throw "Critical Fumble : Unexpected CR Value" // Helps diagnose possible errors.
    }

    isTokenKilled(tokenData){
        let hp = getProperty(tokenData, "actorData.data.attributes.hp.value");
        return hp !== undefined && hp <= 0;
    }

    async rollTable(table){
        let [roll, result] = table.roll()
        if(!result)
            throw "Critical Fumble : Undefined result error" // Helps diagnose possible errors.
        result.img = "modules/critical-fumble/icons/coins.svg";
        await this._customDraw({roll, result}, table);
        let parsedRolls = getProperty(result.flags, "critical_fumble_actions") || []; 
        this.handleRolls(parsedRolls); 
    }

    handleRolls(rolls){
        let coins = []
        
        for(let i = 0; i < rolls.length; ++i){
            let total = this._roll(rolls[i].roll, rolls[i].description, rolls[i].multiplier); 
            coins.push({coinAmount: total, coinType: rolls[i].description});
        }
        if(game.settings.get('critical-fumble', 'coinDistribution'))
            this._coinDistributePrompt(coins)
    }

    _roll(newRoll, coin, multiplier){
        let roll = new Roll(`${newRoll} * ${multiplier}`).roll();
        let rollMode = "roll";
        if(this.privateRollSetting)
            rollMode = "gmroll";
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
        new Dialog({
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
        }).render(true);
    }

    _coinToString(coins){
        let string = "";
        for(let i = 0; i < coins.length; ++i){
            if(i == coins.length - 1){
                string += `${coins[i].coinAmount}${coins[i].coinType}.`
            }
            else{
                string += `${coins[i].coinAmount}${coins[i].coinType} + `
            }
        }
        return string;
    }

    async _coinDistribute(coins){
        let users = game.users.entities;
        let totalPlayers = game.users.entities.reduce((acc, user) => {
            if(!user.isGM && user.character)
                acc += 1; 
            return acc;
        }, 0)

        for(let i = 0; i < coins.length; ++i){
            let coinsToDistribute = this._coinCalculator(coins[i].coinAmount, totalPlayers, coins[i].coinType); 
            for(let j = 0; j < users.length; ++j){
                if(users[j].character != undefined && users[j].isGM == false){
                    let currency = duplicate(users[j].character.data.data.currency);
                    currency[coins[i].coinType.toLowerCase()] += coinsToDistribute;
                    await users[j].character.update({"data.currency" : currency});
                }
            }
        }
    }

    _coinCalculator(coinAmount, totalPlayers, coinType){
        let coinRemainderKey = `coinPile${coinType}`;
        let coinPile = game.settings.get(this.moduleScope, coinRemainderKey) || 0;
        let coinDistrubution = Math.floor(coinAmount / totalPlayers);
        coinPile += coinAmount % totalPlayers;
        if(coinPile != 0 && coinPile >= totalPlayers){
            let coinsAddedPerPlayer = Math.floor(coinPile / totalPlayers);
            coinDistrubution += coinsAddedPerPlayer
            game.settings.set(this.moduleScope, coinRemainderKey, coinPile - (coinsAddedPerPlayer * totalPlayers))
        }
        else
            game.settings.set(this.moduleScope, coinRemainderKey, coinPile)
        return coinDistrubution;
    }
    
    get privateRollSetting(){
        return game.settings.get(this.moduleScope, this.privateRollsSettingName)
    }

}

Hooks.on("ready", () => {
    if(game.user.isGM)
        CriticalLoot = new CriticalLoot();
})
