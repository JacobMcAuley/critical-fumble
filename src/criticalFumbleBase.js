import { Dice5e } from "../../../systems/dnd5e/module/dice.js";
import {CRITICAL_FUMBLE_CONFIG} from "../config/config.js"

export class CriticalFumbleBase{
    constructor(){
        this.debug = false;
        this.debugRoll = 20;
        this.folderID;
        this.tables = [];
    }

    init(){
        this.ensureTableImport();
    }

    async ensureTableImport(){
        this.folderID = await this.handleFolder(); 
        this.ensureTables();
    }

    async handleFolder(){
        let folder = Folder.collection.entities.find(folder => {return folder.name === this.folderName});
        if(!folder)
            return (await Folder.create({name : this.folderName, type: "RollTable", color: this.color, parent:null})).id;
        else   
            return folder.id;
    }

    async ensureTables(){
        let criticalCompendium = game.packs.find(compendium => compendium.metadata.name === this.compendiumName);
        await criticalCompendium.getIndex();
        criticalCompendium.index.forEach(async tableEntry => {
            let resultingTable = RollTable.collection.entities.find(function(table){ return table.name == tableEntry.name})
            if(!resultingTable)
                resultingTable = await this._generateTable(criticalCompendium, tableEntry.id);
            this.tables.push(resultingTable);
        });
    }

    async _generateTable(pack, entryID){
        let tableData = (await pack.getEntity(entryID)).data;
        tableData.folder = this.folderID;
        await RollTable.create(tableData, { displaySheet: false});
    }

    async _customDraw({roll=null, result=null}={}, table){
        const speaker = "Gamemaster";
        if ( roll === result === null ) {
          [roll, result] = this.roll();
        }
        if ( result === null ) return;
    
        let rollOption = game.settings.get("core", "rollMode");
        if(this.privateRollSetting)
            rollOption = "gmroll";
            
        await roll.toMessage({
            speaker: speaker,
            flavor: `Draws a result from ${table.name}`,
            rollMode: rollOption
        });
        
        await this._displayChatResult(result, speaker, table);
        return result;
    }

    _displayChatResult(result, speaker, table) {

        // Basic chat message data
        const chatData = {
          user: game.user._id,
          type: CONST.CHAT_MESSAGE_TYPES.OTHER,
          speaker: speaker
        };
    
        // Toggle default roll mode
        let rollMode = game.settings.get("core", "rollMode");
        if(this.privateRollSetting)
            rollMode = "gmroll";
        if ( ["gmroll", "blindroll"].includes(rollMode) ) chatData["whisper"] = ChatMessage.getWhisperIDs("GM");
        if ( rollMode === "blindroll" ) chatData["blind"] = true;
    
        // Toggle the result format
        let text = result.text;
        if ( result.type === CONST.TABLE_RESULT_TYPES.ENTITY ) {
          text = `@${result.collection}[${result.text}]`;
        }
    
        // Render the template
        chatData["content"] = `
        <div class="table-result" data-table-id="${table._id}" data-result-id="${result.id}">
            <img class="result-image" src="${result.img || CONFIG.RollTable.resultIcon}"/>
            <h4 class="result-text">${text}</h4>
        </div>`;
    
        // Create the chat message
        return ChatMessage.create(chatData);
    }


    static rollOverload(){
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
            try{
                let damageType = data.item.damage.parts[0][data.item.damage.parts[0].length - 1];
                d20.options.damageType = damageType;
            }
            catch{}

            
          // This is the overload
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

Hooks.on('init', () => {
    CRITICAL_FUMBLE_CONFIG.forEach(function(setting){
        game.settings.register(setting.module, setting.key, setting.settings);
    });
    CriticalFumbleBase.rollOverload();
})