import { useState } from 'react';
import './App.css'
import RuneList from "./RuneList";
import Queue from './Queue';
import CenterPiece from './CenterPiece';
import CornerPiece from './CornerPiece';

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
  const [spokenWords] = useState([new Audio("src/assets/Tala.mp3"), new Audio("src/assets/Nogr.mp3")]);
  const [isSpeakButtonHovered, setSpeakButtonHovered] = useState(false);

  function dropRune () {
    {spokenWords && spokenWords[0].play();}

    setTimeout(() => {
      if (currentRunes.length >= 3) {
        currentRunes.length = 0;
      }
      const random_int = Math.floor(Math.random() * 25);
      const newRune = [potentialRunes[0][random_int], runeSubtitle[0][random_int]];
      setCurrentRunes([...currentRunes, newRune]);
    }, 250);
  }

  function clearRunes () {
    {spokenWords && spokenWords[1].play();}

    setTimeout(() => {
      setCurrentRunes([]);
    }, 250);
  }

  return (
    <div className="app-container">
      <Queue
        isSpeakButtonHovered={isSpeakButtonHovered}/>

      <CenterPiece
        clearRunes={clearRunes}
        dropRune={dropRune}
        currentRunes={currentRunes}
        isSpeakButtonHovered={isSpeakButtonHovered}
        setSpeakButtonHovered={setSpeakButtonHovered}/>

      <CornerPiece
        currentRunes={currentRunes}/>

    </div>
  )
}

export default App;
