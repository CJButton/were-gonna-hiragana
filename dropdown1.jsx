

import React from 'react';
import { Router, Route, Link } from 'react-router';


export default class Dropdown1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="dropdown-Container">
          <ul className="dropdown-list">
            <li><Link to="kCharacters">To k Characters</Link></li>
            <li><Link to="sCharacters">To s Characters</Link></li>
            <li><Link to="test4">To test4</Link></li>
            <li><Link to="test5">To test5</Link></li>
            <li><Link to="test6">To test6</Link></li>
            <li><Link to="test7">To test7</Link></li>
          </ul>

        </div>
    );
  }
}
