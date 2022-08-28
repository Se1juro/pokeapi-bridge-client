import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { PokemonService } from 'src/app/modules/pokemons/services/pokemon.service';
import { currentPokemonLoaded } from '../actions/pokemons.actions';
import { POKEMONS_ACTIONS_TYPES } from '../actionsTypes/pokemons.actionTypes';
import { AppState } from '../app.state';

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
          catchError((err) => EMPTY)
        )
      )
    )
  );

  setPokemonName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(POKEMONS_ACTIONS_TYPES.SET_POKEMON_NAME),
      switchMap(({ name, page }) =>
        this.pokemonService.getPokemon(name, page).pipe(
          map((pokemon) => ({
            type: POKEMONS_ACTIONS_TYPES.LIST_POKEMON_LOADED,
            pokemons: [pokemon],
          })),
          catchError((err) =>
            this.pokemonService.getPokemons(page).pipe(
              map((pokemons) => ({
                type: POKEMONS_ACTIONS_TYPES.LIST_POKEMON_LOADED,
                pokemons: pokemons.rows,
                currentPage: pokemons.currentPage,
                totalRows: pokemons.count,
                limit: pokemons.limit,
                totalPages: pokemons.totalPages,
              })),
              catchError((err) => EMPTY)
            )
          )
        )
      )
    )
  );

  getPokemonByName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(POKEMONS_ACTIONS_TYPES.GET_POKEMON_BY_NAME),
      switchMap(({ name }) =>
        this.pokemonService.getPokemon(name, 1).pipe(
          map((pokemon) => ({
            type: POKEMONS_ACTIONS_TYPES.CURRENT_POKEMON_LOADED,
            pokemon: pokemon,
            loading: false,
          })),
          catchError((err) => {
            this.store.dispatch(
              currentPokemonLoaded({ pokemon: undefined, loading: false })
            );
            return of();
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService,
    private store: Store<AppState>
  ) {}
}
