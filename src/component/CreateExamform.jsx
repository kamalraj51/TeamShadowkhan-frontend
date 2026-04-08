import React, { useState } from 'react'
import { ApiError, Button, Container, Field, Form, Heading, Input, Label } from '../styles/CreateExam.style'
import {  NavLink, useNavigate } from 'react-router-dom'

const CreateExamform = () => {
    const navigate=useNavigate()
    const [msg,setMsg]=useState("")
    let [formData,setFormData]=useState({
        examName:"",
        description:"",
        noOfQuestions:"",
        duration:"",
        passPercentage:""
    })

       
    let handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
    })
    }
   
    let handleCreate=async (e)=>{
        e.preventDefault()
        let response=await fetch("https://localhost:8443/sphinx/api/exam/createexam",{
           
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(formData),
            
        })
       
        if(response.ok){
            console.log("hii fronytend")
            const data = await response.json();
            const examId = data.examId;
            console.log("1",data.examId);
            
            navigate(`/examcreatetopic/${examId}`)
        }else if(!response.ok){
             const data = await response.json();
             setMsg(data.error)

        }

    }
  return (
    <>
    <Container>
        <Heading>Create Exam</Heading>
        
         <ApiError>{msg}</ApiError>
        <Form onSubmit={handleCreate}>
             
            <Field>
                <Label>Exam.Name</Label>
                <Input type="text" name="examName" onChange={handleChange}/>
            </Field>
            <Field>
                <Label>Description</Label>
                <Input type="text"  name="description" onChange={handleChange}/>
            </Field>
            <Field>
                <Label>No.Of.Questions</Label>
                <Input type="text" name="noOfQuestions" onChange={handleChange}/>
            </Field>
            <Field>
                <Label>Duration (<span><b>Minutes</b></span>)</Label>
                <Input type="text" name="duration" onChange={handleChange}/>
            </Field>
             <Field>
                <Label>Pass percentage <span><b>%</b></span></Label>
                <Input type="text" name="passPercentage" onChange={handleChange}/>
            </Field>
            <Button type="submit">submit</Button>

        </Form>
    </Container>
   
        
    </>
  )
}

export default CreateExamform