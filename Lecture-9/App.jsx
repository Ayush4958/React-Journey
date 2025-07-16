import { useState } from 'react'
import { set, useForm } from "react-hook-form"
import './App.css'

function App() {

   const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors , isSubmitting},
  } = useForm()

const delay = (d) =>{
  return new Promise((res , rej)=>{
    setTimeout(() => {
      res()
    }, d * 1000);
  })
}

  const onSubmit = async (data) => {
    // await delay(2)
    let r = await fetch("http://localhost:3000" ,{method : "POST" ,  headers: {"Content-Type": "application/json"} , body : JSON.stringify(data)} )
    let res = await r.text()
    console.log(data , res)
    // if (data.username !== "admin"){
    //   setError("myform" , { message: "you are not admin , niguh..."})
    // }
    // if(data.username === "nonbinary"){
    //   setError("blocked" , {message : "you are blocked , we believe in binary only"})
    // }
  }

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {isSubmitting && <div>Submitting...  are you in hurry ????</div>}
          <input placeholder='username' {...register("username" , {required: {value : true, message : "username is required"}, minLength: {value : 4 , message : "username must have atleast min 4 characters"}, maxLength: {value : 20 , message : "username must have only max 20 characters"}, })} type="text" id='ki'/>
          {errors.username && <div>{errors.username.message}</div>}
          <input placeholder='password' {...register("password" , {required: {value : true, message : "password is required"}, minLength: {value : 8 , message : "password must have atleast min 8 characters"}})} type="password" id='kiu'/>
          {errors.password && <div>{errors.password.message}</div>}
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div>{errors.myform.message}</div>}
          {errors.blocked && <div>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
