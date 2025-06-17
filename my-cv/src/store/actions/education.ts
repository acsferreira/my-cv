import type { Dispatch } from '@reduxjs/toolkit';
import type { IEducation } from '../../types/education';
import { getPeriod } from '../../utils/education';

export const FETCH_EDUCATION = 'FETCH_EDUCATION';

export const fetchEducation = () => async (dispatch: Dispatch) => {
  const response = await fetch('/education.json');
  const result = await response.json();

  const education = result.map((edu: IEducation) => ({
    ...edu,
    period: getPeriod(edu.from as string, edu.to as string),
  }));

  dispatch({
    type: 'FETCH_EDUCATION',
    data: { education },
  });
};
