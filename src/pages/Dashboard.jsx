import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>Welcome, {user.fullName}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please login to access the dashboard</p>
          <button onClick={() => navigate('/login')}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;