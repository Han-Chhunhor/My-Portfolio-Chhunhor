import React from 'react';

const ProjectDetail = () => {
  // ទិន្នន័យគម្រោង (អ្នកអាចកែប្រែតាមចិត្ត)
  const project = {
    title: "E-commerce Website(My Shop)",
    name: "Han Chhunhor",
    category: "Web design",
    client: "ACC Company",
    date: "15 july, 2026",
    url: "my-shop-steel-beta.vercel.app/",
    description: "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius."
  };

  return (
    <div className="project-detail-page">
      {/* Header */}
      <div className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-name">{project.name}</p>
      </div>

      {/* Info Grid */}
      <div className="project-info-grid">
        <div className="project-info-item">
          <span className="info-label">Category</span>
          <span className="info-value">{project.category}</span>
        </div>
        <div className="project-info-item">
          <span className="info-label">Client</span>
          <span className="info-value">{project.client}</span>
        </div>
        <div className="project-info-item">
          <span className="info-label">Project Date</span>
          <span className="info-value">{project.date}</span>
        </div>
        <div className="project-info-item">
          <span className="info-label">Project URL</span>
          <span className="info-value">
            <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer">
              {project.url}
            </a>
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="project-description">
        <h3>Project Description</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

// 👇 ត្រូវតែមានបន្ទាត់នេះ!
export default ProjectDetail;