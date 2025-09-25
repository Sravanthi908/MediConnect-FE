import React, { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import './Appointments.css';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setAppointments([
        {
          id: 1,
          hospitalName: 'City General Hospital',
          date: '2023-06-15',
          time: '10:30 AM',
          department: 'Cardiology',
          doctor: 'Dr. John Smith',
          status: 'confirmed'
        },
        {
          id: 2,
          hospitalName: 'Metro Medical Center',
          date: '2023-06-20',
          time: '2:00 PM',
          department: 'Oncology',
          doctor: 'Dr. Sarah Johnson',
          status: 'pending'
        }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const handleCancelAppointment = (id) => {
    // Cancel functionality would go here
    console.log(`Canceling appointment ${id}`);
  };

  if (loading) {
    return <div className="loading">Loading appointments...</div>;
  }

  return (
    <div className="container appointments-page">
      <div className="page-header">
        <h1>Your Appointments</h1>
        <p>Manage your upcoming and past appointments</p>
      </div>
      
      {appointments.length === 0 ? (
        <Card className="empty-appointments">
          <div className="empty-appointments-content">
            <div className="empty-appointments-icon">📅</div>
            <h2>No appointments found</h2>
            <p>You don't have any appointments scheduled.</p>
            <Button>Book an Appointment</Button>
          </div>
        </Card>
      ) : (
        <div className="appointments-list">
          {appointments.map(appointment => (
            <Card key={appointment.id} className="appointment-card">
              <div className="appointment-header">
                <h3>{appointment.hospitalName}</h3>
                <Badge 
                  variant={appointment.status === 'confirmed' ? 'secondary' : 'primary'}
                >
                  {appointment.status}
                </Badge>
              </div>
              
              <div className="appointment-details">
                <div className="appointment-detail">
                  <span className="detail-label">Date:</span>
                  <span>{appointment.date}</span>
                </div>
                <div className="appointment-detail">
                  <span className="detail-label">Time:</span>
                  <span>{appointment.time}</span>
                </div>
                <div className="appointment-detail">
                  <span className="detail-label">Department:</span>
                  <span>{appointment.department}</span>
                </div>
                <div className="appointment-detail">
                  <span className="detail-label">Doctor:</span>
                  <span>{appointment.doctor}</span>
                </div>
              </div>
              
              <div className="appointment-actions">
                <Button variant="outline">Reschedule</Button>
                <Button 
                  variant="danger" 
                  onClick={() => handleCancelAppointment(appointment.id)}
                >
                  Cancel
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Appointments;