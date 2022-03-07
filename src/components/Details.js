import React from 'react'
import store from '../store'
import { useParams } from 'react-router-dom'
import _ from 'lodash'
function Details() {
 const {id} =useParams();
 

 const value =store.getState()[id];

 if(value!==undefined){
   window.localStorage.setItem("list",JSON.stringify(value))
 }

   return (
     <div style={{display:"flex",justifyContent:"center"}}>
    <div className="card" style={{width: "30rem",margin:"200px auto auto auto",fontSize:"2rem",fontWeight:"bold"}}>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{_.capitalize(JSON.parse(window.localStorage.getItem("list")).name)}</li>
      <li className="list-group-item">{JSON.parse(window.localStorage.getItem("list")).email}</li>
      <li className="list-group-item">{JSON.parse(window.localStorage.getItem("list")).phone}</li>
    </ul>
    </div>
    </div>   
  )
}

export default Details









// // k
// // {/* <div>
// // <h1>{value.name}</h1>
// // <h1>{value.email}</h1>
// // <h1>{value.phone}</h1>
// // </div> */}