import React from 'react'
import Header from './Header';
export const About = () => {
  return (<><Header login={localStorage.getItem("login")}/>
  
    <div >
        <h1 style={{display:"flex",justifyContent:"center"}}>About</h1>
        <p style={{textAlign:'center',width:"20%", margin:"2% auto 2% auto"}} >Log in/Sign up authentication app</p>
    </div>
    </>
  )
}
