import React from "react";
import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes, crearPoke } from "../redux/actions";
import validate from "../FILTER-SORTS-VALIDATE/Validate";
import { Link } from "react-router-dom";
import "../assets/Form.css";

export default function Create() {
  const dispatch = useDispatch();
  const AlTypes = useSelector((state) => state.types);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
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

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const errorscontrol = useMemo(() => {
    if (
      error.name ||
      error.hp ||
      error.weight ||
      error.attack ||
      error.defense ||
      error.height ||
      error.types 
    )
 
      return true;
    return false;
  }, [error]);

   console.log(error)
  const handleOfChange = (e) => {
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
  };

  const handleSelectTypes = (e) => {
    setInput({
      ...input,
      types: [...new Set([...input.types, e.target.value])],
    });
    console.log(e.target.value);
  };

  const handleDeleteTypes = (e) => {
    const newArr = input.types.filter((type) => type !== e.target.value);
    setInput({
      ...input,
      types: newArr,
    });
  };

  const handleReset = () => {

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

  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if(
      input.name &&
      input.hp &&
      input.attack &&
      input.defense &&
      input.speed &&
      input.height &&
      input.weight &&
      input.sprite &&
      input.types.length&&
      !Object.keys(error).length
    )
{     dispatch(crearPoke(input));
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
  } else{ alert(`falta ${Object.keys(error)}`) }
 
  };

  return (
    <div className="container-create">
      <div className="row">
        <h1 className="title"> Create New Pokemon</h1>
        <form className="form" onSubmit={handleSubmit} onReset={handleReset}>
          <div>
            <div className="forgrup">
             
              <input
                className="forinput"
                placeholder=" "
                // required
                autoComplete="off"
                type="text"
                value={input.name}
                name="name"
                onChange={handleOfChange}
              />
               <label className="forlabel">Name: </label>
            </div>
            {error.name && <p className="error">{error.name}</p>}
          </div>

          <div>
            <div className="forgrup">
              <input
                 className="forinput"
                 placeholder=" "
                autoComplete="off"
                type="number"
                step="0.10"
                min="0.1"
                max="15"
                value={input.height}
                name="height"
                onChange={handleOfChange}
              />
               <label className="forlabel">Height: </label>
            </div>
            {error.height && <p className="error">{error.height}</p>}
          </div>

          <div>
            <div className="forgrup">
  
              <input
                  className="forinput"
                  placeholder=" " 
                // required
                autoComplete="off"
                type="number"
                step="0.10"
                value={input.weight}
                name="weight"
                onChange={handleOfChange}
              />
            <label className="forlabel">Weight: </label>
            </div>
            {error.weight && <p className="error">{error.weight}</p>}
          </div>

          <div>
            <div className="forgrup">
              <input
               className="forinput"
               placeholder=" " 
                // required
                autoComplete="off"
                type="number"
                step="0.10"
                value={input.hp}
                name="hp"
                onChange={handleOfChange}
              />
                <label className="forlabel">Hp: </label> 
            </div>
            {error.hp && <p className="error">{error.hp}</p>}
          </div>
          <div>
            <div className="forgrup">
              <input
                  className="forinput"
                  placeholder=" " 
                // required
                autoComplete="off"
                type="number"
                step="0.10"
                value={input.speed}
                name="speed"
                onChange={handleOfChange}
              />
              
              <label className="forlabel">Speed: </label>
            </div>
            {error.speed && <p className="error">{error.speed}</p>}
          </div>

          <div>
            <div className="forgrup">
              <input
               className="forinput"
               placeholder=" " 
                // required
                autoComplete="off"
                type="number"
                step="0.10"
                value={input.attack}
                name="attack"
                onChange={handleOfChange}
              />
               <label className="forlabel">Strength: </label>
            </div>
            {error.attack && <p className="error">{error.attack}</p>}
          </div>
          <div>
            <div className="forgrup">
   
              <input
                 className="forinput"
                 placeholder=" " 
                // required
                autoComplete="off"
                type="number"
                step="0.10"
                value={input.defense}
                name="defense"
                onChange={handleOfChange}
              />
             <label className="forlabel">Defense: </label>  
            </div>
            {error.defense && <p className="error">{error.defense}</p>}
          </div>
          <div className="forgrup">
     
            <input
               className="forinput"
               placeholder=" " 
              // required
              autoComplete="off"
              type="text"
              value={input.sprite}
              name="sprite"
              onChange={handleOfChange}
            />
         <label className="forlabel">Image: </label>    
          </div>

          <div>
            <div className="section">
              <label className="title-name">Type</label>
              <select className="input" onChange={handleSelectTypes}>
                <option value="" hidden>
                  Select type
                </option>
              
                {  input.types.length<3?
                
                
                AlTypes &&
                  AlTypes.map((e) => (
                    <option key={e.id} value={e.name}>
                      {e.name}
                    </option>
                  ))
                : <option value="" hidden>
                Select type
              </option>
                }
              </select>
            </div>
            {error.types && <p className="error">{error.types}</p>}
          </div>

          <div className="item-eliminar">
            {input.types.map((e) => (
              <div>
                <button
                  type="button"
                  value={e}
                  className="delete-types"
                  onClick={handleDeleteTypes}
                >
                  {e.toUpperCase()}
                </button>
              </div>
            ))}
          </div>
          <button
            className="create-boton"
            type="submit"
             disabled={errorscontrol}
          >
            Create Pokemon
          </button>
          <button className="botForm" type="reset">
            Reset
          </button>
        </form>

        <Link to="/home">
          <button className="botcreate">GO TO HOME</button>
        </Link>
      </div>
    </div>
  );
}
