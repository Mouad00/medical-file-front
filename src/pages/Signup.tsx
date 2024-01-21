// Signup.tsx
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useDispatcher } from '../hooks/UseDispatcher';
import { PatientReducer, initialState } from '../features/patients/Reducer';
import { getListVisits } from '../features/patients/Action';
import { AxiosError } from 'axios';
import LandingLayout from '../components/LandingLayout';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {get ,state} = useDispatcher(PatientReducer, initialState)
  const handleSignup = async () => {
    // Call your Spring Boot API for user registration
    // Handle success and error scenarios appropriately
  };

  const fetchTest = async () =>{
    get(getListVisits())
    .then((response: any) => {
      const data = response.data;
    })
    .catch((error: AxiosError)=> {
      console.error("Error Code :" + error.code)
    }) 
  }

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
        <Button mt={4} colorScheme="teal" onClick={handleSignup}>
          Signup
        </Button>
      </Box>
    </VStack>
    </LandingLayout>
  );
};

export default Signup;
