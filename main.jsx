

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Kana from './kanadata';
import Tester from './test';
import quizStudy from './test2';
import quiz from './quiz';

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
    <Route path="kCharacters" component={quizStudy} props={allKana.kCharacters()}/>
      <Route path="kCharacters/quiz" component={quiz}/>
    <Route path="sCharacters" component={quizStudy} props={allKana.sCharacters()}/>
    <Route path="vCharacters" component={quizStudy} props={allKana.sCharacters()}/>
    <Route path="tCharacters" component={quizStudy} props={allKana.sCharacters()}/>
    <Route path="nCharacters" component={quizStudy} props={allKana.sCharacters()}/>
    <Route path="hCharacters" component={quizStudy} props={allKana.sCharacters()}/>
    <Route path="mCharacters" component={quizStudy} props={allKana.sCharacters()}/>
    <Route path="yCharacters" component={quizStudy} props={allKana.sCharacters()}/>
    <Route path="rCharacters" component={quizStudy} props={allKana.sCharacters()}/>
    <Route path="specialCharacters" component={quizStudy} props={allKana.sCharacters()}/>
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
