import { createAction, props } from '@ngrx/store';
import { IPokemon } from 'src/app/modules/pokemons/interfaces/pokemon.interface';
import { POKEMONS_ACTIONS_TYPES } from '../actionsTypes/pokemons.actionTypes';

export const getPokemonList = createAction(
  POKEMONS_ACTIONS_TYPES.GET_POKEMON_LIST,
  props<{ limit: number; page: number }>()
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

export const setCurrentPage = createAction(
  POKEMONS_ACTIONS_TYPES.SET_CURRENT_PAGE,
  props<{ page: number }>()
);
