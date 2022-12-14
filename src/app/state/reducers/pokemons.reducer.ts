import { createReducer, on } from '@ngrx/store';
import { IPokemonsState } from 'src/app/modules/pokemons/interfaces/pokemons.state';
import {
  currentPokemonLoaded,
  getPokemonByName,
  getPokemonList,
  loadedPokemons,
  setCurrentPage,
  setPokemonName,
} from '../actions/pokemons.actions';

export const initialState: IPokemonsState = {
  loading: false,
  pokemons: [],
  limit: 12,
  totalRows: 0,
  totalPages: 0,
  currentPage: 1,
  pokemonName: '',
  currentPokemon: undefined,
};

export const pokemonsReducer = createReducer(
  initialState,
  on(getPokemonList, (state) => {
    return { ...state, loading: true };
  }),
  on(
    loadedPokemons,
    (state, { pokemons, currentPage, limit, totalPages, totalRows }) => {
      return {
        ...state,
        loading: false,
        pokemons,
        currentPage,
        limit,
        totalPages,
        totalRows,
      };
    }
  ),
  on(setCurrentPage, (state, { page }) => {
    return {
      ...state,
      loading: true,
      currentPage: page,
    };
  }),
  on(setPokemonName, (state, { name }) => {
    return {
      ...state,
      loading: true,
      pokemonName: name,
    };
  }),
  on(getPokemonByName, (state, { name }) => {
    return {
      ...state,
      loading: true,
      pokemonName: name,
    };
  }),
  on(currentPokemonLoaded, (state, { pokemon }) => {
    return {
      ...state,
      loading: false,
      currentPokemon: pokemon,
    };
  })
);
