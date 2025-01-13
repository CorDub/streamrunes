import Rune from './Rune';
import './RuneList.css';
import PropType from 'prop-types';

function RuneList({ currentRunes }) {

  return (
    <div className="runes-list">
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
