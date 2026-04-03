import React, { useEffect, useState } from "react";
import {
  ContainerExamTD,
  ContentQues,
  H2,
  ContentQuesHead,
  Para,
} from "../styles/ExamTDetails.style";
import { Button, QuesButtons } from "../styles/TopicsStyle";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { toggle } from "../reducer/apiReduce";
import Layout from "./Layout";

const ShowQuestion = () => {
    
   const { topicID } = useParams();
  const dispatch = useDispatch();
  const [questions, setquestions] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const refreshapi = useSelector((state) => state.api.value);
  const deleteQuestion = async (quesId) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      const response = await fetch(
        `https://localhost:8443/sphinx/api/question/deletequestion`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ questionId: quesId }),
        },
      );

      const data = await response.json();
      if (!response.ok) {
        console.log("not working  " + topicId);
        console.log(data.message || "Failed to delete topic");
        return;
      }
    } catch (err) {
      console.log("error", err);
    } finally {
      console.log("done m");
      setLoading(false);
      dispatch(toggle());
    }
  };
  const updateQuestion = (quesId) => {
    navigate(`/updatequestion/${quesId}`);
  };

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch(
          "https://localhost:8443/sphinx/api/question/getquesbytopic",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ topicId: topicID }),
          },
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const res = await response.json();

        // console.log(res.questionList);
        setquestions(res.questionList || []);
      } catch (err) {
        console.log(err, "fetching");
      }
    };
    fetchTopics();
  }, [refreshapi]);

  return (
    <Layout>
      <ContainerExamTD>
        <H2>Quesions</H2>
        

        {questions.length === 0
          ? "no question available"
          : questions.map((ques, i) => {
              return (
                <ContentQues key={i}>
                  <Para>{i + 1}</Para>
                  <Para>{ques.questionDetail}</Para>
                  <Para>{ques.questionTypeId}</Para>
                  <QuesButtons>
                    <Button
                      disabled={loading}
                      onClick={() => updateQuestion(ques.questionId)}
                    >
                      {loading ? "loading.." : "update"}
                    </Button>
                    <Button
                      disabled={loading}
                      onClick={() => deleteQuestion(ques.questionId)}
                    >
                      {loading ? "loading" : "delete"}
                    </Button>
                  </QuesButtons>
                </ContentQues>
              );
            })}
      </ContainerExamTD>
    </Layout>
  );
};

export default ShowQuestion;
