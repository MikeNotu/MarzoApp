import {SET_ACTION, SET_MOVIMIENTO} from './actions';

const initialState = {
  action: 'Todos',
  product: '',
};

export function userReducer(
  state = initialState,
  action: {type: string; payload: string},
) {
  switch (action.type) {
    case SET_ACTION:
      return {...state, action: action.payload};
    case SET_MOVIMIENTO:
      return {...state, product: action.payload};
    default:
      return state;
  }
}
