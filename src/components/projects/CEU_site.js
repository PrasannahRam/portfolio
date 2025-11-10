import React from "react";
import { Link } from "react-router-dom";

export default function CEU_site() {

  const projectData = {
    titleLabel: "Project Title",
    descriptionLabel: "Description",
    detailsLabel: "Project Details",
    technologiesLabel: "Technologies Used",
    screenshotsLabel: "Screenshots"
  };

  const project = {
    title: "CEU Exam Results Portal",
  description: "A web portal developed for the CEU Association in Batticaloa, Sri Lanka, allowing students to check their seminar exam results online. The portal fetches data securely from a SQL database and displays it in a clean, user-friendly interface.",
  details: "In addition to the portal, I created a Python-based admin application (executable) that connects to the SQL server. This tool enables the admin team to easily update, manage, and maintain exam data with a user-friendly interface, streamlining the exam management process.",
  technologies: ["React", "Node.js", "Express.js", "MySQL", "Python"],
    screenshots: [
      "/Projects/CEU_site/1.jpg",
      "/Projects/CEU_site/2.jpg",
      "/Projects/CEU_site/3.jpg",
      "/Projects/CEU_site/4.jpg",
      
    ],
    screenshots_admin:[
        "/Projects/CEU_site/5.png",
      "/Projects/CEU_site/6.png",
      "/Projects/CEU_site/7.png",
      "/Projects/CEU_site/8.png"]
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif", background: "#E7E6FF" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>{project.title}</h1>

      <section style={{ marginBottom: "20px",paddingBottom:"0px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{projectData.descriptionLabel}</h2>
        <p>{project.description}</p>
      </section>

      <section style={{ marginBottom: "20px",paddingBottom:"0px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{projectData.detailsLabel}</h2>
        <p>{project.details}</p>
      </section>

      <section style={{ marginBottom: "20px",paddingBottom:"0px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{projectData.technologiesLabel}</h2>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "20px" ,paddingBottom:"0px"}}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{projectData.screenshotsLabel}</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
          {project.screenshots.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Screenshot ${index + 1}`}
              style={{ width: "150px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
            />
          ))}
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center",marginTop:"10px" }}>
          {project.screenshots_admin.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Screenshot ${index + 1}`}
              style={{ width: "350px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
            />
          ))}
        </div>
      </section>

      <section>
        <a href="https://ceu-exams-results.vercel.app/">Click Here To See The Live Site</a>
      </section>

      <div style={{ marginTop: "30px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#007bff" }}>← Back to Home</Link>
      </div>
    </div>
  );
}
