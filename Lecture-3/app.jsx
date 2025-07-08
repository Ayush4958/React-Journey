import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // component inside the function
  const Todo = (props)=>{
    return(
      <>
        <div className="todo">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
      </>
    )
  }

  
  const[todos,settodos] = useState([
    {title:"Todo 1",desc:"This is todo 1 :- (First Todo) description"},
    {title:"Todo 2",desc:"This is todo 2 :- (Second Todo) description"},
    {title:"Todo 3",desc:"This is todo 3 :- (Third Todo) description"},
    {title:"Todo 4",desc:"This is todo 4 :- (Fourth Todo) description"}
  ])

  
  const [count, setCount] = useState(0)
  const[showbtn,setshowbtn] = useState(true)
  const btnref = useRef()

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
        <button ref={btnref} onClick={() => setshowbtn(!showbtn)}>Toggle Hidden Button </button> <br />

        {/* This is will work when u have to show just value on true statement */}
        {/* {showbtn && <button>Hidden Button</button>} */}

        {/* This is will work when u have to show just value on true and false both statement */}
        {showbtn ? <button>Hidden Button(visible)</button> : <button>Hidden Button(invisible)</button>}

        {/* <button onClick={()=>{
          if (btnref.current.style.display=="none") btnref.current.style.display = "revert"
          else btnref.current.style.display = "none"
        }}>Click me to see magic</button> */}
      </div>
      <div id="todobox">
      {todos.map(item=>{
        return <Todo key={item.title} title={item.title} desc={item.desc}/>
      })}
      </div>
    </>
  )
}

export default App
