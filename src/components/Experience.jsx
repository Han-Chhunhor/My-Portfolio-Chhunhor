import React from 'react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2>Professional Experience</h2>
      {experienceData.map((job) => (
        <div key={job.id} className="exp-item">
          <h4>{job.title}</h4>
          <p className="meta">{job.period} | {job.company}</p>
          <ul>
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;