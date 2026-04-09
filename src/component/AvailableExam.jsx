import React, { useEffect, useMemo, useState } from 'react'
import { Add,AvailableContainer, AvailableTable, ButtonDiv, Delete, Edit, H2, HeadingTable, TableWrapper, Td, Th, Upload } from '../styles/AvailableExamStyle'
import { Button } from '../styles/CreateExam.style'
import UsersList from '../pages/UsersList'
import { NavLink2 } from '../styles/ExamTDetails.style'
import { NavLink, useNavigate } from 'react-router-dom'
import { toggle } from '../reducer/apiReduce'
import { useDispatch, useSelector } from 'react-redux'

const AvailableExam = () => {
   const dispatch=useDispatch()
   const navigate=useNavigate()
  const [examData,setExamData]=useState([])
   const apiRefresh=useSelector((state)=>state.api.value)
   const getAllExam=async()=>{
      const response=await fetch("https://localhost:8443/sphinx/api/exam/getexam",{
        method:"GET",
        

      })
       const allData=await response.json()
      console.log(allData)
      setExamData(allData.data.data)
      console.log(examData)
    }
    const handleExamDelete=async (examId)=>{
      console.log(examId)
        try{
          const response=await fetch("https://localhost:8443/sphinx/api/exam/examDelete",{
          method:"DELETE",
          headers:{
             "Content-Type": "application/json",
          },
         
             body:JSON.stringify({"examId":examId})

            
        })
        if(!response.ok){
          console.log("not deleted from response")
        }
        alert("exam deleted successfully")
        dispatch(toggle())
        
        }catch(err){
          console.log(err ,'not deleted')
        }
        
      
     
      }

   
  useEffect(()=>{
    getAllExam()
   },[apiRefresh])

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
                   
                    <Th>Exam Name</Th>
                    <Th>Description</Th>
                    <Th>No of Question</Th>
                    <Th>Duration</Th>
                    <Th>Pass %</Th>
                    <Th>Edit Exam</Th>
                    
                   
                   
                    <Th>Delete the Exam</Th>

                    <Th>Assign user</Th>
                </tr>
            </thead>
          <tbody>
  {examData.map((data, index) => (

   
    
    <tr key={index}>
      <Td>{index + 1}</Td>
      
      <Td>{data.examName}</Td>
      <Td>{data.description}</Td>
      <Td>{data.noOfQuestions}</Td>
      <Td>{data.duration}</Td>
      <Td>{data.passPercentage}</Td>

      <Td>
       <ButtonDiv>
           <Add onClick={() =>{
               let examId=data.examId
           navigate(`/examcreatetopic/${examId}`)}}>Add</Add>
        <Edit onClick={() =>{
               let examId=data.examId

           navigate(`/editexam/${examId}`)}}>Edit</Edit>
       
       </ButtonDiv>

      </Td>

      
      

      <Td><Delete onClick={()=>handleExamDelete(data.examId)}>
    Delete
  </Delete>
</Td>
<Td>
  <Button onClick={() =>{
               let examId=data.examId
           navigate(`/getuser/${examId}`)}}>
    Assign
  </Button>
  </Td>
 

    </tr>
  ))}
</tbody>
        </AvailableTable>
        </TableWrapper>
        
    </AvailableContainer>
  )
}

export default AvailableExam
