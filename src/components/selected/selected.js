import React from 'react';
import Button from "../button/button";
import CardInfo from "../card-info/card-info";

const Selected = (props) => {
  const selectedItems = props.selectedItems.map((item) => {
    return (
      <CardInfo 
        onClick = {() => props.removeSelected(item)}
        name = {item.name}
        weight = {item.weight}
        current = "selected"
      />
    );
  });

  const calcTotalWeight = props.selectedItems.map((item) => item.weight)
    .reduce((total, current) => total + current, 0);

  return (
    <div className = "card">
      <div className="card-header">
        <h1>✅  Selected</h1>
      </div>
      <div className="card-information card-information-min-height">
        {selectedItems}
      </div>
      <div className="card-border"></div>
      <div className="card-total">
        <p className="card-total-total">Total</p>
        <p className="card-total-weight">{calcTotalWeight >= 1000 ? `${calcTotalWeight / 1000}kg` : `${calcTotalWeight}g`}</p>
      </div>
      <div className="card-border"></div>
      <div class="card-button">
        <Button 
          click = {props.click}
          content = "Confirm luggage"
          buttonClass = {props.bagAllowed}
        />
      </div>
    </div>
  );
};

export default Selected;
