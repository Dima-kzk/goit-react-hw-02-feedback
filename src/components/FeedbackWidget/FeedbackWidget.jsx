import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification/Notification';
import { Сentralizer } from './FeedbackWidget.styled';

class FeedbackWidget extends Component {
  render() {
    const { good, neutral, bad, total, pos_fbk } = this.props.state;

    return (
      <Сentralizer>
        {/* <Plea>Please leave feedback</Plea> */}
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={this.props.onLeaveFeedback}
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

export default FeedbackWidget;
