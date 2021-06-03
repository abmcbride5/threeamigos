import '../css/link.css';

export default function Link(props){

    return(
        <button 
        onClick={() => props.click(props.label)}
        className="link"
        >
            <strong>{props.label}</strong>
        </button>
    )
}