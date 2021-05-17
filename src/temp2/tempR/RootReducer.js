import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import languageReducer from './languageReducer'

const RootReducer = combineReducers({
  loading: loadingReducer,
  language: languageReducer,
});

export default RootReducer;
