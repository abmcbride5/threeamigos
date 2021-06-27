import Link from './link';

import '../css/navigation.css';

export default function  Navigation(props){

    return (
        <div className="navigation">
            <Link click={props.click} label="Three Amigos" />
            <Link click={props.click} label="Dungeons" />
            <Link click={props.click} label="Tiles" />
            <Link click={props.click} label="Fishing" />
            <Link click={props.click} label="Sources" />
            
        </div>
    )
}