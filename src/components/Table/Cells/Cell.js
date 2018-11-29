import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Cell extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    contentEditable: PropTypes.bool,
    type: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
  }
  
  validate() {
    const {type, value, required} = this.props;

    let dateRegExp = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
    let numberRegExp = /[0-9]/;
    let result = true;

    if (value.length === 0){
      return !required;
    }

    switch (type) {
      case 'Date':
        result = dateRegExp.test(value);
        break;
      case 'Number':
        result = numberRegExp.test(value);
        break;
      default:
        result = true;
    }
  
    return result;
  }
  
  className() {
    const isValid = this.validate();
    return !isValid ? 'error' : 'input';
  }
  
  onChange = (event) => {
    this.props.handleChange(this.props.id, event.target.value);
  }

  content() {
    const { contentEditable, type, value } = this.props;

    if (contentEditable) {
      return <input className={this.className()} type={type} defaultValue={value} onBlur={this.onChange}></input>
    }
    return <span>{value}</span>;
  }

  render() {
    return (
      <td className="newCell">
        {this.content()}
      </td>
    )
  }
  }

export default Cell;