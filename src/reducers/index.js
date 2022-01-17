import { combineReducers } from 'redux';
import playerReducer from './player';
import positionReducer from './questionPosition';
import tokenReducer from './token';
import questionsReducer from './questions';
import nextButtonReducer from './showNextButton';

const rootReducer = combineReducers({
  player: playerReducer,
  token: tokenReducer,
  responseApi: questionsReducer,
  position: positionReducer,
  showNextButton: nextButtonReducer,
});

export default rootReducer;
