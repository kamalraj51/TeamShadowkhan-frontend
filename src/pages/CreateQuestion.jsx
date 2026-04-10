
import  Layout  from "../component/Layout";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateQuestion = () => {
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
    questionTypeId: "SINGLE_CHOICE",
    difficultyLevel: 1,
    answerValue: 1,
    negativeMarkValue: 0,
  });

  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://localhost:8443/sphinx/api/topic/gettopics")
      .then((res) => res.json())
      .then((data) => setTopics(data.topic || []))
      .catch(console.error);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = (value) => {
    setSelectedAnswers((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async () => {
    const finalData = {
      ...formData,
      questionTypeId: questionType,
      answer:
        questionType === "MULTI_CHOICE"
          ? selectedAnswers.join(",")
          : questionType === "FILL_BLANKS" ||
            questionType === "DETAILED_ANSWER"
          ? textAnswer
          : singleAnswer,
    };

    await fetch(
      "https://localhost:8443/sphinx/api/question/createquestion",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      }
    );

    alert("Question Created");
    navigate("/addquestion");
  };

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex justify-center py-10 px-4">
      <div className="w-full max-w-4xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 space-y-8">

        {/* HEADER */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-wide">
            Create Question
          </h1>
          <p className="text-gray-400 text-sm">
            Build smart questions with ease
          </p>
        </div>

        {/* TYPE SWITCH */}
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            "SINGLE_CHOICE",
            "MULTI_CHOICE",
            "TRUE_FALSE",
            "FILL_BLANKS",
            "DETAILED_ANSWER",
          ].map((type) => (
            <button
              key={type}
              onClick={() => setQuestionType(type)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 border ${
                questionType === type
                  ? "bg-white text-black shadow-md scale-105"
                  : "bg-white/5 hover:bg-white/10 border-white/10"
              }`}
            >
              {type.replace("_", " ")}
            </button>
          ))}
        </div>

        {/* TOPIC */}
        <select
          id="topicId"
          value={formData.topicId}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
        >
          <option value="">Select Topic</option>
          {topics.map((t) => (
            <option key={t.topicId} value={t.topicId}>
              {t.topicName}
            </option>
          ))}
        </select>

        {/* QUESTION */}
        <input
          id="questionDetail"
          value={formData.questionDetail}
          onChange={handleChange}
          placeholder="Enter your question..."
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 placeholder-gray-400"
        />

        {/* OPTIONS */}
        {questionType !== "FILL_BLANKS" &&
          questionType !== "DETAILED_ANSWER" && (
            <div className="grid md:grid-cols-2 gap-4">
              {["A", "B", ...(questionType !== "TRUE_FALSE" ? ["C", "D"] : [])].map(
                (opt) => (
                  <div
                    key={opt}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    {questionType === "MULTI_CHOICE" ? (
                      <input
                        type="checkbox"
                        checked={selectedAnswers.includes(opt)}
                        onChange={() => handleCheckboxChange(opt)}
                        className="accent-white"
                      />
                    ) : (
                      <input
                        type="radio"
                        checked={singleAnswer === opt}
                        onChange={() => setSingleAnswer(opt)}
                        className="accent-white"
                      />
                    )}

                    <input
                      id={`option${opt}`}
                      value={formData[`option${opt}`]}
                      onChange={handleChange}
                      placeholder={`Option ${opt}`}
                      className="flex-1 bg-transparent outline-none placeholder-gray-400"
                    />
                  </div>
                )
              )}
            </div>
          )}

        {/* TEXT ANSWER */}
        {(questionType === "FILL_BLANKS" ||
          questionType === "DETAILED_ANSWER") && (
          <textarea
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            placeholder="Enter answer..."
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        )}

        {/* MARKS */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            id="answerValue"
            value={formData.answerValue}
            onChange={handleChange}
            className="p-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-white/20"
            placeholder="Marks"
          />

          <input
            type="number"
            id="negativeMarkValue"
            value={formData.negativeMarkValue}
            onChange={handleChange}
            className="p-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-white/20"
            placeholder="Negative"
          />
        </div>

        {/* SUBMIT */}
        <button
          onClick={handleSubmit}
          className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:scale-[1.02] hover:bg-gray-200 transition"
        >
          Create Question
        </button>
      </div>
      </div>
    </Layout>
  );
};

export default CreateQuestion;