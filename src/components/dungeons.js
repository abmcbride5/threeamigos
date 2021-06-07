import DungeonCard from './dungeonCard';

import '../css/dungeons.css';

export default function DungeonsComp(){
    return(
    <div className="dungeons">
        
        <h1>Dungeons</h1>
        <div className="locations">
            <DungeonCard
            name="Broken Halls"
            bossOne="Minotaur"
            bossTwo="Gorgon"
            />
             <DungeonCard
            name="Airship"
            bossOne="Chaos Purity"
            bossTwo="Chaos Hunter"
            />
             <DungeonCard
            name="Sewers"
            bossOne="Mutated Rat"
            bossTwo="Sewer Slime"
            />
             <DungeonCard
            name="Crypt"
            bossOne="Dungeon Troll"
            bossTwo="Lich King"
            />
             <DungeonCard
            name="Abandoned Mines"
            bossOne="Dovregubben"
            bossTwo="Gate Keeper"
            />
             <DungeonCard
            name="Ancient Temple"
            bossOne="Ancient Guardian"
            bossTwo="Mist Keeper"
            />
        </div>
        <div className="shards">
            <h2>Shard Levels</h2>
            <p>+1 gear shards level 1 to 3</p>
            <p>+2 gear shards level 4 to 6</p>
            <p>+3 gear shards level 7 to 9</p>
            <p>+4 gear shards level 10 to 12</p>
            <p>+5 gear shards level 13 to 15</p>
            <p>+6 legendary gear shards level 15</p>
        </div>
        <div className="modifiers">
            <h2>Minor Mutations</h2>
            <p><strong></strong></p>

        </div>
    </div>
    
    )
}