import Sidebar from '../Sidebar'
import React from 'react'
import { Outlet } from 'react-router'

const DashboardRoute = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='ml-72'>
        <Outlet/>
        </div>
      
    </div>
  )
}

export default DashboardRoute