
import { useDisclosure, Flex, Box, Button,  VStack, Icon, HStack, Link as ChakraLink, Drawer } from "@chakra-ui/react";
// import Drawer from './drawer';
import {  IoMdMenu } from 'react-icons/io';
// import { Link } from 'react-scroll';
// import data from './header.data';
import React from "react";
import {Link} from 'react-router-dom'


const MobileDrawer:React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

  return (
    <Flex >
		// Menu Button
      <Button onClick={onOpen}>
        <IoMdMenu size="26px" />
      </Button>
      
      // Drawer Component
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <VStack alignItems="left">
          {/* {data.map((item, i) => ( */}
            <Link to={"#"}>
              <Button variant='text' > {"label"} </Button>
            </Link>
          {/* ))} */}
        </VStack>
      </Drawer>
    </Flex>
  );
};

export default MobileDrawer