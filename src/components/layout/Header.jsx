// src/components/layout/Header.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import Button from '../ui/Button';

const Header = () => {
  const { user, isAuthenticated, logout, theme, toggleTheme } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <span className="logo-icon">🏥</span>
            <span className="logo-text">MediConnect</span>
          </Link>
        </div>
        
        <nav className="header-nav">
          {isAuthenticated ? (
            <>
              <div className="user-menu">
                <div className="user-info">
                  <span className="user-name">{user?.name}</span>
                  <span className="user-role">{user?.role}</span>
                </div>
                <div className="nav-links">
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/appointments">Appointments</Link>
                  <Link to="/doctors">Find Doctors</Link>
                </div>
                <Button variant="outline" onClick={handleLogout}>Logout</Button>
              </div>
            </>
          ) : (
            <div className="auth-links">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          )}
        </nav>
        
        <div className="header-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;