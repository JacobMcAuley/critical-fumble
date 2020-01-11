# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [X.Y.Z] - 2020-01-06
### Special Thanks
- This patch was inspired/review by Kakaroto from FVTT (https://github.com/kakaroto), a brilliant developer and a wonderful person in the FVTT community. Consider checking out his github or even his Patreon (https://www.patreon.com/kakaroto/). 

### Added
- Private roll options for GMs who would like to keep the table roll a secret.
- Tables are now placed into folders for added organization.
- A "coin pile" has been added to persist over game sessions. If an uneven amount of coins are distributed IE: Three PCs and 13SP, the remaining coin will sit in a 'pot' until the first possible moment in which all players can receive the same amount.
    EX: a monster is slain for 13SP. Given three players, each receives 4SP and one is stored in the SP coin pile. Later, another monster is slain for 15SP. Each player receives 4SP. The 2SP remaining is distributed to the SP coin pile. It is then determined automatically that 3SP {1SP from earlier and 2SP now}can be evenly distributed across the players, thus instead of 4SP for this encounter, 5SP is awarded instead.

### Changed
- Adjusted tables to now be included as compendium packs, opposed to programmatically generated.
- Critical hits are now based on Actor critical hit range and not just 20s.
- Reorganized the JS to now be more readable and improved cleanliness.
- Adjusted audio play to use FVTT's build in play.
- Changed how coins are given out. See "Coin Pile" in added.

### Fixed
- Fixed bug where the table would be rolled for each user in the game
- Fixed bug where other rolls(Observer, Assistant GM) were not accounted for in wealth distribution and thus less coins were given.
- Fixed bug where private rolls could be unintentionally blocked.

## [0.5.0] - 2019-12-28
### Added
- Critical Tables for both fumbles and successes
- Loot Drop Tables upon creature kill
- Uses targeting to determine creature drop tables.
- Intercepts attack rolls, and automatically rolls on table if either a 1 or 20 was rolled.
- Settings added to disable select features: Loot Tables, Critical Success, Critical Failure.