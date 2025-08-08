import { useState } from "react"
import user_context from "./User_Context"


const Login = () => {
    const [user,setuser]=useState()
    const [password,Setpassword]=useState([])
    const {setuser}=user_context
    const handlechange=(e)=>{
        setuser(e.target.value)
        setuser(e.target.value);
        Setpassword(e.target.value);
        e.preventDefault()
    }
    const handlesubmit=(e)=>{
    }
    
  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" placeholder="Enter your name" />
      <input type="text" onChange={(e)=>{setuser(e.target.value)}} placeholder="Enter your password" />
      <button type="submit" onClick={handlesubmit}>Login</button>
    </div>
  )
}

export default Login
