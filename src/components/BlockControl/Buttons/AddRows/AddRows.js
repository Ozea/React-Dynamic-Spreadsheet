import React from 'react'; 

import './AddRows.css';

const AddRows = (props) => {
  return(
    <div>
      <button 
        name="addRows" 
        className="addRowsPos btn btn-primary" 
        onClick={props.clicked}
        disabled={props.isDisabled} >
        Add 10 rows
      </button>
    </div>
  );
}

export default AddRows;