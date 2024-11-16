import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Register from './Register.jsx'
import User from './User.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>
  },

  {
    path:"/register",
    element:<Register/>

  },
  {
    path:"/users",
    element:<User/>

  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={router}/>

  </StrictMode>,
)
