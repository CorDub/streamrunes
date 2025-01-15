import './Rune.css';
import PropType from 'prop-types';

function Rune({ name, subtitle }) {
  return (
    <div className="rune">
      <p>{name}</p>
      <div className="img-placeholder">
        <img
          src={`src/assets/${name}.svg`}
          alt="Mannaz icon"
          className="rune-img"/>
      </div>
      <p>{subtitle}</p>
    </div>
  )
}

export default Rune;

Rune.propTypes = {
  name: PropType.string,
  subtitle: PropType.string
}
