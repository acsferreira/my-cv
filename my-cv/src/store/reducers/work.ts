import type { Action } from '@reduxjs/toolkit';
import type { IWorkState } from '../../types/work';

interface FetchWorkAction extends Action<'FETCH_WORK'> {
  data: IWorkState;
}

type WorkActions = FetchWorkAction | Action;

const initialState: IWorkState = {
  experience: [],
};

export const workReducer = (
  state: IWorkState = initialState,
  action: WorkActions
): IWorkState => {
  switch (action.type) {
    case 'FETCH_WORK': {
      const data = (action as FetchWorkAction).data;

      return {
        ...state,
        experience: data.experience,
      };
    }
    default:
      return state;
  }
};
