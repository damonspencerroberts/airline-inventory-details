import React from 'react';
import CardInfo from "../../components/card-info/card-info";

const Report = (props) => {
  const selectedItems = props.selectedItems.map((item) => {
    return (
      <CardInfo
        name = {item.name}
        weight = {item.weight}
      />
    );
  });

  const calcTotalWeight = props.selectedItems.map((item) => item.weight)
    .reduce((total, current) => total + current, 0);

  return (
    <div className="report">
      <div className="report-airline">
        <div className="report-airline-header">
          <h1>{props.airlineName}</h1>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="card-header-">
            <h1>🎒 My backpack</h1>
          </div>
        </div>
        <div className="card-information">
          {selectedItems}
        </div>
        <div>
          <p>Total</p>
          <p>{calcTotalWeight >= 1000 ? `${calcTotalWeight / 1000}kg` : `${calcTotalWeight}g`}</p>
        </div>
      </div>
    </div>
  );
}

export default Report;
