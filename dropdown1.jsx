

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
            <li><Link to="kCharacters">
              <button className="dropDownButton">To K Characters
              </button></Link></li>

            <li><Link to="sCharacters">
              <button className="dropDownButton">To S Characters
              </button></Link></li>

            <li><Link to="vowelCharacters">
              <button className="dropDownButton">To Vowel Characters
              </button></Link></li>

            <li><Link to="nCharacters">
                <button className="dropDownButton">To N Characters
                </button></Link></li>

              <li><Link to="hCharacters">
                <button className="dropDownButton">To H Characters
                </button></Link></li>

          </ul>

        </div>
    );
  }
}
