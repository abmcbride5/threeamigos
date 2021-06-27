import React, { useState } from 'react';

import Navigation from './components/navigation';
import DungeonsComp from './components/dungeons';
import TilesComp from './components/tiles';
import FishingComp from './components/fishing';
import SourcesComp from './components/sources';
import ThreeAmigos from './components/three';

import './css/App.css';


function App() {
  // const [data, setData] = useState(null);
  const [Dungeons, setDungeons] = useState(false);
  const [Tiles, setTiles] = useState(false);
  const [Fishing, setFishing] = useState(false);
  const [Sources, setSources] = useState(false);
  const [three, setThree] = useState(true);

  const handleClick = (tab) => {

    if (tab === "Dungeons"){
      setDungeons(true);
    } else {
      setDungeons(false);
    }

    if (tab === "Tiles"){
      setTiles(true);
    } else {
      setTiles(false);
    }

    if (tab === "Fishing"){
      setFishing(true);
    } else {
      setFishing(false);
    }

    if (tab === "Sources"){
      setSources(true);
    } else {
      setSources(false);
    }

    if (tab === "Three Amigos"){
      setThree(true);
    } else {
      setThree(false);
    }
    
  }

  return (
    <div className="app">
      <Navigation click={handleClick} />
      <div className="app__body">
      {Dungeons && <DungeonsComp />}
      {Tiles && <TilesComp />}
      {Fishing && <FishingComp />}
      {Sources && <SourcesComp />}
      {three && <ThreeAmigos />}
      
      {}
      </div>

      <div className="app__footer"></div>
    </div>
  );
}

export default App;
