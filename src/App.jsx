import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminSignup from "./pages/UserSignup";

import AdminSignin from "./pages/AdminSignin";
import UserSignin from "./pages/UserSiginin";
import UserSignup from "./pages/UserSignup";
import TestLogin from "./pages/TestLogin";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserSignin />} />
        <Route path="/usersignup" element={<UserSignup />} />
        <Route path="/adminsignin" element={<AdminSignin />} />
        <Route path="/usersignin" element={<UserSignin />} />
        <Route path="/test" element={<TestLogin />} />
      </Routes>
    </>
  );
};

export default App;
