import {CRITICAL_FUMBLE_LOOT} from "../config/config.js"

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
            await table.createTableResult({TEST: 1000, collection: undefined,drawn: false, range: [tableSlot.roll[0], tableSlot.roll[1]] ,type: 0, weight: 1, text: tableSlot.description}, {TEST: 1000})
        }
        this.tables.push(table);
    }

    init(){
        Hooks.on("updateToken", (token, id, actorData) => {
            try{
                this.validateData(token.actor.id, actorData)
            }catch( err ){
                console.error(`Error in Critical-Loot: ${err}`)
            }
            console.log(token.actor.id);
            // let actor = Actor.collection.get(id)
            // let cr = actor.data.data.details.cr 
            console.log(actorData.actorData.data.attributes.hp.value);
        })
    }
    
    validateData(actorId, quickData){
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
        return this.tables.find(tableName => tableName.data.name === `Critical-Fumble CR_0_4`);
    }

    isZeroHealth(actor){
        return actor.actorData.data.attributes.hp.value <= 0;
    }

    async rollTable(table){
        let [roll, result] = table.roll()
        console.log(roll);
        console.log(result); //result.text
        if (result !== null ) {
            await table.draw({roll, result});
        }   
    }

    _roll = (newRoll) => {
        let roll = new Roll(newRoll).roll();
        let speaker = "Critical Fumble"
        let flavor = "Rolls for coins"
        roll.toMessage({
          speaker: speaker,
          flavor: flavor,
          rollMode: rollMode,
          sound: "modules/critical-fumble/sounds/money_drop.mp3"
        });
    };

}

Hooks.on('init', () => {
    CONFIG.debug.hooks = true;
})

Hooks.on("ready", () => {
    CriticalLoot = new CriticalLoot();
})
