// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        {/* Navigation buttons */}
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/signup" style={{ marginRight: '10px' }}>
            <button>Signup</button>
          </Link>
          <Link to="/">
            <button>Login</button>
          </Link>
        </nav>

        {/* Routing Setup */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
