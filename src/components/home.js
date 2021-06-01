import Card from './card';

import '../css/home.css';

export default function Home(){
    return(
        <div className="home">
      <Card 
        title="Dungeons" 
        info="This section contains information on the overall mechanics for each dungeon, as well as for individual classes" 
      />
      <Card 
        title="Tile Sets" 
        info="This section contains information on tiles for each class" 
      />
      <Card 
        title="Raids" 
        info="This section contains information on the overall mechanics for the raid boss" 
      />
      <Card 
        title="Fishing" 
        info="This section contains information on fishing lures and the location of the different types of fish" 
      />
      <Card 
        title="Monsters" 
        info="This section contains information on each of the monsters in throughout the world. What they look like and any known mechanics" 
      />
      </div>

    )
}