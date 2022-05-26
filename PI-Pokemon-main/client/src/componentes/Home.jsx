import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sorts from "../FILTER-SORTS-VALIDATE/Sorts";
import { getAllPokemons } from "../redux/actions";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import "../assets/homes.css";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setpokemonsPerPage] = useState(12);
  const indeOfLast = currentPage * pokemonsPerPage;
  const indexfirst = indeOfLast - pokemonsPerPage;

  const currentpokemons = allPokemons.slice(indexfirst, indeOfLast);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // useEffect(() => {
  //   dispatch(getAllPokemons());
  // }, [dispatch]);

useEffect(() => {
dispatch(getAllPokemons())
}, [dispatch])

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(getAllPokemons());
  };

  console.log(allPokemons);

  return (
    <div className="container">
      <div className="select-home">
        <SearchBar setCurrentPage={setCurrentPage} />
        <div><button className="botForm" onClick={handleClick}>RECARGAR</button></div>
        <Link to="/create"><button>Crear Pokemon </button></Link>       
        <div> <Sorts setOrder={setOrder} setCurrentPage={setCurrentPage} /></div>
            
        <div><Paginado
          pokemonsPerPage={pokemonsPerPage}
          allPokemons={allPokemons.length}
          paginado={paginado}
        /></div>
      </div>

      <div className="contentCards">
        {currentpokemons.length? 
        currentpokemons.map( (p) =>{
          return (
            
              <div className="cards" key= {p.id} >
                  <Link to ={ "/Home/" + p.id}>
                  <Card name= {p.name.toUpperCase()}
                       sprite =  {p.sprite}
                      types={p.types}
                   />
                  </Link>
              </div>
          )
      }) 
        
        : (
          <img
            src="https://imgflip.com/s/meme/Grus-Plan.jpg"
            alt=""
            justify-content="center"
            align-items="center"
            height="100%"
            width="50%"
          />
        )}
      </div>
    </div>
  );
}
