import React from 'react'
import './Style.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Have a project in mind? Let’s work together!</p>
      <a href="mailto:youremail@example.com" className="btn">Send Email</a>
    </section>
  )
}

export default Contact