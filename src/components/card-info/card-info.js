import React from 'react';

const CardInfo = (props) => {
  return (
    <div className="card-information-info" onClick = {props.onClick}>
      <p className="card-information-info-name">{props.name}</p>
      <p className="card-information-info-weight">{props.weight}g</p>
    </div>
  );
}

export default CardInfo;
