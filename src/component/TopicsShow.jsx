import React, { useEffect, useState } from 'react'
import { Button, Buttons, H1, TopicContainer, TopicContent, TopicHeading, TopicName } from '../styles/TopicsStyle'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const TopicsShow = () => {
 const [topics, setTopics] = useState([]);
    const[loading,setLoading]=useState(false);
    const navigate=useNavigate()

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
  return (

  <Layout>
     <TopicContainer>
           <TopicHeading>Topics</TopicHeading>
           <Button style={{marginBottom:'10px'}} onClick={()=>{navigate('/addquestion')}}>Create Question</Button>
           
           {topics.length===0?<H1>No Topic Available</H1>:topics.map((topic)=>{
               
               return <TopicContent key={topic.topicId}>
                        <TopicName name='topicName' value={topic.topicName} onChange={(e)=>change(e,topic.topicId)}></TopicName>
                        <Buttons>
                            
                           <Button disabled={loading} onClick={()=>{navigate(`/showquestion/${topic.topicId}`)}}>{loading?"loading..":"ShowQuestion"}</Button>
                           
                         </Buttons>
                         
               </TopicContent>
   
           })}
           
      </TopicContainer>
  </Layout>
  )
}

export default TopicsShow
