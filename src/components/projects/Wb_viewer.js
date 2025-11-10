import React from "react";
import { Link } from "react-router-dom";

export default function ProjectPage() {
  
  const projectData = {
  titleLabel: "Project Title",
  descriptionLabel: "Description",
  detailsLabel: "Project Details",
  technologiesLabel: "Technologies Used",
  screenshotsLabel: "Screenshots"
};

  const project = {
    title: "Chat Reader App",
    description: "A mobile app that reads WhatsApp exported chats and displays them in a clean interface.",
    details: "This project parses WhatsApp exported text files, formats messages and timestamps, and renders them with a simple, readable UI.",
    technologies: ["React Native", "JavaScript", "Expo"],
    screenshots: [
      "/Projects/WB_Viewer/1.jpg",
      "/Projects/WB_Viewer/2.jpg",
      "/Projects/WB_Viewer/3.jpg",
      "/Projects/WB_Viewer/4.jpg",
      "/Projects/WB_Viewer/5.jpg"
    ]
  };
  console.log(projectData.titlelabel);
  

  return (
    <div>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" ,backgroundColor:"#cac8ffff"}}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>{project.title}</h1>
      </div>
      
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" ,background:"#E7E6FF",paddingTop:0}}>
      

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
        <div style={{ display: "flex", gap: "10px",flexWrap:"wrap",alignItems:"center"}}>
          {project.screenshots.map((src, index) => (
            <img 
              key={index} 
              src={src}
              alt={`${index + 1}`} 
              style={{ width: "150px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
            />
          ))}
        </div>
      </section>

      <a href="/Projects/WB_Viewer/W_Converter.apk" download>
  Download W_Converter.apk
      </a>

      <div style={{ marginTop: "30px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#007bff" }}>← Back to Home</Link>
      </div>
    </div>
    </div>
    
  );
}
