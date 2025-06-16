import { skills } from '../utils/constants';
import Section from './Section';
import SkillItem from './SkillItem';

const Skills = () => {
  return (
    <Section title="Technical Skills">
      {skills.map(skill => (
        <SkillItem key={skill.name} {...skill} />
      ))}
    </Section>
  );
};

export default Skills;
