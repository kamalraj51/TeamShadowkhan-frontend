import React from 'react'
import { ContainerExamTD, ContentETD, H2, P } from '../styles/ExamTDetails.style'

const ExamTDetails = () => {
  return (
    <ContainerExamTD>
        <H2>Exam Topics</H2>
        <ContentETD>
            <P>1</P>
            <P>E123</P>
            <P>java SQl</P>
        </ContentETD>
    </ContainerExamTD>
  )
}

export default ExamTDetails
