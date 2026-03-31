import React, { use } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ApiError,
  CreateQuesButton,
  QuestionContainer,
  CreateQuesError,
  QuestionField,
  QuestionFooter,
  QuestionForm,
  QuestionInput,
  QuestionLabel,
  QuestionSubtitle,
  QuestionTitle,
  QuestionWrapper,
} from "../styles/CreateQuestion.styles";

import { useEffect, useState } from "react";
import Layout from "../component/Layout";

// VALIDATION
const CreateQuestion = () => {
  const [apiError, setApiError] = useState("");
  const [formData, setFormData] = useState({
    topicId: "Maths",
    questionDetail: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    optionE: "",
    answer: "",
    numAnswers: 0,
    questionType: 0,
    difficultyLevel: 0,
    answerValue: 0,
    negativeMarkValue: 1,
  });
  const [topics, setTopics] = useState([]);
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
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
   setLoading(true);
    try {
      const response = await fetch(
        "https://localhost:8443/sphinx/api/question/createQuestion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      navigate("/createquestion");
    } catch (err) {
      setApiError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  //container to store the question

  //api call
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch(
          "https://localhost:8443/sphinx/api/topic/gettopics",
        ); //id, name
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        setTopics(data.topic || []); // assuming array response
      } catch (err) {
        console.error("Error fetching topics:", err);
        console.log(err);
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
      <QuestionContainer>
        <QuestionWrapper>
          <QuestionTitle>Question Page</QuestionTitle>
          <QuestionSubtitle>Create Topic wise question</QuestionSubtitle>

          <QuestionForm onSubmit={handleSubmit}>
            {apiError && <ApiError>{apiError}</ApiError>}

            <QuestionField>
              <QuestionLabel>Question Type</QuestionLabel>

              <select
                id="questionType"
                value={formData.questionType}
                onChange={handleChange}
              >
                <option value="SINGLE_CHOICE" onClick={() => setToggle(false)}>
                  SINGLE CHOICE
                </option>
                <option value="MULTI_CHOICE" onClick={() => setToggle(true)}>
                  MULTI CHOICE
                </option>
                <option value="TRUE_FALSE" onClick={() => setToggle(false)}>
                  TRUE/FALSE
                </option>
                <option value="FILL_BLANKS" onClick={() => setToggle(false)}>
                  FILL BLANKS
                </option>
                <option
                  value="DETAILED_ANSWER"
                  onClick={() => setToggle(false)}
                >
                  DETAILED ANSWER
                </option>
              </select>
            </QuestionField>

            <QuestionField>
              <QuestionLabel>Select Topic</QuestionLabel>
              <select
                id="topicId"
                value={formData.topicId}
                onChange={handleChange}
              >
                {topics.map((topic) => (
                  <option key={topic.topicId} value={topic.topicId}>
                    {topic.topicName}
                  </option>
                ))}
              </select>
              <QuestionField>
                <QuestionLabel>Question</QuestionLabel>
                <QuestionInput
                  type="text"
                  id="questionDetail"
                  value={formData.questionDetail}
                  onChange={handleChange}
                />
              </QuestionField>

              <QuestionField>
                <QuestionLabel>Option A *</QuestionLabel>
                <QuestionInput
                  type="text"
                  id={`optionA`}
                  value={formData[`optionA`]}
                  onChange={handleChange}
                />
              </QuestionField>

              <QuestionField>
                <QuestionLabel>Option B * </QuestionLabel>
                <QuestionInput
                  type="text"
                  id={`optionB`}
                  value={formData[`optionB`]}
                  onChange={handleChange}
                />
              </QuestionField>

              <QuestionField>
                <QuestionLabel>Option C</QuestionLabel>
                <QuestionInput
                  type="text"
                  id={`optionC`}
                  value={formData[`optionC`]}
                  onChange={handleChange}
                />
              </QuestionField>
              <QuestionField>
                <QuestionLabel>Option D</QuestionLabel>
                <QuestionInput
                  type="text"
                  id={`optionD`}
                  value={formData[`optionD`]}
                  onChange={handleChange}
                />
              </QuestionField>
              <QuestionField>
                <QuestionLabel>Option E</QuestionLabel>
                <QuestionInput
                  type="text"
                  id={`optionE`}
                  value={formData[`optionE`]}
                  onChange={handleChange}
                />
              </QuestionField>

              <QuestionField>
                <QuestionLabel>Correct Answer</QuestionLabel>
                <select
                  id="answer"
                  value={formData.answer}
                  onChange={handleChange}
                >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                </select>
              </QuestionField>
              {toggle && (
                <QuestionField>
                  <QuestionLabel>Number of Answers</QuestionLabel>
                  <QuestionInput
                    type="number"
                    id="numAnswers"
                    value={formData.numAnswers}
                    onChange={handleChange}
                    min="1"
                  />
                </QuestionField>
              )}

              <QuestionField>
                <QuestionLabel>Difficulty Level</QuestionLabel>
                <select
                  id="difficultyLevel"
                  value={formData.difficultyLevel}
                  onChange={handleChange}
                >
                  <option value="1">Easy</option>
                  <option value="2">Medium</option>
                  <option value="3">Hard</option>
                </select>
              </QuestionField>

              <QuestionField>
                <QuestionLabel>Answer Value</QuestionLabel>
                <QuestionInput
                  type="number"
                  id="answerValue"
                  value={formData.answerValue}
                  onChange={handleChange}
                />
              </QuestionField>

              <QuestionField>
                <QuestionLabel>Negative Mark</QuestionLabel>
                <QuestionInput
                  type="number"
                  id="negativeMarkValue"
                  value={formData.negativeMarkValue}
                  onChange={handleChange}
                />
              </QuestionField>
            </QuestionField>

            <CreateQuesButton type="submit" disabled={loading}>
              {loading ? "Creating ..." : "Create"}
            </CreateQuesButton>

            <QuestionFooter>
              <NavLink to="/adminhome">Back to home</NavLink>
            </QuestionFooter>
          </QuestionForm>
        </QuestionWrapper>
      </QuestionContainer>
    </Layout>
  );
};

export default CreateQuestion;
