// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h2>Welcome to Our Website!</h2>
      <p>Please login or signup to continue.</p>
      <div style={styles.buttonGroup}>
        <Link to="/login"><button style={styles.button}>Login</button></Link>
        <Link to="/signup"><button style={styles.button}>Signup</button></Link>
      </div>
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
  buttonGroup: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  button: {
    padding: '10px 20px',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home;
