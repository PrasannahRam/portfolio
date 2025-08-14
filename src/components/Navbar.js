import React from 'react'
import './Style.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">MyPortfolio</h1>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar