import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
import UpdateQuestion from "./pages/UpdateQuestion";
import QuestionUpload from "./component/QuestionUpload";
import ShowQuestion from "./component/ShowQuestion";
import NoPage from "./pages/NoPage";
import CreateExamTopics from "./pages/CreateExamTopics";
import UsersList from "./pages/UsersList";
import EditExam from "./component/EditExam";
import TopicsShow from "./component/TopicsShow";
import UserSignUp2 from "./pages/UserSignUp2";
import UserSignin from "./pages/UserSiginin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserSignin/>} />
          {/* <Route path="/admin" element={<Admindashboard/>}/> */}
          <Route path="/usersignup" element={<UserSignup/>} />
          <Route
            path="/examcreatetopic/:examId"
            element={<CreateExamTopics />}
          />
          <Route path="/usersignin" element={<UserSignin/>} />
          <Route path="/test" element={<TestLogin />} />
          <Route path="/userpromote" element={<UserPromote />}/>
          <Route path="/getalluser" element={<Getalluser />} />
          <Route path="/createxam" element={<CreateExam />} />
          <Route path="/examtopic" element={<ExamTopic />} />
          <Route path="/showalltopic" element={<TopicsShow/>} />
          <Route path="/updatequestion/:quesId" element={<UpdateQuestion />} />

          <Route path="/adminhome/:userLoginId" element={<Home />} />
           <Route path="/adminhome" element={<Home />} />
          <Route path="/editexam/:examId" element={<EditExam />} />
          <Route path="/topicmaster" element={<TopicMaster />}></Route>

          <Route path="/getuser" element={<UsersList/>}></Route>

          <Route path="/upload" element={<QuestionUpload />}></Route>
          <Route path="/getuser" element={<UsersList/>}></Route>
    <Route path="/usersignup2" element={<UserSignUp2/>}></Route>
          <Route
            path="/showquestion/:topicID"
            element={<ShowQuestion />}
          ></Route>
          <Route
            path="/addquestion"
            element={<CreateQuestion/>}
          ></Route>
          

          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
