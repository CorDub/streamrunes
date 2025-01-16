import { useState } from 'react';
import './App.css'
import RuneList from "./RuneList";

function App() {
  const [currentRunes, setCurrentRunes] = useState([]);
  const potentialRunes = useState(["Mannaz",
    "Gebo",
    "Ansuz",
    "Othila",
    "Uruz",
    "Perth",
    "Nauthiz",
    "Inguz",
    "Eihwaz",
    "Algiz",
    "Fehu",
    "Wunjo",
    "Jera",
    "Kano",
    "Teiwaz",
    "Berkana",
    "Ehwaz",
    "Laguz",
    "Hagalaz",
    "Raido",
    "Thurisaz",
    "Dagaz",
    "Isa",
    "Sowelu",
    "Blank"])
  const runeSubtitle = useState(["The Self",
    'Partnership',
    "Signals",
    "Separation",
    "Strength",
    "Initiation",
    "Constraint",
    "Fertility",
    "Defense",
    "Protection",
    "Nourishment",
    "Joy",
    "Harvest",
    "Fire",
    "Warrior",
    "Growth",
    "Movement",
    "Water, Flow",
    "Disruption",
    "Journey",
    "Gateway",
    "Transformation",
    "Standstill",
    "Wholeness",
    "The Unknown"
  ])

  function dropRune () {
    if (currentRunes.length >= 3) {
      currentRunes.length = 0;
    }
    const random_int = Math.floor(Math.random() * 25);
    const newRune = [potentialRunes[0][random_int], runeSubtitle[0][random_int]];
    setCurrentRunes([...currentRunes, newRune]);
  }

  return (
    <div className="app-container">
      <div className="header-container">
        <img
          src={"src/assets/Words_of_destiny.svg"}
          alt="Words of Destiny"
          className="header-img"/>
      </div>
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
