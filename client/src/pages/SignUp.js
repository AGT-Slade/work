// src/pages/SignUpPage.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';

// Define validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Send sign-up request to the backend
      const response = await registerUser( {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      console.log('Sign-up successful:', response.data);

      // Redirect to VerifyEmail page after successful sign-up
      navigate('/verify-email');
    } catch (error) {
      console.error('Sign-up failed:', error.response?.data?.message || error.message);
    }
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto', // Center the form on the page
      padding: '20px',
      backgroundColor: '#f4f4f4', // Light background
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      textAlign: 'center',
      fontSize: '2rem',
      color: '#333',
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box', // Ensure padding does not affect width
    },
    button: {
      width: '100%',
      padding: '10px',
      fontSize: '1.2rem',
      backgroundColor: '#4CAF50', // Green background for the button
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      fontSize: '0.875rem',
      marginTop: '5px',
    },
  };

  return (
    <div style={styles.container} className="signup-page">
      <h1 style={styles.heading}>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input style={styles.input} type="text" {...register('name')} />
          {errors.name && <p style={styles.error}>{errors.name.message}</p>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input style={styles.input} type="email" {...register('email')} />
          {errors.email && <p style={styles.error}>{errors.email.message}</p>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input style={styles.input} type="password" {...register('password')} />
          {errors.password && <p style={styles.error}>{errors.password.message}</p>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Confirm Password</label>
          <input style={styles.input} type="password" {...register('confirmPassword')} />
          {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" style={styles.button}>Sign Up</button>
        <p style={styles.loginLink}>
        Already have an account? <Link to="/login" style={styles.link}>Log In</Link>
      </p>
      </form>
    </div>
  );
};

export default SignUp;