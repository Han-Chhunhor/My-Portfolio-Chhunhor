import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    { id: 2, title: "E-commerce Website(My Shop)", name: "Han Chhunhor" },

  ];

  return (
    <section className="section">
      <h2>My Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id} className="portfolio-card">
            <h3>{project.title}</h3>
            <p>{project.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;