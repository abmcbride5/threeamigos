import Link from './link';

import '../css/header.css';

export default function  Header(props){

    return (
        <div className="header">
            <Link click={props.click} label="Three Amigos" />
            <Link click={props.click} label="Dungeons" />
            <Link click={props.click} label="Tiles" />
            <Link click={props.click} label="Fishing" />
            <Link click={props.click} label="Sources" />
            
        </div>
    )
}