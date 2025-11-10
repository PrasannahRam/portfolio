import React from "react";
import { Link } from "react-router-dom";

export default function MyClassApp() {
  const projectData = {
    titleLabel: "Project Title",
    descriptionLabel: "Description",
    detailsLabel: "Project Details",
    technologiesLabel: "Technologies Used",
    screenshotsLabel: "Screenshots"
  };

  const project = {
    title: "My Class App",
    description: "An app designed for individual tutors to manage their classes efficiently.",
    details: "This app allows tutors to mark student attendance, record payment information, and manage individual student details separately. The interface is simple and user-friendly, making it easy to track all aspects of individual classes.",
    technologies: ["React Native", "JavaScript", "Expo", "React Navigation"],
    screenshots: [
      "/Projects/MyClassApp/1.jpg", 
      "/Projects/MyClassApp/2.jpg",
      "/Projects/MyClassApp/3.jpg",
        "/Projects/MyClassApp/4.jpg"

    ]
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif", background: "#E7E6FF" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>{project.title}</h1>

       <section style={{ marginBottom: "2px" ,paddingBottom:"0px"}}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{projectData.descriptionLabel}</h2>
        <p>{project.description}</p>
      </section>

      <section style={{ marginBottom: "20px",paddingBottom:"0px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{projectData.detailsLabel}</h2>
        <p>{project.details}</p>
      </section>

      <section style={{ marginBottom: "20px" ,paddingBottom:"0px"}}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{projectData.technologiesLabel}</h2>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{projectData.screenshotsLabel}</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
          {project.screenshots.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Screenshot ${index + 1}`}
              style={{ width: "200px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
            />
          ))}
        </div>
      </section>

      

      <div style={{ marginTop: "30px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#007bff" }}>← Back to Home</Link>
      </div>
    </div>
  );
}
