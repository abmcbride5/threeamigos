import '../css/card.css';

export default function Card(props){

    return (
        <div className="card">
            <h1 className="card__title">{props.title}</h1>

            <p className="card__body">{props.info}</p>

        </div>
    )
}