import React from "react";
import { Container } from "../styles/CreateExam.style";
import CreateExamform from "../component/CreateExamform";
import ExamTopic from "../component/ExamTopic";
import Layout from "../component/Layout";
import ExamTDetails from "../component/ExamTDetails";

const CreateExam = () => {
  return (
    <>
      <Layout>
        <Container>
          <CreateExamform />
          <ExamTopic />
        </Container>
        <ExamTDetails></ExamTDetails>
      </Layout>
    </>
  );
};

export default CreateExam;
