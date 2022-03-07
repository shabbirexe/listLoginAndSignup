import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import store from '../store'
import Header from './Header';
function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")
  if (localStorage.getItem("login") === "yes") {
    window.location.replace("/employeelist")
  }

  function submit(event){
    if(localStorage.getItem("login")==="yes"){
      alert("already logged in")
      return
    }
    event.preventDefault()
    async function makePostRequest(link,data){
      let payload = data

        let res = await axios.post(link, payload);

        let dat = res.data;

        return dat;
    }
    const d={
      email,
      password
    }
    const a=makePostRequest("http://localhost:5000/login",d)
    a.then((event)=>{
      console.log(event)

      if(event.message === "yes"){
        localStorage.setItem("login","yes")
        window.location.replace("/employeelist")
        setEmail("")
        setPassword("")
      }else if(event.message==="noMatch"){
        alert("Wrong password")
      setPassword("")
      }else{
        alert("no such email in the database")
        setEmail("")
        setPassword("")
      }
    })


}
console.log(store.getState())
  return (
    <> <Header login={localStorage.getItem("login")}/>
    <div  className='textt'>
 <form className="form-signin"
 onSubmit={submit}
 >

      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-floating">
        <input type="email"
        className="form-control"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        id="floatingInput" placeholder="name@example.com"/>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password"
        className="form-control"
        id="floatingPassword"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password"/>
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="checkbox mb-3">

      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

    </form>

    </div>
  </>)
}

export default Login




  //   store.getState().forEach(e =>{
  //    if(e.email===email && e.password===password){
  //     localStorage.setItem("login",true)
  //     console.log("HERE??")

  //    }else{

  //      setEmail("")
  //      setPassword("")
  //    }
  //  })
