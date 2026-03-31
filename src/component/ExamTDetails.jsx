import React from 'react'
import { ContainerExamTD, ContentETD, H2, P } from '../styles/ExamTDetails.style'

const ExamTDetails = () => {
  return (
    <ContainerExamTD>
        <H2>Exam Topics</H2>
        <ContentETD>
            <P>SNO.</P>
            <P>TopicName</P>
            <P>Percentage</P>
        </ContentETD>
         <ContentETD>
            <P>1</P>
            <P>java</P>
            <P>50</P>
        </ContentETD>
         <ContentETD>
            <P>2</P>
            <P>python</P>
            <P>32</P>
        </ContentETD>
    </ContainerExamTD>
  )
}

export default ExamTDetails
