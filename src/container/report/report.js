import React from 'react';

const Report = (props) => {
  const selectedItems = props.selectedItems.map((item) => {
    return (
      <div>
        <p>{item.name}</p>
        <p>{item.weight}g</p>
      </div>
    );
  });

  const calcTotalWeight = props.selectedItems.map((item) => item.weight)
    .reduce((total, current) => total + current, 0);

  return (
    <div>
      <div>
        <h1>{props.airlineName}</h1>
      </div>
      <div>
        <h1>🎒 My backpack</h1>
      </div>
      {selectedItems}
      <div>
        <p>Total</p>
        <p>{calcTotalWeight >= 1000 ? `${calcTotalWeight / 1000}kg` : `${calcTotalWeight}g`}</p>
      </div>
    </div>
  );
}

export default Report;
