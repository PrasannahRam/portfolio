import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Wbviewer from './components/projects/Wb_viewer';
import CEUsite from './components/projects/CEU_site';
import MyClassApp from './components/projects/MyClassApp';
import ScrollToTop from './components/Scrolltotop';

export default function App() {
  return (
    <div style={{background:'#1a1a1a'}}>
      <Router>
      <ScrollToTop></ScrollToTop>
      <nav>
        <Link to="/"></Link>
      </nav>

      <Routes>
        <Route path="/Wb_viewer" element={<Wbviewer />} />
        <Route path="/CEU_site" element={<CEUsite />} />
        <Route path="/MyClassApp" element={<MyClassApp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

