import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminSignup from "./pages/UserSignup";

import AdminSignin from "./pages/AdminSignin";
import UserSignin from "./pages/UserSiginin";
import UserSignup from "./pages/UserSignup";
import TestLogin from "./pages/TestLogin";
import UserPromote from "./pages/UserPromote";
import Getalluser from "./database/Getalluser";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserSignin />} />
        <Route path="/usersignup" element={<UserSignup />} />
        <Route path="/adminsignin" element={<AdminSignin />} />
        <Route path="/usersignin" element={<UserSignin />} />
        <Route path="/test" element={<TestLogin />} />
        <Route path="/userpromote" element={<UserPromote/>}/>
        <Route path="/getalluser" element={<Getalluser/>}/>
      </Routes>
    </>
  );
};

export default App;
