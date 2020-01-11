export const CRITICAL_FUMBLE_CONFIG = [
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
    },
    {
        module : "critical-fumble",
        key: "sounds",
        settings : {
            name : "Enable Rolltable sounds",
            hint : "Allows for sounds to be played during table hits",
            scope : "world",
            config : true,
            default : true,
            type : Boolean,
            choices : undefined 
        }
    },
    {
        module : "critical-fumble",
        key: "lootTables",
        settings : {
            name : "Enable Loot tables",
            hint : "Allow for the Loot Table to be rolled on NPC death",
            scope : "world",
            config : true,
            default : true,
            type : Boolean,
            choices : undefined 
        }
    },
    {
        module : "critical-fumble",
        key: "coinDistribution",
        settings : {
            name : "Enable coin distribution",
            hint : "Enable the coin distribution prompt",
            scope : "world",
            config : true,
            default : true,
            type : Boolean,
            choices : undefined 
        }
    },
    {
        module : "critical-fumble",
        key: "privateHitTableRolls",
        settings : {
            name : "Enable private critical/fumble rolls",
            hint : "Enabling this will make all critical/fumbles rolls private",
            scope : "world",
            config : true,
            default : false,
            type : Boolean,
            choices : undefined 
        }
    },
    {
        module : "critical-fumble",
        key: "privateLootRolls",
        settings : {
            name : "Enable private loot rolls",
            hint : "Enabling this will make all loot rolls private",
            scope : "world",
            config : true,
            default : false,
            type : Boolean,
            choices : undefined 
        }
    },
    {
        module : "critical-fumble",
        key: "coinPileCP",
        settings : {
            name : "A coin pile for even distribution",
            hint : "Collects left over coins until they can be evenly distributed.",
            scope : "world",
            default : 0,
            type : Object,
            choices : undefined 
        }  
    },
    {
        module : "critical-fumble",
        key: "coinPileSP",
        settings : {
            name : "A coin pile for even distribution",
            hint : "Collects left over coins until they can be evenly distributed.",
            scope : "world",
            default : 0,
            type : Object,
            choices : undefined 
        }  
    },
    {
        module : "critical-fumble",
        key: "coinPileGP",
        settings : {
            name : "A coin pile for even distribution",
            hint : "Collects left over coins until they can be evenly distributed.",
            scope : "world",
            default : 0,
            type : Object,
            choices : undefined 
        }  
    },
    {
        module : "critical-fumble",
        key: "coinPilePP",
        settings : {
            name : "A coin pile for even distribution",
            hint : "Collects left over coins until they can be evenly distributed.",
            scope : "world",
            default : 0,
            type : Object,
            choices : undefined 
        }  
    },   
]