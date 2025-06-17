import React, { useEffect } from 'react';
import Degree from './Degree';
import Certifications from './Certification';
import { useAppDispatch } from '../../utils/hooks/redux';
import { fetchEducation } from '../../store/actions/education';

const Education: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEducation());
  }, [dispatch]);

  return (
    <div className="sub-section">
      <Degree />
      <Certifications />
    </div>
  );
};

export default Education;
