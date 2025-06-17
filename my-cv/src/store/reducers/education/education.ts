import type { Action } from '@reduxjs/toolkit';
import type { IEducationState } from '../../../types/education';

interface FetchEducationAction extends Action<'FETCH_EDUCATION'> {
  data: IEducationState;
}

type EducationActions = FetchEducationAction | Action;

const initialState: IEducationState = {
  education: [],
};

export const educationReducer = (
  state: IEducationState = initialState,
  action: EducationActions
): IEducationState => {
  switch (action.type) {
    case 'FETCH_EDUCATION': {
      const data = (action as FetchEducationAction).data;

      return {
        ...state,
        education: data.education,
      };
    }
    default:
      return state;
  }
};
