import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { IPokemonsState } from '../../modules/pokemons/interfaces/pokemons.state';
import { IPokemon } from 'src/app/modules/pokemons/interfaces/pokemon.interface';

export const selectPokemons = (state: AppState) => state.pokemons;

export const selectListPokemons = createSelector(
  selectPokemons,
  (state: IPokemonsState) => {
    return state.pokemons;
  }
);

export const selectLoadingPokemon = createSelector(
  selectPokemons,
  (state: IPokemonsState) => {
    return state.loading;
  }
);
