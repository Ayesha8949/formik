// src/pages/Login.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [navigate]);

  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser && values.email === savedUser.email && values.password === savedUser.password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form style={styles.form}>
          <label>Email:</label>
          <Field name="email" type="email" style={styles.input} />
          <ErrorMessage name="email" component="div" style={styles.error} />

          <label>Password:</label>
          <Field name="password" type="password" style={styles.input} />
          <ErrorMessage name="password" component="div" style={styles.error} />

          <button type="submit" style={styles.button}>Login</button>
        </Form>
      </Formik>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    border: '1px solid #ddd',
    padding: '30px',
    borderRadius: '10px',
    background: '#f9f9f9',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    fontSize: '13px',
  },
  button: {
    padding: '10px',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px',
  },
};

export default Login;
