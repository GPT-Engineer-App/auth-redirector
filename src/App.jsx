import { Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Index from "./pages/Index.jsx";
import Login from './pages/Login.jsx';
import Logout from './pages/Logout.jsx';

const AuthenticatedApp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return <App />;
};

function App() {
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

export default AuthenticatedApp;