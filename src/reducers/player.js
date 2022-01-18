import { ASSERTIONS } from '../actions/assertions';
import { PLAYER_LOGIN } from '../actions/player';
import { SCORE } from '../actions/score';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const playerReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case PLAYER_LOGIN:
    return {
      ...state,
      name: payload.name,
      gravatarEmail: payload.email,
    };
  case ASSERTIONS:
    return {
      ...state,
      assertions: (parseInt(state.assertions, 10) + 1),
    };
  case SCORE:
    return {
      ...state,
      score: (parseInt(state.score, 10) + payload.score),
    };
  default: return state;
  }
};

export default playerReducer;
