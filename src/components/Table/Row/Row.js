import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Row extends Component {
  constructor(props){
    super(props);
    this.state = {
      cells: []
    }
  }

  static propTypes = {
    id: PropTypes.number,
    cells: PropTypes.array,
    handleChange: PropTypes.func.isRequired,
  }

  handleChange = (id) => {
    return (value) => {
      const { id, cells, handleChange } = this.props;
      const updatedCells = cells.reduce((acc, cell) => {
        let newCell = { ...cell };

        if (newCell.id === id ) {
          newCell.value = value;
        }

        return [...acc, newCell];
      }, []);

      handleChange({
        id,
        cells: updatedCells,
      })
    }
  }

  cells = () => {
    return this.props.cells.map((c) => 
      (<Cell
        key={c.id}
        value={c.value}
        type={c.type}
        contentEditable={c.contentEditable}
        handleChange={this.handleChange(c.id)} 
      />)
    )
  }

  render() {
    return (
      <tr>
        {this.cells()}
      </tr>
    )
  }
}

class Cell extends Component {
  static propTypes = {
    value: PropTypes.string,
    contentEditable: PropTypes.bool,
    type: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
  }

  // validate() {
  //     const {type, required} = this.props;

  //     return result;
  // }

  // className() {
  //     const isValid = this.validate();
  //     return !isValid ? 'error' : '';
  // }

  onChange = (event) => {
    this.props.handleChange(event.target.value);
  }

  content() {
    const { contentEditable, type, value } = this.props;

    if (contentEditable) {
      return <input className="input" type={type} defaultValue={value} onBlur={this.onChange}></input>
    }

    return <span> {value} </span>;
  }

  render() {
    return (
      <td className="newCell">
        {this.content()}
      </td>
    )
  }
}

export default Row;