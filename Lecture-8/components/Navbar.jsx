import React from 'react'
import { memo } from 'react'

const Navbar = ({ adjective , getadjective }) => {
    console.log("Navbar Rendered")
  return (
    <div>
       <p> This is {adjective} Navbar ...</p>
       <button onClick={()=>{getadjective()}}>{getadjective()}</button>
    </div>
  )
}

export default memo(Navbar)
