import { useState } from 'react';
import Rune from './Rune'

function RuneList({ currentRunes }) {

  return (
    <div className="runes-list">
      {currentRunes.map((rune, index) =>(
        <li className="runes-list-item" key={index}>
          <Rune
          name={rune}/>
        </li>
      ))
      }
    </div>
  )
}

export default RuneList;
