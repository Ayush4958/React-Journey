import React from 'react'
import { useState,useEffect } from 'react'
import './card.css'

const card = (props) => {

    const [count, setCount] = useState(0)

    useEffect(()=>{
    alert("Count changed to ")
  },[count])

    return (
            <div className="card">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button onClick={() => setCount(count + 1)}>{count}</button>
            </div>
    )
}

export default card
