import React from 'react'
import { useEffect,useState,useMemo } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getTypes,crearPoke } from '../redux/actions'
import validate from '../FILTER-SORTS-VALIDATE/Validate'
import{Link} from "react-router-dom"
import "../assets/Form.css"


export default function Create() {
const dispatch = useDispatch()
const AlTypes =useSelector(state=>state.types)
const [error,setError]=useState({})
const [input,setInput]=useState({
  name: "",
  hp: "",
  attack: "",
  defense: "",
  speed: "",
  height: "",
  weight: "",
  sprite: "",
  types: [],
}) 

useEffect(()=>{
dispatch(getTypes())
},[dispatch])


//notas  
//revisa q paso xq cuando selecciono algo salta alerta q falta types.. meto types y nada  hasta q se completa otro campo


const errorscontrol = useMemo(() => {
  if(error.name || error.hp || error.weight || error.attack || error.defense || error.height || error.types) return true;
  return false;
},[error])



const handleOfChange = (e)=>{
  setInput({
    ...input,
    [e.target.name]: e.target.value,
  });
  setError(
    validate({
      ...input,
      [e.target.name]: e.target.value,
    })
  );
}
console.log(input)

const handleSelectTypes = (e)=>{
//   setInput({
//     ...input,
//     types : [...input.types, e.target.value ]
//  })
//  setError(validate({
//     ...input,
//     types : [...input.types, e.target.value ]
//  }))  
setInput({
  ...input,
  types: [...new Set([...input.types, e.target.value])],
 
});
console.log(e.target.value)
} 
const handleDeleteTypes = (e)=>{
  const newArr = input.types.filter(type => type !== e.target.value)
  setInput({
      ...input, 
      types: newArr
  })
  // setError(validate({
  //     ...input,
  //     types: newArr
  // }))
  
}
const handleReset = ()=>{
  setInput({
  name: "",
  hp: "",
  attack: "",
  defense: "",
  speed: "",
  height: "",
  weight: "",
  sprite: "",
  types: [],
  })

}
const handleSubmit = (e)=>{
  e.preventDefault();
  setError(validate(input));
  if (
    input.name &&
    input.hp &&
    input.defense &&
    input.speed &&
    input.height &&
    input.weight &&
    input.sprite &&
    input.types &&
    !Object.keys(error).length
  ) 
  
  {
    dispatch(crearPoke(input));
    alert("pokemon Creado!!");
    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      sprite: "",
      types: [],
    });
  } else {
    alert("Todos los elementos son requeridos!!");
  }
}

  return (

    
    <div  className="container">
      <div className="row">
    
    <form className="form" onSubmit={handleSubmit} onReset={handleReset}>

    <div>
            <div className="section">
            <label className="title-name">Name: </label>
            <input
              className="input"
              required
              autoComplete='off'
              type="text"
              value={input.name}
              name="name"
              onChange={handleOfChange}
            />
            </div>
            {error.name && <p className="error">{error.name}</p>}
          </div>


          <div>
          <div className="section">
            <label className="title-name">Height: </label>
            <input
              className="input"
             
              autoComplete='off'
              type="number"
              step="0.10"
              min="0.1"
              max="15"
              value={input.height}
              name="height"
              onChange={handleOfChange}
            />
            </div>
            {error.height && <p className="error">{error.height}</p>}
          </div>

          <div>
          <div className="section">
            <label className="title-name">Weight: </label>
            <input
              className="input"
              required
              autoComplete='off'
              type="number"
              step="0.10"
              value={input.weight}
              name="weight"
              onChange={handleOfChange}
            />
            </div>
            {error.weight && <p className="error">{error.weight}</p>}

          </div>

          <div>
          <div className="section">
            <label className="title-name" >Hp: </label>
            <input
              className="input"
              required
              autoComplete='off'
              type="number"
              step="0.10"
              value={input.hp}
              name="hp"
              onChange={handleOfChange}
            />
            </div>
            {error.hp && <p className="error">{error.hp}</p>}

          </div>
          <div>
          <div className="section">
            <label className="title-name">Speed: </label>
            <input
              className="input"
              required
              autoComplete='off'
              type="number"
              step="0.10"
              value={input.speed}
              name="speed"
              onChange={handleOfChange}
            />
            </div>
            {error.speed && <p className="error">{error.speed}</p>}

          </div>

          <div>
          <div className="section">
            <label className="title-name">Strength: </label>
            <input
              className="input"
              required
              autoComplete='off'
              type="number"
              step="0.10"
              value={input.attack}
              name="attack"
              onChange={handleOfChange}
            />
            </div>
            {error.attack && <p className="error">{error.attack}</p>}

          </div>
          <div>
          <div className="section">
            <label className="title-name">Defense: </label>
            <input
              className="input"
              required
              autoComplete='off'
              type="number"
              step="0.10"
              value={input.defense}
              name="defense"
              onChange={handleOfChange}
            />
            </div>
            {error.defense && <p className="error">{error.defense}</p>}

          </div>
          <div className="section">
            <label className="title-name">Image: </label>
            <input
              className="input"
              required
              autoComplete='off'
              placeholder="add img link"
              type="text"
              value={input.sprite}
              name="sprite"
              onChange={handleOfChange}
            />
          </div>

          <div>
          <div className="section">
            <label className="title-name"> Pokemon type </label>
            <select className="input" onChange={handleSelectTypes} >
              <option value="" hidden>Select type</option>
              {AlTypes && AlTypes.map(e => (<option key={e.id} value={e.name}>{e.name}</option>))}
            </select>
            </div>
            {error.types && <p className="error">{error.types}</p>}
          </div>

          <div className="item-eliminar">
        {input.types.map(e => (
          <div >
          <div key={e} name={e} value={e} className="types">{e}</div>
         <button type="button"  value={e} className="delete-types" onClick={handleDeleteTypes}>x</button>
          </div>))}
          </div>
          <button className="create-boton" type="submit" disabled={errorscontrol}>Create Pokemon</button>
          <button className="botForm" type="reset">Reset</button>
    </form>


    <Link to="/home">
          <button className="botForm">Go to home</button>
        </Link>
      </div>
    </div>
  )
}
