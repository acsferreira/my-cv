import React from 'react';
import Experience from './experience/Experience';
import Skills from './skills/Skills';
import UserInfo from './user/UserInfo';
import Education from './education/Education';

const Curriculum: React.FC = () => {
  return (
    <div className="page">
      <UserInfo />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
};

export default Curriculum;
