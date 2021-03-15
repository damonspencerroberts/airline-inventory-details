import React from 'react';

const Inventory = (props) => {
  const showItems = props.currentItems.map((item) => {
    return (
      //can be its own component
      <div onClick = {() => props.handleClickedItem(item)}>
        <p>{item.name}</p>
        <p>{item.weight}g</p>
      </div>
    );
  });

  return (
    <div>
      <h1>🛍️ Inventory</h1>
      {props.spinner ? <p>Loading...</p> : showItems }
    </div>
  );
}

export default Inventory;
