import { educationList } from '../utils/constants';
import Section from './Section';

const Education = () => {
  return (
    <Section title="Education">
      {educationList.map((edu, idx) => (
        <div className="education-entry" key={idx}>
          <div>
            <i className={edu.icon}></i>
            <strong>{edu.degree}</strong>
            <br />
            {edu.institution}
            <br />
            {edu.years}
          </div>
        </div>
      ))}
    </Section>
  );
};

export default Education;
