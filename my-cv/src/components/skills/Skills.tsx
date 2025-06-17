import React, { useEffect } from 'react';

import Tech from './Tech';
import Languages from './Languages';
import { useAppDispatch } from '../../utils/hooks/redux';
import { fetchSkills } from '../../store/actions/skills';

const Skills: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  return (
    <div className="sub-section">
      <Tech />
      <Languages />
    </div>
  );
};

export default Skills;
