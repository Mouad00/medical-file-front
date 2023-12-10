import * as React from "react"
import {
  extendTheme,
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,  
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./components/ColorModeSwitcher"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from "./components/Navbar/Navbar";

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Router>
        <Navbar />
        <VStack spacing={8}>
          <Routes>
            <Route path="/login" element={  <Login />} />
            <Route path="/signup" element={  <Signup />} />
          </Routes>
        </VStack>
        </Router>
      </Grid>
    </Box>
    </ChakraProvider>
);
