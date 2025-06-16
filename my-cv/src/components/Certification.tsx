import { certifications } from '../utils/constants';
import Section from './Section';

const Certifications = () => {
  return (
    <Section title="Certifications">
      <ul>
        {certifications.map((cert, idx) => (
          <li key={idx}>
            <strong>{cert.title}</strong> – {cert.institution} ({cert.year})
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Certifications;
