# Critical Fumble
Do you find yourself forgetting to roll on the critical hit table? The critical fumble table?
Do you find yourself forgetting to roll that pesky loot table after each monster dies?

Then you're like me and this mod is what you need!
Critical-fumble will automatically roll on the critical hit tables in the event of a critical hit! Each hit rolls a special table depending on the type of damage.

Additionally, every time a *targeted* monster is felled by your players, the CR table is rolled! 
To further your convience, the coins dropped can be automatically distributed to your players. This option can be ignored though! 

## Features:
The following features are offered by Critical Fumble. Any feature marked with a **(T/F)** can be disabled or enabled.
1. Critical hits on 20s for any of the values in the [Critical Tables](##Tables) **(T/F)** 
2. Critical fumbles on 1s **(T/F)**
3. Audio based off the damage type on critical hits **(T/F)**
4. LootTable rolling on target creature death **(T/F)**
5. LootTable distribution of wealth to active PCs **(T/F)**

## Installation:

To install Critical-Fumble, do the following:

1. [Download the zip file](https://github.com/JacobMcAuley/critical-fumble/archive/master.zip)
2. Extract the folder to your 'public/modules' in Foundry VTT.
3. Reload your application.

Auto-Installation Instructions:

1. Copy this link: https://github.com/JacobMcAuley/critical-fumble/raw/master/module.json
2. Open FoundryVTT and navigate to Add-On Modules
3. Select "Install Module" and paste link into textbox.
4. Click "Install" and watch as the mod is installed
5. Inside of your FVTT game world, navigate the the gears in the top right corner.
6. Select "Manage Modules" and enable Critical Fumble

## Usage

To use Critical-Fumble make sure you've installed the mod using the instructions [here](##Installation).
Critical fumble should be loaded and ready to go upon enabling. To verify, simply check to see if the RollTables were successfully imported. (**NOTE:** You may find that the values display an incorrect number of entries in the table. This is okay and can be disregarded).

**Using Criticals**
To use Critical hits, wait until a player rolls a 1 or a 20 and the table will be automatically rolled for you!
For spells, be sure that a ranged spell attack is set up, otherwise no table will be rolled.

**Using the LootTable**
Creatures (NPCS) that have a CR level and are targeted using the targeting system will result in a roll on their corresponding CR table once they hit 0hp or lower.


## Tables
The follow tables are included within the module and imported upon start:

**Criticals**
1. Bludgeon
2. Piercing
3. Slashing
4. Acid
5. Cold
6. Fire
7. Force
8. Lightning
9. Necrotic
10. Poison
11. Psychic
12. Radiant
13. Thunder

**Special Tables**
1. Major Injuries
2. Minor Injuries
3. Insanity

**Loot**
1. CR 0-4
2. CR 5-10
3. CR 11-16
4. CR 17+

**Fumbles**
1. Fumble

Currently, there is no table for fumbles on spells. All fumbles share the same Critical-Fumble Fumble table. If anyone is interested in creating a relatively balanced table and would like to incorporate fumbles on spells, feel free to contact me through Discord found through the Feedback section below.


### Table modifications?

If you would like to adjust the table, you should be able to in most instances! 

**Simple/Text:**
If it the desired modification is quick, such as a text change, all that you need to do is modify it directly in FVTT. Changing the corresponding text will result in the expect behavior.

Changing images, sounds, or loot tables requires additional modificaiton within the files themselves. NOTE: Loot tables have slightly different requirements. So if you want to change the loot table, please refer to the **Loot Table** section.

**Sound:**
If you wish to change the sounds of the critical hits, simply add your desired sound file to the **/sounds** folder and adjust the config.js variable of **CRITICAL_FUMBLE_DESC.DESIRED_TYPE_HERE.sound** to whatever sound path you desire.

**Icons:**
If you wish to change the icons of the critical hits, simply add your desired icon file to the **/icons** folder and adjust the config.json variable of **CRITICAL_FUMBLE_DESC.DESIRED_TYPE_HERE.img** to whatever icon path you desire.

**Loot Tables:**

Modification of Loot Tables follows a differing method, and it more difficult to adjust than the previous section

**Coin Values:**
To adjust the values received you must navigate to the config.js and modify **CRITICAL_FUMBLE_LOOT**. Look for the CR range you wish to desire and modify based off the following description
```
    CR : {
        roll: "1d100",
        collection : undefined, // Ignore
        type : 0, // Ignore
        table : [
            {
                roll : [1, 15], // Range of success
                description: "2d6 EP * 1000 + 8d6 GP * 100", // Text description that is displayed when rolled
                action: [ // Nested actions that will roll for individual values. 
                    { // This is 2d6 * 1000, the EP is to denote what coin when depositing
                        roll: "2d6", 
                        description: "EP",
                        multiplier: 1000
                    },
                    { // If you need more than one roll, this is how you add it.
                        roll: "8d6",
                        description: "GP",
                        multiplier: 100
                    }                    
                ]
            },
            ... // More values
        ]
    }
```

**Sounds/Imgs for LootTable**
To adjust the sound or image or the LootTable, look under _roll() and rollTable() for any modification of sound or image. Replace as desired.
Note: All values share one sound/image in LootTable.

## Attributions

Sound effects obtained from [Zapsplat](https://www.zapsplat.com)
SVGs obtained from [FontAwesome](https://fontawesome.com). You can find the license by clicking [here](https://fontawesome.com/license)
Icon-Sword made by [freepik](https://www.flaticon.com/authors/freepik) from [flaticon](https://www.flaticon.com/)
Icon-dagger made by [srip](https://www.flaticon.com/authors/srip) from [flaticon](https://www.flaticon.com/)
Icon-psychic made by [Smashicons](https://www.flaticon.com/authors/Smashicons) from [flaticon](https://www.flaticon.com/)
Critical tables made by [Benjamin Huffman](https://sterlingvermin.files.wordpress.com/2016/09/critical-hits-revisited.pdf)

## Feedback

This module is still in the testing phase and is likely to have unexpect bugs or weird interactions. Please remember to back up your systems before trying new modules. If any gamebreaking or unexpected behavior occurs, please contact me on Discord through PM or the FVTT (preferred) with the name JacobMcAuley#3461. Thank you for trying out Critical-Fumble!


# Donations
If you liked this project and want to support future ones, consider donating! 
This module and all previous and future modules, as always, will be free to use an download. Any donations are warmly received and appreciated!
[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=723SW7WMD8YR6&item_name=Thank+you+for+your+tip%21&currency_code=USD&source=url)