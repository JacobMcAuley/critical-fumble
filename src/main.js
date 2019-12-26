///RollTable.collection.entities.find(function(table){ return table.data.name == "Critical-Fumble Critical"})

class CriticalFumble{
    constructor(){
        this.tables = 0 //this.findTable();
        this.init()
    }

    async findTable(){

        let critical = RollTable.collection.entities.find(function(table){ return table.data.name == "Critical-Fumble Critical"});
        let fumble = 
        Object.keys(CRITICAL_FUMBLE_DESC).forEach(function(tableName){
            let tempTable = tableName.charAt(0).toUpperCase()
            if(!RollTable.collection.entities.find(function(table){ return table.data.name == `Critical-Fumble ${tempTable}`})){ // Doesn't return a value
                await this._generateTable(`Critical-Fumble ${tempTable}`, CRITICAL_FUMBLE_DESC[tableName]);
            }
        })        
        return [critical, fumble];
    }

    async _generateTable(tableName, data){
        let table = await RollTable.create({name: tableName, type: "base", folder: null, types: "base", formula: "1d100"}, {displaySheet: false});

        await table.createTableResult({ collection: undefined,drawn: false, range: [NUM1, NUM2],type: 0,weight: 1,text: itemDescriptions[i-1]})
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

