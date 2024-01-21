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

import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from "./components/Navbar/Navbar";
import Breadcrumbs from "./components/Breadcrumbs";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" mx={12}>
      <Grid>
        <Router>
        {/* <Navbar /> */}
        {/* <Breadcrumbs /> */}
        <VStack spacing={8}>
            <Routes>
              <Route path="/" element={  <Landing />} />
              <Route path="/login" element={  <Login />} />
              <Route path="/signup" element={  <Signup />} />
              <Route path="/about" element={  <About />} />
              <Route path="/contact" element={  <Contact />} />
            </Routes>
        </VStack>
        </Router>
      </Grid>
    </Box>
    </ChakraProvider>
);
