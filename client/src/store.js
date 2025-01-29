import React, { createContext, useReducer, useEffect } from 'react';

// Initial state
export const initialState = {
  user: {
    name: '',
    email: '',
    isVerified: false,
    role: 'user',
    createdAt: null,
  },
  isAuthenticated: false, // Tracks if the user is logged in
  loading: true, // Start with loading as `true` during initialization
  error: null, // Holds error messages
};

// Reducer function
export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload, // Update user data
        isAuthenticated: true, // Set authenticated to true
        loading: false, // Stop loading
      };
    case 'LOGOUT':
      return {
        ...state,
        user: initialState.user, // Reset user data
        isAuthenticated: false, // Set authenticated to false
        loading: false, // Stop loading
      };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload, // Merge updated profile data
        },
        loading: false, // Stop loading
      };
    case 'LOADING':
      return { ...state, loading: action.payload };
    case 'ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

// Context
export const StoreContext = createContext();

// Provider component
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Simulate user check
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (user && token) {
      // Simulate API call or token validation (if needed)
      setTimeout(() => {
        dispatch({ type: 'LOGIN', payload: user });
        console.log('User found in localStorage');
      }, 500); // Simulate delay
    } else {
      console.log('No user found in localStorage');
      dispatch({ type: 'LOADING', payload: false }); // Stop loading
    }
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
