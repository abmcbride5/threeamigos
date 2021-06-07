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
            <div className="minor">
            <p><strong>Aggressive: </strong>Enemy basic attacks happen 25% faster. </p>
            <p><strong>Mobile: </strong>Enemy movement speed is increased by 100%.</p>
            <p><strong>Alert: </strong>The aggro radius of all monsters is doubled.</p>
            <p><strong>Indecisive: </strong>Threat generating skills are not as effective (harder to keep aggro).</p>
            <p><strong>Dumbfounded: </strong>Slower ultimate generation.</p>
            <p><strong>Unprepared: </strong>Your first attack in combat does increased damage (About 25% damage 
                increase in shards), but your subsequent attacks against them are reduced by 10% for mobs and bosses.</p>
            <p><strong>Thick Skinned: </strong>Mobs have additional resistance to Physical damage.</p>
            <p><strong>Strong Willed: </strong>Mobs have additional resistance to Magical damage.</p>
            </div>
            
            <h2>Major Mutations</h2>
            <div className="major">
            <p><strong>Vindictive: </strong>Enemies will give a buff to nearby allies on death, increasing their damage 
                done by 10% (stacks up to 5 times).</p>
            <p><strong>Spores: </strong>When an enemy is engaged in combat, it will randomly spawn an exploding mushroom 
                nearby which must be killed quickly, or risk exploding in a large area, poisoning nearby players.</p>
            <p><strong>Unstable: </strong>Enemies will explode on death, dealing damage to nearby creatures and players.</p>
            <p><strong>Sickness: </strong>There is a chance every time that you attack an enemy to receive a debuff which 
                causes you to receive reduced healing. Stacks up to 5 times.</p>
            <p><strong>Last Stand: </strong>When enemies reach 30% health they enrage, dealing 100% additional damage on all 
                attacks</p>
            <p><strong>Discontent : </strong>When enemies die they leave behind a pool that deals damage to all players that 
                step into it, which disappears after a bit.</p>
            <p><strong>Power Strikes: </strong>Increased damage from projectiles</p>
            </div>
            <div className="ten">
            <h2>Level 10 shard Mutation</h2>
            <p><strong>Reincarnation: </strong>Killed enemies have a small chance of immediately resurrecting.</p>
            </div>
        </div>
    </div>
    
    )
}