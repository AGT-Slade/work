// src/components/Login.js

import React, { useState} from 'react';
import { loginUser } from '../services/api'; // Assume this is your API service
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { set } from 'mongoose';
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || '/profile';
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const user = await loginUser({email, password});
              navigate(redirectTo);
      } catch (error) {
        setError('Invalid email or password');
      }
    };

    
  
   // Inline styles as objects
   const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto', // Center the form
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for the container
    },
    errorMessage: {
      color: 'red',
      fontSize: '0.875rem',
      marginBottom: '15px', // Space between error and form inputs
    },
    input: {
      width: '100%',
      padding: '12px',
      fontSize: '1rem',
      marginBottom: '15px', // Space between inputs
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#4CAF50', // Green background
      color: 'white',
      fontSize: '1.2rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#45a049', // Slightly darker green on hover
    },
  };

  return (
    <div style={styles.container}>
      <h1>Log In</h1>
      {error && <p style={styles.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button
        type="submit"
        style={styles.button}
        onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
      >
        Login
      </button>
      </form>
      <p style={styles.signupLink}>
        Don't have an account? <Link to="/signup" style={styles.link}>Sign Up</Link>
      </p>
      <p style={styles.forgotPasswordLink}>
        Forgot your password? <Link to="/forgot-password" style={styles.link}>Reset it here</Link>
      </p>
    </div>
  );
  };

  export default Login;