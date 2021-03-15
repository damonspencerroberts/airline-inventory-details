import React, { useState } from 'react';
import Airlines from "../components/airlines/airlines";
import Inventory from "../components/inventory/inventory";
import Selected from "../components/selected/selected";

const Main = () => {
  const [curAirline, setCurAirline] = useState({});
  const [curSelected, setCurSelected] = useState([]);
  const handleSelect = (currentValue) => {
    //make sure clicking on airlines placeholder doesnt change state
    if (currentValue.length > 1) {
      const newObj = {
        name: currentValue[0],
        weight: parseInt(currentValue[1])
      }
      setCurAirline(newObj);
    }
  }

  const handleAdded = (currentElementToAdd) => {
    const newcurSelected = [...curSelected];
    newcurSelected.push(currentElementToAdd);
    setCurSelected(newcurSelected);
  }

  return(
    <div>
      <Airlines handleSelect = {handleSelect} />
      <Inventory sendElement = {handleAdded} />
      <Selected selectedItems = {curSelected}/>
    </div>
  );
}

export default Main;
