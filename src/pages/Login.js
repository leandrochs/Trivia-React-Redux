import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import { playerLogin } from '../actions';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.isValidForm = this.isValidForm.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleLogin() {
    const { dispatch } = this.props;
    dispatch(playerLogin(this.state));
  }

  isValidForm() {
    const { name, email } = this.state;
    return name.length > 0 && email.length > 0;
  }

  render() {
    return (
      <form>
        <Input
          testId="input-player-name"
          id="name"
          label="Nome"
          onChange={ this.handleChange }
          type="text"
        />
        <Input
          testId="input-gravatar-email"
          id="email"
          label="Email"
          onChange={ this.handleChange }
          type="email"
        />
        <input
          data-testid="btn-play"
          disabled={ !this.isValidForm() }
          onClick={ this.handleLogin }
          type="button"
          value="Play"
        />
      </form>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(Login);
