import { QUESTION_POSITION } from '../actions/questionPosition';

const INITIAL_STATE = '0';

const positionReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
  case QUESTION_POSITION:
    return (parseInt(state, 10) + 1);

  default: return state;
  }
};

export default positionReducer;
