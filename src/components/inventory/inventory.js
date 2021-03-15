import React from 'react';
import CardInfo from "../card-info/card-info";
import Spinner from "../spinner/spinner";

const Inventory = (props) => {
  const showItems = props.currentItems.map((item) => {
    return (
      <CardInfo 
        onClick = {() => props.handleClickedItem(item)}
        name = {item.name}
        weight = {item.weight}
        current = "inventory"
      />
    );
  });

  return (
    <div className="card">
      <div className="card-header">
        <h1>🛍️ Inventory</h1>
      </div>
      {props.spinner ? <div className="loader-div"><Spinner /></div> : <div className="card-information">{showItems}</div> }
    </div>
  );
}

export default Inventory;
