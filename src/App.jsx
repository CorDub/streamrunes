import { useState, useEffect } from 'react';
import './App.css'
import Queue from './Queue';
import CenterPiece from './CenterPiece';
import CornerPiece from './CornerPiece';
import Login from "./Login";

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
  const [isSpeakButtonClicked, setSpeakButtonClicked] = useState(false);
  const [isQueueEmpty, setQueueEmpty] = useState(false);

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

  const appId = import.meta.env.VITE_TWITCH_CLIENT_ID;

  async function fetchSubscriptions() {
    const access_token = localStorage.getItem('twitch_access_token');
    const response = await fetch("https://api.twitch.tv/helix/subscriptions", {
      headers: {
        "Client-ID": appId,
        Authorization: `Bearer ${access_token}`
      }
    });
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace("#", "?"));
    const accessToken = params.get("access_token");

    if (accessToken) {
      localStorage.setItem("twitch_access_token", accessToken);
    }
  }, []);

  return (
    <div className="app-container">
      <Queue
        isSpeakButtonHovered={isSpeakButtonHovered}
        isSpeakButtonClicked={isSpeakButtonClicked}
        setQueueEmpty={setQueueEmpty}/>
      <Login
        fetchSubscriptions={fetchSubscriptions}/>
      <CenterPiece
        clearRunes={clearRunes}
        dropRune={dropRune}
        currentRunes={currentRunes}
        isSpeakButtonHovered={isSpeakButtonHovered}
        setSpeakButtonHovered={setSpeakButtonHovered}
        setSpeakButtonClicked={setSpeakButtonClicked}
        isQueueEmpty={isQueueEmpty}/>

      <CornerPiece
        currentRunes={currentRunes}/>

    </div>
  )
}

export default App;
