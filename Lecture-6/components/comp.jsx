import React from 'react'
import CountContext from '../Context/context';
import { useContext } from 'react';

function Comp() {
    const count = useContext(CountContext);
  return (
    <div>
      <h4>{count}</h4>
    </div>
  )
}

export default Comp
