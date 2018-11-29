import React from 'react';

import '../CreateTable/CreateTable.css';

const CreateTable = (props) => {
  return(
    <div>
      <button 
        className="btn btn-mg btn-primary" 
        onClick={props.clicked}>
        Create Table
      </button>
    </div>
  );
}

export default CreateTable;