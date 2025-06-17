import { selectTechnologiesSkills } from '../../store/reducers/skills/skillsSelectors';
import { useAppSelector } from '../../utils/hooks/redux';
import Section from '../common/Section';
import SkillItem from './SkillItem';

const Skills = () => {
  const skills = useAppSelector(selectTechnologiesSkills);

  return (
    <Section title="Technical Skills">
      {skills.map(skill => (
        <SkillItem
          key={skill.name}
          {...skill}
          level={
            typeof skill.level === 'number' ? skill.level : Number(skill.level)
          }
        />
      ))}
    </Section>
  );
};

export default Skills;
