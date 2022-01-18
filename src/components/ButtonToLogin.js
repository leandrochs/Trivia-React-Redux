import React from 'react';
import { Link } from 'react-router-dom';

class ButtonToLogin extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Link to="/">
        <button type="button" data-testid="btn-go-home">Início</button>
      </Link>
    );
  }
}

export default ButtonToLogin;
