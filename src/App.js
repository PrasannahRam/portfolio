import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; 
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Wb_viewer from './components/projects/Wb_viewer';

export default function App() {
  return (
    <div>
      <Router>
        

      <nav>
        <Link to="/"></Link>
      </nav>

      <Routes>
        <Route path="/Wb_viewer" element={<Wb_viewer />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

