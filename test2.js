


import { Router, Route, Link } from 'react-router';
import React from 'react';

export default class Tester2 extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
      return(
        <div>
        <p>And this is test2.js</p>
        <button><Link to="/">Back to Index</Link></button>
        </div>
      );
    }
}
