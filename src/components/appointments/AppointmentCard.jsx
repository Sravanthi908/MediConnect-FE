import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentCard = ({ appointment }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'status-confirmed';
      case 'pending':
        return 'status-pending';
      case 'cancelled':
        return 'status-cancelled';
      case 'completed':
        return 'status-completed';
      default:
        return '';
    }
  };

  return (
    <div className="appointment-card">
      <div className="appointment-header">
        <div className="appointment-date">
          <div className="date-day">{formatDate(appointment.date)}</div>
          <div className="date-time">{formatTime(appointment.time)}</div>
        </div>
        <div className={`appointment-status ${getStatusClass(appointment.status)}`}>
          {appointment.status}
        </div>
      </div>
      
      <div className="appointment-body">
        <div className="appointment-doctor">
          <div className="doctor-avatar">
            <img src={appointment.doctor.image} alt={appointment.doctor.name} />
          </div>
          <div className="doctor-info">
            <h3>Dr. {appointment.doctor.name}</h3>
            <p>{appointment.doctor.specialty}</p>
          </div>
        </div>
        
        <div className="appointment-details">
          <div className="detail-item">
            <span className="detail-label">Hospital:</span>
            <span>{appointment.hospital.name}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Type:</span>
            <span>{appointment.type}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Duration:</span>
            <span>{appointment.duration} mins</span>
          </div>
        </div>
      </div>
      
      <div className="appointment-actions">
        {appointment.status === 'confirmed' && (
          <>
            <button className="btn btn-outline">Reschedule</button>
            <button className="btn btn-danger">Cancel</button>
          </>
        )}
        {appointment.status === 'pending' && (
          <button className="btn btn-primary">Confirm</button>
        )}
        {appointment.status === 'completed' && (
          <Link to={`/prescriptions/${appointment.id}`} className="btn btn-primary">
            View Prescription
          </Link>
        )}
        <Link to={`/appointments/${appointment.id}`} className="btn btn-outline">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AppointmentCard;