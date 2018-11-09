import React, { Component } from 'react';

import CreateTable from '../components/CreateTable/CreateTable';
import Table from '../containers/Table/Table';
import Head from '../components/Head/Head';
// import BlockControl from '../containers/BlockControl/BlockControl';

import './App.css';

class App extends Component {
  state = {
    name: 'Spreadsheet',
    createTable: false
  }  

  createTable = () => {
    this.setState({ 
      createTable: true 
    })
  }

  render() {
    let showTable = null;

    if (this.state.createTable){
      showTable = (
        <Head name={this.state.name} />
      )
    }else{
      showTable = (
        <CreateTable clicked={this.createTable} />
      )
    }
    return (
      <div className="wrapper">
        {showTable}
        {this.state.createTable ? 
        // <div>
        //   <BlockControl />
        //   <Table />
        // </div> 
          <Table />
        : null}
      </div>
    );
  }
}

export default App;