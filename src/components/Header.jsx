import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './ui/Button';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🏥</span>
          <span>MediConnect</span>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/hospitals" className="nav-link">Hospitals</Link>
          <Link to="/appointments" className="nav-link">Appointments</Link>
        </nav>
        
        <div className="auth-buttons">
          {user ? (
            <>
              <span className="user-welcome">Welcome, {user.name}</span>
              <Button onClick={logout} variant="outline">Logout</Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </div>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;