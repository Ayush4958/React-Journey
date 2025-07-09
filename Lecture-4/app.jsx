import { createElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const handleclick =()=>{
    alert("Button is clicked"); 
  }

  // const mouseover = () =>{
  //   alert("Mouse is over the text");
  // }

  const [val , setval] = useState({
    email : "",
    number : ""
  })

  const formhandle = (e) => {
    setval({...val , [e.target.name] : e.target.value})
  }

  return (
    <>
     <div className="button">
        <button onClick={handleclick}>Click Me</button>
     </div>

     {/* <div className="red">
        <p onMouseOver={mouseover} >Hover the mouse on me</p>
     </div> */}
     
  <div className="input">
     <input type="mail" value={val.email} name='email' onChange={formhandle}/> 
     <input type="text" value={val.number} name='number' onChange={formhandle}/>
  </div>

    </>
  )
}

export default App
