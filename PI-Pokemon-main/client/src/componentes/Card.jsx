import React from "react";
import "../assets/Card.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, sprite, types }) {
  console.log(types);
  return (
    <div>
      <ul className="card">
        <div className="name">
          <h2a>{name}</h2a>
          <h4>TYPE: {types?.map((el) => el.toUpperCase() + " ")} </h4>
        </div>
        <Link to={`/home/${id}`}>
          <img
            src={sprite}
            alt=""
            className="img"
            width="260px"
            height="260px"
          />
        </Link>
      </ul>
    </div>
  );
}
