import React, { useState } from "react";
import { HeaderMain, Logo, Menu, MenuToggle } from "../styles/HeaderStyle";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { RegisterButton } from "../styles/SignupStyle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderMain>
      <Logo>
        <h2>Sphinx</h2>
      </Logo>

      <MenuToggle onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuToggle>

      <Menu isOpen={isOpen}>
        <NavLink to="/adminhome" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/showalltopic" onClick={() => setIsOpen(false)}>
          Question Master
        </NavLink>
         <NavLink to="/usersignup2" onClick={() => setIsOpen(false)}>
          User Master
        </NavLink>
        
        <NavLink to="/createxam" onClick={() => setIsOpen(false)}>
          Exam Master
        </NavLink>
        <NavLink to="/topicmaster" onClick={() => setIsOpen(false)}>
          Topic Master
        </NavLink>

         <NavLink to="/" onClick={() => setIsOpen(false)}>
          Logout
        </NavLink>
        <NavLink to="/usersignup">Register</NavLink>

      </Menu>
    </HeaderMain>
  );
};

export default Header;
