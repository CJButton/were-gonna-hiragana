

import Kana from './kanadata';

import { Router, Route, Link, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

export default class QuizStudy extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        characterIdx: 0,
        card1: "card1",
        card2: "card2",
        card3: "card3",
        card4: "card4"
      };
      this.toggleFlip1 = this.toggleFlip1.bind(this);
      this.toggleFlip2 = this.toggleFlip2.bind(this);
      this.toggleFlip3 = this.toggleFlip3.bind(this);
      this.toggleFlip4 = this.toggleFlip4.bind(this);


    }

    // in es6, we need to use componentWillReceiveProps
    // this needs to set the randomized cards as well
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

    toggleFlip1() {
      this.setState({card1: "card1 flipped"});
    }

    toggleFlip2() {
      this.setState({card2: "card2 flipped"});
    }

    toggleFlip3() {
      this.setState({card3: "card3 flipped"});
    }

    toggleFlip4() {
      this.setState({card4: "card4 flipped"});
    }


    render() {
      console.log(this.state.props);
      return(
        <div className="splashScreen">

            <Link className="splashLink" to="/">
              <button className="splashButton">Back to Index</button>
            </Link>
          <div className="quizImageArea">
          <img className="quizChar"
               src={this.state.props[this.state.characterIdx].jChar} />
          </div>



         <div className="cardContainerTop">

          <div className={this.state.card1} onClick={this.toggleFlip1}>
            <div className="card1 front">{this.state.props[this.state.characterIdx].eChar}</div>
            <div className="card1 back">O</div>
          </div>
        </div>

          <div className={this.state.card2} onClick={this.toggleFlip2}>
            <div className="card2 front">{this.state.props[this.state.characterIdx].eChar}</div>
            <div className="card2 back">O</div>
          </div>

        <div className="cardContainerBottom">
          <div className={this.state.card3} onClick={this.toggleFlip3}>
            <div className="card3 front">{this.state.props[this.state.characterIdx].eChar}</div>
            <div className="card3 back">O</div>
          </div>

          <div className={this.state.card4} onClick={this.toggleFlip4}>
            <div className="card4 front">{this.state.props[this.state.characterIdx].eChar}</div>
            <div className="card4 back">O</div>
          </div>
        </div>


        </div>

      );
    }
}
// <div className="card1Front">1</div>
// <div className="card1Back">2</div>
