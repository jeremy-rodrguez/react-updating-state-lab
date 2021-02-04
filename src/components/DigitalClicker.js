// Code DigitalClicker Component Here

import React from 'react';

class DigitalClicker extends React.Component {
  constructor() { // This component has an initial state property called timesClicked, which is initially defined as 0.
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({ // Whenever the button is clicked, update the state by incrementing the timesClicked by 1.
      timesClicked: prevState.timesClicked+1
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button> // The component renders out a button with a label that shows the timesClicked value. This means that, at the start, your button should just say 0.
    );
  }
}

export default DigitalClicker;