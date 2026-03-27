import React from 'react'
import { Container } from '../styles/CreateExam.style'
import CreateExamform from '../component/CreateExamform'
import ExamTopic from '../component/ExamTopic'

const CreateExam = () => {
  return (
    <>
        <Container>
            <CreateExamform/>
            <ExamTopic/>
        </Container>
    </>
  )
}

export default CreateExam
