import { createAction, props } from '@ngrx/store';
import { IPokemon } from 'src/app/modules/pokemons/interfaces/pokemon.interface';
import { POKEMONS_ACTIONS_TYPES } from '../actionsTypes/pokemons.actionTypes';

export const getPokemonList = createAction(
  POKEMONS_ACTIONS_TYPES.GET_POKEMON_LIST,
  props<{ limit: number; page: number }>()
);

export const getPokemonByName = createAction(
  POKEMONS_ACTIONS_TYPES.GET_POKEMON_BY_NAME,
  props<{ name: string }>()
);

export const loadedPokemons = createAction(
  POKEMONS_ACTIONS_TYPES.LIST_POKEMON_LOADED,
  props<{
    pokemons: IPokemon[];
    currentPage: number;
    totalRows: number;
    limit: number;
    totalPages: number;
  }>()
);

export const currentPokemonLoaded = createAction(
  POKEMONS_ACTIONS_TYPES.CURRENT_POKEMON_LOADED,
  props<{
    pokemon: IPokemon | undefined;
    loading: boolean;
  }>()
);

export const setCurrentPage = createAction(
  POKEMONS_ACTIONS_TYPES.SET_CURRENT_PAGE,
  props<{ page: number }>()
);

export const setPokemonName = createAction(
  POKEMONS_ACTIONS_TYPES.SET_POKEMON_NAME,
  props<{ name: string; page: number }>()
);
