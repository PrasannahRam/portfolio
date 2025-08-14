import React from 'react'
import './Style.css';

function Projects() {
  const projects = [
    { title: "Project One", description: "A cool web app I built.", link: "#" },
    { title: "Project Two", description: "Another awesome project.", link: "#" },
  ];
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects