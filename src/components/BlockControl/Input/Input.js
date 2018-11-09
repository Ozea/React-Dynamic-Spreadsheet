import React from 'react';

const input = (props) => {
  return(
    <div>
      <input
        id="title"
        className={props.class}
        ref={props.reference}
        value={props.val}
        onChange={props.inputChanged} />
    </div>
  );
}

export default input;