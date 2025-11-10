import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
  return (
    <div>
       <Navbar />
      <div style={{ maxWidth: "900px",borderRadius:"10px", margin: "0 auto",marginBottom:-50, padding: "20px", fontFamily: "Arial, sans-serif", background: "#E7E6FF" }}>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

     


      <Footer />
    </div>

  )
}
