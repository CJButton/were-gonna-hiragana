

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Kana from './kanadata';
import Tester from './test';
import Tester2 from './test2';

var App = React.createClass({
  render: function () {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
});

const allKana = new Kana;

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Tester}/>
    <Route path="test2" component={Tester2} props={allKana.kCharacters()}/>
    <Route path="test3" component={Tester2} props={allKana.sCharacters()}/>
  </Route>
);

// this will replace the current element with whatever we define in Root
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Router history={hashHistory}>
      {routes}
    </Router>,
      document.getElementById('root'));
});
