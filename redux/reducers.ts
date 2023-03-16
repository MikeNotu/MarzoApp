import {SET_ACTION, SET_MOVIMIENTO} from './actions';

const initialState = {
  action: 'Todos',
  movimiento: {
    createdAt: '',
    product: '',
    points: 0,
    image: '',
    is_redemption: false,
    id: 0,
  },
};

export function userReducer(
  state = initialState,
  action: {type: string; payload: string},
) {
  switch (action.type) {
    case SET_ACTION:
      return {...state, action: action.payload};
    case SET_MOVIMIENTO:
      return {...state, movimiento: action.payload};
    default:
      return state;
  }
}
