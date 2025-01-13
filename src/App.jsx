import { useState } from 'react';
import './App.css'
import RuneList from "./RuneList";

function App() {
  const [currentRunes, setCurrentRunes] = useState([]);
  const potentialRunes = useState(["Mannaz, The Self",
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
    'A Gift',
    "The Messenger",
    "Separation",
    "The Wild Ox",
    "A Secret Matter",
    "Pain",
    "New Beginnings",
    "Defense",
    "Protection",
    "Nourishment",
    "Joy",
    "Harvest",
    "Fire",
    "The Warrior",
    "Rebirth",
    "Movement",
    "Water",
    "Disruption",
    "Journey",
    "Gateway",
    "Transformation",
    "Withdrawal",
    "Wholeness",
    "The Unknowable"
  ])

  function dropRune () {
    if (currentRunes.length >= 3) {
      currentRunes.length = 0;
    }
    console.log(currentRunes.length);
    const random_int = Math.floor(Math.random() * 25);
    const newRune = [potentialRunes[0][random_int], runeSubtitle[0][random_int]];
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
