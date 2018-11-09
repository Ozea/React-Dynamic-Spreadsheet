import React from 'react';

import Select from '../../components/BlockControl/Select/Select';
import Input from '../../components/BlockControl/Input/Input';
import AddRows from '../../components/BlockControl/Buttons/AddRows/AddRows';
import AddColumn from '../../components/BlockControl/Buttons/AddColumn/AddColumn';
import './BlockControl.css';

const blockControl = (props) => {  
  return(
    <div className="block">
      <div className="col-sm-6">
        <p className="title">Title:</p>
        <Input 
          inputChanged={props.inputChanged}
          val={props.stateInput}
          reference={props.inputRef}
          class={props.errorClass}/>
        <AddColumn 
          isDisabled={props.isDisabled}
          clicked={props.addColumn} />
      </div>
      <div className="col-sm-6">
        <p className="field-type">Field type:</p>
        <Select 
          reference={props.selectRef}
          val={props.stateSelect}
          selectChanged={props.selectChanged} />
        <AddRows clicked={props.add10Rows}/>
      </div>
    </div>
  );
}

export default blockControl;