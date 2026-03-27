import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ApiError,
  RegisterButton,
  RegisterContainer,
  RegisterError,
  RegisterField,
  RegisterFooter,
  RegisterForm,
  RegisterInput,
  RegisterLabel,
  RegisterSubtitle,
  RegisterTitle,
  RegisterWrapper,
} from "../styles/SignupStyle";
import { useEffect, useState } from "react";
import Layout from "../component/Layout";

// VALIDATION
const validate = () => {
  let newErrors = {};

  if (!formData.username) {
    newErrors.firstName = "must should be fill the firstName";
  }

  if (!formData.lastName) {
    newErrors.lastName = "must should be fill the last";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);
  setApiError("");

  try {
    const response = await fetch(
      "https://localhost:8443/sphinx/api/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      setApiError(data.message || "Signup failed!");
      return;
    }

    navigate("/");
  } catch (err) {
    setApiError("Network error. Please try again.");
  } finally {
    setLoading(false);
  }
};

const CreateQuestion = () => {
  //container to store the question
  const [formData, setFormData] = useState({
    topicId: "",
    questionDetail: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    optionE: "",
    answer: "",
    numAnswers: "",
    questionType: "",
    difficultyLevel: "",
    answerValue: "",
    negativeMarkValue: "0",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const [topics, setTopics] = useState([]);

 
  //api call
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch(
          "https://localhost:8443/sphinx/api/topic/gettopics");
        if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

        const data = await res.json();
        console.log(data)
        setTopics(data.topic || []); // assuming array response
      } catch (err) {
        console.error("Error fetching topics:", err);
        console.log(err)
      }
    };

    fetchTopics();
  }, []);




  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.id]: "",
    });

    setApiError("");
  };

  return (
   <Layout>
       <RegisterContainer>
      <RegisterWrapper>
        <RegisterTitle>Question Page</RegisterTitle>
        <RegisterSubtitle>Create Topic wise question</RegisterSubtitle>

        <RegisterForm onSubmit={handleSubmit}>
          {apiError && <ApiError>{apiError}</ApiError>}

          <RegisterField>
            <RegisterLabel>Select Topic</RegisterLabel>
          <select id="topicId" value={formData.topicId} onChange={handleChange}>
           <option value="">-- Select Topic --</option>
             {topics.map((topic) => (
            <option key={topic.topicId} value={topic.topicId}>
            {topic.topicName}
          </option>
  ))}
</select>
            <RegisterField>
              <RegisterLabel>Question</RegisterLabel>
              <RegisterInput
                type="text"
                id="questionDetail"
                value={formData.questionDetail}
                onChange={handleChange}
              />
            </RegisterField>

            {["A", "B", "C", "D", "E"].map((opt) => (
              <RegisterField key={opt}>
                <RegisterLabel>Option {opt}</RegisterLabel>
                <RegisterInput
                  type="text"
                  id={`option${opt}`}
                  value={formData[`option${opt}`]}
                  onChange={handleChange}
                />
              </RegisterField>
            ))}

            <RegisterField>
              <RegisterLabel>Correct Answer</RegisterLabel>
              <select
                id="answer"
                value={formData.answer}
                onChange={handleChange}
              >
                <option value="">Select Answer</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select>
            </RegisterField>

            <RegisterField>
              <RegisterLabel>Number of Answers</RegisterLabel>
              <RegisterInput
                type="number"
                id="numAnswers"
                value={formData.numAnswers}
                onChange={handleChange}
                min="1"
              />
            </RegisterField>

            <RegisterField>
              <RegisterLabel>Question Type</RegisterLabel>
              <RegisterInput
                type="text"
                id="questionType"
                value={formData.questionType}
                onChange={handleChange}
              />
            </RegisterField>

            <select
              id="questionType"
              value={formData.questionType}
              onChange={handleChange}
            >
              <option value="">Select Type</option>
              <option value="MCQ">MCQ</option>
              <option value="MULTI">Multiple Answer</option>
            </select>

            <RegisterField>
              <RegisterLabel>Difficulty Level</RegisterLabel>
              <select
                id="difficultyLevel"
                value={formData.difficultyLevel}
                onChange={handleChange}
              >
                <option value="">Select Difficulty</option>
                <option value="EASY">Easy</option>
                <option value="MEDIUM">Medium</option>
                <option value="HARD">Hard</option>
              </select>
            </RegisterField>

            <RegisterField>
              <RegisterLabel>Answer Value</RegisterLabel>
              <RegisterInput
                type="number"
                id="answerValue"
                value={formData.answerValue}
                onChange={handleChange}
              />
            </RegisterField>

            <RegisterField>
              <RegisterLabel>Negative Mark</RegisterLabel>
              <RegisterInput
                type="number"
                id="negativeMarkValue"
                value={formData.negativeMarkValue}
                onChange={handleChange}
              />
            </RegisterField>
            {errors.confirmPassword && (
              <RegisterError>{errors.confirmPassword}</RegisterError>
            )}
          </RegisterField>

          <RegisterButton type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Signup"}
          </RegisterButton>

          <RegisterFooter>
            Already have an account? <NavLink to="/">Go to login</NavLink>
          </RegisterFooter>
        </RegisterForm>
      </RegisterWrapper>
    </RegisterContainer>
   </Layout>
  );
};

export default CreateQuestion;
