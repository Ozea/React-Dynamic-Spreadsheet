import React, { Component } from 'react';

import CreateTable from '../components/CreateTable/CreateTable';
import Table from '../containers/Table/Table';
import Head from '../components/Head/Head';

import './App.css';

class App extends Component {
  state = {
    name: 'Spreadsheet',
    createTable: false,
    input: '',
    select: 'Date'
  }  

  createTable = () => {
    this.setState({ 
      createTable: true 
    })
  }

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

  render() {
    return (
      <div className="wrapper">
        <Head name={this.state.name} />
        <CreateTable clicked={this.createTable} />
        <Table 
          show={this.state.createTable}
          inputValue={this.state.input}
          selectValue={this.state.select}
          inputChanged={this.inputChangeHandler}
          selectChanged={this.selectChangeHandler} />
      </div>
    );
  }
}

export default App;