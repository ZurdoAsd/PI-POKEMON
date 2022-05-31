import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchpoke } from "../redux/actions";
import "../assets/SearchBar.css";



export default function SearchBar({setCurrentPage}) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
  
  
    function handleInputChange(e) {
      e.preventDefault();
      setName(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      if (!name) {
        return alert("Colocar un busqueda");
      } else {

      dispatch(searchpoke(name));
      setName('')
      setCurrentPage(1);
      }


    }
  return (
    <div className="searchbar"> 
    <div className="container-searchbar">
      <form onSubmit={handleSubmit}> 
      <input
        className="input"
        type="text"
        name='search'
        id='Search'
        placeholder="Search..."
        value={name}
        onChange={handleInputChange}/>
      <button className="button">Search</button>
       </form>
    </div>
    </div>
  );
}
