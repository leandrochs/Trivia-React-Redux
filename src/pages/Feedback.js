import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '../components/Avatar';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.playAgain = this.playAgain.bind(this);
    this.goToRanking = this.goToRanking.bind(this);
  }

  playAgain() {
    const { history } = this.props;

    history.push('/');
  }

  goToRanking() {
    const { history } = this.props;

    history.push('/ranking');
  }

  render() {
    const { name, score = 0, assertions } = this.props;
    const CORRECT_ANSWER = 3;

    return (
      <div data-testid="feedback-text">
        Feedback
        <Avatar />
        <img data-testid="header-profile-picture" alt="profile-pic" />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">{score}</p>
        {assertions < CORRECT_ANSWER && (
          <p data-testid="feedback-text">Could be better...</p>
        )}
        {assertions >= CORRECT_ANSWER && (
          <p data-testid="feedback-text">Well Done!</p>
        )}
        <p data-testid="feedback-total-score">{ score }</p>
        <p data-testid="feedback-total-question">{ assertions }</p>
        <button data-testid="btn-play-again" type="button" onClick={ this.playAgain }>
          Play Again
        </button>
        <button data-testid="btn-ranking" type="button" onClick={ this.goToRanking }>
          Ranking
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  score: state.player.score,
  assertions: state.player.assertions,
});

Feedback.propTypes = {
  name: PropTypes.string,
  score: PropTypes.string,
  assertions: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Feedback);
