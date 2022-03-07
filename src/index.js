import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login'
import Signup from './components/Signup'
import { About } from './components/About';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import axios from 'axios'
import store from './store'
import EmployeeList from './components/EmployeeList';
import Details from './components/Details';



async function makeGetRequest() {

  let res = await axios.get("http://localhost:5000/fetch");
  let data = res.data;



  return data;
}

var a=makeGetRequest();
a.then((data)=>{
  console.log(data)
  data.map((value)=>{
    store.dispatch({
    type:"userAdded",
    payload:{
    name:value.name,
    email:value.email,
    phone:value.phone
}
})
})
console.log(store.getState())
})

ReactDOM.render(
  <>

  <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<App/>}/>
    <Route exact path="/login" element={<Login />}/>
    <Route exact path="/signup" element={<Signup/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/employeelist" element={<EmployeeList item={localStorage.getItem("login")}/>}/>
    <Route exact path="/details/:id" element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  </>

   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


























// // k
// // console.log(store.getState())

// // store.dispatch({
// //   type:"userAdded",
// //   payload:{
// //     name:"sdfd",
// //     email:"jbk",
// //     phone:"jhhb"
// //   }
// // })
// // unsubscribe()
// // console.log(store.getState())
// // store.dispatch({
// //   type:"userRemoved",
// //   payload:{
// //     id:1
// //   }
// // })
// // console.log(store.getState())
