import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailPoke, clearDetails } from "../redux/actions";
import { Link } from "react-router-dom";
import "../assets/Details.css";
import fot from "../assets//no pokemon.jpeg"

export default function Details() {
  const { id } = useParams();
 const poke = useSelector((state) => state.details);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(DetailPoke(id));
    return () => dispatch(clearDetails());
  }, [dispatch, id]);

if (poke.name) {
return (
<div className="posicion"> 
<div className="posicion-boton-detail">
   <Link to="/home">
<button className="botdetail">Go to Home</button>
</Link> 
 </div>
<div className="titleD"><h1>{poke.name.toUpperCase()}</h1><h3>N° : {poke.id} </h3></div>  


<div className="container-details">

 <div className="detail1"> 
 <div className="mod1">

 <img src={poke.sprite} alt=""  />
 <h5>Normal</h5>
 </div>
 <div class="mod2">
<img src={poke.shiny?poke.shiny:fot} alt=""/>
<h5>Shimy</h5>
 </div>

</div>   

<div className="detail2"> 
<h2>Stats</h2>
<div><h3>Type: {poke.types}</h3>
</div>


<h3>HP: {poke.hp} </h3>
<h3>ATTACK: {poke.attack} </h3>
<h3>DEFENSE: {poke.defense}</h3>
<h3>SPEED: {poke.speed} </h3>
<h3>HEIGHT: {poke.height} </h3>
<h3>WEIGHT: {poke.weight}</h3>
</div>

</div>
</div>
);
  }
return(  
  <img
  src= "https://www.gratistodo.com/wp-content/uploads/2016/12/Pokemon-gifs-13.gif"
  alt=""
/>
 )

}
