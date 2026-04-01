import React, { useEffect, useRef, useState } from 'react'
import { Button, Buttons, H1, TopicContainer, TopicContent, TopicHeading, TopicName } from '../styles/TopicsStyle'

import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../reducer/apiReduce';

const Topics = () => {
    const [topics, setTopics] = useState([]);
    const[loading,setLoading]=useState(false);

    const dispatch=useDispatch()
    const apiRefresh=useSelector((state) => state.api.value);
    
   
    
      useEffect(() => {
        console.log("refresh api ",apiRefresh)
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
      }, [apiRefresh]);

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
        await new Promise(resolve => setTimeout(resolve, 500));

       
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
          
   
      }catch(err ){
        console.log("error" ,err )
      }finally{
        console.log("done m")
        setLoading(false);
        dispatch(toggle())
      }
       }
      

       const updateTopic=async (topicId,topicName)=>{
        let topic={
          "topicId":topicId,
          "topicName":topicName,
        }
        setLoading(true)
       await new Promise(resolve => setTimeout(resolve, 500));

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
          dispatch(toggle())
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
