import React from 'react';
import Airlines from "../../components/airlines/airlines";
import Inventory from "../../components/inventory/inventory";
import Selected from "../../components/selected/selected";

const Home = (props) => {
  return (
    <div>
      <Airlines 
        handleSelectAirline = {props.handleSelectAirline} 
      />
      <Inventory 
        currentItems = {props.items} 
        handleClickedItem = {props.handleClickedItem} 
        spinner = {props.spinner} 
      />
      <Selected 
        selectedItems = {props.curSelected} 
        removeSelected = {props.handleRemove}
        click = {props.click}
      />
    </div>
  );
}

export default Home;
