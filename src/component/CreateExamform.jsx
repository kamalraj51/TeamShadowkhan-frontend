import React, { useState } from 'react'
import { Button, Field, Form, Input, Label } from '../styles/CreateExam.style'
import {  NavLink, useNavigate } from 'react-router-dom'

const CreateExamform = () => {
    const navigate=useNavigate()

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
            body:JSON.stringify(formData)
        })
        if(response.ok){
            console.log("hii fronytend")
            navigate("/")
          
        }

    }
  return (
    <>
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
        
    </>
  )
}

export default CreateExamform