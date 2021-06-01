import '../css/tileCard.css';

export default function TileCard(props){

    return(
        <div className="tileCard">
            <img className="tileCard__image" src={props.image} alt={props.alter} />
            {/* <h1>{props.title}</h1> */}
            <p><strong>Tile: </strong>{props.tileLetter}</p>
            <p><strong>Musketeer: </strong>{props.musketeer}</p>
            <p><strong>Ranger: </strong>{props.ranger}</p>
            <p><strong>Runemage: </strong>{props.runemage}</p>
            <p><strong>Warrior: </strong>{props.warrior}</p>
            <p><strong>Paladin: </strong>{props.paladin}</p>
            <p><strong>Shaman: </strong>{props.shaman}</p>
            <p><strong>Bard: </strong>{props.bard}</p>
            <p><strong>Scoundrel: </strong>{props.scoundrel}</p>
            <p><strong>Other effects: </strong>{props.other}</p>
            <p ><strong>Ore needed: </strong>{props.ore}</p>
        </div>
    )
}