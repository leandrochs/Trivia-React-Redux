import React from 'react';
import PropTypes from 'prop-types';
import AnswearButtons from './AnswearButtons';

class QuestionDisplay extends React.Component {
  render() {
    const { results } = this.props;
    const questionPosition = 0;

    return (
      <div>
        <div data-testid="question-category">
          { results[questionPosition].category }
        </div>
        <div data-testid="question-text">{ results[questionPosition].question }</div>
        <AnswearButtons results={ results } />
      </div>
    );
  }
}

QuestionDisplay.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default QuestionDisplay;
