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
            <h3>percentage</h3>
        </Row>
       
        <Form action={handledata}>
            
                 <Field>
                     <Label for="exam topic"/>
                    <Input typr="text" name=" examTopicName" onChange={handleinput}></Input>
                 </Field>
                
                 <Field>
                    <Label for="percentage"/>
                    <Input typr="text" name=" percentage" onChange={handleinput}></Input>
                 </Field>
                 <Field>
                    <Label for="topicId"/>
                    <Input typr="text" name=" topicId" onChange={handleinput}></Input>
                 </Field>
                 <Button type="submit">add topic</Button>
            
        </Form>
         {
            data.map((e,i)=>{
                return(
                   <Row>
                        <h3>{data. examTopicName}</h3>
                        <h3>{data.percentage}</h3>
                        <p>{data.topicId}</p>
                        
                   </Row>
                   
                )
            })
        }
    </>
  )
}

export default ExamTopic