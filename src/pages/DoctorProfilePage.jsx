import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import DoctorCard from '../components/doctors/DoctorCard';
import BookingForm from '../components/appointments/BookingForm';
import { useDoctors } from '../hooks/useDoctors';
import Loader from '../components/ui/Loader';

const DoctorProfilePage = () => {
  const { id } = useParams();
  const { getDoctorById } = useDoctors();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const doctorData = await getDoctorById(id);
        setDoctor(doctorData);
      } catch (error) {
        console.error('Error fetching doctor:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id, getDoctorById]);

  const handleBookAppointment = () => {
    setShowBookingForm(true);
  };

  if (loading) {
    return (
      <div className="doctor-profile-page">
        <Header />
        <div className="doctor-profile-container">
          <Sidebar />
          <main className="doctor-profile-content">
            <Loader />
          </main>
        </div>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="doctor-profile-page">
        <Header />
        <div className="doctor-profile-container">
          <Sidebar />
          <main className="doctor-profile-content">
            <div className="not-found">
              <h2>Doctor Not Found</h2>
              <p>The doctor you're looking for doesn't exist.</p>
              <Link to="/doctors" className="btn">Browse Doctors</Link>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="doctor-profile-page">
      <Header />
      <div className="doctor-profile-container">
        <Sidebar />
        <main className="doctor-profile-content">
          <div className="doctor-header">
            <div className="doctor-info">
              <h1>{doctor.name}</h1>
              <p className="specialty">{doctor.specialty}</p>
              <div className="rating">
                <span>★ {doctor.rating}</span>
                <span>({doctor.reviews} reviews)</span>
              </div>
            </div>
            <button 
              className="btn btn-primary" 
              onClick={handleBookAppointment}
            >
              Book Appointment
            </button>
          </div>

          <div className="doctor-details">
            <div className="doctor-card-section">
              <DoctorCard doctor={doctor} expanded={true} />
            </div>

            <div className="doctor-bio">
              <h2>About</h2>
              <p>{doctor.bio || 'No biography available.'}</p>
            </div>

            <div className="doctor-availability">
              <h2>Availability</h2>
              <div className="availability-grid">
                {doctor.availability?.map((day, index) => (
                  <div key={index} className="day-availability">
                    <h3>{day.day}</h3>
                    <p>{day.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {showBookingForm && (
            <div className="booking-modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h2>Book Appointment with {doctor.name}</h2>
                  <button 
                    className="close-btn" 
                    onClick={() => setShowBookingForm(false)}
                  >
                    ×
                  </button>
                </div>
                <BookingForm doctorId={doctor.id} />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DoctorProfilePage;