import React from "react";
import "../assets/Paginado.css";

export default function Paginado({ pokemonsPerPage, allPokemons, paginado }) {
  const pagNum = [];

  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pagNum.push(i);
  }

  return (
    <nav>
      <div className="container-paginado">
        <ul>
          {pagNum &&
            pagNum.map((number) => (
              <button
                className="button"
                key={number}
                onClick={() => paginado(number)}>{number}</button>))}
        </ul>
      </div>
    </nav>
  );
}
