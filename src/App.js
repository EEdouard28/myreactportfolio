import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Router component subject to router */}
      <Router>
        <Header />
        {/* Routes component wrap route component defining elements that are conditionally rendered depending on endpoint */}
        <Routes>
          {/* End point and component renders to endpoint */}
          <Route path="/" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
