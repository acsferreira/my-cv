import { selectCertificationEducation } from '../../store/reducers/education/educationSelectors';
import { useAppSelector } from '../../utils/hooks/redux';
import Section from '../common/Section';

const Certifications = () => {
  const certifications = useAppSelector(selectCertificationEducation);

  return (
    <Section title="Certifications">
      <ul>
        {certifications.map((cert, idx) => (
          <li key={idx}>
            <strong>{cert.title}</strong> – {cert.institution} ({cert.period})
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Certifications;
