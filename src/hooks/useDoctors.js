// src/hooks/useDoctors.js
import { useState, useEffect } from 'react';
import api from '../services/api';

export const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const response = await api.get('/doctors');
        setDoctors(response.data);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to fetch doctors');
        console.error('Error fetching doctors:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const getDoctorById = async (id) => {
    try {
      setLoading(true);
      const response = await api.get(`/doctors/${id}`);
      return response.data;
    } catch (err) {
      setError(err.message || 'Failed to fetch doctor details');
      console.error(`Error fetching doctor ${id}:`, err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const searchDoctors = async (query) => {
    try {
      setLoading(true);
      const response = await api.get(`/doctors/search?q=${encodeURIComponent(query)}`);
      return response.data;
    } catch (err) {
      setError(err.message || 'Failed to search doctors');
      console.error('Error searching doctors:', err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    doctors,
    loading,
    error,
    getDoctorById,
    searchDoctors
  };
};