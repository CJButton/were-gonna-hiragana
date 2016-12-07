


import { Router, Route, Link } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';


export default class Tester2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        props: this.props.route.props
      };
      console.log(props.route.props);
    }

    render() {
      let that = this;
      let characters = Object.keys(this.props.route.props).map(function(key) {
        return that.props.route.props[key];
      });
      console.log(characters);


      return(
        <div className="splashScreen">
          <div className="tester">
            {function() {
              return <p>Does this appear?</p>;
            }}
          </div>

        <ul className="ulThing">
        </ul>
        <button><Link to="/">Back to Index</Link></button>
        </div>
      );
    }
}
// {characters.forEach((item) => {
//   return <div>Tester for .each</div>;
//   })};
// <img src={characters[0].jChar}></img>
// <p>{characters[0].eChar}</p>
