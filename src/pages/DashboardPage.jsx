import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import AppointmentCard from '../components/appointments/AppointmentCard';
import DoctorCard from '../components/doctors/DoctorCard';
import { useAppointments } from '../hooks/useAppointments';
import { useDoctors } from '../hooks/useDoctors';
import Loader from '../components/ui/Loader';

const DashboardPage = () => {
  const { appointments, loading: appointmentsLoading } = useAppointments();
  const { doctors, loading: doctorsLoading } = useDoctors();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user data from localStorage or context
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  const upcomingAppointments = appointments?.filter(
    apt => new Date(apt.date) > new Date()
  ).slice(0, 3);

  const topDoctors = doctors?.slice(0, 4);

  return (
    <div className="dashboard-page">
      <Header />
      <div className="dashboard-container">
        <Sidebar />
        <main className="dashboard-content">
          <div className="welcome-section">
            <h1>Welcome back, {user?.name || 'User'}!</h1>
            <p>Here's what's happening with your healthcare today.</p>
          </div>

          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h2>Upcoming Appointments</h2>
              {appointmentsLoading ? (
                <Loader />
              ) : upcomingAppointments?.length > 0 ? (
                <div className="appointments-list">
                  {upcomingAppointments.map(appointment => (
                    <AppointmentCard key={appointment.id} appointment={appointment} />
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p>No upcoming appointments</p>
                  <Link to="/book" className="btn">Book Appointment</Link>
                </div>
              )}
            </div>

            <div className="dashboard-card">
              <h2>Top Doctors</h2>
              {doctorsLoading ? (
                <Loader />
              ) : topDoctors?.length > 0 ? (
                <div className="doctors-grid">
                  {topDoctors.map(doctor => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p>No doctors available</p>
                </div>
              )}
            </div>
          </div>

          <div className="dashboard-actions">
            <Link to="/book" className="btn btn-primary">Book New Appointment</Link>
            <Link to="/doctors" className="btn btn-secondary">Find Doctors</Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;