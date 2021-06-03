import '../css/fish.css';

export default function fish(props){
    return (
        <div className="fish">
            <div>
            <img className="fish__image" src={props.image} alt={props.alter} />
            </div>
            <p><strong>Name: </strong>{props.name}</p>
            <p><strong>Lures: </strong>{props.lures}</p>
            <p><strong>Locations: </strong>{props.locations}</p>
            <p><strong>Uses: </strong>{props.uses}</p>   
        </div>
    )
}