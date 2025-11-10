import React from 'react';
import './Style.css';

function Skills() {
  // Updated skills with levels
  const skills = [
    { name: "React / React Native", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "Node.js / Express", level: "Intermediate" },
    { name: "SQL / MySQL", level: "Intermediate" },
    { name: "C++", level: "Beginner to Intermediate" },
    { name: "Machine Learning", level: "Beginner" },
    { name: "Deep Learning", level: "Beginner" },
    { name: "HTML & CSS", level: "Advanced" },
    { name: "Raspberry Pi / Electronics", level: "Beginner to Intermediate" },
    { name: "Mobile App Deployment (APK, Expo)", level: "Intermediate" }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
