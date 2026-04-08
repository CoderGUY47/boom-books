import React from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md space-y-4">
          <h1 className="text-9xl font-black text-error drop-shadow-sm">404</h1>
          <h2 className="text-4xl font-bold text-base-content">Page Not Found</h2>
          <p className="text-lg text-base-content/70 pb-6">
            Oops! The page you're looking for doesn't exist, has been moved, or is temporarily unavailable.
          </p>
          <Link 
            to="/"
            className="btn btn-success text-white shadow-lg shadow-success/30 hover:-translate-y-1 transition-transform"
          >
            <Home className="w-5 h-5" />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;