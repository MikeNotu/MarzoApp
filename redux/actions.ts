import {Dispatch} from 'redux';

export const SET_ACTION = 'SET_ACTION';

export const setAction = (name: String) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_ACTION,
    payload: name,
  });
  return;
};
