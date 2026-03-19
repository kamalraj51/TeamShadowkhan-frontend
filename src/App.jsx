import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AdminSignin from './pages/AdminSignin'
import User from './pages/User'
import Login from './pages/Login'
const App = () => {
  return (
    <>
      
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/admin' element={<AdminSignin/>}/>
          <Route path='/user' element={<User/>}/>
        </Routes>
     
      

      
    </>
  )
}

export default App