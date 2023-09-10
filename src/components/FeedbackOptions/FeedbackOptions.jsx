import { Component } from 'react';
import { Button } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    return (
      <>
        {this.props.options.map((option, index) => (
          <Button key={index} onClick={this.props.onLeaveFeedback}>
            {option}
          </Button>
        ))}
      </>
    );
  }
}

export default FeedbackOptions;
