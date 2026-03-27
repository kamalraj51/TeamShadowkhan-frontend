import React, { useState } from 'react'
import { Button, Field, Form, Input, Label } from '../styles/CreateExam.style'
import {  NavLink, useNavigate } from 'react-router-dom'

const CreateExamform = () => {
    const navigate=useNavigate()

    let [formData,setFormData]=useState({
        examname:"",
        description:"",
        noofquestions:"",
        duration:"",
        passpercentage:""
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
          
        }

    }
  return (
    <>
        <Form onSubmit={handleCreate}>
             
            <Field>
                <Label>Exam.Name</Label>
                <Input type="text" name="examname" onChange={handleChange}/>
            </Field>
            <Field>
                <Label>Description</Label>
                <Input type="text"  name="description" onChange={handleChange}/>
            </Field>
            <Field>
                <Label>No.Of.Questions</Label>
                <Input type="text" name="noofquestions" onChange={handleChange}/>
            </Field>
            <Field>
                <Label>Duration</Label>
                <Input type="text" name="duration" onChange={handleChange}/><span><b>Minutes</b></span>
            </Field>
             <Field>
                <Label>Pass percentage</Label>
                <Input type="text" name="passpercentage" onChange={handleChange}/><span><b>%</b></span>
            </Field>
            <Button type="submit">submit</Button>

        </Form>
        <NavLink></NavLink>
    </>
  )
}

export default CreateExamform