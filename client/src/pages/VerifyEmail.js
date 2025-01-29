import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
  const { token } = useParams(); // Capture the token from the URL
  const [status, setStatus] = useState('loading'); // 'loading', 'success', 'error'
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Verify the token with the backend
        await axios.get(`/api/auth/verify-email/${token}`);
        setStatus('success');
        setTimeout(() => navigate('/verify-success'), 2000); // Redirect after success
      } catch (error) {
        setStatus('error');
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="verify-email-page max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-center">
      {status === 'loading' && (
        <div>
          <h1 className="text-xl font-bold">Verifying your email...</h1>
          <p className="text-gray-500">Please wait while we verify your email address.</p>
        </div>
      )}

      {status === 'error' && (
        <div>
          <h1 className="text-xl font-bold text-red-600">Invalid or Expired Token</h1>
          <p className="text-gray-500">
            The verification link is invalid or has expired. Please try registering again.
          </p>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
