

import Kana from './kanadata';

import { Router, Route, Link, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

export default class QuizStudy extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        characterIdx: 0
      };
    }

    // in es6, we need to use componentWillReceiveProps
    componentWillMount() {
      let kana = new Kana;
      let characterSetName = this.props.route.path.slice(0, -5);
      // wow! this is worth writing about in our production readme as
      // a very interesting point!
      let characterSet = kana[characterSetName]();
      let charactersArray = Object.keys(characterSet).map((key) => {
        return (characterSet[key]);
      });
      this.setState({props: charactersArray});
    }

    render() {
      return(
        <div className="splashScreen">

            <Link className="splashLink" to="/">
              <button className="splashButton">Back to Index</button>
            </Link>
          <div className="quizImageArea">
          <img className="quizChar" src={this.state.props[this.state.characterIdx].jChar} />
          </div>


        </div>
      );
    }
}
