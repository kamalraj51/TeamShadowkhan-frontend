import React, { useState } from 'react'

const Update = ({exam}) => {
  let [data,setData]=useState(exam)
  let handleSubmit= async()=>{
    let response=await fetch("https://localhost:8443/sphinx/api/exam/updateExam",{
        method:"Put",
        headers:{
             "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    })
  }
  return (
    <>
        <Form onSubmit={handleCreate}>
                     
            <Field>
                <Label>Exam.Name</Label>
                <Input type="text" name="examname" onChange={handleChange} value={exam.examName}/>
            </Field>
            <Field>
                 <Label>Description</Label>
                 <Input type="text"  name="description" onChange={handleChange} value={exam.description}/>
            </Field>
            <Field>
                 <Label>No.Of.Questions</Label>
                <Input type="text" name="noofquestions" onChange={handleChange} value={exam.noOfQuestions}/>      
            </Field>
            <Field>
                <Label>Duration</Label>
                <Input type="text" name="duration" onChange={handleChange} value={exam.duration}/><span><b>Minutes</b></span>
            </Field>
            <Field>
                <Label>Pass percentage</Label>
                <Input type="text" name="passpercentage" onChange={handleChange} value={exam.passPercentage}/><span><b>%</b></span>
            </Field>
            <Button type="submit">submit</Button>
        </Form>
    </>
  )
}

export default Update