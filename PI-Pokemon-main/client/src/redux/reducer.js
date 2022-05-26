import {
  CLEAR_DETAILS,
  ORDER_ALPHA,
  ORDER_STR,
  FILTER_API_DB,
  FILTER_TYPES,
  GET_TYPES,
  SEARCH_POKEMON,
  GET_POKEMONID,
  GET_POKEMONS,
} from "./DataTypes.js";

const initialState = {
  pokemons: [],
  copiaPokemons: [],
  types: [],
  details: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    // TRAER
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        copiaPokemons: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case GET_POKEMONID:
      return {
        ...state,
        details: action.payload,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
      };
    //clear
    case CLEAR_DETAILS:
      return {
        ...state,
        details: {},
      };
    //FILTROS

    case ORDER_ALPHA:
      let aux1=state.pokemons;
      let orderAlpha = aux1.sort((a, b) => {
        if (action.payload === "A-Z") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      return {
        ...state,
        pokemons: orderAlpha,
      };

    case ORDER_STR:

    let aux2= state.pokemons;
      let orderA = aux2.sort((a, b) => {
        if (a.attack > b.attack) {
          return action.payload === "STR" ? -1 : 1;
        }
        if (a.attack < b.attack) {
          return action.payload === "STR" ? 1 : -1;
        }
        return 0;
      });
      return { ...state, pokemons: orderA };

    case FILTER_API_DB:
      let aux3=state.copiaPokemons;
      if (action.payload === "Created") {
        let filterByOrigin = aux3.filter((e) => {
          return typeof e.id === "string";
        });
        return {
          ...state,
          pokemons: filterByOrigin,
        };
      }
      if (action.payload === "Existing") {
        let filterByOrigin = aux3.filter((e) => {
          return typeof e.id === "number";
        });
        return {
          ...state,
          pokemons: filterByOrigin,
        };
      }

      return {
        ...state,
        pokemons: state.copiaPokemons,
      };

    case FILTER_TYPES:
      let aux=state.copiaPokemons
      console.log(aux)
      let filterTypes = aux.filter((e) =>
        e.types.includes(action.payload)
      );

      return {
        ...state,
        pokemons: action.payload === "123" ? state.copiaPokemons : filterTypes,
      };

    default:
      return { ...state };
  }
}
