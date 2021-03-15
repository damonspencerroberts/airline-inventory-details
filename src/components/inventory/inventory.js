import React, { useEffect, useState } from 'react';
import axios from "axios";

const Inventory = (props) => {
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
    props.sendElement(cur);
    const newItems = [...items];
    const lookIndex = newItems.findIndex(el => el === cur);
    newItems.splice(lookIndex, 1);
    setItems(newItems);
  }

  const showItems = items.map((item) => {
    return (
      //can be its own component
      <div onClick = {() => handleClickedItem(item)}>
        <p>{item.name}</p>
        <p>{item.weight}g</p>
      </div>
    );
  });

  return (
    <div>
      <h1>🛍️ Inventory</h1>
      {spinner ? <p>Loading...</p> : showItems }
    </div>
  );
}

export default Inventory;
