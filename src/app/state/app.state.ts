import { ActionReducerMap } from '@ngrx/store';
import { IAuthState } from '../modules/auth/interfaces/auth.state';
import { IPokemonsState } from '../modules/pokemons/interfaces/pokemons.state';
import { authReducer } from './reducers/auth.reducer';
import { pokemonsReducer } from './reducers/pokemons.reducer';

export interface AppState {
  pokemons: IPokemonsState;
  auth: IAuthState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  pokemons: pokemonsReducer,
  auth: authReducer,
};
