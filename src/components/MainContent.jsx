import React from 'react';
import Summary from './Summary';
import Education from './Education';
import Experience from './Experience';

const MainContent = () => {
  return (
    <main className="main-content">
      <Summary />
      <Education />
      <Experience />
    </main>
  );
};

export default MainContent;