import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import './HospitalDetail.css';

const HospitalDetail = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch the hospital data based on the id
  // For now, we'll use mock data
  const hospital = {
    id: parseInt(id),
    name: 'City General Hospital',
    location: 'New York, NY',
    rating: 4.7,
    specialties: ['Cardiology', 'Neurology', 'Orthopedics'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'A leading multi-specialty hospital with state-of-the-art facilities and experienced medical staff.',
    details: 'City General Hospital has been serving the community for over 50 years. With a team of highly skilled doctors and nurses, we provide comprehensive healthcare services. Our facilities include advanced diagnostic equipment, modern operation theaters, and comfortable patient rooms.'
  };

  const handleBookAppointment = () => {
    // Booking functionality would go here
    console.log(`Booking appointment at hospital ${hospital.id}`);
  };

  return (
    <div className="container hospital-detail-page">
      <div className="hospital-detail-container">
        <div className="hospital-detail-image">
          <img src={hospital.image} alt={hospital.name} />
        </div>
        <div className="hospital-detail-content">
          <div className="hospital-detail-header">
            <h1>{hospital.name}</h1>
            <div className="hospital-rating">
              <span className="rating-star">★</span>
              <span>{hospital.rating}</span>
            </div>
          </div>
          
          <p className="hospital-location">📍 {hospital.location}</p>
          
          <div className="hospital-specialties">
            {hospital.specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary">{specialty}</Badge>
            ))}
          </div>
          
          <div className="hospital-description">
            <h2>About</h2>
            <p>{hospital.details}</p>
          </div>
          
          <div className="hospital-actions">
            <Button 
              onClick={handleBookAppointment}
              className="book-appointment-btn"
            >
              Book Appointment
            </Button>
            <Link to="/hospitals">
              <Button variant="outline" className="back-btn">
                Back to Hospitals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetail;