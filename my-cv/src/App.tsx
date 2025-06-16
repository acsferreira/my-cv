import React from 'react';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';
import Summary from './components/Summary';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certifications from './components/Certification';
import Skills from './components/Skills';
import Languages from './components/Languages';

import '@fortawesome/fontawesome-free/css/all.min.css';

import './styles/curriculum.less';

const App: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <ContactInfo />
      <Summary />
      <WorkExperience />
      <div className="container">
        <Education />
        <Certifications />
      </div>
      <div className="container">
        <Skills />
        <Languages />
      </div>
    </div>
  );
};

export default App;
