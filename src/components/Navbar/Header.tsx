import React from "react"
import MenuToggle from './MenuToggle';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false)
  
    const toggle = () => setIsOpen(!isOpen)
  
    return(
      <MenuToggle toggle={toggle} isOpen={isOpen} />
    );
}

interface MenuToggleProps {
    children: () => void;
    isOpen: boolean;
  }
