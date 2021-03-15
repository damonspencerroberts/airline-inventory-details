import React from 'react';
import CardInfo from "../card-info/card-info";

const Inventory = (props) => {
  const showItems = props.currentItems.map((item) => {
    return (
      <CardInfo 
        onClick = {() => props.handleClickedItem(item)}
        name = {item.name}
        weight = {item.weight}
      />
    );
  });

  return (
    <div className="card">
      <div className="card-header">
        <h1>🛍️ Inventory</h1>
      </div>
      {props.spinner ? <p>Loading...</p> : <div className="card-information">{showItems}</div> }
    </div>
  );
}

export default Inventory;
