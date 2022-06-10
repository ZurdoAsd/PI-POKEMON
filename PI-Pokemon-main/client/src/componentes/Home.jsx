import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sorts from "../FILTER-SORTS-VALIDATE/Sorts";
import { getAllPokemons} from "../redux/actions";
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

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllPokemons());
  };


  return (
    <div className="container">
      <div><SearchBar setCurrentPage={setCurrentPage} /></div>
      <div className="select-home">
        <div><button className="botHome" onClick={handleClick}>RECARGAR</button>
        </div>  <Link to="/create"><button className="botHome2">Crear Pokemon </button></Link>

        <div className="estilos.content"><Sorts setOrder={setOrder} setCurrentPage={setCurrentPage} /> </div>
      </div>

      <div>
        <Paginado
          pokemonsPerPage={pokemonsPerPage}
          allPokemons={allPokemons.length}
          paginado={paginado}
        />
      </div>
<div className="letrero"> 
   {currentpokemons.length
   ?<h3>Pokemon Encontrados:  {allPokemons.length}</h3>
   :<h3>Pokemon Encontrados: 0 →→→ Presiona RECARGAR para continuar</h3>
   }</div>
      <div className="contentCards">

        {currentpokemons[0] === "notFound" ? "sin resultados" : null}
     
        {currentpokemons.length ? (
          currentpokemons.map((p) => {
            return (
              <div className="cards" key={p.id}>
                <Card
                  name={p.name.toUpperCase()}
                  sprite={p.sprite}
                  types={p.types}
                  id={p.id}
                />
              </div>
            );
          })
        ) : (
          <img
            src= "https://i.gifer.com/origin/a8/a8cce7e5fb8f774dc79a06e3f727a070_w200.webp"
            alt=""
            justify-content="center"
            align-items="center"
            height="100%"
            width="80%"
          />
        )}
      </div>
    </div>
  );
}
