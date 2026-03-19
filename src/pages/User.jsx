import React from 'react'

const User = () => {
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
    </>
  )
}

export default User