import { Component } from 'react';
import FeedbackWidget from './FeedbackWidget';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    pos_fbk: 0,
  };

  buttonHandler = e => {
    if (e.target.textContent === 'Good') {
      this.setState(prevState => ({ good: ++prevState.good }));
    } else if (e.target.textContent === 'Neutral') {
      this.setState(prevState => ({ neutral: ++prevState.neutral }));
    } else if (e.target.textContent === 'Bad') {
      this.setState(prevState => ({ bad: ++prevState.bad }));
    }
    this.setState(prevState => ({ total: ++prevState.total }));
    this.setState(prevState => ({
      pos_fbk: Math.round((prevState.good / prevState.total) * 100),
    }));
  };

  render() {
    return (
      <FeedbackWidget state={this.state} onLeaveFeedback={this.buttonHandler} />
    );
  }
}

export default App;
