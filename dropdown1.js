

import React from 'react';
import { Router, Route, Link } from 'react-router';


export default class Dropdown1 extends React.Component {
  constructor(props) {
    super(props);
  }

  // jquery to open display the list items
  // <div>
  //              <input type="submit" value="Search" onClick={this.onClick} />
  //              { this.state.showResults ? <Results /> : null }
  //          </div>


  render() {
    return(
      <div className="dropdown-Container">
          <ul className="dropdown-list">
            <li><Link to="test2">To test2</Link></li>
            <li><Link to="test3">To test3</Link></li>
            <li><Link to="test4">To test4</Link></li>
            <li><Link to="test5">To test5</Link></li>
            <li><Link to="test6">To test6</Link></li>
            <li><Link to="test7">To test7</Link></li>
          </ul>

        </div>
    );
  }
}
