import {CriticalFumbleBase} from "./criticalFumbleBase.js"

class CriticalFumble extends CriticalFumbleBase{
    constructor(){
        super();
        this.folderName = "Critical Fumble";
        this.color = "green";
        this.compendiumName = "criticalfumble";
        this.moduleScope = "critical-fumble";
        this.privateRollsSettingName = "privateHitTableRolls";
        this.init();
    }

    init(){
        super.init();
        Hooks.on('createChatMessage', this.handleAttackRoll.bind(this));
    }

    handleAttackRoll(messages, data, options, id){
        if(!this.isAttackRoll(getProperty(data, "flavor")))
            return;
        let parsedRollData = JSON.parse(getProperty(data, "roll"))
        if(!parsedRollData)
            return;
        let type = parsedRollData.parts[0].options.damageType;
        let criticalRange = parsedRollData.parts[0].options.critical;
        let roll = this._getRoll(parsedRollData.parts[0].rolls);
        if(this.debug)
            roll = this.debugRoll;
        let table = this._validThreshold(roll, this.capitalizeFirst(type), criticalRange)
        if(table)
            this.rollTable(table);
    }

    isAttackRoll(string){
        if(!string)
            return false;
        if(string.includes("Attack"))
            return true;
    }

    _getRoll(rolls){
        for(let i = 0; i < rolls.length; ++i){
            if(rolls[i].discarded != true)
                return rolls[i].roll;
        }
        return -1;
    }

    _validThreshold(roll, type, criticalRange){
        if(roll == 1 && game.settings.get('critical-fumble', 'fumbleTable'))
            return this.tables.find(tableName => tableName.data.name === "Critical-Fumble Fumble");
        else if(roll >= criticalRange && game.settings.get('critical-fumble', 'criticalTable'))
            return this.tables.find(tableName => tableName.data.name === `Critical-Fumble ${type}`);
        return undefined;      
    }

    async rollTable(table){
        let [roll, result] = table.roll();
        if (result !== null ) {
            await this._customDraw({roll, result}, table);
        }
        if(game.settings.get('critical-fumble', 'sounds')){
            AudioHelper.play({src: result.flags["critical_fumble_audio"]}); 
        }
    }

    capitalizeFirst(name){
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    get privateRollSetting(){
        return game.settings.get(this.moduleScope, this.privateRollsSettingName)
    }

}

Hooks.on("ready", () => {
    if(game.user.isGM)
        CriticalFumble = new CriticalFumble();
})

