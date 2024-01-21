import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import LandingLayout from '../components/LandingLayout';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Call your Spring Boot API for authentication
    // If successful, you might want to store a token in local storage or a state management system
    // For simplicity, assuming a successful login redirects to a dashboard page
    // history.push('/daskhboard');
  };

  return (
    <LandingLayout width="100%">
    <VStack spacing={4} align="center" mt={100}>
        <Box w="300px">
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button mt={4} colorScheme="teal" onClick={handleLogin}>
            Login
          </Button>
        </Box>
    </VStack>
    </LandingLayout>
  );
};

export default Login;
