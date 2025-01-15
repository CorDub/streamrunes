import Rune from './Rune';
import './RuneList.css';
import PropType from 'prop-types';

function RuneList({ currentRunes }) {

  function changeRunesListLength(currentRunes) {
    if (currentRunes.length === 1 ) {
      return "one";
    } else if (currentRunes.length === 2) {
      return "two";
    } else if (currentRunes.length === 3) {
      return "three";
    } else {
      return;
    }
  }

  return (
    <div className={`runes-list ${changeRunesListLength(currentRunes)}`}>	
      {currentRunes.map((rune, index) =>(
        <li className="runes-list-item" key={index}>
          <Rune
          name={rune[0]}
          subtitle={rune[1]}/>
        </li>
      ))
      }
    </div>
  )
}

export default RuneList;

RuneList.propTypes = {
  currentRunes: PropType.array
}
