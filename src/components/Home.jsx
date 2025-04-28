import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='h-full'>
      <Outlet></Outlet>
    </div>
  )
}

export default Home

