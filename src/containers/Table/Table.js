import React, { Component } from 'react';

import '../../containers/App.css';
import Header from '../../components/Table/Header/Header';
import Row from '../../components/Table/Row/Row';
import AddRows from '../../components/BlockControl/Buttons/AddRows/AddRows';
import AddColumn from '../../components/BlockControl/Buttons/AddColumn/AddColumn';
import Input from '../../components/BlockControl/Input/Input';
import Select from '../../components/BlockControl/Select/Select';
import CheckBox from '../../components/BlockControl/Buttons/Checkbox/Checkbox';

class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
      columns : [
        {id: 0, name: '#', contentEditable: false, type: '' , required: false},
      ],
      rows:[]
    }
    window.table = this;
  }

  rowId = 1;
  columnId = 1;

  validate = (input) => ({
      input: input.length === 0,
    });

  addColumn = () => {
    let columns = this.state.columns;
    let columnId = this.columnId++;
    let rows = this.state.rows;

    columns.push({
        id: columnId,
        name: this.inputELement.value,
        contentEditable: true,
        type: this.props.selectValue,
        required: this.checkBox.checked
      });
    
    rows = rows.map((row) => {  
      row.cells.push({
        id: columnId,
        value: '',
        type: this.props.selectValue,
        contentEditable: true,
        required: this.checkBox.checked,
      });
      return row;
    });

    this.setState({ columns, rows });

  }

  add10Rows = () => {  
    for(let k = 0; k < 10; k++){

      let rowId = this.rowId++;
      let rows = this.state.rows;
      rows.push({id: rowId, cells: this.generateEmptyCells(rowId)});
      this.setState({ rows });
    }
  }

  generateEmptyCells(rowId) {
    const { columns } = this.state;

    return columns.map((cell, id) => {
      return {
        id,
        value: cell.id === 0 ? rowId : '',
        type: cell.type,
        contentEditable: cell.id !== 0,
        required: cell.required,
      };
    })
  }

  rows = () => {
    return(
      <tbody>
        {this.state.rows.map((row) => 
        <Row id={row.id} key={row.id} cells={row.cells}  handleChange={this.handleRowChange} />)}
      </tbody>)
  }

  columns = () => {
    const errors = this.validate(this.props.inputValue);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return(
      <thead>
        <tr>
          {this.state.columns.map((col) => 
          <Header id={col.id} name={col.name} editable={col.contentEditable} key={col.id} required={col.required} handleChange={this.handleColumnChange}/>)}
          <th className="input-group">
            <Input
              reference={(inp) => {this.inputELement = inp}}
              val={this.props.inputValue}
              inputChanged={this.props.inputChanged} />
            <Select
              val={this.props.selectValue}
              selectRef={(sel) => {this.selectElement = sel}}
              selectChanged={this.props.selectChanged} />
            <CheckBox reference={(check) => {this.checkBox = check}} />
            <AddColumn clicked={this.addColumn} isDisabled={isDisabled} />
          </th>
        </tr>
      </thead>
      )}

  handleRowChange = (incomingRow) => {
    const { rows } = this.state;
    const storage = localStorage.setItem('Columns', JSON.stringify(this.state.columns));
    const updatedRows = rows.reduce((acc, row) => {
      let updatedRow = { ...row };

      if (updatedRow.id === incomingRow.id) {
        updatedRow = incomingRow;
      }

      return [ ...acc, updatedRow ];
    }, []);

    this.setState({ rows: updatedRows, storage });
  }

  handleColumnChange = (id, newValue) => {
    const storage = localStorage.setItem('Rows', JSON.stringify(this.state.rows));
    const columns = this.state.columns.map((col) => {
      if (col.id === id){
        return { ...this.state.columns[id], name: newValue };
      }
      return { ...col };
    });

    this.setState({ ...this.state, columns, storage });
  }

  render(){
  const rows = this.state.rows;
  const columns = this.state.columns;
  return(
    <div>
      <hr/>
      {this.props.show && (
        <div>
        <table>
          {this.columns(columns)}
          {this.rows(rows)}
        </table>
        <AddRows 
          clicked={this.add10Rows}
          isDisabled={this.state.columns.length < 2} />
        </div>
      )}
    </div>
    );
  }
}

export default Table;