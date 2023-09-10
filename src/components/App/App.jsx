import { Component } from 'react';
import { Сentralizer } from './App.styled';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonHandler = e => {
    const option = e.target.textContent;
    this.setState(prevState => ({ [option]: ++prevState[option] }));
  };

  total() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  positivePercentage() {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.total();
    const pos_fbk = this.positivePercentage();
    return (
      <Сentralizer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.buttonHandler}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={pos_fbk}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Сentralizer>
    );
  }
}

export default App;
