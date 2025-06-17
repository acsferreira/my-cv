import { selectDegreeEducation } from '../../store/reducers/education/educationSelectors';
import { useAppSelector } from '../../utils/hooks/redux';
import Section from '../common/Section';

const Degree = () => {
  const education = useAppSelector(selectDegreeEducation);

  return (
    <Section title="Education">
      {education.map((edu, idx) => (
        <div className="education-entry" key={idx}>
          <div>
            <i className={edu.icon}></i>
            <strong>{edu.title}</strong>
            <br />
            {edu.institution}
            <br />
            {edu.period}
          </div>
        </div>
      ))}
    </Section>
  );
};

export default Degree;
