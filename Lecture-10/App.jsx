import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , multibytwo} from './redux/counter/counterslice.js'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button><span>{count}</span></button>
        <button onClick={() => dispatch(increment())}>+</button> <br />
        <button onClick={() => dispatch(multibytwo())}>Multiply Count with 2</button>
      </div>
    </>
  )
}

export default App
