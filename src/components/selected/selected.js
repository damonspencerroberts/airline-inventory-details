import React from 'react';

const Selected = (props) => {
  const selectedItems = props.selectedItems.map((item) => {
    return (
      <div onClick = {() => props.removeSelected(item)}>
        <p>{item.name}</p>
        <p>{item.weight}g</p>
      </div>
    );
  });

  const calcTotalWeight = props.selectedItems.map((item) => item.weight)
    .reduce((total, current) => total + current, 0);

  return (
    <div>
      <h1>✅  Selected</h1>
      {selectedItems}
      <div>
        <p>Total</p>
        <p>{calcTotalWeight >= 1000 ? `${calcTotalWeight / 1000}kg` : `${calcTotalWeight}g`}</p>
      </div>
      <div>
        <a href="/report">Confirm luggage</a>
      </div>
    </div>
  );
};

export default Selected;
