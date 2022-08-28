import { IPokemon } from './pokemon.interface';

export interface IPokemonsState {
  loading: boolean;
  pokemons: ReadonlyArray<IPokemon>;
  limit: number;
  totalRows: number;
  totalPages: number;
  currentPage: number;
  pokemonName: string;
  currentPokemon: IPokemon | undefined;
}
