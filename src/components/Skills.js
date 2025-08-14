import React from 'react'
import './Style.css';

function Skills() {

  const skills = ["React", "JavaScript", "Python", "Node.js", "SQL"];
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">{skill}</div>
        ))}
      </div>
    </section>
  )
}

export default Skills

