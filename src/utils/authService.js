// Utility functions for authentication

// Simulated use of environment variable for API key
const API_KEY = process.env.REACT_APP_API_KEY;

export const validateToken = async (token) => {
  const response = await fetch('https://mnwefvnykbgyhbdzpleh.supabase.co/auth/v1/user', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'apikey': API_KEY
    }
  });
  return response.ok;
};

export const storeToken = (token) => {
  localStorage.setItem('auth_token', token);
};

export const removeToken = () => {
  localStorage.removeItem('auth_token');
};

export const getToken = () => {
  return localStorage.getItem('auth_token');
};