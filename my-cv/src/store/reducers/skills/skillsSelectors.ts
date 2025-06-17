import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../..';
import type { ISkills } from '../../../types/skills';
import { SkillsType } from '../../../utils/constants';

const selectAllSkills = (state: RootState) => state.skills.skills;

export const selectLanguagesSkills = createSelector([selectAllSkills], skills =>
  skills.filter((edu: ISkills) => edu.type === SkillsType.Languages)
);

export const selectTechnologiesSkills = createSelector(
  [selectAllSkills],
  skills =>
    skills.filter((edu: ISkills) => edu.type === SkillsType.Technologies)
);
