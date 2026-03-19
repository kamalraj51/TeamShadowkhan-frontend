import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import AdminSignup from './pages/AdminSignup'
import UserSignin from './pages/UserSignin'
import AdminSignin from './pages/AdminSignin'
const App = () => {
  return (
    <>
      
        <Routes>
          <Route path='/' element={<UserSignin/>}/>
          <Route path='/AdminSignup' element={<AdminSignup/>}/>
          <Route path='/AdminSignin' element={<AdminSignin/>}/>
         
        </Routes>
    </>
  )
}

export default App