import React, { useState, useEffect } from 'react';
import axios from "axios";
import Home from "./home/home";
import Report from "./report/report";

const Main = () => {
  const [curAirline, setCurAirline] = useState({});
  const [curSelected, setCurSelected] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [items, setItems] = useState([]);
  const [showReport, setShowReport] = useState(false);

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
      { showReport ? <Report 
        selectedItems = {curSelected}
        airlineName = {curAirline.name}
      /> : 
      <Home 
        handleSelectAirline = {handleSelectAirline}
        items = {items}
        handleClickedItem = {handleClickedItem}
        spinner = {spinner}
        curSelected = {curSelected}
        handleRemove = {handleRemove}
        click = {() => setShowReport(true)}
      />}
    </div>
  );
}

export default Main;
