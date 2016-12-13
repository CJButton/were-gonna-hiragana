
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
          <div className="sun"></div>
          <div className="curve">
          <h3 className="splashTextTop">Learn to read Japanese!</h3>
          <p className="splashText">
            Visiting Japan? Business? Have an interest in anime or manga? Or maybe just want to learn a fascinating language? Then you will want to learn 'hiragana'!
            After learning these characters, you can understand signs, menus, and have a greater experience while in Japan! Let&#39;s get started!
          </p></div>

            <div className="logoContainer">
              <h2 className="logo">We&#39;re gonna (learn) Hiragana!</h2>
            </div>
            <div className="dropdown-Container">

              <div className="dropdown-List">
                <button className="dropdown-button" onClick={this.dropdown}>Choose a set of characters to practice.</button>
                {this.state.dropdown ? <Dropdown /> : null }
             </div>
            </div>
          </div>
        </div>
      );
    }
}

// <div className="splashHi">
// <img className="splashHi2" src="http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479352414/ka_uocs0v.png"></img></div>
