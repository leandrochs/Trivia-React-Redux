import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class Avatar extends Component {
  constructor(props) {
    super(props);

    this.state = { emailHash: '' };
  }

  componentDidMount() {
    this.calculateEmailHash();
  }

  calculateEmailHash() {
    const { gravatarEmail } = this.props;
    const emailHash = md5(gravatarEmail).toString();
    this.setState({ emailHash });
  }

  render() {
    const { emailHash } = this.state;
    return (
      <img
        alt="userAvatar"
        data-testid="header-profile-picture"
        src={ `https://www.gravatar.com/avatar/${emailHash}` }
      />
    );
  }
}

const mapStateToProps = ({ player: { gravatarEmail } }) => ({ gravatarEmail });

Avatar.propTypes = {
  gravatarEmail: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Avatar);
