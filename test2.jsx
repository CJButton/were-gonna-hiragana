


import { Router, Route, Link } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';


export default class Tester2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        props: this.props.route.props
      };
    }

    render() {
      let that = this;
      let characters = Object.keys(this.props.route.props).map(function(key) {
        return that.props.route.props[key];
      });
      console.log(characters);

      return(
        <div className="splashScreen">

          <div>
            <div className="titlesIndex">
              <p className="titleHira">Hiragana</p>
              <p className="titleRoma">Romaji</p>
              <p className="titlePro">Pronunciation</p>
            </div>
              {characters.map((line) => (
            <ul className="charIndex">
              <img className="index-img" src={line.jChar}></img>
              <p>{line.eChar}</p>
              <p className="charPro">{line.pChar}</p>
            </ul>
              ))}
          </div>

        <button><Link to="/">Back to Index</Link></button>

        </div>
      );
    }
}
// <p>How about this</p>
// {characters.forEach((item) => {
//   return <div>Tester for .each</div>;
//   })};
// <img src={characters[0].jChar}></img>
// <p>{characters[0].eChar}</p>
