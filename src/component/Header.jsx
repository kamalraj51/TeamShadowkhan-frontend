import React from 'react'
import { Navbar, Top } from '../styles/Header.style'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <Top>
            <h1>user promote</h1>
        </Top>
        <Navbar>
            <a href="">home</a>
            <a href="">about</a>
            <a href="">cotact</a>
            <NavLink to="/userpromote">userpromote</NavLink>
        </Navbar>
    </>
  )
}

export default Header