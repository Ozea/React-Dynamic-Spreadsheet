import React from 'react';

const AddColumn = (props) => {
  return(
    <div className="input-group-append">
      <button
        disabled={props.isDisabled} 
        className="btn btn-outline-primary" 
        onClick={props.clicked}>
        <i className="glyphicon glyphicon-plus"></i>
      </button>
    </div>
  );
}

export default AddColumn;