import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainRoute from './Components/MainRoute/MainRoute.jsx'
import Home from './Components/Pages/Home.jsx'
import Project from './Components/Project/Project.jsx'
import BlankRoute from './Components/MainRoute/BlankRoute.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Success from './Components/Success/Success.jsx'

const router = createBrowserRouter([
   {
    path: "/",
    Component: MainRoute,
    children: [
      { index: true, Component: Home },
      // { path: "project", Component: Project },
]
},
   {
    path: "/",
    Component: BlankRoute,
    children: [
      // { index: true, Component: Home },
      { path: "project", Component: Project },
      { path: "contact", Component: Contact },
      { path: "success", Component: Success },
]
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
      {/* <App /> */}
  </StrictMode>,
)
