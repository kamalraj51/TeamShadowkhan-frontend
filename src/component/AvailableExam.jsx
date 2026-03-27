import React from 'react'
import { AvailableTable, H2, HeadingTable, Th } from '../styles/AvailableExamStyle'

const AvailableExam = () => {
  return (
    <AvailableExam>
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
                    <Th>Exam Id</Th>
                    <Th>Assign User to this Exam</Th>
                    <Th>SetUp this Exam</Th>
                </tr>
            </thead>
        </AvailableTable>
    </AvailableExam>
  )
}

export default AvailableExam
