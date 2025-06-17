import type { Action } from '@reduxjs/toolkit';
import type { ISkillsState } from '../../../types/skills';

interface FetchSkillsAction extends Action<'FETCH_SKILLS'> {
  data: ISkillsState;
}

type SkillsActions = FetchSkillsAction | Action;

const initialState: ISkillsState = {
  skills: [],
};

export const skillsReducer = (
  state: ISkillsState = initialState,
  action: SkillsActions
): ISkillsState => {
  switch (action.type) {
    case 'FETCH_SKILLS': {
      const data = (action as FetchSkillsAction).data;

      return {
        ...state,
        skills: data.skills,
      };
    }

    case 'ADD_SKILL': {
      const skill = (
        action as { type: string; skill: ISkillsState['skills'][0] }
      ).skill;

      return {
        ...state,
        skills: [...state.skills, skill],
      };
    }
    default:
      return state;
  }
};
