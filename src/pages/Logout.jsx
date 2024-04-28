import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      localStorage.removeItem('auth_token');
      setTimeout(() => {
        navigate('/');
      }, 2000); // Redirect after 2 seconds
    } else {
      alert('No active session found.');
      navigate('/');
    }
  }, [navigate]);

  return (
    <Box p={5} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Text>You have been logged out. Redirecting to home...</Text>
    </Box>
  );
};
export default Logout;