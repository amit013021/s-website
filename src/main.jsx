import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github from './Components/Github/Github.jsx'
import User from './Components/User/User.jsx'

const router = createBrowserRouter([
   {
    path: '/',
    element: <App/>,
    children: [
      { path: '', element: <Home/> },
      { path: 'about', element: <About/> },
      { path: 'contact', element: <Contact/> },
      { path: 'user/:userId', element: <User/>},
      { path: 'github', element: <Github/> },
      { path: 'user/:userId', element: <User/> }
    ]

   }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>,
)
