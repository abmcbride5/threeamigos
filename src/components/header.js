import Link from './link';

import '../css/header.css';

export default function  Header(props){

    const handleTempClick = (label) => {
        alert(`${label} COMING SOON!!!`)
    }

    return (
        <div className="header">
            <Link click={handleTempClick} label="Dungeons" />
            <Link click={props.click} label="Tiles" />
            <Link click={handleTempClick} label="Raids" />
            <Link click={handleTempClick} label="Fishing" />
            <Link click={handleTempClick} label="Monsters" />
            <Link click={handleTempClick} label="Calendar" />
            <Link click={handleTempClick} label="Profile" />
            <Link click={props.click} label="Sources" />
            
        </div>
    )
}