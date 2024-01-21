import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link as RouterLink } from 'react-router-dom';
import React, { ReactNode } from "react";
import { Link, Box, Flex, Button, Stack, useColorModeValue } from "@chakra-ui/react";
import {Logo} from '../../Logo'

const NavBar = (props:Object) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props} >
      <Logo w={"30px"} h={"30px"}/>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} toggle={toggle} />
    </NavBarContainer>
  );
};

const CloseIcon = (props:any) => (
  <svg  width="24" viewBox="0 0 20 20" fill={props.color} cursor="pointer" color={props.color} xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = (props:any) => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.color}
    cursor="pointer"
    color={props.color}
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

interface MenuToggleProps {
  toggle:VoidFunction,
  isOpen:boolean
}

const MenuToggle:React.FC<MenuToggleProps> = ({ toggle, isOpen }) => {
  const color = useColorModeValue('black', 'white');

  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon color={color} /> : <MenuIcon color={color}/>}
    </Box>
  );
};

interface MenuItemProps {
  isOpen:boolean,
  children:ReactNode,
  isLast:boolean,
  to: string,
  toggle: VoidFunction
}

const MenuItem: React.FC<MenuItemProps> = ({ isOpen, children = null, isLast = false, to = "/", toggle, ...rest }) => {

  return (
    <Link onClick={toggle} as={RouterLink} to={to}>
      {/* <Text display="block" {...rest}> */}
        {children}
      {/* </Text> */}
    </Link>
  );
};

interface MenuLinksProps {
  isOpen: boolean;
  toggle: VoidFunction;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ isOpen, toggle }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      bg={bg}
      color={color}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
      >
        <MenuItem isOpen isLast={false} to="/" toggle={toggle}>Home</MenuItem>
        <MenuItem isOpen isLast={false} to="/about" toggle={toggle}>About</MenuItem>
        <MenuItem isOpen isLast={false} to="/contact" toggle={toggle}> Contact </MenuItem>
        <MenuItem isOpen isLast={false} to="/login" toggle={toggle}> Login </MenuItem>
        <MenuItem isOpen to="/signup" isLast toggle={toggle}>
          <Button
            variant="outline" 
            size="sm"
            rounded="md"
            color={color}
            bg={bg}
          >
            Sing Up
          </Button>
        </MenuItem>
        <ColorModeSwitcher />
      </Stack>
    </Box>
  );
};

interface NavBarContainerProps {
  children: ReactNode
}

const NavBarContainer :React.FC<NavBarContainerProps> = ({ children, ...props }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');
  return (
    <Flex
    as="nav"
    align="center"
    justify="space-between"
    alignItems="center"
    wrap="wrap"
    w="100%"
    mb={8}
    p={8}
    bg={bg}
    color={color}
    {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
