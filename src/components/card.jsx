import React from 'react'
import './card.css'

function card(props) {
  return (
    <div>
      
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title">ID :- {props.id}</p>
            <p>User-ID :- {props.userId}</p>
            <p className="title">Title :- {props.title}</p>
          </div>
          <div className="flip-card-back">
            <p>Body :- {props.body}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default card
