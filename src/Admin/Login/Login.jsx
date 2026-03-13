import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [message,setMessage] = useState("")
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()

    try{

      const res = await fetch("http://localhost:5000/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({username,password})
      })

      const data = await res.json()

      if(res.ok){

        localStorage.setItem("token",data.token)
        setMessage("Login successful")
        navigate('/admin-panel')

      }else{

        setMessage(data.message)

      }

    }catch(err){

      setMessage("Server error")

    }

  }

  return (
    <div className="login-page">

      <div className="login-card">

        <h2>Admin Login</h2>
        <p>Enter your credentials to continue</p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

        </form>

        {message && <span className="login-message">{message}</span>}

      </div>

    </div>
  )
}

export default Login