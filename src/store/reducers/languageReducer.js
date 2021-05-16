import * as types from '../Actions/types';

const initialState = {
  language: null,
  allLanguages: {
    codes: ['en', 'uz'],
    names: ['English', "O'zbekcha"],
  },
};
const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    case types.ADD_LANGUAGE:
      return {
        ...state,
        allLanguages: {
          codes: state.allLanguages.codes.push(action.payload.code),
          names: state.allLanguages.names.push(action.payload.name),
        },
      };
    default:
      return state;
  }
};

export default languageReducer;
