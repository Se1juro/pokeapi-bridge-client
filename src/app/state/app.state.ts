import { ActionReducerMap } from '@ngrx/store';
import { IPokemonsState } from '../modules/pokemons/interfaces/pokemons.state';
import { pokemonsReducer } from './reducers/pokemons.reducer';

export interface AppState {
  pokemons: IPokemonsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  pokemons: pokemonsReducer,
};
