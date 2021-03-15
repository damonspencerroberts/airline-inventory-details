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
      <div className="card-information">
        {selectedItems}
      </div>
      <div>
        <p>Total</p>
        <p>{calcTotalWeight >= 1000 ? `${calcTotalWeight / 1000}kg` : `${calcTotalWeight}g`}</p>
      </div>
      <div>
        <Button 
          click = {props.click}
          content = "Confirm luggage"
        />
      </div>
    </div>
  );
};

export default Selected;
