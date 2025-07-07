import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/navbar'
import Card from './component/card'

function App() {

  return (
    <>
    <Navbar/>
    <div className="cards">
    <Card title="Card 1" description="This is the first card."/>
    <Card title="Card 2" description="This is the second card."/>
    <Card title="Card 3" description="This is the third card."/>
    </div>
      </>
  )
}

export default App
