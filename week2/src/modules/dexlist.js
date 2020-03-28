import * as api from "../lib/api";

const GET_POKEMON = "dexlist/GET_POKEMON";
const GET_POKEMON_SUCCESS = "dexlist/GET_POKEMON_SUCCESS";
const GET_POKEMON_ERROR = "dexlist/GET_POKEMON_ERROR";

export const getPokemon = nameOrId => async dispatch => {
  dispatch({ type: GET_POKEMON });
  try {
    console.log("받기 시작");
    const { data } = await api.getPokemonByNameORId(nameOrId);

    const image = data.sprites;
    const name = data.name;
    const id = data.id;

    dispatch({
      type: GET_POKEMON_SUCCESS,
      image,
      name: name,
      id: id
    });
  } catch (e) {
    dispatch({ type: GET_POKEMON_ERROR, error: e });
  }
};

const initialState = {
  name: null,
  id: null,
  image: {
    front_default: null,
    back_default: null,
    front_shiny: null,
    back_shiny: null
  },
  loading: false,
  error: null
};

export default function dexlist(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        loading: true
      };
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        name: action.name,
        id: action.id,
        image: action.image,
        loading: false
      };
    case GET_POKEMON_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}
