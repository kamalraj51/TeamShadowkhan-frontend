import React, { useEffect, useState } from 'react'
import { AvailableContainer, AvailableTable, H2, HeadingTable, TableWrapper, Td, Th } from '../styles/AvailableExamStyle'
import { Button } from '../styles/CreateExam.style'

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
   useEffect(()=>{
    getAllExam()
   })

 
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
                    <th>Delete the Exam</th>
                </tr>
            </thead>
          <tbody>
  {examData.map((data, index) => (
    
    <tr key={data.id}>
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
      <Td><Button>Delete</Button></Td>
    </tr>
  ))}
</tbody>
        </AvailableTable>
        </TableWrapper>
        
    </AvailableContainer>
  )
}

export default AvailableExam
