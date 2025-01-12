import { useState } from 'react';
import './App.css'
import RuneList from "./RuneList";

function App() {
  const [currentRunes, setCurrentRunes] = useState([]);
  const potentialRunes = useState(["Mannaz, The Self",
    "Gebo, A Gift",
    "Ansuz, The Messenger",
    "Othila, Separation",
    "Uruz, The Wild Ox",
    "Perth, A Secret Matter",
    "Nauthiz, Pain",
    "Inguz, New Beginnings",
    "Eihwaz, Defense",
    "Algiz, Protection",
    "Fehu, Nourishment",
    "Wunjo, Joy",
    "Jera, Harvest",
    "Kano, Fire",
    "Teiwaz, The Warrior",
    "Berkana, Rebirth",
    "Ehwaz, Movement",
    "Laguz, Water",
    "Hagalaz, Disruption",
    "Raido, Journey",
    "Thurisaz, Gateway",
    "Dagaz, Transformation",
    "Isa, Withdrawal",
    "Sowelu, Wholeness",
    "Blank, The Unknowable"])

  function dropRune () {
    if (currentRunes.length >= 3) {
      currentRunes.length = 0;
    }
    console.log(currentRunes.length);
    const random_int = Math.floor(Math.random() * 25);
    const newRune = potentialRunes[0][random_int];
    setCurrentRunes([...currentRunes, newRune]);
  }

  return (
    <div className="app-container">
      <div className="rune-container">
        <RuneList
        currentRunes = {currentRunes}/>
      </div>
      <div className="button-cont">
        <button className="button" onClick={dropRune}>Drop a rune yo</button>
      </div>
    </div>
  )
}

export default App;
