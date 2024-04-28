// Complete the Index page component here
// Use chakra-ui
import { Button, Box, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa"; // example - use react-icons/fa for icons

const Index = () => {
  // TODO: Create the website here!
  return (
    <Box p={5} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <VStack spacing={4}>
        <Button as={Link} to="/login" colorScheme="teal">Login</Button>
        <Button as={Link} to="/logout" colorScheme="red">Logout</Button>
      </VStack>
    </Box>
  ); // example
};

export default Index;