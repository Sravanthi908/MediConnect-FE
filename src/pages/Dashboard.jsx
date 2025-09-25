import React from 'react';
import { useAuth } from '../context/AuthContext';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container dashboard-page">
      <div className="dashboard-header">
        <h1>Welcome, {user?.name}</h1>
        <p>Manage your healthcare appointments and preferences</p>
      </div>
      
      <div className="dashboard-grid">
        <Card className="dashboard-card">
          <div className="card-header">
            <h3>Upcoming Appointments</h3>
            <Badge variant="primary">2</Badge>
          </div>
          <div className="card-content">
            <p>You have 2 appointments scheduled</p>
            <Button variant="outline">View All</Button>
          </div>
        </Card>
        
        <Card className="dashboard-card">
          <div className="card-header">
            <h3>Saved Hospitals</h3>
            <Badge variant="secondary">3</Badge>
          </div>
          <div className="card-content">
            <p>You have 3 hospitals in your cart</p>
            <Button variant="outline">View Cart</Button>
          </div>
        </Card>
        
        <Card className="dashboard-card">
          <div className="card-header">
            <h3>Medical Records</h3>
          </div>
          <div className="card-content">
            <p>Access your medical history and test results</p>
            <Button variant="outline">View Records</Button>
          </div>
        </Card>
        
        <Card className="dashboard-card">
          <div className="card-header">
            <h3>Account Settings</h3>
          </div>
          <div className="card-content">
            <p>Update your profile and preferences</p>
            <Button variant="outline">Edit Profile</Button>
          </div>
        </Card>
      </div>
      
      <Card className="logout-card">
        <Button onClick={logout} variant="danger">Logout</Button>
      </Card>
    </div>
  );
};

export default Dashboard;