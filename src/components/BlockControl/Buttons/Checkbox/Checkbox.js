import React from 'react';

import './Checkbox.css';

const Checkbox = (props) => (
  <div className="input-group-append">
    <div className="input-group-text">
      <input
        type="checkbox" 
        id="required"
        defaultChecked={props.val} 
        onChange={props.checkboxChanged}
        ref={props.reference} />
    </div>
    <label className="form-control required" htmlFor="required">Required?</label>
  </div>
);

export default Checkbox;