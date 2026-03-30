import React, { useEffect, useState } from 'react'
import { Button, TopicContainer, TopicContent, TopicHeading, TopicName } from '../styles/TopicsStyle'

const Topics = () => {
    const [topics, setTopics] = useState([]);
    
      useEffect(() => {
        const fetchTopics = async () => {
          try {
            const res = await fetch(
              "https://localhost:8443/sphinx/api/topic/gettopics");
            if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
    
            const data = await res.json();
            console.log(data)
            setTopics(data.topic || []); // assuming array response
          } catch (err) {
            console.error("Error fetching topics:", err);
            console.log(err)
          }
        };
    
        fetchTopics();
      }, []);

  
      const deleteTopic= async (topicId)=>{
       
       try{
         const response=await fetch( `https://localhost:8443/sphinx/api/topic/deletetopic?topicId=${encodeURIComponent(topicId)}`,{
            method:"DELETE",
  }    
        )
        
        const data= await response.json();
         if(!response.ok){
            console.log("not working  "+topicId)
            console.log(data.message || "Failed to delete topic")
            return;
         }
          setTopics(prev => prev.filter(t => t.topicId !== topicId));
   
      }catch(err ){
        console.log("error" ,err )
      }finally{
        console.log("done m")
      }
       }

  return (
   <TopicContainer>
        <TopicHeading>Topics</TopicHeading>
        
        {topics.map((topic)=>{
            return <TopicContent key={topic.topicId}>
                     <TopicName>{topic.topicName}</TopicName>
                      <Button onClick={()=>deleteTopic(topic.topicId)}>Delete</Button>
            </TopicContent>
        })}
        
   </TopicContainer>
  )
}

export default Topics
