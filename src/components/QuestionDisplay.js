import React from 'react';
import PropTypes from 'prop-types';
import AnswearButtons from './AnswearButtons';

class QuestionDisplay extends React.Component {
  render() {
    const { result } = this.props;

    return (
      <div>
        <div data-testid="question-category">
          { result.category }
        </div>
        <div data-testid="question-text">{ result.question }</div>
        <AnswearButtons result={ result } />
      </div>
    );
  }
}

QuestionDisplay.propTypes = {
  result: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default QuestionDisplay;
