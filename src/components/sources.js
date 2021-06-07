import Source from './source';

import '../css/sources.css';

export default function SourcesComp(){

    return(
        
        <div className="sources">
            <h1>Sources</h1>
            <p><strong>All sources used to supply info porvided by this site are listed below:</strong></p>
           <Source link="https://orbus.online/index.php?title=Tiles" />
           <Source link="https://orbusfreepress.org/index.php/Artificing" />
           <Source link="https://orbusfreepress.org/index.php/Fishing" />
           <Source link="https://orbusvr.fandom.com/wiki/Dungeons" />
           <Source link="https://orbusfreepress.org/index.php/Dungeons" />
        </div>
    )
}