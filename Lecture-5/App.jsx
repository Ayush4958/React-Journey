import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Login from './components/login'
import About from './components/about'
import Home from './components/home'
import User from './components/user'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Home /></>,
  },
  {
    path: "/about",
    element: <><Navbar /><About /></>,
  },
  {
    path: "/login",
    element: <><Navbar /><Login /></>,
  },
  {
    path: "/login/:username",
    element: <><Navbar /><User /></>,
  },
]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App