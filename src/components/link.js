import '../css/link.css';

export default function Link(props){

    return(
        <button 
        onClick={() => props.click(props.label)}
        className="link"
        >
            {props.label}
        </button>
    )
}