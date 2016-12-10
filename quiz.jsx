

import Kana from './kanadata';

import { Router, Route, Link, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';


// card1 toggles card to flip/unflip
// value1 stores current cards object
// cardBack1 is specifically the
export default class QuizStudy extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        characterIdx: 0,
        showLink: false,
        card1: "card1",
        card2: "card2",
        card3: "card3",
        card4: "card4",
        value1: "",
        value2: "",
        value3: "",
        value4: "",
        cardBack1: "",
        cardBack2: "",
        cardBack3: "",
        cardBack4: ""
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

      let nextGroup = charactersArray.pop();

      this.setState({props: charactersArray,
                     next: nextGroup});
      this.uniqueCards(charactersArray);
    }

    correctAnswer() {
      let newIdx = this.state.characterIdx + 1;

      if (newIdx < this.state.props.length) {

        // turns all of the cards back over to show the face
        this.setState({
          characterIdx: newIdx,
          card1: "card1",
          card2: "card2",
          card3: "card3",
          card4: "card4"
        });

        this.uniqueCards(this.state.props);
      } else if (newIdx >= this.state.props.length) {
        this.setState({
          showLink: true
        });
      }
    }

    // cardBack() {
    //   this.setState({
    //     cardBack1: this.state.value1
    //   })
    // }

    toggleFlip1() {
      this.setState({card1: "card1 flipped"});
      if (this.state.props[this.state.characterIdx].eChar === this.state.value1.eChar) {
        setTimeout(() => { this.correctAnswer(); }, 1250);
      }
    }

    toggleFlip2() {
      this.setState({card2: "card2 flipped"});
      if (this.state.props[this.state.characterIdx].eChar === this.state.value2.eChar) {
        setTimeout(() => {this.correctAnswer(); }, 1250);
      }
    }

    toggleFlip3() {
      this.setState({card3: "card3 flipped"});
      if (this.state.props[this.state.characterIdx].eChar === this.state.value3.eChar) {
        setTimeout(() => {this.correctAnswer(); }, 1250);
      }
    }

    toggleFlip4() {
      this.setState({card4: "card4 flipped"});
      if (this.state.props[this.state.characterIdx].eChar === this.state.value4.eChar) {
        setTimeout(() => {this.correctAnswer(); }, 1250);
      }
    }

    shuffle(arr) {
      // this is the Fisher Yates algorithm
      // the four unique cards are shuffled
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

      setTimeout(() => {this.cardBack(); }, 500);
    }

    // specifically updates the backs of each card; not directly
    // linked to the front of the cards now
    cardBack() {
      this.setState({
        cardBack1: this.markDecider(this.state.value1.eChar),
        cardBack2: this.markDecider(this.state.value2.eChar),
        cardBack3: this.markDecider(this.state.value3.eChar),
        cardBack4: this.markDecider(this.state.value4.eChar)

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

    // setTimeout(() => {
    //   this.markDecider(cardBack); }, 5000);

    // one possible idea to fix the issue with updating too quickly:
    // have this linked to state, and update the state with a setTimeout
    // function (downside is the state gets even bigger)
    markDecider(cardFace) {
      if (this.state.props[this.state.characterIdx].eChar === cardFace) {
        return ("O");
      } else {
        return ("X");
      }
    }
    // setTimeout(() => {
    //   this.markDecider(cardBack); }, 5000);


    render() {
      // the backs of the cards are directly linked to the front of the
      // cards; when the front is reset, the back instaly resets as well
      // we need to decouple them in the state
      return(
        <div className="splashScreen">

            <Link className="splashLink" to="/">
              <button className="splashButton">Back to Index</button>
            </Link>
          <div className="quizImageArea">
          <img className="quizChar"
               src={this.state.props[this.state.characterIdx].jChar} />
          </div>

          {this.state.showLink ? <Link to={`/` + this.state.next}>
            <button>Next Quiz!</button></Link>: null}

          <div className="quizTop">

            <div className="cardContainerTop">

             <div className={this.state.card1} onClick={this.toggleFlip1}>
               <div className="card1 front">{this.state.value1.eChar}</div>
                <div className={`card1 back ` + this.state.cardBack1}>
                     {this.state.cardBack1}</div>

             </div>


            <div className={this.state.card2} onClick={this.toggleFlip2}>
              <div className="card2 front">{this.state.value2.eChar}</div>
              <div className={`card2 back ` + this.state.cardBack2}>
                    {this.state.cardBack2}</div>
            </div>

           </div>

        </div>

        <div className="quizBottom">

        <div className="cardContainerBottom">

          <div className={this.state.card3} onClick={this.toggleFlip3}>
            <div className="card3 front">{this.state.value3.eChar}</div>
            <div className={`card3 back ` + this.state.cardBack3}>
                    {this.state.cardBack3}</div>
          </div>

          <div className={this.state.card4} onClick={this.toggleFlip4}>
            <div className="card4 front">{this.state.value4.eChar}</div>
            <div className={`card4 back ` + this.state.cardBack4}>
                    {this.state.cardBack4}</div>
          </div>

        </div>
        </div>


        </div>

      );
    }
}
// <div className="card1 back"></div>
