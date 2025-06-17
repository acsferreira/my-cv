import { formatYear } from './common';

export const getPeriod = (from: string, to?: string): string => {
  if (!to) return `${formatYear(from)}`;

  return `${formatYear(from)} - ${formatYear(to)}`;
};
