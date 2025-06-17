import type { Dispatch } from '@reduxjs/toolkit';
import type { ISkills } from '../../types/skills';
import { SkillsType } from '../../utils/constants';

export const FETCH_SKILLS = 'FETCH_SKILLS';
export const ADD_SKILL = 'ADD_SKILL';

export const fetchSkills = () => async (dispatch: Dispatch) => {
  const response = await fetch('/skills.json');
  const skills = await response.json();

  dispatch({
    type: 'FETCH_SKILLS',
    data: { skills },
  });
};

export const addLanguage = (language: ISkills) => {
  return {
    type: 'ADD_SKILL',
    skill: { ...language, type: SkillsType.Languages },
  };
};
