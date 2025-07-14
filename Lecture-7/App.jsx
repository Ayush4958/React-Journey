import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    is_magical: i === 29_000_000
  }
})

function App() {
  const [count, setCount] = useState(0)


  const [numbers, setnumbers] = useState(nums)

  // const magical = numbers.find((i)=> i.is_magical === true)

  const magical = useMemo(() => numbers.find((i) => i.is_magical === true), [numbers]) // Complex computation


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
        <button onClick={() => {
          setCount((count) => count + 1);
          if (count == 10) {
            setnumbers(new Array(10_000_000).fill(0).map((_, i) => {
              return {
                index: i,
                is_magical: i === 9_000_000
              }
            }))
          }

        }}>
          count is {count}
        </button>
        <span>Magical number is {magical.index}</span>
      </div>
    </>
  )
}

export default App
