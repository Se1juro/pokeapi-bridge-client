import { IPokemon } from './pokemon.interface';

export interface IPokemonsState {
  loading: boolean;
  pokemons: ReadonlyArray<IPokemon>;
}
