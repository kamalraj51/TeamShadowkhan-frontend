import React from 'react'
import Layout from './Layout'
import { Button, Buttons, EditExContainer, Heading, TopicContaienEx, TopicName } from '../styles/EditExam.style'
import {  FaEdit, FaPlus, FaTrash } from 'react-icons/fa';


const ContentEdit=()=>{
    return(
        <TopicContaienEx>
            <TopicName>java</TopicName>
            <Buttons>
                <Button><FaPlus/> <p>add</p></Button>
                <Button><FaTrash/> <p>delete</p></Button>
            </Buttons>
        </TopicContaienEx>
    )

}

const EditExam = () => {
  return (
    <Layout>
        <EditExContainer>
            <Heading>Topics</Heading>
            <ContentEdit/>
        </EditExContainer>
    </Layout>
  )
}

export default EditExam
