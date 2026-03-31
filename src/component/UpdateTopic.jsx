import React from 'react'
import { FormContainer, H2, TopicButton, TopicContainer, TopicField, TopicInput, TopicLabel } from '../styles/AddTopicStyle'

const UpdateTopic = (props) => {
    
  return (
    <TopicContainer>
           <H2>Add Topic</H2>
           {apiError && <ApiError>{apiError}</ApiError>}
           <FormContainer onSubmit={handleSubmit}>
               <TopicField>
                   <TopicLabel>Enter the Topic</TopicLabel>
                   <TopicInput type='text' id='topicName' value={topicName} onChange={handleChange}></TopicInput>
                   {error && <TopicError>{error}</TopicError>}
               </TopicField>
               <TopicButton type='submit' disabled={loading}>{loading ? "Submitting..." : "Submit"}</TopicButton>
               {success && <p style={{color:"green"}}>{success}</p>}
           </FormContainer>
      </TopicContainer>
  )
}

export default UpdateTopic
