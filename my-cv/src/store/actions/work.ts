import type { Dispatch } from '@reduxjs/toolkit';
import type { IWork } from '../../types/work';
import { getPeriod } from '../../utils/work';

export const FETCH_WORK = 'FETCH_WORK';

export const fetchWork = () => async (dispatch: Dispatch) => {
  const response = await fetch('/work.json');
  const result = await response.json();

  const experience = result.map((job: IWork) => ({
    ...job,
    period: getPeriod(job.from as string, job.to as string),
  }));

  dispatch({
    type: 'FETCH_WORK',
    data: { experience },
  });
};
