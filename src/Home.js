// Home.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/'); 
    }
  }, [navigate]);

  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // logout
    navigate('/'); // wapas login page pe bhejna
  };

  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
