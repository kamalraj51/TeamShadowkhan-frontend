import React, { useEffect, useMemo, useState } from 'react'
import { AvailableContainer, AvailableTable, H2, HeadingTable, TableWrapper, Td, Th } from '../styles/AvailableExamStyle'
import { Button } from '../styles/CreateExam.style'
import UsersList from '../pages/UsersList'
import { NavLink } from 'react-router-dom'
import { NavLink2 } from '../styles/ExamTDetails.style'

const AvailableExam = () => {
   
  
  const [examData,setExamData]=useState([])
  
   const getAllExam=async()=>{
      const response=await fetch("https://localhost:8443/sphinx/api/exam/getexam",{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
        }

      })
       const allData=await response.json()
      console.log(allData)
      setExamData(allData.data.data)
      console.log(examData)
    }
    const handleExamDelete=async (examId)=>{
      console.log(examId)
        const response=await fetch("https://localhost:8443/sphinx/api/exam/examDelete",{
          method:"DELETE",
          headers:{
             "Content-Type": "application/json",
          },
         
             body:JSON.stringify({"examId":examId})
            
        })
      
     
      }

   
  useEffect(()=>{
    getAllExam()
   },[])

  let submitHandle=(examId)=>{
    setId(examId)
    handleExamDelete();
  }
  return (
    <AvailableContainer>
        <HeadingTable>
            <H2>Available Exam</H2>
        </HeadingTable>
        <TableWrapper>
            <AvailableTable>
            <thead>
                <tr>
                    <Th>S1.No</Th>
                    <Th>Exam Id</Th>
                    <Th>Exam Name</Th>
                    <Th>Description</Th>
                    <Th>No of Question</Th>
                    <Th>Duration</Th>
                    <Th>Pass %</Th>
                    <Th>Questions</Th>
                    
                    <Th>Assign User to this Exam</Th>
                    <Th>SetUp this Exam</Th>
                    <Th>Delete the Exam</Th>
                    <Th>Assign The Exam</Th>
                </tr>
            </thead>
          <tbody>
  {examData.map((data, index) => (
    
    <tr key={index}>
      <Td>{index + 1}</Td>
      <Td>{data.examId}</Td>
      <Td>{data.examName}</Td>
      <Td>{data.description}</Td>
      <Td>{data.noOfQuestions}</Td>
      <Td>{data.duration}</Td>
      <Td>{data.passPercentage}</Td>

      <Td>
        <button>Add</button>
        <button>Edit</button>
        <button>Upload</button>
      </Td>

      <Td>Assign Users</Td>
      <Td>Setup</Td>
      <Td><Button onClick={()=>handleExamDelete(data.examId)}> Delete </Button></Td>
      <Td><NavLink2 to="/getuser" state={{"examId":data.examId}}>Assign</NavLink2></Td>
    </tr>
  ))}
</tbody>
        </AvailableTable>
        </TableWrapper>
        
    </AvailableContainer>
  )
}

export default AvailableExam
