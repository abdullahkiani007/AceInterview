import React from 'react'
import { Link } from 'react-router-dom';



const Sidebar = () => {
    const Links = [
        {
            name: 'Dashboard',
            path: 'dashboard'
        },
        {
            name: 'Interview',
            path: 'Interview'
        },
        {
            name: 'Language Test',
            path: 'languageTest'
        },
        {
            name: 'Quiz',
            path: 'Quiz'
        },
        {
            name: 'Reports',
            path: 'reports'
        },
        {
            name: 'Personalized Guide',
            path: 'personalizedGuide'
        }
    ]
  return (
    <aside className='bg-green-800 h-screen pt-3 px-3 w-72 fixed'>
        <div>
            <h1 className='text-2xl font-bold text-white'>Ace Interview</h1>
        </div>
        <nav>
            <ul>
                {Links.map((link, index) => (
                    <li key={index} className='text-white my-5 hover:bg-white hover:text-green-800 p-4 rounded-lg'>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </aside>
  )
}

export default Sidebar