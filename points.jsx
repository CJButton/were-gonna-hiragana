
import React from 'react';

export default class PointsCounters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="pointsCounterContainer">
        <div className="pointsCounter">
          <div>
            <p>Here are some words to see if they show up.</p>
          </div>
        </div>
      </div>
    );
  }
}
