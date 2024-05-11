import React from 'react';
import './Projects.css'; // Ensure this CSS file exists and is correctly linked

const projects = [
  { name: 'Project A', description: 'A detailed description of Project A, including its goals, technologies used, and outcomes.' },
  { name: 'Project B', description: 'A detailed description of Project B, including its goals, technologies used, and outcomes.' },
  { name: 'Project C', description: 'A detailed description of Project C, including its goals, technologies used, and outcomes.' }
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
