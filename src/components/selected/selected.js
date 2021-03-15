import React from 'react';

const Selected = (props) => {
  const selectedItems = props.selectedItems.map((item) => {
    return (
      <div>
        <p>{item.name}</p>
        <p>{item.weight}g</p>
      </div>
    );
  });

  return (
    <div>
      <h1>✅  Selected</h1>
      {selectedItems}
    </div>
  );
};

export default Selected;
