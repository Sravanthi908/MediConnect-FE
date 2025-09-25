// Mock authentication service
const authService = {
  // Mock user data
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'password123' }
  ],
  
  // Current user
  currentUser: null,
  
  // Login function
  login: async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = authService.users.find(
          u => u.email === email && u.password === password
        );
        
        if (user) {
          authService.currentUser = { ...user };
          localStorage.setItem('user', JSON.stringify(authService.currentUser));
          resolve(authService.currentUser);
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  },
  
  // Register function
  register: async (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const existingUser = authService.users.find(u => u.email === email);
        
        if (existingUser) {
          reject(new Error('Email already in use'));
        } else {
          const newUser = {
            id: authService.users.length + 1,
            name,
            email,
            password
          };
          
          authService.users.push(newUser);
          authService.currentUser = { ...newUser };
          localStorage.setItem('user', JSON.stringify(authService.currentUser));
          resolve(authService.currentUser);
        }
      }, 1000);
    });
  },
  
  // Logout function
  logout: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        authService.currentUser = null;
        localStorage.removeItem('user');
        resolve();
      }, 500);
    });
  },
  
  // Get current user
  getCurrentUser: () => {
    if (!authService.currentUser) {
      const userData = localStorage.getItem('user');
      if (userData) {
        authService.currentUser = JSON.parse(userData);
      }
    }
    return authService.currentUser;
  },
  
  // Auth state change listener
  onAuthStateChanged: (callback) => {
    const user = authService.getCurrentUser();
    callback(user);
    
    // Return unsubscribe function
    return () => {};
  }
};

export default authService;