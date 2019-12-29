///RollTable.collection.entities.find(function(table){ return table.data.name == "Critical-Fumble Critical"})
import { Dice5e } from "../../../systems/dnd5e/module/dice.js";
import {CRITICAL_FUMBLE_DESC} from "../config/config.js"

class CriticalFumble{
    constructor(){
        this.tables = [];
        this.init();
        this.findTable();
        this.debug = false;
        this.test = 20;
    }

    capitalizeFirst(name){
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    findTable(){
        Object.keys(CRITICAL_FUMBLE_DESC).forEach(async function(tableName){
            let tempTable = this.capitalizeFirst(tableName);
            let result = await RollTable.collection.entities.find(function(table){ return table.data.name == `Critical-Fumble ${tempTable}`})
            if(result == undefined)
                await this._generateTable(`Critical-Fumble ${tempTable}`, CRITICAL_FUMBLE_DESC[tableName]);
            else
                this.tables.push(result);
        }.bind(this))    
    }

    async _generateTable(tableName, data){
        let table = await RollTable.create({name: tableName, type: "base", folder: null, types: "base", formula: data.roll}, {displaySheet: false});
        for(const tableSlot of data.table){
            let flagInfo = {
                critical_fumble_audio : data.sound
            }
            let result = await table.createTableResult({img: data.img, collection: undefined,drawn: false, range: [tableSlot.roll[0], tableSlot.roll[1]] ,type: 0, weight: 1, text: tableSlot.description, flags: flagInfo});
        }
        this.tables.push(table);
    }

    init(){
        this.rollOverload();
        Hooks.on('createChatMessage', (app, html, data) => {
            try{
                this.validateData(app);
            }
            catch(e){
                console.log(`Error in CreateChat: ${e} at ${e.lineNumber}`);
            }
        })
    }

    validateData(app){
        if(!this._validString(app.data.flavor))
            return;
        let data = JSON.parse(app.data.roll)
        let type = data.parts[0].options.damageType;
        let roll = this._getRoll(data.parts[0].rolls);
        if(this.debug)
            roll = this.test;
        let table = this._validThreshold(roll, this.capitalizeFirst(type))
        if(table != undefined)
            this.rollTable(table);
    }

    _validString(string){
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

    _validThreshold(roll, type){
        if(roll == 1 && game.settings.get('critical-fumble', 'fumbleTable'))
            return this.tables.find(tableName => tableName.data.name === "Critical-Fumble Fumble");
        else if(roll == 20 && game.settings.get('critical-fumble', 'criticalTable'))
            return this.tables.find(tableName => tableName.data.name === `Critical-Fumble ${type}`);
        return undefined;      
    }

    async rollTable(table){
        let [roll, result] = table.roll();
        if (result !== null ) {
            await table.draw({roll, result});
        }
        if(game.settings.get('critical-fumble', 'sounds')){
            let audio = new Audio(result.flags["critical_fumble_audio"]) // Sound options?
            audio.play();
        }
    }

    rollOverload(){
        Dice5e.d20Roll = function({event, parts, data, template, title, speaker, flavor, advantage=true, situational=true,
            fastForward=true, critical=20, fumble=1, onClose, dialogOptions, }) {
            flavor = flavor || title;

            // Inner roll function
            let rollMode = game.settings.get("core", "rollMode");
            let roll = (parts, adv) => {
            if (adv === 1) {
            parts[0] = ["2d20kh"];
            flavor = `${title} (Advantage)`;
            }
            else if (adv === -1) {
            parts[0] = ["2d20kl"];
            flavor = `${title} (Disadvantage)`;
            }

            // Don't include situational bonus unless it is defined
            if (!data.bonus && parts.indexOf("@bonus") !== -1) parts.pop();

            // Execute the roll
            let roll = new Roll(parts.join(" + "), data).roll();

            // Flag critical thresholds
            let d20 = roll.parts[0];
            d20.options.critical = critical;
            d20.options.fumble = fumble;
            d20.options.damageType = data.item.damage.parts[0][data.item.damage.parts[0].length - 1] || 0; // This is the overload
            // Convert the roll to a chat message
            roll.toMessage({
                speaker: speaker,
                flavor: flavor,
                rollMode: rollMode,
                });
            };

            // Modify the roll and handle fast-forwarding
            parts = ["1d20"].concat(parts);
            if ( event.shiftKey ) return roll(parts, 0);
            else if ( event.altKey ) return roll(parts, 1);
            else if ( event.ctrlKey || event.metaKey ) return roll(parts, -1);
            else parts = parts.concat(["@bonus"]);

            // Render modal dialog
            template = template || "systems/dnd5e/templates/chat/roll-dialog.html";
            let dialogData = {
            formula: parts.join(" + "),
            data: data,
            rollMode: rollMode,
            rollModes: CONFIG.rollModes
            };
            let adv = 0;
            renderTemplate(template, dialogData).then(dlg => {
            new Dialog({
                title: title,
                content: dlg,
                buttons: {
                advantage: {
                    label: "Advantage",
                    callback: () => adv = 1
                },
                normal: {
                    label: "Normal",
                },
                disadvantage: {
                    label: "Disadvantage",
                    callback: () => adv = -1
                }
                },
                default: "normal",
                close: html => {
                if ( onClose ) onClose(html, parts, data);
                rollMode = html.find('[name="rollMode"]').val();
                data['bonus'] = html.find('[name="bonus"]').val();
                roll(parts, adv);
                }
            }, dialogOptions).render(true);
            });
        }
    }
}

Hooks.on("ready", () => {
    CriticalFumble = new CriticalFumble();
})

