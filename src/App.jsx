import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateToken, getToken, removeToken } from './utils/authService';
import Index from "./pages/Index.jsx";
import Login from './pages/Login.jsx';
import Logout from './pages/Logout.jsx';



function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate('/login');
    } else {
      validateToken(token).then(isValid => {
        if (!isValid) {
          removeToken();
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