import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import saveToLocalStorage from '../services/saveToLocalStorage';
import getFromLocalStorage from '../services/getFromLocalStorage';

class Avatar extends Component {
  constructor(props) {
    super(props);

    this.state = { picture: '' };
  }

  componentDidMount() {
    this.calculateEmailHash();
  }

  calculateEmailHash() {
    const { name, gravatarEmail } = this.props;
    const emailHash = md5(gravatarEmail).toString();
    const picture = `https://www.gravatar.com/avatar/${emailHash}`;
    const ranking = getFromLocalStorage('ranking');
    const newRanking = [
      ...ranking
        .filter((player) => player.name !== name || player.picture !== picture),
    ];
    newRanking.push({ name, picture, score: 0 });
    saveToLocalStorage('ranking', newRanking);
    this.setState({ picture });
  }

  render() {
    const { picture } = this.state;
    return (
      <img
        alt="userAvatar"
        data-testid="header-profile-picture"
        src={ picture }
      />
    );
  }
}

const mapStateToProps = ({ player: { name, gravatarEmail } }) => ({
  name,
  gravatarEmail,
});

Avatar.propTypes = {
  name: PropTypes.string,
  gravatarEmail: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Avatar);
