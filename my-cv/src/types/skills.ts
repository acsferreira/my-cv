import type { SkillsType } from '../utils/constants';

export type SkillItemProps = {
  name: string;
  level: number; // percentage (0-100)
  title?: string;
  icon?: string;
  imgSrc?: string;
};

export interface ISkillsState {
  skills: ISkills[];
}

export interface ISkills {
  type: SkillsType;
  name: string; // Name of the skill
  icon?: string; // FontAwesome icon class
  imgSrc?: string; // URL to an image (e.g., flag for languages)
  level: string | number; // Skill level (A1, A2, B1, B2, C1, C2 for languages; 0-100 for others)
  title?: string; // Optional title for the image
}

export type SkillsType = (typeof SkillsType)[keyof typeof SkillsType];
