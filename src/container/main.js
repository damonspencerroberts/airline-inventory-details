import React, { useState, useEffect } from 'react';
import axios from "axios";
import Home from "./home/home";
import Report from "./report/report";

const Main = (props) => {
  const [curAirline, setCurAirline] = useState({});
  const [curSelected, setCurSelected] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [items, setItems] = useState([]);
  const [showReport, setShowReport] = useState(false);
  const [bagAllowed, setBagAllowed] = useState(false);
  const [totalGreen, setTotalGreen] = useState('');

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
    if (currentValue.length > 1) {
      const newObj = {
        name: currentValue[0],
        weight: parseInt(currentValue[1])
      }
      setCurAirline(newObj);
      isBagAllowed(newObj, curSelected);
    }
  }

  const handleAdded = (currentElementToAdd) => {
    const newcurSelected = [...curSelected];
    newcurSelected.push(currentElementToAdd);
    setCurSelected(newcurSelected);
    isBagAllowed(curAirline, newcurSelected);
  }

  const handleRemove = (currentElementToRemove) => {
    const newCurSelected = [...curSelected];
    const newIndex = newCurSelected.findIndex(e => e === currentElementToRemove);
    newCurSelected.splice(newIndex, 1);
    setCurSelected(newCurSelected);
    const newItems = [...items];
    newItems.push(currentElementToRemove); 
    setItems(newItems);
    isBagAllowed(curAirline, newCurSelected);
  }

  const isBagAllowed = (airline, select) => {
    const totalWeight = select.map(item => item.weight).reduce((total, current) => total + current, 0);
    const airlineAllowed = airline.weight * 1000;
    const isAirline = Object.keys(airline).length;
    if ((airlineAllowed > totalWeight) && (isAirline > 0) && (select.length > 0)) {
      setBagAllowed(true);
      setTotalGreen('add-green');
    } else {
      setBagAllowed(false);
      setTotalGreen('add-red');
    }
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
        bagAllowed = {bagAllowed ? null : "disabled"}
        airlineName = {curAirline.name}
        totalGreen = {totalGreen}
      />}
    </div>
  );
}

export default Main;
