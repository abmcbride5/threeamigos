import Source from './source';

import '../css/sources.css';

export default function SourcesComp(){

    return(
        
        <div className="sources">
            <h1>Sources</h1>
            <p><strong>All sources used to supply info porvided by this site are listed below:</strong></p>
            <h3>Tiles: </h3>
           <Source link="https://orbus.online/index.php?title=Tiles" />
           <Source link="https://orbusfreepress.org/index.php/Artificing" />
           <h3>Fishing: </h3>
           <Source link="https://orbusfreepress.org/index.php/Fishing" />
           <h3>Dungeons: </h3>
           <Source link="https://orbusvr.fandom.com/wiki/Dungeons" />
           <Source link="https://orbusfreepress.org/index.php/Dungeons" />
           <Source link="https://orbus.online/index.php?title=Shard_Dungeons#Modifiers" />
        </div>
    )
}