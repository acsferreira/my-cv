import type { SkillItemProps } from '../../types/skills';
import ProgressBar from '../common/ProgressBar';

const SkillItem = ({ imgSrc, title, name, level, icon }: SkillItemProps) => (
  <div className="skill-row">
    <div className="skill-name">
      {icon ? (
        <i className={icon} title={title ?? name} />
      ) : (
        imgSrc && <img className="flag" src={imgSrc} alt={title} />
      )}
      {name}
    </div>
    <ProgressBar level={level} />
  </div>
);

export default SkillItem;
