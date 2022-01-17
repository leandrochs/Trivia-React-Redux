import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { questionPosition } from '../actions/questionPosition';

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
      document.querySelectorAll('.bt')
        .forEach((bt) => {
          bt.disabled = true;
        });
    }
  }

  render() {
    const { dispatch } = this.props;
    const { seconds } = this.state;
    return (
      <section>
        {
          (seconds < TIME_LIMIT)
            ? (<div>{seconds}</div>)
            : (
              <button
                type="button"
                onClick={ () => dispatch(questionPosition()) }
              >
                Next
              </button>)
        }
      </section>
    );
  }
}

Timer.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(Timer);
