


import { Router, Route, Link, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';


export default class QuizStudy extends React.Component {
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
      characters.pop();
      return(
        <div className="splashScreen">

            <Link className="splashLink" to="/">
              <button className="splashButton">Back to Index
              </button>
            </Link>

          <div>
            <div className="titlesIndex">
              <p className="titleHira">Hiragana</p>
              <p className="titleRoma">Romaji</p>
              <p className="titlePro">Pronunciation</p>
            </div>
              {characters.map((line, idx) => (
            <ul key={idx} className="charIndex">
              <img className="index-img" src={line.jChar}></img>
              <p>{line.eChar}</p>
              <p className="charPro">{line.pChar}</p>
            </ul>
              ))}
          </div>

          <Link className="quizLink"
                to={`/` + this.props.route.path + `/quiz`}>
                <button className="quizToLink">When you're ready, click here
                </button>
                </Link>

        </div>
      );
    }
}
