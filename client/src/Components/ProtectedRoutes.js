// src/components/ProtectedRoute.js

import { Navigate, useLocation } from 'react-router-dom';

import {jwtDecode} from 'jwt-decode';

const ProtectedRoute = ({ children }) => {
  const location = useLocation(); // Get the current location

  
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const isTokenExpired = decodedToken.exp * 1000 < Date.now();
      if (isTokenExpired) {
        console.log("Token expired");
        localStorage.removeItem("token");
        return <Navigate to="/login" state={{ from: location }} replace />;
      }

      return children; // Render the protected component
    } catch (error) {
      console.error("Invalid token:", error);
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }


 

};

export default ProtectedRoute;