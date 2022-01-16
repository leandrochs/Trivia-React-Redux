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
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.randomAnswers();
  }

  onClick() {
    document.querySelector('.correct-answer').style.border = '3px solid rgb(6, 240, 15)';
    document.querySelectorAll('.wrong-answer')
      .forEach((button) => { button.style.border = '3px solid rgb(255, 0, 0)'; });
  }

  randomAnswers() {
    const { result } = this.props;

    const {
      incorrect_answers: incorrectAnswers,
      correct_answer: correctAnswer,
    } = result;

    const answers = [correctAnswer, ...incorrectAnswers];

    const makeButtons = answers.map((answer, index) => ({
      position: parseInt((Math.random() * RAN_INT), 10) + 1,
      button: (
        <button
          type="button"
          key={ index }
          className={ (index === 0) ? 'correct-answer bt' : 'wrong-answer bt' }
          data-testid={ (index === 0) ? 'correct-answer' : `wrong-answer-${index - 1}` }
          onClick={ this.onClick }
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
