// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './store'; // Import the global state provider
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import VerifyEmail from './pages/VerifyEmail';
import Layout from './Components/Layout'; // A layout component for consistent styling
import './App.css'; // Global styles
import ProtectedRoute from './Components/ProtectedRoutes';  
import VerifySuccessEmail from './pages/VerifySuccessEmail';

function App() {
  return (

      <Router>
            <StoreProvider>
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/verify-email/:token" element={<VerifyEmail />} />
            <Route path="/verify-success" element={<VerifySuccessEmail />} />
            {/* Protected Routes */}
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

            {/* 404 Page (Optional) */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </Layout>
        </StoreProvider>
      </Router>
   
  );
}

export default App;