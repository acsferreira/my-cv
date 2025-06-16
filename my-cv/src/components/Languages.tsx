import { languages } from '../utils/constants';
import Section from './Section';
import SkillItem from './SkillItem';

const Languages = () => {
  return (
    <Section title="Languages">
      {languages.map(lang => (
        <SkillItem key={lang.name} {...lang} />
      ))}
    </Section>
  );
};

export default Languages;
