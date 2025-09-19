import { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import AppointmentCard from '../components/appointments/AppointmentCard';
import CalendarView from '../components/appointments/CalendarView';
import { useAppointments } from '../hooks/useAppointments';
import Loader from '../components/ui/Loader';

const AppointmentsPage = () => {
  const { appointments, loading } = useAppointments();
  const [view, setView] = useState('list'); // 'list' or 'calendar'

  const upcomingAppointments = appointments?.filter(
    apt => new Date(apt.date) > new Date()
  );
  
  const pastAppointments = appointments?.filter(
    apt => new Date(apt.date) <= new Date()
  );

  return (
    <div className="appointments-page">
      <Header />
      <div className="appointments-container">
        <Sidebar />
        <main className="appointments-content">
          <div className="page-header">
            <h1>My Appointments</h1>
            <div className="view-toggle">
              <button 
                className={view === 'list' ? 'active' : ''} 
                onClick={() => setView('list')}
              >
                List View
              </button>
              <button 
                className={view === 'calendar' ? 'active' : ''} 
                onClick={() => setView('calendar')}
              >
                Calendar View
              </button>
            </div>
          </div>

          {loading ? (
            <Loader />
          ) : view === 'calendar' ? (
            <CalendarView appointments={appointments} />
          ) : (
            <>
              <div className="appointments-section">
                <h2>Upcoming Appointments</h2>
                {upcomingAppointments?.length > 0 ? (
                  <div className="appointments-list">
                    {upcomingAppointments.map(appointment => (
                      <AppointmentCard key={appointment.id} appointment={appointment} />
                    ))}
                  </div>
                ) : (
                  <div className="empty-state">
                    <p>No upcoming appointments</p>
                  </div>
                )}
              </div>

              <div className="appointments-section">
                <h2>Past Appointments</h2>
                {pastAppointments?.length > 0 ? (
                  <div className="appointments-list">
                    {pastAppointments.map(appointment => (
                      <AppointmentCard key={appointment.id} appointment={appointment} />
                    ))}
                  </div>
                ) : (
                  <div className="empty-state">
                    <p>No past appointments</p>
                  </div>
                )}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default AppointmentsPage;