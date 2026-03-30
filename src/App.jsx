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
// import Admindashboard from "./Dashboard/Admindashboard";

import Home from "./pages/Home";
import TopicMaster from "./pages/TopicMaster";
import ExamTopic from "./component/ExamTopic";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserSignin />} />
          {/* <Route path="/admin" element={<Admindashboard/>}/> */}
          <Route path="/usersignup" element={<UserSignup />} />

          <Route path="/usersignin" element={<UserSignin />} />
          <Route path="/test" element={<TestLogin />} />
          <Route path="/userpromote" element={<UserPromote />} />
          <Route path="/getalluser" element={<Getalluser />} />
          <Route path="/createxam" element={<CreateExam />} />
          <Route path="/examtopic" element={<ExamTopic />} />
          <Route path="/createquestion" element={<CreateQuestion />} />
          <Route path="/adminhome" element={<Home />} />
          <Route path="/topicmaster" element={<TopicMaster />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
