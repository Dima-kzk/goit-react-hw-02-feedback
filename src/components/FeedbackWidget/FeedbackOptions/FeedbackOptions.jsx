import { Component } from 'react';
import { Button } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    return (
      <>
        {this.props.options.map((option, index) => (
          <Button key={index} onClick={this.props.onLeaveFeedback}>
            {option.replace(option[0], option[0].toUpperCase())}
          </Button>
        ))}
      </>
    );
  }
}

export default FeedbackOptions;
