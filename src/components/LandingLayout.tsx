import React, { ReactNode } from "react";
import { Flex, FlexProps } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";

interface LandingLayoutProps extends FlexProps {
  children?: ReactNode;
}

const LandingLayout: React.FC<LandingLayoutProps> = (props) => {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <Navbar />
      {props.children}
    </Flex>
  );
};

export default LandingLayout;
