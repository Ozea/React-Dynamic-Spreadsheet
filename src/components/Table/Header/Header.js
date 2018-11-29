import React, { Component } from 'react';

import '../../../containers/App.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      edit: false,
    }
  }

  saveChangedName = (evt) => {
    this.setState({
      edit: false
    });
    let newValue = evt.target.value;
    this.props.handleChange(this.props.id, newValue);
  }

  replaceElement = () => {
    const { editable } = this.props;
    if(editable){
      this.setState({
        edit: true
      });
    }
  }

  render(){
    return(
      <th onClick={this.replaceElement}>
        {!this.state.edit && (
          <span>{this.props.name}</span>          
        )}
        {this.state.edit && (
          <input
            defaultValue={this.props.name}
            className="input"
            onBlur={this.saveChangedName} />
        )}
      </th>
    );
  }
}

export default Header;