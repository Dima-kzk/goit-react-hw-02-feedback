import { Component } from 'react';
import { Plea } from './Section.styled';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <Plea>{title}</Plea>
        {children}
      </>
    );
  }
}

export default Section;
