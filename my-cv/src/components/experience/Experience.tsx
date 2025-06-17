import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux';
import { fetchWork } from '../../store/actions/work';

import Section from '../common/Section';

const Experience: React.FC = () => {
  const dispatch = useAppDispatch();

  const { experience } = useAppSelector(state => state.work);

  useEffect(() => {
    dispatch(fetchWork());
  }, [dispatch]);

  return (
    <>
      <Section title="Work Experience">
        {experience.map((job, idx) => (
          <div key={idx}>
            <div className="job-title">
              <i className={job.icon}></i>
              <strong>{job.title}</strong> —
              <a href={job.companyUrl} target="_blank">
                {job.company}
              </a>
              , {job.location}
              <div className="period">{job.period}</div>
            </div>
            <p className="job-desc">{job.description}</p>
          </div>
        ))}
      </Section>
    </>
  );
};

export default Experience;
