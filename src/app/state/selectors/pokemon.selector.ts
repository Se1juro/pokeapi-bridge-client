import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { IPokemonsState } from '../../modules/pokemons/interfaces/pokemons.state';

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

export const selectLimitPage = createSelector(
  selectPokemons,
  (state: IPokemonsState) => {
    return state.limit;
  }
);

export const selectTotalPages = createSelector(
  selectPokemons,
  (state: IPokemonsState) => {
    return state.totalPages;
  }
);

export const selectTotalRows = createSelector(
  selectPokemons,
  (state: IPokemonsState) => {
    return state.totalRows;
  }
);

export const selectCurrentPage = createSelector(
  selectPokemons,
  (state: IPokemonsState) => {
    return state.currentPage;
  }
);

export const selectCurrentPokemon = createSelector(
  selectPokemons,
  (state: IPokemonsState) => {
    return state.currentPokemon;
  }
);
