import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [adjective , setadjective] = useState("GOOD")

  // useCallback is used to memoize the function so that it does not get recreated on every render
  // const getadjective = useCallback(()=>{
  //   return "another " + count
  // },[])

  // If you want to use the count in the getadjective function, you can do it like this:
  const getadjective = useCallback(()=>{
    return "another " + count
  },[count])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Navbar adjective={"GOOD"} getadjective={getadjective}/>
      </div>
    </>
  )
}

export default App
