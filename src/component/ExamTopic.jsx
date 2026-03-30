import React, { useState } from 'react'
import { Button, Field, Form, Input, Label, Row } from '../styles/CreateExam.style'
import { useNavigate } from 'react-router-dom'

const ExamTopic = ({examid}) => {
let navigate=useNavigate()
let [data,setData]=useState({
    examTopicName:"",
    topicId:"",
    examId:examid,
    percentage:""

    
})
let handleinput=(e)=>{
    setData({
        ...data,
        [e.target.name]:e.target.value,

    })

}

let handledata=async (e)=>{
    let response=await fetch("https://localhost:8443/sphinx/api/exam/addtopic",{
         method:"POST",
        headers:{
           
           "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
       
    })
    if(response.ok){
        navigate("/")
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