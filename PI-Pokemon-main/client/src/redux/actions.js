import axios from "axios";
import {
CLEAR_DETAILS,ORDER_ALPHA,ORDER_STR,FILTER_API_DB,FILTER_TYPES,GET_TYPES,SEARCH_POKEMON,GET_POKEMONID,GET_POKEMONS
} from "./DataTypes.js";

// export function getAllPokemons() {
//   return function (dispatch) {
//     return axios(`http://localhost:3001/pokemons`)
//       .then((res) => dispatch({ type: GET_POKEMONS, payload: res.data }))
//       .catch(console.log("error"));
//   };
// }

export function getAllPokemons() {
  return async function (dispatch) {
  const res= await axios(`http://localhost:3001/pokemons`)
  return dispatch({ 
    type: GET_POKEMONS, 
    payload: res.data 
  });
  };
}

export function getTypes() {
  return async function (dispatch) {
    try {
      const res = await axios(`http://localhost:3001/types`);
      return dispatch({
         type: GET_TYPES, 
         payload: res.data 
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchpoke(name) {
  return async function (dispatch) {
    try {
      const res = await axios(`http://localhost:3001/pokemons?name=${name}`);
      return dispatch({ 
      type: SEARCH_POKEMON,
      payload: res.data 
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function DetailPoke(id) {
  return async function (dispatch) {
    try {
      const res = await axios(`http://localhost:3001/pokemons/${id}`);
      return dispatch({
      type: GET_POKEMONID ,
      payload: res.data 
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function clearDetails(payload) {
  return {
     type: CLEAR_DETAILS,
     payload };
}

export function crearPoke(input) {
  return async function () {
    try {
      const res = await axios.post(`http://localhost:3001/pokemons`, input);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
}
//filtros
export function ordenAlpha(payload) {
  return {
    type: ORDER_ALPHA,
    payload,
  };
}

export function OrdenSTR(payload) {
  return {
    type: ORDER_STR,
    payload,
  };
}

export function FiltroApiDb(payload) {
  return {
    type: FILTER_API_DB,
    payload,
  };
}

export function FiltroTypes(payload) {
  return {
    type: FILTER_TYPES,
    payload,
  };
}
