import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, useNavigate } from 'react-router'
import Sidebar from './components/Sidebar'



function App() {
  const navigate = useNavigate();


  return (
    <div className='flex '>
      <h1>
        Landing page
      </h1>
      <button  onClick={()=>navigate("Dashboard")} className='bg-green-800 p-5 rounded-lg '>Go to dashboard</button>
    </div>
  )
}

export default App
