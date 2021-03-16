import React, { useState } from 'react';

const CardInfo = (props) => {
  const [whichClass, setWhichClass] = useState('');
  const [whichContent, setWhichContent] = useState(`${props.weight}g`);
  const [whichIconLeft, setWhichIconLeft] = useState('');
  const [whichIconRight, setWhichIconRight] = useState('');

  const handleEntry = () => {
    if (props.current === "inventory") {
      setWhichClass('add-red');
      setWhichContent('add');
      setWhichIconRight('fas fa-arrow-right');
    } else if (props.current === "selected") {
      setWhichClass('add-red');
      setWhichContent('remove');
      setWhichIconLeft('fas fa-arrow-left')
    } else {
      setWhichClass('');
      setWhichContent(`${props.weight}g`);
      setWhichIconRight('');
      setWhichIconLeft('');
    }
  }

  const handleExit = () => {
    setWhichClass('');
    setWhichContent(`${props.weight}g`);
    setWhichIconRight('');
    setWhichIconLeft('');
  }

  return (
    <div className="card-information-info" onClick = {props.onClick} onMouseEnter = {handleEntry} onMouseLeave = {handleExit}>
      <p className="card-information-info-name">{props.name}</p>
      <p className={`card-information-info-weight ${whichClass}`}><i className={whichIconLeft}></i> {whichContent} <i className={whichIconRight}></i></p>
    </div>
  );
}

export default CardInfo;
