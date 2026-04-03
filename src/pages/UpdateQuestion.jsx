import React, { use } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
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

const UpdateQuestion = () => {
   const { quesId } = useParams()
  const [apiError, setApiError] = useState("");
  const [questionType, setQuestionType] = useState("SINGLE_CHOICE");
  const [option, setOption] = useState("A");
  const [topics, setTopics] = useState([]);
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({ questionId: quesId });

    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [singleAnswer, setSingleAnswer] = useState("A");
    const [textAnswer, setTextAnswer] = useState("");
  

  //api call
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch(
          "https://localhost:8443/sphinx/api/question/getquesbyid",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ questionId: quesId }),
          },
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        setFormData(data.question.question || []);
      } catch (err) {
        console.error("Error fetching topics:", err);
        console.log(err);
      }
    };

    fetchTopics();
  }, []);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://localhost:8443/sphinx/api/question/updatequestion",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();
    } catch (err) {
      setApiError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
              <QuestionTitle>Question Update Page</QuestionTitle>
              <QuestionSubtitle>Update Topic wise question</QuestionSubtitle>
    
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
                  {loading ? "Updating ..." : "Update"}
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

export default UpdateQuestion;
