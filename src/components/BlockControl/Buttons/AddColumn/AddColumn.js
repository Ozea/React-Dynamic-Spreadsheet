import React from 'react';

import './AddColumn.css';

const addColumn = (props) => {
  return(
    <div>
      <button
        disabled={props.isDisabled} 
        className="addColumnPos btn btn-primary" 
        onClick={props.clicked}>
        Add column
      </button>
    </div>
  );
}

export default addColumn;