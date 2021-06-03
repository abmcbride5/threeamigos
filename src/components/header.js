import Link from './link';

import '../css/header.css';

export default function  Header(props){

    const handleTempClick = (label) => {
        alert(`${label} COMING SOON!!!`)
    }

    return (
        <div className="header">
            <Link click={props.click} label="Three Amigos" />
            <Link click={props.click} label="Dungeons" />
            <Link click={props.click} label="Tiles" />
            <Link click={props.click} label="Raids" />
            <Link click={props.click} label="Fishing" />
            <Link click={props.click} label="Monsters" />
            <Link click={handleTempClick} label="Calendar" />
            <Link click={handleTempClick} label="Profile" />
            <Link click={props.click} label="Sources" />
            
        </div>
    )
}