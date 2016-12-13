


import { Router, Route, Link, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';


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
        <div className="splashScreen splashIndex">

            <Link className="splashLink" to="/">
              <button className="splashButton">Back to Index
              </button>
            </Link>


          <div>
            <div className="titlesIndex">

              <p data-tip data-for='titleHira' className="titleHira">Hiragana</p>

              <p data-tip data-for="titleRomaji" className="titleRoma">Romaji</p>
              <p data-tip data-for="titlePronun"
                className="titlePro">Pronunciation</p>

            </div>
              {characters.map((line, idx) => (

            <ul key={idx} className={`charIndex ` + `line` + idx}>
              <li data-tip data-for='titleHira' className="charIdx hira">
                <img className="index-img" src={line.jChar}></img></li>

              <li data-tip data-for="titleRomaji"
                className="charIdx chars romaji">{line.eChar}</li>

              <li data-tip data-for="titlePronun"
                className="charIdx chars pro">{line.pChar}</li>
            </ul>
              ))}
          </div>

          <ReactTooltip id='titleHira' type='info'>
            <span>These are hiragana.<br></br>
          Memorize these characters along<br></br> with their Romaji readings.</span>
          </ReactTooltip>

          <ReactTooltip id="titleRomaji" type='info'>
            <span>This is how the hiragana
              character <br></br>is written using English letters.</span>
          </ReactTooltip>

          <ReactTooltip id="titlePronun" type='info'>
            <span>This is how the hiragana
              character <br></br>is pronounced!</span>
          </ReactTooltip>

          <Link className="quizLink"
                to={`/` + this.props.route.path + `/quiz`}>
                <button className="quizToLink">When you're ready, click here
                </button>
                </Link>

        </div>
      );
    }
}

// className="charIndex"
