import React, { useState } from 'react'
import { Button, Field, Form, Input, Label, Row } from '../styles/CreateExam.style'
import { useNavigate } from 'react-router-dom'

const ExamTopic = ({ examid }) => {
  let navigate = useNavigate()

  let [formData, setFormData] = useState({
    examTopicName: "",
    topicId: "",
    examId: examid,
    percentage: ""
  })

  let [topics, setTopics] = useState([])

  let handleinput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  let handledata = async (e) => {
    e.preventDefault()

    let response = await fetch("https://localhost:8443/sphinx/api/exam/addtopic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      setTopics([...topics, formData]) // add to list
      setFormData({
        examTopicName: "",
        topicId: "",
        examId: examid,
        percentage: ""
      })
    }
  }

  return (
    <>
      <Row>
        <h3>TopicId</h3>
        <h3>TopicName</h3>
        <h3>Percentage</h3>
      </Row>

      <Form onSubmit={handledata}>
        <Field>
          <Label htmlFor="examTopicName">Topic Name</Label>
          <Input type="text" name="examTopicName" value={formData.examTopicName} onChange={handleinput} />
        </Field>

        <Field>
          <Label htmlFor="percentage">Percentage</Label>
          <Input type="text" name="percentage" value={formData.percentage} onChange={handleinput} />
        </Field>

        <Field>
          <Label htmlFor="topicId">Topic ID</Label>
          <Input type="text" name="topicId" value={formData.topicId} onChange={handleinput} />
        </Field>

        <Button type="submit">Add Topic</Button>
      </Form>

      {
        topics.map((e, i) => (
          <Row key={i}>
            <h3>{e.examTopicName}</h3>
            <h3>{e.percentage}</h3>
            <p>{e.topicId}</p>
          </Row>
        ))
      }
    </>
  )
}

export default ExamTopic