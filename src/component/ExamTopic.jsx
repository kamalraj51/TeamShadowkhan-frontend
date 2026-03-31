import React, { useState, useEffect } from "react";
import {
  Button,
  Field,
  Form,
  Input,
  Label,
  Row,
  Select,
} from "../styles/CreateExam.style";
import { useNavigate } from "react-router-dom";

const ExamTopic = ({ examid }) => {
  const [topics, setTopics] = useState([]);
  let navigate = useNavigate();
  let [data, setData] = useState({
    examTopicName: "",
    topicId: "",
    examId: examid,
    percentage: "",
  });
  let handleinput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };
  let handledata = async (e) => {
    let response = await fetch(
      "https://localhost:8443/sphinx/api/exam/addtopic",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    if (response.ok) {
      navigate("/");
    }
  };

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

  return (
    <>
      <Form action={handledata}>
        <Field>
          <Label>Select Topic</Label>
          <Select id="topicId" value={data.topicId} onChange={handleChange}>
            <option value="">-- Select Topic --</option>
            {topics.map((topic) => (
              <option key={topic.topicId} value={topic.topicId}>
                {topic.topicName}
              </option>
            ))}
          </Select>
        </Field>

        <Field>
          <Label for="percentage">percentage</Label>
          <Input typr="text" name=" percentage" onChange={handleinput}></Input>
        </Field>

        <Button type="submit">add topic</Button>
      </Form>
    </>
  );
};

export default ExamTopic;
