import React from 'react';
import { getQuestions } from '../services/triviaAPI';

const numberOfQuestions = 4;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      questionPosition: 0,
    };

    this.getQuestionsApi = this.getQuestionsApi.bind(this);
    this.nestQuestion = this.nestQuestion.bind(this);
  }

  componentDidMount() {
    this.getQuestionsApi();
  }

  async getQuestionsApi() {
    const { response_code: responseCode, results } = await getQuestions();
    console.log('responseCode: ', responseCode);
    this.setState({ results });
  }

  nestQuestion() {
    const { questionPosition } = this.state;
    this.setState({
      questionPosition:
      (questionPosition < numberOfQuestions) ? questionPosition + 1 : numberOfQuestions,
    });
  }

  render() {
    const { results, questionPosition } = this.state;

    return (
      (results.length > 0)
        ? (
          <div>
            <div data-testid="question-category">
              { results[questionPosition].category }
            </div>
            <div data-testid="question-text">{ results[questionPosition].question }</div>
            <div data-testid="answer-options">
              <button type="button" data-testid="correct-answer">
                { results[questionPosition].correct_answer }
              </button>
              <div>
                {
                  results[questionPosition].incorrect_answers.map((index) => (
                    <button
                      type="button"
                      data-testid={ `wrong-answer-${index}` }
                      key={ index }
                    >
                      { index }
                    </button>))
                }
              </div>
            </div>
            <button
              type="button"
              onClick={ () => this.nestQuestion() }
            >
              Próxima
            </button>
          </div>
        )
        : (<div>Carregando</div>)
    );
  }
}

export default Game;
