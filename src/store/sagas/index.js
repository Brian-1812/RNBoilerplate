import { takeLatest } from 'redux-saga/effects';
import * as types from '../Actions/types';

function* mySaga() {
  yield null
  // yield takeLatest(types.GENERAL_ENABLE_LOADER,);
}

export default mySaga