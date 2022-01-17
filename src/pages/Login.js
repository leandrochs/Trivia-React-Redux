import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import { playerLogin } from '../actions';
import { getUserToken } from '../services/triviaAPI';
import saveToLocalStorage from '../services/saveToLocalStorage';
import { saveToken } from '../actions/token';

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

  async handleLogin() {
    const { dispatch, history } = this.props;
    const token = await getUserToken();
    this.setState({ token }, () => {
      dispatch(playerLogin(this.state));
      dispatch(saveToken(token));
      saveToLocalStorage('token', token);
      history.push('/game');
    });
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
        <Link to="/configuration">
          <button data-testid="btn-settings" type="button">Configurações</button>
        </Link>

      </form>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(Login);
