import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import DashboardRoute from './components/Dashboard/DashboardRoute.jsx';
import Dashboard from './components/Dashboard/DashboardCard/Dashboard.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element : <App/>,
    
  },
        {
        path:"/Dashboard",
        element: <DashboardRoute/>,
        children:[
          {
            path:"dashboard",
            element:<Dashboard/>
        },
        {
          path:"Interview",
          element: <h1>Interview</h1>
        },{
          path:"languageTest",
          element: <h1>Test</h1>
        },{
          path:"Quiz",
          element: <h1>Quiz</h1>
        },{
          path:"reports",
          element: <h1>Reports</h1>
        },{
          path:"personalizedGuide",
          element: <h1>Personalized Guide</h1>
        }
        ]
      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
