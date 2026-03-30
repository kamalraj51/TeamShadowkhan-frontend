import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminSignin from "./pages/AdminSignin";
import UserSignin from "./pages/UserSiginin";
import UserSignup from "./pages/UserSignup";
import TestLogin from "./pages/TestLogin";
import UserPromote from "./pages/UserPromote";
import CreateQuestion from "./pages/CreateQuestion";
import Getalluser from "./database/Getalluser";
import CreateExam from "./pages/CreateExam";
import Admindashboard from "./Dashboard/Admindashboard";
import Header from "./component/Header";
import Home from "./pages/Home";
import AddTopic from "./component/AddTopic";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserSignin />} />
          <Route path="/admin" element={<Admindashboard />} />
          <Route path="/usersignup" element={<UserSignup />} />

          <Route path="/usersignin" element={<UserSignin />} />
          <Route path="/test" element={<TestLogin />} />
          <Route path="/userpromote" element={<UserPromote />} />
          <Route path="/getalluser" element={<Getalluser />} />
          <Route path="/createxam" element={<CreateExam />} />
          <Route path="/createquestion" element={<CreateQuestion />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createtopic" element={<AddTopic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
