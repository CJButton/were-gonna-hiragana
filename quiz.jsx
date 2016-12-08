



import Kana from './kanadata';

import { Router, Route, Link, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

export default class QuizStudy extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    // in es6, we need to use componentWillReceiveProps
    // instead of something like
    componentWillReceiveProps() {
      let kana = new Kana;
      let characterSetName = this.props.route.path.slice(0, -5);
      console.log(characterSetName);
      // wow! this is worth writing about in our production readme as
      // a very interesting point!
      let characterSet = kana[characterSetName]();
      console.log(characterSet);
      return {

      };
    }

    render() {

      return(
        <div className="splashScreen">

            <Link className="splashLink" to="/">
              <button className="splashButton">Back to Index</button>
            </Link>




        </div>
      );
    }
}
