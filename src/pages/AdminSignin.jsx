import React from 'react'


const AdminSignin = () => {
  return (
    <>
        <div>
            <label htmlFor="userid">userid</label>
            <input type='text' placeholder='userid' id='userid' name='userid'/>
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input type='password' placeholder='password' id='password' name='password'/>
        </div>
        <div>
            <label htmlFor="email">email</label>
            <input type='email' placeholder='email' id='email' name='email'/>
        </div>
        
       <div>
         <button type='submit'>submit</button>
       </div>
       
         
         
       

    </>
  )
}

export default AdminSignin