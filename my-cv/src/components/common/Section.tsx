import type { SectionProps } from '../../types/section';

const Section = ({ title, children, className }: SectionProps) => (
  <div className={'section' + (className ? ` ${className}` : '')}>
    {title && <h2 className="section-title">{title}</h2>}
    {children}
  </div>
);

export default Section;
