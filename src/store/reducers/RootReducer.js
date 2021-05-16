import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';

const RootReducer = combineReducers({
  loading: loadingReducer,
});

export default RootReducer;
