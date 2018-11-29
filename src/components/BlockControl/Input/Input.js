import React from 'react';

const Input = (props) => {
  return(
    <div className="myInput">
      <input
        className="form-control"
        placeholder="Name"
        ref={props.reference}
        value={props.val}
        onChange={props.inputChanged} />
    </div>
  );
}

export default Input;