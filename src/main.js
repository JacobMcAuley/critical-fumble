///RollTable.collection.entities.find(function(table){ return table.data.name == "Critical-Fumble Critical"})

class CriticalFumble{
    constructor(){
        this.tables = 0 //this.findTable();
        this.init()
    }

    async findTable(){
        let critical = RollTable.collection.entities.find(function(table){ return table.data.name == "Critical-Fumble Critical"});
        let fumble = RollTable.collection.entities.find(function(table){ return table.data.name == "Critical-Fumble Fumble"});

        if(!critical)
            critical = await this._generateCritical("Critical-Fumble Critical", );
        if(!fumble)
            fumble = await this._generateFumble("Critical-Fumble Fumble", );

        
        return [critical, fumble];
    }

    async _generateTable(tableName, itemDescriptions){
        let table = await RollTable.create({name: "Critical-Fumble Fumble", type: "base", folder: null, types: "base", formula: "1d100"}, {displaySheet: false});
        let previous = 1;
        let counter = 1
        let mod = 0
        for(let i = 1; i <= 30; ++i){
            switch(counter){
                case 1:
                    mod = 4;
                    break;
                case 2:
                    mod = 3;
                    break;
                case 3:
                    mod = 0;
                    break;
            }
            await table.createTableResult({ collection: undefined,drawn: false, range: [previous, previous+mod],type: 0,weight: 1,text: itemDescriptions[i-1]})
            previous = previous+mod+1;
            counter = (++counter == 4) ? counter = 1 : counter++;
        }
    }

    init(){
        Hooks.on('createChatMessage', (app, html, data) => {
            try{
                this.validateData(app);
            }
            catch(e){
                console.log(`Nope: ${e}`);
            }
        })
    }

    validateData(app){
        console.log(app);
        if(!this._validString(app.data.flavor))
            return;
        let roll = JSON.parse(app.data.roll)
        let index = this._validThreshold()
        console.log("Success!")
    }

    _validString(string){
        if(!string)
            return false;
        if(string.includes("Attack"))
            return true;

    }

    _validThreshold(value){
        return true;
    }

    async roll(index){
        let [roll, result] = this.table[index].roll()
        if (result !== null ) {
            await this.table[index].draw({roll, result});
        }
    }
}

Hooks.on("ready", () => {
    CriticalFumble = new CriticalFumble();
    /*
    let [roll, result] = RollTable.collection.entities[0].roll()
    if ( result !== null ) {
        await RollTable.collection.entities[0].draw({roll, result});
    }
    */
})

