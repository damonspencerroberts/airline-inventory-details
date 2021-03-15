import React from 'react';
import AirlinesJson from './airlines-json.json';

const Airlines = (props) => {
  const airlineSpecs = Object.values(AirlinesJson.airlines);

  const airlineOptions = airlineSpecs.map((airline) => {
    return (<option value={[airline.name, airline.weight]}>{airline.name}</option>);
  });

  return(
    <div className = "airlines">
      <select id="airlines" name="airlines" onChange = {(e) => props.handleSelectAirline(e.target.value.split(","))}>
        <option value="" selected disabled>Airlines</option>
        {airlineOptions}
      </select>
    </div>
  );
}

export default Airlines;
