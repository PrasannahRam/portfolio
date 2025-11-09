import React from 'react'
import './Style.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function Projects() {
  const projects = [
    { title: "Whatsapp export chat Viewer", description: "A cool mobile app I built that can read WhatsApp exported chat files and display them in a clean interface that closely replicates the original WhatsApp chat view.", link: "#" },
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
            <Link to={`/Wb_viewer`}>View Project</Link>
          </div>
        ))}
      </div>
      
    </section>

    
  )
}

export default Projects