import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminSignin from "./pages/AdminSignin";
import User from "./pages/User";
import Login from "./pages/Login";
import Userdashboar from "./Dashboard/Userdashboard";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/userdashboard" element={<Userdashboar />}></Route>
      </Routes>
    </>
  );
};

export default App;
