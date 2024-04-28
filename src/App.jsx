import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Index from "./pages/Index.jsx";
import Login from './pages/Login.jsx';
import Logout from './pages/Logout.jsx';

export const validateToken = async (token) => {
  const response = await fetch('https://mnwefvnykbgyhbdzpleh.supabase.co/auth/v1/user', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'apikey': process.env.REACT_APP_API_KEY // Simulated use of environment variable
    }
  });
  return response.ok;
};

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      navigate('/login');
    } else {
      validateToken(token).then(isValid => {
        if (!isValid) {
          localStorage.removeItem('auth_token');
          navigate('/login');
        }
      }).catch(() => {
        // Handle network or other errors
        alert('Failed to validate token. Please try logging in again.');
      });
    }
  }, [navigate]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;