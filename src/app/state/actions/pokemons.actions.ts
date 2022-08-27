import { createAction, props } from '@ngrx/store';
import { IPokemon } from 'src/app/modules/pokemons/interfaces/pokemon.interface';

export const getPokemonList = createAction('[Pokemon List/API] Get Pokemons');

export const loadedPokemons = createAction(
  '[Pokemon List/API] List pokemons loaded',
  props<{ pokemons: IPokemon[] }>()
);
