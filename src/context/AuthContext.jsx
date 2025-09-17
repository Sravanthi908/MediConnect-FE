// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// Set up axios defaults
axios.defaults.baseURL = 'http://localhost:8000/api'; // Django backend URL

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Token ${token}`;
      // Get user info from backend
      axios.get('/profile/')
        .then(response => {
          setCurrentUser(response.data);
        })
        .catch(error => {
          console.error('Error fetching user:', error);
          localStorage.removeItem('token');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  // Login function
  const login = async (username, password) => {
    try {
      const response = await axios.post('/login/', {
        username,
        password
      });
      
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Token ${token}`;
      setCurrentUser(user);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        throw new Error(error.response.data.error || 'Login failed');
      }
      throw new Error('Network error. Please try again.');
    }
  };

  const register = async (userData) => {
    try {
      const payload = {
        username: userData.username,
        password: userData.password,
        confirm_password: userData.confirmPassword,
        full_name: userData.name,   // map correctly from Register.jsx
        role: userData.role,
      };

      const response = await axios.post('/register/', payload);

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Token ${token}`;
      setCurrentUser(user);
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      if (error.response) {
        throw new Error(
          error.response.data.error || JSON.stringify(error.response.data)
        );
      }
      throw new Error('Network error. Please try again.');
    }
  };

 
  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
