import React from 'react'

function login() {
  return (
    <div>
        <h1>Login Page</h1> 
        <form>
            <div>   
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>  
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
        </form>
    </div>
  )
}

export default login
