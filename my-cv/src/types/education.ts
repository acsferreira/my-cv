import type { EducationType } from '../utils/constants';

export interface IEducationState {
  education: IEducation[];
}

export interface IEducation {
  type: EducationType;
  title: string;
  institution: string;
  location: string;
  icon?: string;
  from: string;
  to: string;
  period: string;
}

export type EducationType = (typeof EducationType)[keyof typeof EducationType];
