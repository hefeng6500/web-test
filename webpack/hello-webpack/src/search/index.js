"use strict";

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import logo from './images/logo.png'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    debugger
    return (
      <div className="search-text">
        Search Text1
      <img src={logo} /></div>
    );
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)