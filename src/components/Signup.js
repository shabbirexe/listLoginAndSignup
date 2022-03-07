import React, { useState } from 'react'
import axios from 'axios';
import store from '../store';
import Header from './Header';
function Signup() {
  const [email, setEmail] = useState("");
  const [name, setNamee] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  function Signup() {
    if (email === "" || password === "" || phone === "" || name === "") {
      alert("empty parameters")
    } else {
      async function makePostRequest(link, jsonData) {

        let payload = jsonData

        let res = await axios.post(link, payload);

        let data = res.data;

        return data;
      }
      const data = {
        name,
        email,
        password,
        phone
      }
      console.log(password)
      const a = makePostRequest("http://localhost:5000/signup", data)
      a.then((e) => {
        if (e.message == "exists") {
          alert("already exists")
        } else if (e.message = "executed") {
          store.dispatch({
            type: "userAdded",
            payload: {
              name: data.name,
              email: data.email,
              phone: data.phone
            }
          })
          setEmail("")
          setNamee("")
          setPhone("")
          setPassword("")
          alert("Sign up success, Go log in")
        }
      })
    }
  }

  return (
    <><Header login={localStorage.getItem("login")} />
      <div className='textt'>
        <form className="form-signin">

          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <div className="form-floating">
            <input type="text"
              className="form-control"
              value={name}
              onChange={(e) => setNamee(e.target.value)}
              id="floatingInput" placeholder="John Doe" />
            <label htmlFor="floatingInput">Full Name</label>
          </div>
          <div className="form-floating">
            <input type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control" id="floatingInput1" placeholder="name@example.com" />
            <label htmlFor="floatingInput1">Email address</label>
          </div>
          <div className="form-floating">
            <input type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control" id="floatingInput2" placeholder="99999999" />
            <label htmlFor="floatingInput2">Phone Number</label>
          </div>
          <div className="form-floating">
            <input type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control" id="floatingPassword" placeholder="abc@12xyz" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">

          </div>
          <button className="w-100 btn btn-lg btn-primary"
            onClick={Signup}
            type="button">Sign Up</button>

        </form>

      </div>
    </>)
}

export default Signup
