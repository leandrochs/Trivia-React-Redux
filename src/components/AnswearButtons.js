import React from 'react';
import PropTypes from 'prop-types';

const RAN_INT = 100;

class AnswearButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [],
    };

    this.randomAnswers = this.randomAnswers.bind(this);
  }

  componentDidMount() {
    this.randomAnswers();
  }

  randomAnswers() {
    const { results } = this.props;
    console.log(results);
    const {
      incorrect_answers: incorrectAnswers,
      correct_answer: correctAnswer,
    } = results[0];

    const answers = [correctAnswer, ...incorrectAnswers];

    const makeButtons = answers.map((answer, index) => ({
      position: parseInt((Math.random() * RAN_INT), 10) + 1,
      button: (
        <button
          type="button"
          key={ index }
          data-testid={ (index === 0) ? 'correct-answer' : `wrong-answer-${index - 1}` }
        >
          { answer }
        </button>),
    }));

    makeButtons.sort((a, b) => a.position - b.position);

    this.setState({ buttons: makeButtons });
  }

  render() {
    const { buttons } = this.state;

    return (
      <div>
        <div data-testid="answer-options">
          { buttons.map(({ button }) => button) }
        </div>
      </div>
    );
  }
}

AnswearButtons.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default AnswearButtons;
