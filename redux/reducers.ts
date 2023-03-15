import {SET_ACTION} from './actions';

const initialState = {
  action: 'Todos',
};

export function userReducer(
  state = initialState,
  action: {type: string; payload: string},
) {
  switch (action.type) {
    case SET_ACTION:
      return {...state, action: action.payload};
    default:
      return state;
  }
}
