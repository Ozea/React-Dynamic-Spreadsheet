import React, { Component } from 'react';

import '../../containers/App.css';
import BlockControl from '../BlockControl/BlockControl';
import Header from '../../components/Table/Header/Header';
import Row from '../../components/Table/Row/Row';

// const cellTypes = [ 'text', 'number', 'date', 'select' ];
class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      select: 'Date',
      columns : [
        {id: 0, name: '#', contentEditable: false, type: ''},
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

  inputChangeHandler = (evt) => {
    this.setState({
      input: evt.target.value
    });
  }

  selectChangeHandler = (evt) => {
    this.setState({
      select: evt.target.value
    });
  }

  componentDidMount() {
    this.inputELement.focus();
  }

  addColumn = () => {
    let columns = this.state.columns;
    let columnId = this.columnId++;
    let rows = this.state.rows;
    columns.push({
        id: columnId,
        name: this.inputELement.value,
        contentEditable: true,
        type: this.state.select
      });
    
    rows = rows.map((row) => {   
      debugger;   
      row.cells.push({
        id: columnId,
        value: '',
        type: this.state.select,
        contentEditable: true,
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
      };
    })
  }

  rows = () => {
    return(
      <tbody>
        {this.state.rows.map((row) => 
        <Row key={row.id} cells={row.cells}  handleChange={this.handleRowChange} />)}
      </tbody>)
  }

  columns = () => {
    return(
      <thead>
        <tr>
          {this.state.columns.map((col) => 
          <Header title={col.name} editable={col.contentEditable} key={col.id} />)}
        </tr>
      </thead>)
  }

  handleRowChange = (incomingRow) => {
    const { rows } = this.state;

    const updatedRows = rows.reduce((acc, row) => {
      let updatedRow = { ...row };

      if (updatedRow.id === incomingRow.id) {
        updatedRow = incomingRow;
      }

      return [ ...acc, updatedRow ];
    }, []);

    this.setState({ rows: updatedRows });
  }

  render(){
  const errors = this.validate(this.state.input);
  const isDisabled = Object.keys(errors).some(x => errors[x]);
  const rows = this.state.rows;
  const columns = this.state.columns;
  return(
    <div>
      <BlockControl 
        isDisabled={isDisabled}
        errorClass={errors.input ? "error " : " "}
        stateInput={this.state.input}
        stateSelect={this.state.select}
        inputChanged={this.inputChangeHandler}
        selectChanged={this.selectChangeHandler}
        inputRef={(inp) => {this.inputELement = inp}}
        selectRef={(sel) => {this.selectElement = sel}}
        addColumn={this.addColumn}
        add10Rows={this.add10Rows} />
      <hr/>
      {this.state.columns.length > 1 &&(
        <table>
          {this.columns(columns)}
          {this.rows(rows)}
        </table>)}
    </div>
    );
  }
}

export default Table;