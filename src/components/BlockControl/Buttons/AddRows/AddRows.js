import React from 'react'; 

import './AddRows.css';

const addRows = (props) => {
  return(
    <div>
      <button 
        name="addRows" 
        className="addRowsPos btn btn-primary" 
        onClick={props.clicked}>
        Add 10 rows
      </button>
    </div>
  );
}

export default addRows;