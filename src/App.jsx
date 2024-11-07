import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './Components/Home';
import Home from './Components/Home';
import Blue from './Components/Blue';
import Red from './Components/Red';

function App() {
  return (
    <div id="container">
      <Router>
        <div id="navbar" className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/blue" className="nav-link">Blue</Link>
          <Link to="/red" className="nav-link">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}


export default App;
