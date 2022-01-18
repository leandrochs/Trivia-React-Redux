import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '../components/Avatar';

class Feedback extends Component {
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
