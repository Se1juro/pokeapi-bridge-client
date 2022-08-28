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
    return this.http.get<IPokemonResponse>(`${this.API_URL}/list`, {
      params: {
        page,
        limit,
      },
    });
  }

  getPokemon(name: string, page: number = 1): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.API_URL}`, {
      params: {
        page,
        name,
      },
    });
  }
}
