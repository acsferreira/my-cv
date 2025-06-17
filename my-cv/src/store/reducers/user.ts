import type { Action } from '@reduxjs/toolkit';
import type { IUserState } from '../../types/user';

interface FetchUserAction extends Action<'FETCH_USER'> {
  data: IUserState;
}

type UserActions = FetchUserAction | Action;

const initialState: IUserState = {
  name: '',
  profession: '',
  location: '',
  nationality: '',
  email: '',
  phone: '',
  github: '',
  linkedin: '',
  maritalStatus: '',
  birthday: '',
  summary: '',
};

export const userReducer = (
  state: IUserState = initialState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case 'FETCH_USER': {
      return {
        ...state,
        ...(action as FetchUserAction).data,
      };
    }
    default:
      return state;
  }
};
