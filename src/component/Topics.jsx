import React, { useEffect, useRef, useState } from 'react'
import { Button, Buttons, H1, TopicContainer, TopicContent, TopicHeading, TopicName } from '../styles/TopicsStyle'

const Topics = () => {
    const [topics, setTopics] = useState([]);
    const[loading,setLoading]=useState(false)
   
    
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

       const change = (e, id) => {
    const updatedTopics = topics.map((topic) =>
      topic.topicId === id
        ? { ...topic, topicName: e.target.value }
        : topic
    );

    setTopics(updatedTopics);
  };

  
      const deleteTopic= async (topicId)=>{
        setLoading(true)
       
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
        setLoading(false)
      }
       }
      

       const updateTopic=async (topicId,topicName)=>{
        let topic={
          "topicId":topicId,
          "topicName":topicName,
        }
        setLoading(true)

        try{
          const response=await fetch("https://localhost:8443/sphinx/api/topic/updatetopic",{
            method:"PUT",
            headers:{
              "content-Type":"application/json",
            },
            body:JSON.stringify(topic)
          })
          if(!response.ok){
            console.log("not update")
            return;
          }
          alert("update successfully")

        }catch(err){
          console.log(err||"failed to update")
        }finally{
          setLoading(false)
        }

       }



      
  return (
   <TopicContainer>
        <TopicHeading>Topics</TopicHeading>
        
        {topics.length===0?<H1>No Topic Available</H1>:topics.map((topic)=>{
            
            return <TopicContent key={topic.topicId}>
                     <TopicName name='topicName' value={topic.topicName} onChange={(e)=>change(e,topic.topicId)}></TopicName>
                     <Buttons>
                        <Button disabled={loading} onClick={()=>updateTopic(topic.topicId,topic.topicName)}>{loading?"loading..":"update"}</Button>
                        <Button disabled={loading} onClick={()=>deleteTopic(topic.topicId)}>{loading?"loading":"delete"}</Button>
                      </Buttons>
                      
            </TopicContent>

        })}
        
   </TopicContainer>
  )
}

export default Topics
