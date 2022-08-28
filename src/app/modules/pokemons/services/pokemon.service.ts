import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemonResponse } from '../interfaces/IPokemonResponse.interface';
import { IPokemon, IPokemons } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private API_URL = 'http://localhost:3033/pokeapi/api/pokemon';
  constructor(private http: HttpClient) {}

  getPokemons(
    page: number = 1,
    limit: number = 12
  ): Observable<IPokemonResponse> {
    console.log(
      '🚀 ~ file: pokemon.service.ts ~ line 18 ~ PokemonService ~ limit',
      limit
    );
    console.log(
      '🚀 ~ file: pokemon.service.ts ~ line 18 ~ PokemonService ~ page',
      page
    );
    return this.http.get<IPokemonResponse>(this.API_URL, {
      params: {
        page,
        limit,
      },
    });
  }

  getPokemon(name: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.API_URL}/${name}`);
  }
}
