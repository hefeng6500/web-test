"use strict";

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>Search Text</div>
    );
  }
}

ReactDOM.render(
  <Search/>,
  document.getElementById('root')
)