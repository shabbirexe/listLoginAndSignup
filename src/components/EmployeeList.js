import React, { useState } from 'react'
import store from '../store'
import Employee from './Employee'
import Header from './Header';
function EmployeeList({item}) {
  const [users,setUsers]=useState([])
  
   store.subscribe(()=>{
    if(store.getState().length>0){
      setUsers(store.getState())
    }
  });

  
  return (

    <>
    <Header login={localStorage.getItem("login")}/>
    
    {item==="yes"?<table className='table'>
      <thead>
       <tr>
         <th scope="col">#</th>
         <th scope="col">Name</th>
         <th scope="col">E-mail</th>
         <th scope="col">Phone</th>
         <th scope="col">Action</th>
       </tr>
      </thead>
      {store.getState().map((e, i) => {
      return (<Employee key={i} value={e} valu={i}/>)
    })}
     </table> :<h1 style={{display:'flex',justifyContent:"space-evenly"}}>You need to log in to see the contents of this page</h1> }
    

    
 

    </>
  )
}

export default EmployeeList 