import React from "react";
import { Link } from "react-router-dom";
import "../assets/Landing.css";

const Landing = () => {
  return (
    <div className= "landingContainer">
   
      <Link to="/Home">
        <button className="landingButton" type="button">START</button>
      </Link>
    </div>
  );
};

export default Landing;