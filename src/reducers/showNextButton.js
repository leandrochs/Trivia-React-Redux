import { SHOW_NEXT_BUTTON } from '../actions/showNextButton';

const INITIAL_STATE = false;

const nextButtonReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SHOW_NEXT_BUTTON:
    return payload;
  default:
    return state;
  }
};

export default nextButtonReducer;
