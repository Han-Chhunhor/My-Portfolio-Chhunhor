import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Summary = () => {
  return (
    <section id="summary" className="section">
      <h2>Summary</h2>
      <div className="summary-box">
        <h3>{personalInfo.name}</h3>
        <p>{personalInfo.summary}</p>
        <ul>
          <li>{personalInfo.address}</li>
          <li>{personalInfo.phone}</li>
          <li>{personalInfo.email}</li>
        </ul>
      </div>
    </section>
  );
};

export default Summary;