import React from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, useColorModeValue, Button } from '@chakra-ui/react';
import LandingLayout from '../components/LandingLayout';

const Contact: React.FC = () => {
    const bg = useColorModeValue('white', 'gray.800');
    const color = useColorModeValue('gray.800', 'white');

  return (
    <LandingLayout width="100%">
        <Box p={8} mx="auto">
        <Heading as="h2" size="xl" mb={8} textAlign="center">
            Contact Us
        </Heading>
            {/* Name Input */}
            <Box w="300px">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder='Name' />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input type="text"  placeholder='Email'/>
          </FormControl>
            <FormControl mt={4}>
            <Textarea
                    id="message"
                    placeholder="How can we assist you today?"
                    rows={4}
                />
            </FormControl>

            <Button mt={4} colorScheme="teal">
                Login
          </Button>
        </Box>           
        </Box>
    </LandingLayout>
  );
}

export default Contact;
