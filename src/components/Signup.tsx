// Signup.tsx
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    // Call your Spring Boot API for user registration
    // Handle success and error scenarios appropriately
  };

  return (
    <VStack spacing={4} align="center">
      <Box w="300px">
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button mt={4} colorScheme="teal" onClick={handleSignup}>
          Signup
        </Button>
      </Box>
    </VStack>
  );
};

export default Signup;
