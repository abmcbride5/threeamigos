import '../css/lure.css';

export default function Lure(props){
    return (
        <div className="lure">
            <img className="lure__image" src={props.image} alt={props.alter} />
            <p>{props.name}</p>
        </div>
    )
}