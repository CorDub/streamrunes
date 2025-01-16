import { useState, useEffect, useRef } from 'react';
import './Rune.css';
import PropType from 'prop-types';

function Rune({ name, subtitle }) {
  const [runeSVG, setRuneSVG] = useState(null);
  const svgRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);

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
          path.classList.add("draw");
      }
    );

    setTimeout(() => {
      nameRef.current.classList.add("fade-in");
      subtitleRef.current.classList.add("fade-in");
    }, 1000);
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
      <p
        className="rune-name"
        ref={nameRef}>
        {name}</p>
      <div className="img-placeholder">
        {(name !== "Blank") ?
          <div
            dangerouslySetInnerHTML={{ __html: runeSVG }}
            className="rune-img"
            ref={svgRef}></div>
          :
          <div className="rune-img"></div>}
      </div>
      <p
        className="rune-subtitle"
        ref={subtitleRef}>
        {subtitle}</p>
    </div>
  )
}

export default Rune;

Rune.propTypes = {
  name: PropType.string,
  subtitle: PropType.string
}
