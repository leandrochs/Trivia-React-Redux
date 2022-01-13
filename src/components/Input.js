import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      id,
      label,
      onChange,
      testId,
      type,
    } = this.props;

    return (
      <label htmlFor={ id }>
        { label }
        <input
          data-testid={ testId }
          id={ id }
          name={ id }
          onChange={ onChange }
          type={ type }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  testId: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default Input;
