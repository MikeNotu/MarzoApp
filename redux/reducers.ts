import {SET_NAME, SET_AGE} from './actions';

const initialState = {
  name: '',
  age: 0,
};

export function userReducer(
  state = initialState,
  action: {type: string; payload: string},
) {
  switch (action.type) {
    case SET_NAME:
      return {...state, name: action.payload};
    case SET_AGE:
      return {...state, age: action.payload};
    default:
      return state;
  }
}
