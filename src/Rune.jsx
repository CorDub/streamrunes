import { useState, useEffect, useRef } from 'react';
import './Rune.css';
import PropType from 'prop-types';

function Rune({ name, subtitle }) {
  const [runeSVG, setRuneSVG] = useState(null);
  const svgRef = useRef(null);

  function fetchRuneSVG () {
    if (name === "Blank") {
      return;
    }

    fetch(`src/assets/${name}.svg`)
      .then(response => response.text())
      .then(data => {
        setRuneSVG(data);
      });
  }

  function animateRuneArrival () {
    if (runeSVG) {
      const svgPaths = svgRef.current.querySelectorAll('.rune-img svg path');
      svgPaths.forEach((path) => {
        // const pathLength = path.getTotalLength();
        // path.style.strokeDasharray = pathLength;
        // path.style.strokeDashoffset = pathLength;
        // path.animate(
        //   [{ strokeDashoffset: pathLength }, {strokeDashoffset: 0 }],
        //   {
        //     duration: 2000,
        //     easing: 'ease-in'
        //   }
        // );
          path.classList.add("draw");
      }
    );
  }}

  useEffect(() => {
    fetchRuneSVG();
  }, [name]);

  useEffect(() => {
    if (runeSVG) {
    animateRuneArrival();
    }
  }, [runeSVG]);


  return (
    <div className="rune">
      <p>{name}</p>
      <div className="img-placeholder">
        {(name !== "Blank") ?
          <div
            dangerouslySetInnerHTML={{ __html: runeSVG }}
            className="rune-img"
            ref={svgRef}></div>
          :
          <div className="rune-img"></div>}
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
