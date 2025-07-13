// src/pages/Signup.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [navigate]);

  const initialValues = { name: '', email: '', password: '' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
  });

  const onSubmit = (values) => {
    localStorage.setItem('user', JSON.stringify(values));
    alert('Signup successful!');
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h2>Signup</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form style={styles.form}>
          <label>Name:</label>
          <Field name="name" type="text" style={styles.input} />
          <ErrorMessage name="name" component="div" style={styles.error} />

          <label>Email:</label>
          <Field name="email" type="email" style={styles.input} />
          <ErrorMessage name="email" component="div" style={styles.error} />

          <label>Password:</label>
          <Field name="password" type="password" style={styles.input} />
          <ErrorMessage name="password" component="div" style={styles.error} />

          <button type="submit" style={styles.button}>Signup</button>
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
    background: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px',
  },
};

export default Signup;
