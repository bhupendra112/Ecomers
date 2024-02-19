import React from 'react'
import Sidebar from '../components/Sidebar'
import Card1 from '../components/Card'
import Categories from '../components/Categories'
import Recamonded from '../components/Recamonded'

export default function Home() {
  return (
    <>
    <div>
    <div className='App'>
    <Sidebar/>
  </div>
   <div><Card1/></div>
  <div><Categories/></div>
  <div><Recamonded/></div>
  
  </div>
  <button style={{alignItems:"center", justifyContent:"center", marginLeft:"40%",marginTop:"12px"}}>Explore More</button>
  </>
  )
}
