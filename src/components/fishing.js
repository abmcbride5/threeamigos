import Fish from './fish';
import Lures from './lures';

import Axolotl from '../fishImages/Axolotl.png';
import Bass from '../fishImages/Bass.png';
import Catfish from '../fishImages/Catfish.png';
import Cloakfish from '../fishImages/Cloakfish.png';
import Clownfish from '../fishImages/Clownfish.png';
import Eel from '../fishImages/Eel.png';
import Minnow from '../fishImages/Minnow.png';
import Phoenix from '../fishImages/Phoenix.png';
import Ridgeback from '../fishImages/Ridgeback.png';
import Shark from '../fishImages/Shark.png';
import Spiralback from '../fishImages/Spiralback.png';
import Sunfish from '../fishImages/Sunfish.png';

import '../css/fishing.css';

export default function FishingComp(){
    return(
    <div className="fishing">
    <h1 className="fishing__title">Fishing</h1>
    <Lures />
    <div className="fishing__fish">
        <Fish 
            image={Axolotl}
            alter={Axolotl}
            name="Axolotl"
            lures="Small Tooth"
            />

        <Fish 
            image={Cloakfish}
            alter={Cloakfish}
            name="Cloak Fish"
            lures="Lesser Eye"
            />
             <Fish 
            image={Clownfish}
            alter={Clownfish}
            name="Clown Fish"
            lures="Bloody Flesh"
            />
             <Fish 
            image={Shark}
            alter={Shark}
            name="Dwarf Shark"
            lures="Eye Worm"
            />
             <Fish 
            image={Bass}
            alter={Bass}
            name="Green Bellied Bass"
            lures="Small Tooth, Small Tongue"
            />
             <Fish 
            image={Catfish}
            alter={Catfish}
            name="Katyharan Catfish"
            lures="Small Tooth"
            />
             <Fish 
            image={Minnow}
            alter={Minnow}
            name="Large Minnow"
            lures="Small Tooth, Small Tongue"
            />
             <Fish 
            image={Phoenix}
            alter={Phoenix}
            name="Phoenix Fish"
            lures="Shiny Metal"
            />
             <Fish 
            image={Ridgeback}
            alter={Ridgeback}
            name="Ridgeback Piranha"
            lures="Large Minnow"
            />
             <Fish 
            image={Eel}
            alter={Eel}
            name="Saddled Lion Eel"
            lures="Blue Scales"
            />
             <Fish 
            image={Spiralback}
            alter={Spiralback}
            name="Spiralback Snail"
            lures="Blue Scales"
            />
             <Fish 
            image={Sunfish}
            alter={Sunfish}
            name="Sunfish"
            lures="Lesser Eye, Small Tongue, Large Minnow"
            />

    </div>

    </div>
    
    )
}