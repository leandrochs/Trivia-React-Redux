import { QUESTIONS_RESPONSE } from '../actions/questions';

const INITIAL_STATE = {
  questions: [],
};

const questionsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case QUESTIONS_RESPONSE:
    return {
      ...state,
      questions: payload,
    };
  default:
    return state;
  }
};

export default questionsReducer;
