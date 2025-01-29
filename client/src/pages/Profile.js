// src/components/Profile.js
import React, { useEffect, useReducer } from 'react';
import { getProfile } from '../services/api';

// Reducer function
const profileReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'SUCCESS':
      return { ...state, profile: action.payload, loading: false };
    case 'ERROR':
      return { ...state, error: 'Failed to load profile', loading: false };
    default:
      return state;
  }
};

// Initial state
const initialState = { profile: null, loading: true, error: null };

const Profile = () => {
  const [{ profile, loading, error }, dispatch] = useReducer(profileReducer, initialState);

  useEffect(() => {
    const fetchProfile = async () => {
      dispatch({ type: 'LOADING' });
      try {
        const data = await getProfile();
        dispatch({ type: 'SUCCESS', payload: data });
      } catch {
        dispatch({ type: 'ERROR' });
      }
    };

    fetchProfile();
  }, []);

  // Short-circuit rendering based on loading or error
  if (loading) return <div></div>;
  if (error) return <div>{error}</div>;

  const { name, email, role, isVerified } = profile || {};

  
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto', // Center the content
      backgroundColor: '#f9f9f9', // Light background color
      borderRadius: '8px', // Rounded corners
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow effect
    },
    heading: {
      textAlign: 'center', // Center-align the heading
      color: '#333', // Dark text color
      fontSize: '2rem',
      marginBottom: '20px', // Spacing below the heading
    },
    paragraph: {
      fontSize: '1.1rem',
      marginBottom: '10px', // Spacing between paragraphs
      color: '#555', // Slightly lighter gray for text
    },
    status: {
      fontWeight: 'bold', // Make the status stand out
     color: isVerified ? 'green' : 'red', // Green for verified, red for not verified
    }
  
  };


  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Profile</h1>
      <p style={styles.paragraph}>Name: {name}</p>
      <p style={styles.paragraph}>Email: {email}</p>
      <p style={styles.paragraph}>Role: {role}</p>
      <p style={{ ...styles.paragraph, ...styles.status }}>
        Status: {isVerified ? 'Verified' : 'Not Verified'}
      </p>  
    </div>
  );

};

export default Profile;

