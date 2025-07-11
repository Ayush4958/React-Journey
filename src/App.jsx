import React, { useRef, useState } from 'react';
import './App.css';
import Card from './components/card';

function App() {


  const [cardData, setCardData] = useState([]);

    async function makecard() {
      try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json()
        console.log(data)
        setCardData(data)
      }
      catch(e){
        console.error('Error fetching data:', e)
      }

    }

  return (
    <>
  <div className="extract">
    <button  onClick={makecard}>Makes the Card</button>
  </div>

    <div className="cards">
      {cardData.map(item=>{
        return <Card key={item.id} id={item.id} userId={item.userId} title={item.title} body={item.body} />
      })}
      </div>
    </>

  );
}

export default App;
