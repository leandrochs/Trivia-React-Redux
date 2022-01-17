import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { questionPosition } from '../actions/questionPosition';
import { showNextButton } from '../actions/showNextButton';

class NextButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { dispatch } = this.props;
    dispatch(questionPosition());

    dispatch(showNextButton(false));
  }

  render() {
    return (
      <div>
        <button
          data-testid="btn-next"
          type="button"
          onClick={ this.onClick }
        >
          Next
        </button>
      </div>
    );
  }
}

NextButton.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(NextButton);
