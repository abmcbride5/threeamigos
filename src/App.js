import React, { useState } from 'react';

import Header from './components/header';
import DungeonsComp from './components/dungeons';
import TilesComp from './components/tiles';
import RaidsComp from './components/raids';
import FishingComp from './components/fishing';
import MonstersComp from './components/monsters'; 
import SourcesComp from './components/sources';
import ThreeAmigos from './components/three';

import './css/App.css';


function App() {
  // const [data, setData] = useState(null);
  const [Dungeons, setDungeons] = useState(false);
  const [Tiles, setTiles] = useState(false);
  const [Raids, setRaids] = useState(false);
  const [Fishing, setFishing] = useState(false);
  const [Monsters, setMonsters] = useState(false);
  const [Sources, setSources] = useState(false);
  const [three, setThree] = useState(true);


  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

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

    if (tab === "Raids"){
      setRaids(true);
    } else {
      setRaids(false);
    }

    if (tab === "Fishing"){
      setFishing(true);
    } else {
      setFishing(false);
    }

    if (tab === "Monsters"){
      setMonsters(true);
    } else {
      setMonsters(false);
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

  console.log(Monsters)

  return (
    <div className="app">
      <Header click={handleClick} />
      <div className="app__body">
      {Dungeons && <DungeonsComp />}
      {Tiles && <TilesComp />}
      {Raids && <RaidsComp />}
      {Fishing && <FishingComp />}
      {Monsters && <MonstersComp />}
      {Sources && <SourcesComp />}
      {three && <ThreeAmigos />}
      
      {}
      </div>

      <div className="app__footer"></div>
    </div>
  );
}

export default App;
