import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../..';
import type { IEducation } from '../../../types/education';
import { EducationType } from '../../../utils/constants';

const selectAllEducation = (state: RootState) => state.education.education;

export const selectDegreeEducation = createSelector(
  [selectAllEducation],
  education =>
    education.filter((edu: IEducation) => edu.type === EducationType.Degree)
);

export const selectCertificationEducation = createSelector(
  [selectAllEducation],
  education =>
    education.filter(
      (edu: IEducation) => edu.type === EducationType.Certification
    )
);
