import {Dispatch} from 'redux';

export const SET_NAME = 'SET_NAME';
export const SET_AGE = 'SET_AGE';

export const setName = (name: String) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_NAME,
    payload: name,
  });
  return;
};

export const setAge = (age: Number) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_AGE,
    payload: age,
  });
};
