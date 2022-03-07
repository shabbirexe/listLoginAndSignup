import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
function Employee({valu,value}) {
  


  
  return (
    
        <tbody>
     <tr>
      <th scope="row">{valu+1 }</th>
      <td scope="row">{_.capitalize(value.name)}</td>
      <td scope="row">{value.email}</td>
      <td scope="row">{value.phone}</td>
      <td scope="row"><Link to={"/details/"+valu} className='btn btn-primary'>Open</Link></td>
     </tr>     
     </tbody>
   
  )
}

export default Employee