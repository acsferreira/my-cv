import { workExperience } from '../utils/constants';
import Section from './Section';

const WorkExperience = () => {
  return (
    <Section title="Work Experience">
      {workExperience.map((job, idx) => (
        <div key={idx}>
          <div className="job-title">
            <i className={job.icon}></i>
            <strong>{job.title}</strong> —{' '}
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
  );
};

export default WorkExperience;
