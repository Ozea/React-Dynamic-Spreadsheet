import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <th contentEditable={this.props.editable}>
        {this.props.title}
      </th>
    );
  }
}

export default Header;