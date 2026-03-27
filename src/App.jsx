import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminSignup from "./pages/UserSignup";

import AdminSignin from "./pages/AdminSignin";
import UserSignin from "./pages/UserSiginin";
import UserSignup from "./pages/UserSignup";
import TestLogin from "./pages/TestLogin";
<<<<<<< HEAD
import UserPromote from "./pages/UserPromote";
import Getalluser from "./database/Getalluser";
import CreateExam from "./pages/CreateExam";
import Admindashboard from "./Dashboard/Admindashboard";
=======
import Header from "./component/Header";
import Home from "./pages/Home";
>>>>>>> fd671ad3a68284601f4304c603e510b9f1ebf464
const App = () => {
  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<UserSignin />} />
        <Route path="/admin" element={<Admindashboard/>}/>
        <Route path="/usersignup" element={<UserSignup />} />
        <Route path="/adminsignin" element={<AdminSignin />} />
        <Route path="/usersignin" element={<UserSignin />} />
        <Route path="/test" element={<TestLogin />} />
<<<<<<< HEAD
        <Route path="/userpromote" element={<UserPromote/>}/>
        <Route path="/getalluser" element={<Getalluser/>}/>
         <Route path="/create" element={<CreateExam/>}/>
    
=======
         <Route path="/home" element={<Home />} />
>>>>>>> fd671ad3a68284601f4304c603e510b9f1ebf464
      </Routes>
    </BrowserRouter>
     
   
    </>
  );
};

export default App;
