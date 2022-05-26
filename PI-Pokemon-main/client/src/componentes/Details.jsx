import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailPoke, clearDetails } from "../redux/actions";
import { Link } from "react-router-dom";
import "../assets/Details.css";

export default function Details() {
  const { id } = useParams();
 const poke = useSelector((state) => state.details);
  let dispatch = useDispatch();
  console.log(poke)

  useEffect(() => {
    dispatch(DetailPoke(id));
    return () => dispatch(clearDetails());
  }, [dispatch, id]);

if (poke.name) {
return (
<div className="container">
     
<img src={poke.sprite} alt="" className="image" height="400px" width="550px"/>
<div><h1>{poke.name}</h1></div>
<div> 
<div><h3>Type</h3><div>
{poke.id.length > 8
? poke.types?.map((g) => {return <ul key={g.id}>{g.name}</ul>;})
: poke.Types?.map((g) => {return <ul key={g.id}>{g}</ul>;})}
</div>

</div>
<div><h3>Number Pokemon</h3><div>{poke.id}</div></div>
<div><h3>HP</h3><div>{poke.hp}</div></div>
<div><h3>ATTACK</h3><div>{poke.attack}</div></div>
<div><h3>DEFENSE</h3><div>{poke.defense}</div></div>
<div><h3>SPEED</h3><div>{poke.speed}</div></div>
<div><h3>HEIGHT</h3><div>{poke.height}</div></div>
<div><h3>WEIGHT</h3><div>{poke.weight}</div></div>
</div>

<Link to="/home">
<button className="botForm">Go to Home</button>
</Link>
</div>
);
  }
  return <p>loading</p>;
}
