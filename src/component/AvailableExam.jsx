import React from 'react'
import { AvailableContainer, AvailableTable, H2, HeadingTable, Td, Th } from '../styles/AvailableExamStyle'

const AvailableExam = () => {
    const examData = [
  {
    id: 1,
    examId: "EX101",
    name: "Java Basics",
    desc: "Java with SQL",
    questions: 50,
    duration: "1 hr",
    pass: "35%"
  },
  {
    id: 2,
    examId: "EX102",
    name: "React",
    desc: "Frontend Development",
    questions: 40,
    duration: "45 mins",
    pass: "40%"
  },
  {
    id: 3,
    examId: "EX103",
    name: "Node.js",
    desc: "Backend API",
    questions: 30,
    duration: "30 mins",
    pass: "50%"
  }
];
  return (
    <AvailableContainer>
        <HeadingTable>
            <H2>Available Exam</H2>
        </HeadingTable>
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
                </tr>
            </thead>
          <tbody>
  {examData.map((exam, index) => (
    <tr key={exam.id}>
      <Td>{index + 1}</Td>
      <Td>{exam.examId}</Td>
      <Td>{exam.name}</Td>
      <Td>{exam.desc}</Td>
      <Td>{exam.questions}</Td>
      <Td>{exam.duration}</Td>
      <Td>{exam.pass}</Td>

      <Td>
        <button>Add</button>
        <button>Edit</button>
        <button>Upload</button>
      </Td>

      <Td>Assign Users</Td>
      <Td>Setup</Td>
    </tr>
  ))}
</tbody>
        </AvailableTable>
    </AvailableContainer>
  )
}

export default AvailableExam
