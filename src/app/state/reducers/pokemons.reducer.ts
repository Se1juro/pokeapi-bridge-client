import { createReducer, on } from '@ngrx/store';
import { IPokemonsState } from 'src/app/modules/pokemons/interfaces/pokemons.state';
import { getPokemonList, loadedPokemons } from '../actions/pokemons.actions';

export const initialState: IPokemonsState = {
  loading: false,
  pokemons: [],
};

export const pokemonsReducer = createReducer(
  initialState,
  on(getPokemonList, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedPokemons, (state, { pokemons }) => {
    return { ...state, loading: false, pokemons };
  })
);
