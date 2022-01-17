import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { questionsResponse } from '../actions/questions';
import QuestionDisplay from '../components/QuestionDisplay';
import { getQuestions } from '../services/triviaAPI';
import Timer from '../components/Timer';
import Header from '../components/Header';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.getQuestionsApi = this.getQuestionsApi.bind(this);
  }

  componentDidMount() {
    this.getQuestionsApi();
  }

  async getQuestionsApi() {
    const { dispatch } = this.props;

    const { results } = await getQuestions();
    dispatch(questionsResponse(results));
  }

  render() {
    const { results } = this.props;

    return (
      (results.length > 0)
        ? (
          <section>
            <Header />
            <QuestionDisplay result={ results[0] } />
            <Timer />
          </section>
        )
        : (<div>Carregando</div>)

    );
  }
}

Game.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  results: state.responseApi.questions,
});

export default connect(mapStateToProps)(Game);
