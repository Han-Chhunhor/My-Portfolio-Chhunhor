import React from 'react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      {educationData.map((item) => (
        <div key={item.id} className="edu-item">
          <h4>{item.degree}</h4>
          <p className="meta">{item.period} | {item.school}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;