import React, { useState } from 'react';

const CardInfo = (props) => {
  const [whichClass, setWhichClass] = useState('');
  const [whichContent, setWhichContent] = useState(`${props.weight}g`);

  const handleEntry = () => {
    if (props.current === "inventory") {
      setWhichClass('add-red');
      setWhichContent('add');
    } else if (props.current === "selected") {
      setWhichClass('add-red');
      setWhichContent('remove');
    } else {
      setWhichClass('');
      setWhichContent(`${props.weight}g`);
    }
  }

  const handleExit = () => {
    setWhichClass('');
    setWhichContent(`${props.weight}g`);
  }

  return (
    <div className="card-information-info" onClick = {props.onClick} onMouseEnter = {handleEntry} onMouseLeave = {handleExit}>
      <p className="card-information-info-name">{props.name}</p>
      <p className={`card-information-info-weight ${whichClass}`}>{whichContent}</p>
    </div>
  );
}

export default CardInfo;
