// src/pages/PrivateHome.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [navigate]);

  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload(); // Refresh to show public home
  };

  return (
    <div style={styles.container}>
      <h2>Welcome, {user?.name || 'User'}!</h2>
      <p>You are now logged in.</p>
      <button style={styles.button} onClick={handleLogout}>Logout</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    textAlign: 'center',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    background: '#fefefe',
  },
  button: {
    padding: '10px 20px',
    marginTop: '20px',
    background: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default PrivateHome;
