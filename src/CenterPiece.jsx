import RuneList from "./RuneList";
import PropTypes from "prop-types";
import './CenterPiece.css';

function CenterPiece({ clearRunes, dropRune, currentRunes, isSpeakButtonHovered, setSpeakButtonHovered }) {


  return (
    <div className="center-piece-container">
      <div className="header-container">
        <img
          src={"src/assets/Words_of_destiny.svg"}
          alt="Words of Destiny"
          className="header-img"/>
      </div>
      <div className="rune-container">
        <RuneList currentRunes = {currentRunes}/>
      </div>
      <div className="button-cont">
        {currentRunes.length === 3 ?
        <img
          src={"src/assets/Enough.svg"}
          className="button"
          onClick={clearRunes}/>
          :
        <img
          src={"src/assets/Speak.svg"}
          className="button"
          onClick={dropRune}
          onMouseEnter={()=>setSpeakButtonHovered(!isSpeakButtonHovered)}
          onMouseOut={()=>setSpeakButtonHovered(!isSpeakButtonHovered)}/>}
      </div>
    </div>
  )
}

export default CenterPiece;

CenterPiece.propTypes = {
  clearRunes: PropTypes.func,
  dropRune: PropTypes.func,
  currentRunes: PropTypes.object,
  setSpeakButtonHovered: PropTypes.func,
  isSpeakButtonHovered: PropTypes.bool
}
