import React, { useState } from 'react';
import Airlines from "../components/airlines/airlines";
import Inventory from "../components/inventory/inventory";
import Selected from "../components/selected/selected";

const Main = () => {
  const [curAirline, setCurAirline] = useState({});
  const [curSelected, setCurSelected] = useState([]);
  const [curRemove, setCurRemoved] = useState(null);
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

  const handleRemove = (currentElementToRemove) => {
    const newCurSelected = [...curSelected];
    const newIndex = newCurSelected.findIndex(e => e === currentElementToRemove);
    newCurSelected.splice(newIndex, 1);
    setCurSelected(newCurSelected);
    setCurRemoved(currentElementToRemove);
  }

  return(
    <div>
      <Airlines handleSelect = {handleSelect} />
      <Inventory sendElement = {handleAdded} elementRemove = {curRemove} />
      <Selected selectedItems = {curSelected} removeSelected = {handleRemove} />
    </div>
  );
}

export default Main;
