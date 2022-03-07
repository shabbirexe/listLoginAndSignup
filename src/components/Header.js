import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import './header.css'

function Header({login}) {
    
   
    function logOut(){
      console.log(localStorage.getItem("login"))
    
      localStorage.setItem("login","no")
      window.location.replace("/")
   
    }
  return (
        <div >
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        {login==="no"?<><li className="nav-item" ><Link to="/login" className="nav-link active" aria-current="page">Login</Link></li>
        <li className="nav-item"><Link to="/signup" className="nav-link">Signup</Link></li>
</>:<>  
         <li className="nav-item" className="nav-link"><p>Logged in!!</p></li>
         <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
         <li className="nav-item" onClick={logOut} className="nav-link" aria-current="page"><button>Log out</button></li>         
        </>}
              
      </ul>
    </header>
  </div>

    
  )
}

export default Header