import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showNextButton } from '../actions/showNextButton';

const SECONDS = 1000;
const TIME_LIMIT = 30;

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 1,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, SECONDS);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.seconds >= TIME_LIMIT) {
      const { dispatch } = this.props;
      dispatch(showNextButton(true));

      document.querySelectorAll('.bt')
        .forEach((bt) => {
          bt.disabled = true;
        });
    }
  }

  render() {
    const { seconds } = this.state;
    return <div className="timer">{seconds}</div>;
  }
}

Timer.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(Timer);
