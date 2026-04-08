import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Button, Field, Form, Input, Label } from '../styles/CreateExam.style';

const ExamUpdate = () => {
    const location = useLocation();
  const { examData } = location.state || {};

  const [data,setData]=useState(
    examData || {}
  
)

  const handleChange=(e)=>{
   
    
    setData({
        ...data,
        [e.target.name]:e.target.value
    }
    )
  }
  const examNameRegex=/^[\w\s\-\.]+$/
  const durationRegex=/^[0-9]{1,3}$/
  const noOfQuestionRegex=/^[1-9][0-9]{0,2}$/
  const passPercentageRegex=/^(100(\.0+)?|[0-9]{1,2}(\.[0-9]+)?)\%?$/ 
  const handleSubmit= async(e)=>{
      e.preventDefault();
    console.log("inside handle submit");
     try{
    const response=await fetch("https://localhost:8443/sphinx/api/exam/examUpdate",{
        method:"PUT",
        headers:{
             "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    })
    if(response.ok){
        console.log("successfully")
  }}catch(err){
    console.log("unexpected error occured");
    
  }
}

  return (
    <>
        <Form onSubmit={handleSubmit}>
                     
            <Field>
                <Label>Exam.Name</Label>
                <Input type="text" name="examName" onChange={handleChange} value={data.examName}/>
            </Field>
            <Field>
                 <Label>Description</Label>
                 <Input type="text"  name="description" onChange={handleChange} value={data.description}/>
            </Field>
            <Field>
                 <Label>No.Of.Questions</Label>
                <Input type="text" name="noOfQuestions" onChange={handleChange} value={data.noOfQuestions}/>      
            </Field>
            <Field>
                <Label>Duration</Label>
                <Input type="text" name="duration" onChange={handleChange} value={data.duration}/>
            </Field>
            <Field>
                <Label>Pass percentage</Label>
                <Input type="text" name="passPercentage" onChange={handleChange} value={data.passPercentage}/><span><b>%</b></span>
            </Field>
            <Button type="submit">submit</Button>
        </Form>
    </>
  )
}

export default ExamUpdate