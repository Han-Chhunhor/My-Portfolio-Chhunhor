import React from "react";
import Education from "../components/Education";
import Experience from "../components/Experience";

const Resume = () => {
  return (
    <>
      <section className="section">
        <div className="summary-box">
          <h2>Resume & CV</h2>
          <p>
            Download my latest CV to learn more about my skills, projects, and
            experience.
          </p>
          <a
            href="/cv.pdf"
            download="Chhunhor-Han-CV.pdf"
            className="download-cv-btn"
          >
            Download CV (PDF)
          </a>
        </div>
      </section>
      <Education />
      <Experience />
    </>
  );
};

export default Resume;
