import React from 'react';
import { useNavigate } from 'react-router-dom';

const VerifySuccessEmail = () => {
  const navigate = useNavigate();

  return (
    <div className="verify-success-page max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-center">
      <h1 className="text-xl font-bold text-green-600">Email Verified Successfully!</h1>
      <p className="text-gray-500">
        Thank you for verifying your email. You can now log in to your account.
      </p>
      <button
        onClick={() => navigate('/login')}
        className="mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Login
      </button>
    </div>
  );
};

export default VerifySuccessEmail;
