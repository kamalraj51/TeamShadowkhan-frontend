import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    console.log("hii")
  return (
    <>
        <div>
            <label htmlFor="email">email</label>
            <input type='email' placeholder='email' id='email' name='email'/>
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input type='password' placeholder='password' id='password' name='password'/>
        </div>
        <div>
            <button type='submit'>submit</button>
        </div>
         <div>
            <NavLink to="/admin">admin</NavLink>
            <NavLink to="/user">user</NavLink>
        </div>
    </>
  )
}

export default Login