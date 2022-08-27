import { IPokemon } from './pokemon.interface';

export interface IPokemonResponse {
  count: number;
  rows: IPokemon[];
  currentPage: number;
  limit: number;
  totalPages: number;
}
