





import { Router, Route, Link, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';


export default class QuizStudy extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };

    }

    render() {
      return(
        <div className="splashScreen">

            <Link className="splashLink" to="/">
              <button className="splashButton">Back to Index</button>
            </Link>
            <p>Nothing here at the moment...</p>


        </div>
      );
    }
}
