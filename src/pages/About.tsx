import React from 'react';
import { Box, Heading, Text, Image, Avatar, Flex, useColorModeValue } from '@chakra-ui/react';
import LandingLayout from '../components/LandingLayout';
import Hero from "../components/Hero";


const About: React.FC = () => {
    const bg = useColorModeValue('white', 'gray.800');
    const color = useColorModeValue('gray.800', 'white');

  return (
    <LandingLayout width="100%">
        <Box>
        <Hero />

      <Flex  
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        mb={8}
        bg={bg}
        p={4}
        borderRadius="md"
      >
        <Box flex={{ base: 1, md: 2 }} mb={{ base: 8, md: 0 }}>
          <Heading as="h2" size="xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg" mb={8}>
            Welcome to our website! We are dedicated to providing high-quality content and services, ensuring an enjoyable and informative online experience for our users. Explore our site and discover the possibilities.
          </Text>
        </Box>
        <Box flex={{ base: 1, md: 1 }}>
          <Image src="url_to_about_image" alt="About Us" w="100%" h="100%" objectFit="cover" borderRadius="md" />
        </Box>
      </Flex>


      {/* Section 2: History */}
      <Box
        bg={bg}
        p={8}
        borderRadius="md"
        mb={8}
      >
        <Heading as="h2" size="xl" mb={4}>
          History
        </Heading>
        <Text fontSize="lg">
          {/* Add content about the history of the problem your solution solves */}
          In the journey to solve a significant problem, our history unfolds. Explore the evolution of our solution and the impact it has made in addressing real-world challenges.
        </Text>
      </Box>

      {/* Section 3: Team */}
      <Box
        bg={bg}
        p={8}
        borderRadius="md"
        mb={8}
      >
        <Heading as="h2" size="xl" mb={4}>
          Meet Our Team
        </Heading>
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
          {/* Team Member 1 */}
          <Flex align="center" mb={{ base: 4, md: 0 }}>
            <Avatar name="John Doe" src="url_to_johns_avatar_image" size="xl" mr={4} />
            <Text>
              <strong>John Doe</strong> - Co-Founder
            </Text>
          </Flex>

          {/* Team Member 2 */}
          <Flex align="center" mb={{ base: 4, md: 0 }}>
            <Avatar name="Jane Smith" src="url_to_janes_avatar_image" size="xl" mr={4} />
            <Text>
              <strong>Jane Smith</strong> - Lead Developer
            </Text>
          </Flex>

          {/* Team Member 3 */}
          <Flex align="center">
            <Avatar name="Bob Johnson" src="url_to_bobs_avatar_image" size="xl" mr={4} />
            <Text>
              <strong>Bob Johnson</strong> - UI/UX Designer
            </Text>
          </Flex>
        </Flex>
        <Text fontSize="lg" mt={4}>
          Our team is composed of talented individuals with diverse skills and backgrounds. Together, we work towards our mission, leveraging our strengths to deliver innovative solutions and exceptional experiences.
        </Text>
      </Box>
    </Box>
    </LandingLayout>
  );
};

export default About;
