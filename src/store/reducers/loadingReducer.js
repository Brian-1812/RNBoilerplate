import * as types from '../actions/types';

const initalState = {
  generalLoading: false,
};

const loadingReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.GENERAL_ENABLE_LOADER:
      return { ...state, generalLoading: true };
    case types.GENERAL_DISABLE_LOADER:
      return { ...state, generalLoading: false };
    default:
      return state;
  }
};

export default loadingReducer;
