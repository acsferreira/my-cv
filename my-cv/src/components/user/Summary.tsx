import { useAppSelector } from '../../utils/hooks/redux';
import Section from '../common/Section';

const Summary = () => {
  const { summary } = useAppSelector(state => state.user);

  return (
    <Section title="Professional Summary">
      <p>{summary}</p>
    </Section>
  );
};

export default Summary;
