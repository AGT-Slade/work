// src/services/api.js
import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api', // Base URL for your backend API
  headers: {
    'Content-Type': 'application/json', // Default headers
  },
});

// Add a request interceptor to include the auth token in headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Get the token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Add the token to the request headers
  }
  return config;
});

// Add a response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response, // Return the response if successful
  (error) => {
    // Handle errors globally
    if (error.response) {
      // The request was made, but the server responded with a non-2xx status code
      console.error('API Error:', error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('API Error: No response received');
      return Promise.reject({ message: 'No response received from the server' });
    } else {
      // Something happened in setting up the request
      console.error('API Error:', error.message);
      return Promise.reject({ message: error.message });
    }
  }
);


// User-related endpoints
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    localStorage.setItem('token', response.data.token); // Save the token to localStorage
    return response.data.user; // Return the user data
  } catch (error) {
    throw error;
  }
};

export const getProfile = async () => {
  try {
    const response = await api.get('/users/profile');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (updates) => {
  try {
    const response = await api.put('/users/profile', updates);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    localStorage.removeItem('token'); // Remove the token from localStorage
  } catch (error) {
    throw error;
  }
};

// Example: Fetching data from another endpoint
export const fetchData = async () => {
  try {
    const response = await api.get('/data');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async (emailData) => {
  try {
    const response = await api.post('/auth/forgot-password', emailData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (resetData) => {
  try {
    const response = await api.post('/auth/reset-password', resetData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


// Export the API instance
export default api;