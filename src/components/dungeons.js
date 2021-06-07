import DungeonCard from './dungeonCard';

export default function DungeonsComp(){
    return(
    <div className="dungeons">
    <h1>Dungeons</h1>
        <DungeonCard
         name="Broken Halls"
         bossOne="Minator"
         bossTwo="Gorgon"
         mobs="stafrushers..."
         />
    </div>
    
    )
}