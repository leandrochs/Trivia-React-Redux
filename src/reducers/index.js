import { combineReducers } from 'redux';
import playerReducer from './player';
import positionReducer from './questionPosition';
import questionsReducer from './questions';
import tokenReducer from './token';

const rootReducer = combineReducers({
  player: playerReducer,
  token: tokenReducer,
  responseApi: questionsReducer,
  position: positionReducer,
});

export default rootReducer;
