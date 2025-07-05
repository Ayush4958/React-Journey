import React from 'react'

function navbar(props) {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li>{props.navitem}</li>
      </ul>
    </div>
  )
}

export default navbar
