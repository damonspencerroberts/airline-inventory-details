import React from 'react';
import Airlines from "../../components/airlines/airlines";
import Inventory from "../../components/inventory/inventory";
import Selected from "../../components/selected/selected";

const Home = (props) => {
  return (
    <div>
      <Airlines 
        handleSelectAirline = {props.handleSelectAirline}
        airlineName = {props.airlineName}
      />
      <div className="parent">
        <div className="child">
          <Inventory 
            currentItems = {props.items} 
            handleClickedItem = {props.handleClickedItem} 
            spinner = {props.spinner} 
          />
        </div>
        <div className="arrow">
          <i className="fas fa-arrow-right fa-3x"></i>
        </div>
        <div className="child">
          <Selected 
            selectedItems = {props.curSelected} 
            removeSelected = {props.handleRemove}
            click = {props.click}
            bagAllowed = {props.bagAllowed}
            totalGreen = {props.totalGreen}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
