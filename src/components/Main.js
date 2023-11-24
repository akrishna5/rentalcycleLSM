import React from 'react'
import Navbar from './Navbar'
import HomeMain from './HomeMain'
import { useParams } from 'react-router-dom'
const Main = () => {
  const {reg}= useParams();
  return (
    <div className='main'>
    <Navbar></Navbar>
    <HomeMain reg={reg}></HomeMain>
    </div>
  )
}

export default Main