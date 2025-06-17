import { formatMonthYear } from './common';

export const getPeriod = (from: string, to?: string): string => {
  if (!to) return `${formatMonthYear(from)} - Present`;

  return `${formatMonthYear(from)} - ${formatMonthYear(to)}`;
};
