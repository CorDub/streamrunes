import RuneList from "./RuneList";
import PropTypes from "prop-types";
import './CornerPiece.css'

function CornerPiece ({ currentRunes }) {
  return (
    <div className="corner-piece-container">
      <div className="header-container">
        <img
          src={"src/assets/Words_of_destiny.svg"}
          alt="Words of Destiny"
          className="header-img"/>
      </div>
      <div className="rune-container">
        <RuneList currentRunes = {currentRunes}/>
      </div>
    </div>
  )
}

export default CornerPiece;

CornerPiece.propTypes = {
  clearRunes: PropTypes.func,
  dropRune: PropTypes.func,
  currentRunes: PropTypes.object
}
