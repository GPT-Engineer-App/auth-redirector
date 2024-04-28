import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
import { removeToken } from '../utils/authService';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    removeToken();
    setTimeout(() => {
      navigate('/');
    }, 2000); // Redirect after 2 seconds
  }, [navigate]);

  return (
    <Box p={5} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Text>You have been logged out. Redirecting to home...</Text>
    </Box>
  );
};
export default Logout;