import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { PokemonService } from 'src/app/modules/pokemons/services/pokemon.service';
import { POKEMONS_ACTIONS_TYPES } from '../actionsTypes/pokemons.actionTypes';

@Injectable()
export class PokemonsEffects {
  loadPokemons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(POKEMONS_ACTIONS_TYPES.GET_POKEMON_LIST),
      switchMap(({ page, limit }) =>
        this.pokemonService.getPokemons(page, limit).pipe(
          map((pokemons) => ({
            type: POKEMONS_ACTIONS_TYPES.LIST_POKEMON_LOADED,
            pokemons: pokemons.rows,
            currentPage: pokemons.currentPage,
            totalRows: pokemons.count,
            limit: pokemons.limit,
            totalPages: pokemons.totalPages,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  changePage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(POKEMONS_ACTIONS_TYPES.SET_CURRENT_PAGE),
      switchMap(({ page }) =>
        this.pokemonService.getPokemons(page).pipe(
          map((pokemons) => ({
            type: POKEMONS_ACTIONS_TYPES.LIST_POKEMON_LOADED,
            pokemons: pokemons.rows,
            currentPage: pokemons.currentPage,
            totalRows: pokemons.count,
            limit: pokemons.limit,
            totalPages: pokemons.totalPages,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}
}
