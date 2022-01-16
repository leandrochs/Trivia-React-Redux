import React from 'react';
import QuestionDisplay from '../components/QuestionDisplay';
import { getQuestions } from '../services/triviaAPI';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };

    this.getQuestionsApi = this.getQuestionsApi.bind(this);
  }

  componentDidMount() {
    this.getQuestionsApi();
  }

  async getQuestionsApi() {
    const { results } = await getQuestions();
    this.setState({ results });
  }

  render() {
    const { results } = this.state;

    return (
      (results.length > 0)
        ? (<QuestionDisplay results={ results } />) : (<div>Carregando</div>)
    );
  }
}

export default Game;
