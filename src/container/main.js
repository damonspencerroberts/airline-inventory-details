import React, { useState, useEffect } from 'react';
import Airlines from "../components/airlines/airlines";
import Inventory from "../components/inventory/inventory";
import Selected from "../components/selected/selected";
import axios from "axios";


const Main = () => {
  const [curAirline, setCurAirline] = useState({});
  const [curSelected, setCurSelected] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setSpinner(true);
    const fetchData = async () => {
      const result = await axios(
        'https://weekndr.herokuapp.com/api/v2/cabin-luggage-inventory',
      );
      setItems(Object.values(result.data.items));
      setSpinner(false);
    };
 
    fetchData();
  }, []);

  const handleClickedItem = (cur) => {
    handleAdded(cur);
    const newItems = [...items];
    const lookIndex = newItems.findIndex(el => el === cur);
    newItems.splice(lookIndex, 1);
    setItems(newItems);
  }

  const handleSelectAirline = (currentValue) => {
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
    const newItems = [...items];
    newItems.push(currentElementToRemove); 
    setItems(newItems);
  }

  return(
    <div>
      <Airlines handleSelectAirline = {handleSelectAirline} />
      <Inventory currentItems = {items} handleClickedItem = {handleClickedItem} spinner = {spinner} />
      <Selected selectedItems = {curSelected} removeSelected = {handleRemove} />
    </div>
  );
}

export default Main;
