const { SAVE_TOKEN } = require('../actions/token');

const INITIAL_STATE = '';

const tokenReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SAVE_TOKEN:
    return payload;
  default:
    return state;
  }
};

export default tokenReducer;
