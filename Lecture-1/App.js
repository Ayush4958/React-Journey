import { useState } from 'react';
import './App.css';
import Navbar from './component/navbar';
import Footer from './component/footer';

function App() {
  const [value, setvalue] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
      <Navbar navitem="Buy me coffee"/>
        <h2>{value}</h2>
          <button onClick={()=>{setvalue(value+1)}}> CLICK ME </button>
      <Footer />
      </header>
    </div>
  );
}

export default App;
 
