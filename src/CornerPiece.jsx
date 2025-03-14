import RuneList from "./RuneList";
import PropTypes from "prop-types";
import './CornerPiece.css'

function CornerPiece ({ currentRunes }) {
  return (
    <div className="corner-piece-container">
      <div className="corpie-header-container">
      </div>
      <div className="corpie-rune-container">
        <RuneList currentRunes = {currentRunes}/>
      </div>
    </div>
  )
}

export default CornerPiece;

CornerPiece.propTypes = {
  clearRunes: PropTypes.func,
  dropRune: PropTypes.func,
  currentRunes: PropTypes.array
}
