import React, { useState } from 'react';
import Airlines from "../components/airlines/airlines";
import Inventory from "../components/inventory/inventory";

const Main = () => {
  const [curAirline, setCurAirline] = useState({});
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

  return(
    <div>
      <Airlines handleSelect = {handleSelect} />
      <Inventory />
    </div>
  );
}

export default Main;
