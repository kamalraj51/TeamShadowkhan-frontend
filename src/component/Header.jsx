import React, { useState } from "react";
import { HeaderMain, Logo, Menu, MenuToggle } from "../styles/HeaderStyle";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { RegisterButton } from "../styles/SignupStyle";
import {logout} from "../reducer/authSlice"
import { useDispatch } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading,setLoading]=useState(false);
  const dispatch=useDispatch()

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
        <NavLink to="/createxam" onClick={() => setIsOpen(false)}>
          Exam Master
        </NavLink>
        <NavLink to="/topicmaster" onClick={() => setIsOpen(false)}>
          Topic Master
        </NavLink>
         <NavLink to="/usersignup">Register</NavLink>
         <NavLink to="/" onClick={async(e) => {setIsOpen(false)
         e.preventDefault();
         setLoading(true);
          await new Promise(resolve => setTimeout(resolve, 1000));
          setLoading(false);
          dispatch(logout());

         }}>
          {loading ? "Signing out..." : "Sign Out"}
        </NavLink>
       

      </Menu>
    </HeaderMain>
  );
};

export default Header;
