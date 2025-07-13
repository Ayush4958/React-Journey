import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import CountContext from './Context/context.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CountContext.Provider value={count}>
          <Navbar />
          <button onClick={() => setCount(count + 1)}>Click Me</button>
        </CountContext.Provider>
      </div>
    </>
  )
}

export default App
