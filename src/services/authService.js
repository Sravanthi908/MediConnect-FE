// src/services/authService.js

// Key used in localStorage
const USER_KEY = "user";

const authService = {
  // Save the logged-in user to localStorage
  login: (userData) => {
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
  },

  // Get the currently logged-in user
  getCurrentUser: () => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  // Remove user from localStorage (logout)
  logout: () => {
    localStorage.removeItem(USER_KEY);
  },

  // Optional: Check if a user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem(USER_KEY);
  },
};

export default authService;
