import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Index from "./pages/Index.jsx";
import Login from './pages/Login.jsx';
import Logout from './pages/Logout.jsx';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      navigate('/login');
    } else {
      const validateToken = async () => {
        const response = await fetch('https://mnwefvnykbgyhbdzpleh.supabase.co/auth/v1/user', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ud2Vmdm55a2JneWhiZHpwbGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyNzQ3MzQsImV4cCI6MjAyODg1MDczNH0.tnHysd1LqayzpQ1L-PImcvlkUmkNvocpMS7tS-hYZNg'
          }
        });
        if (!response.ok) {
          localStorage.removeItem('auth_token');
          navigate('/login');
        }
      };
      validateToken();
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