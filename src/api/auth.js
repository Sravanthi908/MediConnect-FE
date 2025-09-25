import authService from '../services/authService';

export const login = (email, password) => {
  return authService.login(email, password);
};

export const register = (name, email, password) => {
  return authService.register(name, email, password);
};

export const logout = () => {
  return authService.logout();
};

export const getCurrentUser = () => {
  return authService.getCurrentUser();
};