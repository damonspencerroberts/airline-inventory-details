import React from 'react';
import AirlinesJson from './airlines-json.json';

const Airlines = (props) => {
  const airlineSpecs = Object.values(AirlinesJson.airlines);

  const airlineOptions = airlineSpecs.map((airline) => {
    return (<option value={[airline.name, airline.weight]}>{airline.name}</option>);
  });

  return(
    <select id="airlines" name="airlines" onChange = {(e) => props.handleSelect(e.target.value.split(","))}>
      <option value="" selected>Airlines</option>
      {airlineOptions}
    </select>
  );
}

export default Airlines;
