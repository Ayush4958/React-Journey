import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const params = useParams();

  return (
    <div>
      <h4>This is user {params.username}</h4>
    </div>
  )
}

export default User
