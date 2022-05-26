import React from 'react'
import "../assets/Card.css";

export default function Card({name, sprite,types}) {

    
  return (
<div className="card">
<ul className="card2">
      <div className="name">{name}</div>
       <img src={sprite} alt="" className="img"  width = "260px" height= "260px" />
     <div className="types">{types}</div>    
    </ul>

</div>


  )
}
