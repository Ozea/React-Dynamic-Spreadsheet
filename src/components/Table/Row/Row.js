import React, { Component } from 'react';

import Cell from '../Cells/Cell';
import PropTypes from 'prop-types';

class Row extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    cells: PropTypes.array,
    handleChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
  }

  handleChange = (cid, value) => {
    const { id, cells, handleChange } = this.props;
    const updatedCells = cells.reduce((acc, cell) => {
      let newCell = { ...cell };

      if (newCell.id === cid ) {
        newCell.value = value;
      }

      return [...acc, newCell];
    }, []);

    handleChange({
      id,
      cells: updatedCells,
    })
  }

  cells = () => {
    return this.props.cells.map((c) => 
      (<Cell
        id={c.id}
        key={c.id}
        value={c.value}
        type={c.type}
        contentEditable={c.contentEditable}
        handleChange={this.handleChange}
        required={c.required}
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

export default Row;