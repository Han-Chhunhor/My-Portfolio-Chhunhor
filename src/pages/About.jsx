import React from 'react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section className="section">
      <h2>About Me</h2>
      <div className="summary-box">
        <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
          {personalInfo.summary}
        </p>
        <p style={{ marginTop: '15px' }}>
          <strong>📍 ទីកន្លែងកំណើត៖</strong> {personalInfo.address}
        </p>
        <p>
          <strong>📞 ទូរស័ព្ទ៖</strong> {personalInfo.phone}
        </p>
        <p>
          <strong>📧 អ៊ីមែល៖</strong> {personalInfo.email}
        </p>
      </div>
    </section>
  );
};

export default About;