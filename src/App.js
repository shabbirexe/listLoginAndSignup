import React from 'react'
import './App.css'
import Header from './components/Header'
import store from './store'
function App() {

  if (localStorage.getItem("login") === "yes") {
    window.location.replace("/employeelist")
  }
  console.log(store.getState())

  return (
    <>
      <Header login={localStorage.getItem("login")} />
      <h1 className="text-info " style={{ display: "flex", justifyContent: "center", textAlign: 'center', width: "20%", margin: "2% auto 2% auto", borderRadius: "10%" }}>Welcome to the user authentication project</h1>
    </>
  )
}

export default App






// //const [data,setData]=useState({})
// // useEffect(()=>{
// //   fetch("/members").then(
// //     res=>res.json()
// //   ).then(data=>{
// //     setData(data)
// //     console.log(data)
// //   })
// // },[])