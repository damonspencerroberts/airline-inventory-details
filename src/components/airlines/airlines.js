import React, { useState } from "react";
import AirlinesJson from './airlines-json.json';

const Airlines = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const airlineSpecs = Object.values(AirlinesJson.airlines);
  
  const toggling = () => setIsOpen(!isOpen);

  const selectTheAirline = (el) => {
    props.handleSelectAirline(el);
    setIsOpen(!isOpen);
  }

  const airlineOptions = airlineSpecs.map((airline) => {
    return (
      <li 
        className="list-item noselect"
        onClick={() => selectTheAirline([airline.name, airline.weight])}
        >
        {airline.name} 
      </li>
    );
  });

  return (
    <div className="airlines-main">
      <div className="dropdown-container">
        <div className="dropdown-header noselect" onClick={toggling}>
          <p>{props.airlineName === undefined ? 'Airline' : props.airlineName}</p> 
          <i className={isOpen ? "fas fa-chevron-up icon-carot": "fas fa-chevron-down icon-carot"}></i>
        </div>
        {isOpen && (
          <div>
            <ul className="dropdown-list noselect">
              {airlineOptions}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Airlines;
