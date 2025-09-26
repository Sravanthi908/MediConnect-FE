import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Your Health, Our Priority</h1>
            <p>Find the best hospitals and book appointments with ease.</p>
            <div className="hero-buttons">
              <Link to="/hospitals">
                <Button size="lg">Find Hospitals</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="lg">Sign Up</Button>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <span>🏥</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose MediConnect?</h2>
          <div className="features-grid">
            <Card className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Find Top Hospitals</h3>
              <p>Search through our extensive network of highly-rated hospitals and medical centers.</p>
            </Card>
            <Card className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Easy Appointments</h3>
              <p>Book appointments with just a few clicks and manage your schedule effortlessly.</p>
            </Card>
            <Card className="feature-card">
              <div className="feature-icon">🩺</div>
              <h3>Quality Healthcare</h3>
              <p>Access to the best medical professionals and facilities for your healthcare needs.</p>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="container cta-content">
          <h2>Ready to Take Control of Your Health?</h2>
          <p>Join thousands of satisfied patients who have found the right care through MediConnect.</p>
          <Link to="/register">
            <Button size="lg">Get Started Today</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;