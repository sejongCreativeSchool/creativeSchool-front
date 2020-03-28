import axios from "axios";

export const getPokemonByNameORId = nameOrId =>
  axios.get(`https://pokeapi.co/api/v2/pokemon-form/${nameOrId}`);
