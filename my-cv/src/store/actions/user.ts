import type { Dispatch } from '@reduxjs/toolkit';

export const FETCH_USER = 'FETCH_USER';

export const fetchUser = () => async (dispatch: Dispatch) => {
  const response = await fetch('/user.json');
  const data = await response.json();
  dispatch({
    type: 'FETCH_USER',
    data,
  });
};
