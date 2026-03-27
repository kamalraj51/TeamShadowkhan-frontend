import React, { useState } from 'react'
import {  HeaderMain, Logo, Menu, MenuToggle } from '../styles/HeaderStyle'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
   <HeaderMain>
       
            <Logo>
                <h2>sphinx</h2>
            </Logo>
            <MenuToggle onClick={()=>setIsOpen(!isOpen)}>
            {isOpen?<FaTimes/>:<FaBars/>}
            </MenuToggle>
            <Menu isOpen={isOpen}>
        <NavLink to="/home" onClick={() => setIsOpen(false)}>home</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>about</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>contact</NavLink>
      </Menu>
       
   </HeaderMain>
  )
}

export default Header;