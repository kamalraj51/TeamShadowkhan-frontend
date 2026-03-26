import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminSignup from "./pages/UserSignup";

import AdminSignin from "./pages/AdminSignin";
import UserSignin from "./pages/UserSiginin";
import UserSignup from "./pages/UserSignup";
import TestLogin from "./pages/TestLogin";
import Header from "./component/Header";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<UserSignin />} />
        <Route path="/usersignup" element={<UserSignup />} />
        <Route path="/adminsignin" element={<AdminSignin />} />
        <Route path="/usersignin" element={<UserSignin />} />
        <Route path="/test" element={<TestLogin />} />
         <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
     
   
    </>
  );
};

export default App;
