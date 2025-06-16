import type { SectionProps } from '../types/section';

const Section = ({ title, children }: SectionProps) => (
  <div className="section">
    {title && <h2 className="section-title">{title}</h2>}
    {children}
  </div>
);

export default Section;
