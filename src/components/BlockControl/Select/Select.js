import React from 'react';

const Select = (props) => {
  return(
    <div>
      <select className="custom-select" onChange={props.selectChanged} value={props.val}>
          <option value="Date" ref={props.selectRef}>Date</option>
          <option value="Text" ref={props.selectRef}>Text</option>
          <option value="Number" ref={props.selectRef}>Number</option>
      </select>
    </div>
  );
}

export default Select;