import React, { use } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ApiError,
  CreateQuesButton,
  QuestionContainer,
  QuestionField,
  QuestionFooter,
  QuestionForm,
  QuestionInput,
  SectionTitle,
  QuestionSubtitle,
  QuestionTitle,
  QuestionWrapper,
  Select,
  OptionsGrid,
} from "../styles/CreateQuestion.styles";

import { useEffect, useState } from "react";
import Layout from "../component/Layout";

const CreateQuestion = () => {
  const [apiError, setApiError] = useState("");
  const [questionType, setQuestionType] = useState("SINGLE_CHOICE");

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [singleAnswer, setSingleAnswer] = useState("A");
  const [textAnswer, setTextAnswer] = useState("");

  const [formData, setFormData] = useState({
    topicId: "",
    questionDetail: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    answer: "",
    numAnswers: 1,
    questionTypeId: questionType,
    difficultyLevel: 0,
    answerValue: 0,
    negativeMarkValue: 1,
  });

  const [topics, setTopics] = useState([]);
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const finalData = {
      ...formData ,
      questionTypeId: questionType,
      answer:
        questionType === "MULTI_CHOICE"
          ? selectedAnswers.join(",")
          : questionType === "FILL_BLANKS" || questionType === "DETAILED_ANSWER"
            ? textAnswer
            : singleAnswer,
    };

    try {
      const response = await fetch(
        "https://localhost:8443/sphinx/api/question/createquestion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalData),
        },
      );

      await response.json();
      alert("Question Created Successfully")
      navigate("/addquestion");
    } catch (err) {
      setApiError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch(
          "https://localhost:8443/sphinx/api/topic/gettopics",
        );
        const data = await res.json();
        setTopics(data.topic || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTopics();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
      questionTypeId: questionType,
    });
  };

  const handleCheckboxChange = (value) => {
    if (selectedAnswers.includes(value)) {
      setSelectedAnswers(selectedAnswers.filter((v) => v !== value));
    } else {
      setSelectedAnswers([...selectedAnswers, value]);
    }
  };

  useEffect(() => {
    setSelectedAnswers([]);
    setSingleAnswer("A");
    setTextAnswer("");

    setFormData((prev) => ({
      ...prev,
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      numAnswers: 1,
    }));
  }, [questionType]);

  useEffect(() => {
    if (questionType === "TRUE_FALSE") {
      setFormData((prev) => ({
        ...prev,
        optionA: "True",
        optionB: "False",
        optionC: "",
        optionD: "",
      }));
    }
  }, [questionType]);

  return (
    <Layout>
      <QuestionContainer>
        <QuestionWrapper>
          <QuestionTitle>Question Page</QuestionTitle>
          <QuestionSubtitle>Create Topic wise question</QuestionSubtitle>

          <QuestionForm onSubmit={handleSubmit}>
            {apiError && <ApiError>{apiError}</ApiError>}

            <QuestionField>
              <SectionTitle>Question Type</SectionTitle>

              <Select
                value={questionType}
                onChange={(e) => setQuestionType(e.target.value)}
              >
                <option value="SINGLE_CHOICE">SINGLE CHOICE</option>
                <option value="MULTI_CHOICE">MULTI CHOICE</option>
                <option value="TRUE_FALSE">TRUE/FALSE</option>
                <option value="FILL_BLANKS">FILL BLANKS</option>
                <option value="DETAILED_ANSWER">DETAILED ANSWER</option>
              </Select>
            </QuestionField>

            <QuestionField>
              <SectionTitle>Select Topic</SectionTitle>
              <Select
                id="topicId"
                value={formData.topicID}
                onChange={handleChange}
              >
                <option value="">--Select Topic--</option>
                {topics.map((topic) => (
                  <option key={topic.topicId} value={topic.topicId}>
                    {topic.topicName}
                  </option>
                ))}
              </Select>

              <QuestionField>
                <SectionTitle>Question</SectionTitle>
                <QuestionInput
                  type="text"
                  id="questionDetail"
                  value={formData.questionDetail}
                  onChange={handleChange}
                />
              </QuestionField>

              {questionType !== "FILL_BLANKS" &&
                questionType !== "DETAILED_ANSWER" && (
                  <>
                    <SectionTitle>Options</SectionTitle>

                    <OptionsGrid>
                      {[
                        "A",
                        "B",
                        ...(questionType !== "TRUE_FALSE" ? ["C", "D"] : []),
                      ].map((opt) => (
                        <QuestionField key={opt}>
                          <SectionTitle>Option {opt}</SectionTitle>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                            }}
                          >
                            {questionType === "MULTI_CHOICE" && (
                              <input
                                type="checkbox"
                                onChange={() => handleCheckboxChange(opt)}
                              />
                            )}

                            <QuestionInput
                              type="text"
                              id={`option${opt}`}
                              value={formData[`option${opt}`]}
                              onChange={handleChange}
                            />
                          </div>
                        </QuestionField>
                      ))}
                    </OptionsGrid>
                  </>
                )}
              {questionType === "SINGLE_CHOICE" && (
                <QuestionField>
                  <SectionTitle>Correct Answer</SectionTitle>
                  <Select
                    value={singleAnswer}
                    onChange={(e) => setSingleAnswer(e.target.value)}
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </Select>
                </QuestionField>
              )}

              {questionType === "TRUE_FALSE" && (
                <QuestionField>
                  <SectionTitle>Correct Answer</SectionTitle>
                  <Select
                    value={singleAnswer}
                    onChange={(e) => setSingleAnswer(e.target.value)}
                  >
                    <option value="A">True</option>
                    <option value="B">False</option>
                  </Select>
                </QuestionField>
              )}

              {questionType === "MULTI_CHOICE" && (
                <>
                  <QuestionField>
                    <SectionTitle>Selected Answers</SectionTitle>
                    <p>{selectedAnswers.join(", ")}</p>
                  </QuestionField>

                  <QuestionField>
                    <SectionTitle>Number of Answers</SectionTitle>
                    <QuestionInput
                      type="number"
                      id="numAnswers"
                      value={formData.numAnswers}
                      onChange={handleChange}
                    />
                  </QuestionField>
                </>
              )}

              {questionType === "FILL_BLANKS" && (
                <QuestionField>
                  <SectionTitle>Correct Answer</SectionTitle>
                  <QuestionInput
                    type="text"
                    value={textAnswer}
                    onChange={(e) => setTextAnswer(e.target.value)}
                  />
                </QuestionField>
              )}

              {questionType === "DETAILED_ANSWER" && (
                <QuestionField>
                  <SectionTitle>Answer</SectionTitle>
                  <textarea
                    rows="4"
                    value={textAnswer}
                    onChange={(e) => setTextAnswer(e.target.value)}
                    style={{
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid #ddd",
                    }}
                  />
                </QuestionField>
              )}

              <QuestionField>
                <SectionTitle>Difficulty Level</SectionTitle>
                <Select
                  id="difficultyLevel"
                  value={formData.difficultyLevel}
                  onChange={handleChange}
                >
                  <option value="1">Easy</option>
                  <option value="2">Medium</option>
                  <option value="3">Hard</option>
                </Select>
              </QuestionField>

              <QuestionField>
                <SectionTitle>Answer Value</SectionTitle>
                <QuestionInput
                  type="number"
                  id="answerValue"
                  value={formData.answerValue}
                  onChange={handleChange}
                />
              </QuestionField>

              <QuestionField>
                <SectionTitle>Negative Mark</SectionTitle>
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
