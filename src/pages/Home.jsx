import React from 'react'
import Layout from '../component/Layout'
import AddTopic from '../component/AddTopic'
import AvailableExam from '../component/AvailableExam'

const Home = () => {
  return (
    <Layout>
      <AddTopic></AddTopic>
      <AvailableExam></AvailableExam>
    
    </Layout>
  )
}

export default Home
