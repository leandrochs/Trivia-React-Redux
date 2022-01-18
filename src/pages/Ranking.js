import React from 'react';
import ButtonToLogin from '../components/ButtonToLogin';

class Ranking extends React.Component {
  render() {
    return (
      <div>
        <h2 data-testid="ranking-title">RANKING</h2>
        <ButtonToLogin />
      </div>
    );
  }
}

export default Ranking;
