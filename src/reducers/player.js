import { PLAYER_LOGIN } from '../actions/player';

const INITIAL_STATE = {
  name: '',
  assertions: '0',
  score: '0',
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
  default: return state;
  }
};

export default playerReducer;
