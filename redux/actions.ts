import {Dispatch} from 'redux';

export const SET_ACTION = 'SET_ACTION';
export const SET_MOVIMIENTO = 'SET_MOVIMIENTO';

export const setAction = (name: String) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_ACTION,
    payload: name,
  });
  return;
};

export const setMovimiento = (movimiento: Object) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_MOVIMIENTO,
    payload: movimiento,
  });
  return;
};
