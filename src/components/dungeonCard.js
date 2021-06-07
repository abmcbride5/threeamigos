export default function DungeonCard(props){
    return (
        <div className="dungeonCard">
            <h3>{props.name}</h3>
            <p><strong>Boss 1: </strong> {props.bossOne}</p>
            <p><strong>Boss 2: </strong>{props.bossTwo}</p>
            <p><strong>Mobs :</strong>{props.mobs}</p>
            <p><strong>Mechanics: </strong>{props.mechanics}</p>
            <p><strong>Special Drops: </strong>{props.drops}</p>

        </div>
    )
}