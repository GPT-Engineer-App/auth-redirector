import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from './pages/Login.jsx';
import Logout from './pages/Logout.jsx';

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

export default App;