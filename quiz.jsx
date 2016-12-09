

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
        card4: "card4",
        value1: "",
        value2: "",
        value3: "",
        value4: ""
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

      let groupIdx = charactersArray.pop();

      this.setState({props: charactersArray,
                     groupIdx: groupIdx});
      this.uniqueCards(charactersArray);
    }

    correctAnswer() {
      let newIdx = this.state.characterIdx += 1;
      if (newIdx > this.state.props.length) {
        
      }

      this.setState({characterIdx: newIdx,
                     card1: "card1",
                     card2: "card2",
                     card3: "card3",
                     card4: "card4"
      });
      this.uniqueCards(this.state.props);
    }

    toggleFlip1() {
      this.setState({card1: "card1 flipped"});
      if (this.state.props[this.state.characterIdx].eChar === this.state.value1.eChar) {
      setTimeout(() => { this.correctAnswer(); }, 2000);
      }
    }

    toggleFlip2() {
      this.setState({card2: "card2 flipped"});
      if (this.state.props[this.state.characterIdx].eChar === this.state.value2.eChar) {
        setTimeout(() => {this.correctAnswer(); }, 2000);
      }
    }

    toggleFlip3() {
      this.setState({card3: "card3 flipped"});
      if (this.state.props[this.state.characterIdx].eChar === this.state.value3.eChar) {
        setTimeout(() => {this.correctAnswer(); }, 2000);
      }
    }

    toggleFlip4() {
      this.setState({card4: "card4 flipped"});
      if (this.state.props[this.state.characterIdx].eChar === this.state.value4.eChar) {
        setTimeout(() => {this.correctAnswer(); }, 2000);
      }
    }

    shuffle(arr) {
      // this is the Fisher Yates algorithm
      for (var i = arr.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
      }
      this.setState({
        value1: arr[0],
        value2: arr[1],
        value3: arr[2],
        value4: arr[3]
      });
    }

    uniqueCards(arr) {

      let cardArray = [];
      let nums = [this.state.characterIdx];
      cardArray.push(arr[this.state.characterIdx]);
      while (nums.length < 4) {
        let int = Math.floor((Math.random() * arr.length));

        if (!nums.includes(int)) {
          nums.push(int);
          cardArray.push(arr[int]);
        }
      }
      this.shuffle(cardArray);
    }


    render() {
      console.log(this.state);
      return(
        <div className="splashScreen">

            <Link className="splashLink" to="/">
              <button className="splashButton">Back to Index</button>
            </Link>
          <div className="quizImageArea">
          <img className="quizChar"
               src={this.state.props[this.state.characterIdx].jChar} />
          </div>


          <div className="quizTop">

            <div className="cardContainerTop">

             <div className={this.state.card1} onClick={this.toggleFlip1}>
               <div className="card1 front">{this.state.value1.eChar}</div>
               <div className="card1 back">O</div>
             </div>


            <div className={this.state.card2} onClick={this.toggleFlip2}>
              <div className="card2 front">{this.state.value2.eChar}</div>
              <div className="card2 back">O</div>
            </div>

           </div>

        </div>

        <div className="quizBottom">

        <div className="cardContainerBottom">

          <div className={this.state.card3} onClick={this.toggleFlip3}>
            <div className="card3 front">{this.state.value3.eChar}</div>
            <div className="card3 back">O</div>
          </div>

          <div className={this.state.card4} onClick={this.toggleFlip4}>
            <div className="card4 front">{this.state.value4.eChar}</div>
            <div className="card4 back">O</div>
          </div>

        </div>
        </div>


        </div>

      );
    }
}
