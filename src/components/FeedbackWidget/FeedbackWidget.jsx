import { Component } from 'react';
import { Plea, Button } from './FeedbackWidget.styled';

class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(prevState => ({ good: ++prevState.good }));
  };

  addNeutral = () => {
    this.setState(prevState => ({ neutral: ++prevState.neutral }));
  };

  addBad = () => {
    this.setState(prevState => ({ bad: ++prevState.bad }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Plea>Please leave feedback</Plea>
        <Button onClick={this.addGood}>Good</Button>
        <Button onClick={this.addNeutral}>Neutral</Button>
        <Button onClick={this.addBad}>Bad</Button>
        <p>Statistics</p>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </>
    );
  }
}

export default FeedbackWidget;
