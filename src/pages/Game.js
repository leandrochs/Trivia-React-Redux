import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { questionsResponse } from '../actions/questions';
import QuestionDisplay from '../components/QuestionDisplay';
import { getQuestions } from '../services/triviaAPI';
import Timer from '../components/Timer';
import Header from '../components/Header';
import NextButton from '../components/NextButton';

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
    const { results, showNextButton, position } = this.props;

    return (
      <div>
        <div>
          { (position === 4) ? <Redirect to="/feedback" /> : null }
        </div>
        <div>
          {
            (results.length > 0)
              ? (
                <section>
                  <Header />
                  <QuestionDisplay result={ results[position] } />
                  { (showNextButton) ? <NextButton /> : <Timer /> }
                </section>
              )
              : (
                <div>Carregando</div>
              )
          }
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  results: state.responseApi.questions,
  showNextButton: state.showNextButton,
  position: state.position,
});

export default connect(mapStateToProps)(Game);
