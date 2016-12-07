
// acts as the splash screen

import { Router, Route, Link } from 'react-router';
import React from 'react';

import Dropdown from './dropdown1';


// this is the main index/splash page for the app
export default class Tester extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dropdown: false
      };
      this.dropdown = this.dropdown.bind(this);
      this.dropdownCollapse = this.dropdownCollapse.bind(this);
    }

    dropdown() {
      this.setState({dropdown: !this.state.dropdown});
    }

    dropdownCollapse() {
      if (this.state.dropdown) {
        this.setState({dropdown: false});
      }
    }

    render() {
      return(
        <div>
          <div className="splashScreen" onClick={this.dropdownCollapse}>
          <div className="curve">
          </div>
            <h2 className="logo">We&#39;re gonna (learn) Hiragana!</h2>

            <div className="dropdown-Container">
              <div className="dropdown-List">
                <button className="dropdown-button" onClick={this.dropdown}>Choose a set of characters</button>
                {this.state.dropdown ? <Dropdown /> : null }
             </div>
            </div>
          </div>
        </div>
      );
    }
}
