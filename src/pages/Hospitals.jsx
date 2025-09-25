import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import './Hospitals.css';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setHospitals([
        {
          id: 1,
          name: 'City General Hospital',
          location: 'New York, NY',
          rating: 4.7,
          specialties: ['Cardiology', 'Neurology', 'Orthopedics'],
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'A leading multi-specialty hospital with state-of-the-art facilities and experienced medical staff.'
        },
        {
          id: 2,
          name: 'Metro Medical Center',
          location: 'Los Angeles, CA',
          rating: 4.5,
          specialties: ['Oncology', 'Pediatrics', 'Gynecology'],
          image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Comprehensive healthcare services with a focus on patient-centered care and advanced treatments.'
        },
        {
          id: 3,
          name: 'University Health Hospital',
          location: 'Chicago, IL',
          rating: 4.8,
          specialties: ['Transplant', 'Radiology', 'Surgery'],
          image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Academic medical center combining cutting-edge research with exceptional patient care.'
        },
        {
          id: 4,
          name: 'Sunset Clinic',
          location: 'Miami, FL',
          rating: 4.3,
          specialties: ['Dermatology', 'Ophthalmology', 'ENT'],
          image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          description: 'Specialized outpatient services with a focus on preventive care and wellness programs.'
        }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const handleBookAppointment = (hospitalId) => {
    // Booking functionality would go here
    console.log(`Booking appointment at hospital ${hospitalId}`);
  };

  if (loading) {
    return <div className="loading">Loading hospitals...</div>;
  }

  return (
    <div className="container hospitals-page">
      <div className="page-header">
        <h1>Find the Best Hospitals</h1>
        <p>Book appointments and view hospital details</p>
      </div>
      
      <div className="hospitals-grid">
        {hospitals.map(hospital => (
          <Card key={hospital.id} className="hospital-card">
            <div className="hospital-image">
              <img src={hospital.image} alt={hospital.name} />
            </div>
            <div className="hospital-content">
              <div className="hospital-header">
                <h3>{hospital.name}</h3>
                <div className="hospital-rating">
                  <span className="rating-star">★</span>
                  <span>{hospital.rating}</span>
                </div>
              </div>
              
              <p className="hospital-location">📍 {hospital.location}</p>
              <p className="hospital-description">{hospital.description}</p>
              
              <div className="hospital-specialties">
                {hospital.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary">{specialty}</Badge>
                ))}
              </div>
              
              <div className="hospital-actions">
                <Button 
                  onClick={() => handleBookAppointment(hospital.id)}
                  className="book-appointment-btn"
                >
                  Book Appointment
                </Button>
                <Link to={`/hospital/${hospital.id}`}>
                  <Button 
                    className="view-details-btn"
                    variant="outline"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Hospitals;