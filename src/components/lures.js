import Lure from './lure';

//images
import Bloody from '../fishImages/BloodyFlesh.png';
import Blue from '../fishImages/BlueScales.png';
import Eyeworm from '../fishImages/Eyeworm.png';
import FatFly from '../fishImages/FatFly.png';
import Feathers from '../fishImages/Feathers.png';
import LesserEye from '../fishImages/LesserEye.png';
import Minnow from '../fishImages/Minnow.png';
import Rotten from '../fishImages/RottenFinger.png';
import Shiny from '../fishImages/ShinyMetal.png';
import Tongue from '../fishImages/SmallTongue.png';
import Tooth from '../fishImages/SmallTooth.png';
import Snake from '../fishImages/SnakeBits.png';

import '../css/lures.css';

export default function Lures(){
    return (
        <div className="lures">
            <h3 className="lures__title">Bait</h3>
            <div className="bait">
            <Lure image={Bloody} alter="Bloody Flesh" name="Bloody Flesh" />
            <Lure image={Blue} alter="Blue Scales" name="Blue Scales" />
            <Lure image={Eyeworm} alter="Eyeworm" name="Eyeworm" />
            <Lure image={FatFly} alter="Fat Fly" name="Fat Fly" />
            <Lure image={Feathers} alter="Feathers" name="Feathers" />
            <Lure image={LesserEye} alter="Lesser Eye" name="Lesser Eye" />
            <Lure image={Minnow} alter="Large Minnow" name="Large Minnow" />
            <Lure image={Rotten} alter="Rotten Finger" name="Rotten Finger" />
            <Lure image={Shiny} alter="Shiny Metal" name="Shiny Metal" />
            <Lure image={Tongue} alter="Small Tongue" name="Small Tongue" />
            <Lure image={Tooth} alter="Small Tooth" name="Small Tooth" />
            <Lure image={Snake} alter="Snake Bits" name="Snake Bits" />
            </div>
        </div>
    )
}