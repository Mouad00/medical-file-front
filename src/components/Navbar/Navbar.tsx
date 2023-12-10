// Navbar.tsx
import React from 'react';
import { Flex, Box, Text, Spacer, useColorModeValue, IconButton } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link as RouterLink } from 'react-router-dom';
import { Logo } from '../../Logo';

const Navbar: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('black', 'white');

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg={bg}
      color={color}
      h={100}
    >
      {/* <Box display="flex" alignItems="center"> */}
        {/* <Text fontSize="xl" fontWeight="bold">
          Your Logo
        </Text> */}
        <Logo width={"30px"} height={"30px"} />
      {/* </Box> */}

      <Box display={{ base: 'none', md: 'flex' }}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Login</NavLink>
        {/* Add more NavLink components for additional pages */}
      </Box>
        <ColorModeSwitcher />
    </Flex>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Text as={RouterLink} to={to} p={2}>
      {children}
    </Text>
  );
};

export default Navbar;
